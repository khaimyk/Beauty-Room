import {
  useDeleteClientMutation,
  useGetAllClientsQuery,
  useLazyGetAllClientsQuery,
} from "../../../app/services/clientApi"
import { useSearchParams } from "react-router"
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Skeleton,
  useDisclosure,
  Pagination,
} from "@heroui/react"
import { useContext, useState, useMemo } from "react"
import { ClientCard } from "./clientCard"
import { ThemeContext } from "../../theme-provider"
import { toast, ToastContainer } from "react-toastify"
import { UserItem } from "../user/userItem"
import { useGetAllUsersQuery } from "../../../app/services/userApi"
import { useTranslation } from "react-i18next"

export const AdminClient = () => {
  const [searchParams] = useSearchParams()
  const branchId = searchParams.get("branchId")
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const { theme } = useContext(ThemeContext)
  const { data, isLoading, isError } = useGetAllClientsQuery(
    branchId || undefined,
  )
  const [remove, { isLoading: isDeleting }] = useDeleteClientMutation()
  const [triggerAllClients] = useLazyGetAllClientsQuery()
  const [selectedClient, setSelectedClient] = useState<any>(null)
  const { data: users } = useGetAllUsersQuery(branchId || undefined)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 20
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [search, setSearch] = useState("")
  const [clientTypeFilter, setClientTypeFilter] = useState<
    "all" | "registered" | "guest"
  >("all")
  const { t } = useTranslation()
  const filteredClients = useMemo(() => {
    if (!data) return []
    return data
      .filter(client => {
        const searchLower = search.toLowerCase()
        return (
          client.name.toLowerCase().includes(searchLower) ||
          client.phoneNumber?.toLowerCase().includes(searchLower) ||
          client.nickName?.toLowerCase().includes(searchLower)
        )
      })
      .filter(client => {
        if (clientTypeFilter === "registered") return !!client.userId
        if (clientTypeFilter === "guest") return !client.userId
        return true
      })
  }, [data, search, clientTypeFilter])

  const sortedClients = useMemo(() => {
    return [...filteredClients].sort((a, b) => {
      const nameA = a.name.toLowerCase()
      const nameB = b.name.toLowerCase()
      if (nameA < nameB) return sortDirection === "asc" ? -1 : 1
      if (nameA > nameB) return sortDirection === "asc" ? 1 : -1
      return 0
    })
  }, [filteredClients, sortDirection])

  const paginatedClients = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    return sortedClients.slice(startIndex, startIndex + pageSize)
  }, [sortedClients, currentPage])

  const totalPages = Math.ceil((filteredClients.length || 0) / pageSize)

  const handleDeleteUser = async () => {
    if (!selectedClient) return
    try {
      await remove(selectedClient.id).unwrap()
      toast.success(t("client.deleteSuccess"))
      await triggerAllClients(branchId || undefined).unwrap()
      onClose()
    } catch (error) {
      toast.error(t("client.deleteError"))
      console.error("Error:", error)
    }
  }

  if (isLoading) {
    return (
      <div className="  my-6  space-y-4">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="w-full h-24 rounded-lg" />
        ))}
      </div>
    )
  }

  if (isError) {
    return (
      <div className="  py-10  text-center text-danger">
        {t("error.loadingError")}
      </div>
    )
  }

  return (
    <section className="container px-4 mx-auto ">
      <div className="bg-slate-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          {t("client.title")}
        </h2>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          theme={theme}
          className="mt-12"
        />

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4 items-center">
          <div className="flex gap-2 w-full md:w-9/12 max-w-sm lg:max-w-md border-2 border-gray-700 dark:border-gray-200 rounded-lg ">
            <Input
              label={t("client.searchPlaceholder")}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full"
            />
            {search && (
              <span
                className="hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center p-2 cursor-pointer"
                onClick={() => setSearch("")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  color="red"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            )}
          </div>

          <Button
            variant="bordered"
            className="hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-700 dark:border-gray-200 rounded-lg"
            onPress={() =>
              setSortDirection(prev => (prev === "asc" ? "desc" : "asc"))
            }
          >
            {t("client.sortByName")} {sortDirection === "asc" ? "↑" : "↓"}
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            onPress={() => setClientTypeFilter("all")}
            isDisabled={clientTypeFilter === "all"}
          >
            {t("client.filterAll")}
          </Button>
          <Button
            onPress={() => setClientTypeFilter("registered")}
            isDisabled={clientTypeFilter === "registered"}
          >
            {t("client.filterRegistered")}
          </Button>
          <Button
            onPress={() => setClientTypeFilter("guest")}
            isDisabled={clientTypeFilter === "guest"}
          >
            {t("client.filterGuest")}
          </Button>
        </div>
        {paginatedClients.length > 0 ? (
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {paginatedClients.map(client => {
              const matchedUser = users?.find(u => u.id === client.userId)

              return (
                <div className="relative" key={client.id}>
                  {matchedUser ? (
                    <UserItem
                      user={matchedUser}
                      onOpenDeleteModal={() => {
                        setSelectedClient(client)
                        onOpen()
                      }}
                      isDeleting={isDeleting}
                      branchId={branchId || ""}
                    />
                  ) : (
                    <ClientCard
                      client={{
                        ...client,
                        phoneNumber: client.phoneNumber || "Невідомий номер",
                      }}
                      onDelete={() => {
                        setSelectedClient(client)
                        onOpen()
                      }}
                      isDeleting={isDeleting}
                    />
                  )}
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center text-lg text-gray-600 dark:text-gray-300 py-10">
            <h3 className="text-2xl font-semibold">{t("client.noClients")}</h3>
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center mt-6">
            <Pagination
              total={totalPages}
              page={currentPage}
              onChange={setCurrentPage}
              showControls
              variant="bordered"
            />
          </div>
        )}

        <Modal
          isOpen={isOpen}
          isDismissable={!isDeleting}
          onOpenChange={onOpenChange}
          className={`${theme} text-foreground`}
          backdrop="blur"
          placement="center"
        >
          <ModalContent>
            {onClose => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {t("client.deleteConfirmTitle")}
                </ModalHeader>
                <ModalBody>
                  <p className="text-gray-600 dark:text-gray-300 space-y-2">
                    {t("client.deleteConfirmMessage")}
                    <span className="font-semibold">
                      {" "}
                      "{selectedClient?.name}"
                    </span>
                    ?
                    <br />
                    {t("action.irreversible")}
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    variant="light"
                    onPress={onClose}
                    disabled={isDeleting}
                  >
                    {t("client.deleteCancel")}
                  </Button>
                  <Button
                    color="danger"
                    onPress={handleDeleteUser}
                    isLoading={isDeleting}
                  >
                    {isDeleting
                      ? t("client.deleting")
                      : t("client.deleteSubmit")}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </section>
  )
}
