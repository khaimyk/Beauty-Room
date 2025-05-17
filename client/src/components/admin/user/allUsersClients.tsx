// ClientListModal.tsx
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Button,
  Pagination,
} from "@heroui/react"
import { UserItem } from "./userItem"
import type { User } from "../../../app/types"
import { useTranslation } from "react-i18next"
import { useContext, useState, useMemo } from "react"
import { ThemeContext } from "../../theme-provider"

interface allClients {
  isOpen: boolean
  onClose: () => void
  clients: User[]
}

export const AllClients = ({ isOpen, onClose, clients }: allClients) => {
  const { t } = useTranslation()
  const { theme } = useContext(ThemeContext)

  // State for search, sorting and pagination
  const [search, setSearch] = useState("")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 20

  // Filter clients based on search input
  const filteredClients = useMemo(() => {
    if (!clients) return []
    return clients.filter(client => {
      const searchLower = search.toLowerCase()
      return (
        client.name.toLowerCase().includes(searchLower) ||
        client.email?.toLowerCase().includes(searchLower) ||
        client.phoneNumber?.toLowerCase().includes(searchLower)
      )
    })
  }, [clients, search])

  // Sort clients by name
  const sortedClients = useMemo(() => {
    return [...filteredClients].sort((a, b) => {
      const nameA = a.name.toLowerCase()
      const nameB = b.name.toLowerCase()
      if (nameA < nameB) return sortDirection === "asc" ? -1 : 1
      if (nameA > nameB) return sortDirection === "asc" ? 1 : -1
      return 0
    })
  }, [filteredClients, sortDirection])

  // Paginate clients
  const paginatedClients = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    return sortedClients.slice(startIndex, startIndex + pageSize)
  }, [sortedClients, currentPage])

  const totalPages = Math.ceil((filteredClients.length || 0) / pageSize)

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      className={`${theme} text-foreground`}
      size="full"
      placement="center"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-4">
          <div>{t("roleManagement.userListTitle")}</div>

          {/* Search and Sort controls */}
          <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
            <div className="flex gap-2 w-full md:w-9/12 max-w-sm lg:max-w-md border-2 border-gray-700 dark:border-gray-200 rounded-lg">
              <Input
                label={t("roleManagement.searchByName")}
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
        </ModalHeader>

        <ModalBody>
          {paginatedClients.length === 0 ? (
            <div className="text-center text-gray-500">
              {search
                ? t("roleManagement.noUsers")
                : t("roleManagement.noUsersRegistered")}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paginatedClients.map(client => (
                  <UserItem
                    key={client.id}
                    user={client}
                    isDeleting={false}
                    onOpenDeleteModal={undefined}
                    branchId={client?.branch?.id || ""}
                    showDeleteButton={false}
                  />
                ))}
              </div>

              {/* Pagination controls */}
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
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
