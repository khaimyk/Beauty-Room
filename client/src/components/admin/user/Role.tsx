import { useMemo, useState } from "react"
import {
  useGetAllUsersQuery,
  useRemoveUserMutation,
  useLazyGetAllUsersQuery,
  useGetAllUserClientsQuery,
} from "../../../app/services/userApi"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Button, useDisclosure } from "@heroui/react"
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react"
import { useContext } from "react"
import { ThemeContext } from "../../theme-provider"
import { useTranslation } from "react-i18next"
import { Skeleton } from "@heroui/react"
import type { RoleType } from "../../../app/types"
import { useAppSelector } from "../../../app/hooks"
import { selectCurrent } from "../../../features/useSlice"
import { useSearchParams } from "react-router"
import { RoleSortedList } from "./sortedList"
import { AllClients } from "./allUsersClients"

interface RoleProps {
  filterRoles?: RoleType[]
  title?: string
}

export const Role = ({ filterRoles, title }: RoleProps) => {
  const [searchParams] = useSearchParams()
  const branchId = searchParams.get("branchId")
  const { data, isLoading, isError } = useGetAllUsersQuery(
    branchId || undefined,
  )
  const { data: allClientsData } = useGetAllUserClientsQuery()
  const [isClientModalOpen, setIsClientModalOpen] = useState(false)
  const [removeUser, { isLoading: isDeleting }] = useRemoveUserMutation()
  const [triggerAllUsers] = useLazyGetAllUsersQuery()
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const [selectedUser, setSelectedUser] = useState<any>(null)

  const [sortConfig, setSortConfig] = useState<{
    key: "role" | "name"
    direction: "ascending" | "descending"
  } | null>(null)
  const currentUser = useAppSelector(selectCurrent)
  const sortedAndFilteredUsers = useMemo(() => {
    let users = filterRoles
      ? data?.filter(user => filterRoles.includes(user.role))
      : data

    if (!users) return []

    if (sortConfig !== null) {
      users = [...users].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1
        }
        return 0
      })
    }

    return users
  }, [data, filterRoles, sortConfig])

  const clients = useMemo(() => {
    return allClientsData?.filter(user => user.role === "CLIENT") || []
  }, [allClientsData])

  // Функція для зміни сортування
  const requestSort = (key: "role" | "name") => {
    let direction: "ascending" | "descending" = "ascending"
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  const handleDeleteUser = async () => {
    if (!selectedUser) return
    try {
      await removeUser(selectedUser.id).unwrap()
      toast.success(t("roleManagement.userDeleted"))
      await triggerAllUsers(branchId || undefined).unwrap()
      onClose()
    } catch (error) {
      toast.error(t("roleManagement.deleteError"))
      console.error("Помилка:", error)
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
        {t("roleManagement.loadingError")}
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className="  py-10  text-center text-gray-500">
        {t("roleManagement.noUsers")}
      </div>
    )
  }
  const handleClientModalClose = async () => {
    setIsClientModalOpen(false)
    await triggerAllUsers(branchId || undefined).unwrap()
  }

  return (
    <div className="container px-4 mx-auto my-4 max-w-7xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        {t(`roleManagement.title`)}
      </h2>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme={theme}
        className="mt-12"
      />

      {/* Додаємо кнопки сортування */}
      <div className="flex gap-4 mb-4 justify-center">
        <Button
          onPress={() => requestSort("role")}
          variant="bordered"
          className="hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {t("roleManagement.sortByRole")}
          {sortConfig?.key === "role" &&
            (sortConfig.direction === "ascending" ? "↑" : "↓")}
        </Button>
        <Button
          onPress={() => requestSort("name")}
          variant="bordered"
          className="hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {t("roleManagement.sortByName")}
          {sortConfig?.key === "name" &&
            (sortConfig.direction === "ascending" ? "↑" : "↓")}
        </Button>
      </div>

      {sortedAndFilteredUsers.length > 0 ? (
        <div className="bg-slate-200 py-8 flex flex-col gap-2 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <RoleSortedList
            users={sortedAndFilteredUsers}
            currentUserRole={currentUser?.role || "CLIENT"}
            isDeleting={isDeleting}
            onOpenDeleteModal={user => {
              setSelectedUser(user)
              onOpen()
            }}
            onAddEmployeeClick={() => setIsClientModalOpen(true)}
          />
        </div>
      ) : (
        <div className="  py-10  text-center text-gray-500">
          {t("roleManagement.noUsers")}
        </div>
      )}

      <AllClients
        isOpen={isClientModalOpen}
        onClose={() => handleClientModalClose()}
        clients={clients}
      />

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
                {t("roleManagement.deleteConfirm")}
              </ModalHeader>
              <ModalBody>
                <p className="text-gray-600 dark:text-gray-300 space-y-2">
                  {t("roleManagement.deleteMessage")}
                  <span className="font-semibold">"{selectedUser?.name}"</span>?
                  <br />
                  <span className="text-danger font-semibold">
                    {t("roleManagement.deleteWarning")}
                  </span>
                  <br />
                  {t("roleManagement.deleteIrreversible")}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose} disabled={isDeleting}>
                  {t("roleManagement.cancel")}
                </Button>
                <Button
                  color="danger"
                  onPress={handleDeleteUser}
                  isLoading={isDeleting}
                >
                  {isDeleting
                    ? t("roleManagement.deleting")
                    : t("roleManagement.delete")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
