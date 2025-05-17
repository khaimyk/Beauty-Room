import { Accordion, AccordionItem, Button } from "@heroui/react"
import { UserItem } from "./userItem"
import type { RoleType, User } from "../../../app/types"
import { Link } from "react-router"
import { Paths } from "../../../utils/paths"

import { useTranslation } from "react-i18next"
import { FaPlus } from "react-icons/fa"

interface RoleSortedListProps {
  users: User[]
  currentUserRole: RoleType
  isDeleting: boolean
  onOpenDeleteModal: (user: User) => void
  onAddEmployeeClick: () => void
}

export const RoleSortedList = ({
  users,
  currentUserRole,
  onAddEmployeeClick,
  isDeleting,
  onOpenDeleteModal,
}: RoleSortedListProps) => {
  const { t } = useTranslation()
  const filteredUsers = users.filter(
    user => user.role === "ADMIN" || user.role === "MASTER",
  )

  if (currentUserRole === "SUPERADMIN") {
    const grouped = users.reduce(
      (acc, user) => {
        const branchName = user.branch?.name || t("userItem.noBranch")
        if (!acc[branchName]) acc[branchName] = []
        acc[branchName].push(user)
        return acc
      },
      {} as Record<string, User[]>,
    )

    return (
      <Accordion variant="splitted" selectionMode="multiple">
        {Object.entries(grouped).map(([branchName, users]) => (
          <AccordionItem
            key={branchName}
            title={
              <span className="font-bold text-xl uppercase">{branchName}</span>
            }
            textValue="accordion"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
              {users.map(user => (
                <UserItem
                  key={user.id}
                  user={user}
                  onOpenDeleteModal={onOpenDeleteModal}
                  isDeleting={isDeleting}
                  branchId={user?.branch?.id || ""}
                />
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }
  const branch = filteredUsers[0]?.branch
  const branchName = branch?.name || t("userItem.noBranch")
  const branchId = branch?.id

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center uppercase cursor-pointer">
        <Link to={`${Paths.about_us}/${branchId}`}>{branchName}</Link>
      </h1>

      <Button
        color="primary"
        onPress={onAddEmployeeClick}
        endContent={<FaPlus />}
        className="my-6 ml-5  hover:bg-stone-800 dark:hover:bg-stone-500 transition-colors"
      >
        {t("roleManagement.addEmployee")}
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredUsers.map(user => (
          <UserItem
            key={user.id}
            user={user}
            onOpenDeleteModal={onOpenDeleteModal}
            isDeleting={isDeleting}
            branchId={branchId || ""}
          />
        ))}
      </div>
    </div>
  )
}
