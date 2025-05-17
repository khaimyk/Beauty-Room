import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spinner,
  ButtonGroup,
} from "@heroui/react"
import { CiCircleRemove } from "react-icons/ci"
import { useState } from "react"
import type { RoleType } from "../../../app/types"
import { useAppSelector } from "../../../app/hooks"
import { selectCurrent } from "../../../features/useSlice"
import { useTranslation } from "react-i18next"
import { roleOptions } from "../../../app/types"
import {
  useLazyGetAllUsersQuery,
  useUpdateRoleMutation,
} from "../../../app/services/userApi"
import { toast } from "react-toastify"

interface UserItemProps {
  user: {
    id: string
    name: string
    email: string
    role: string
  }
  onOpenDeleteModal?: (user: any) => void
  isDeleting: boolean
  branchId: string
  showDeleteButton?: boolean
}

export const UserItem = ({
  user,
  onOpenDeleteModal,
  isDeleting,
  branchId,
  showDeleteButton = true,
}: UserItemProps) => {
  const [isUpdating, setIsUpdating] = useState(false)
  const [updateRole] = useUpdateRoleMutation()
  const [triggerAllUsers] = useLazyGetAllUsersQuery()
  const currentUser = useAppSelector(selectCurrent)
  const { t } = useTranslation()
  const [selectedRole, setSelectedRole] = useState<RoleType | null>(null)

  const handleUpdateClick = async () => {
    if (!selectedRole) {
      toast.warning(t("roleManagement.selectRole"))
      return
    }

    // Перевіряємо, чи адмін має філію, якщо призначаємо роль MASTER
    if (selectedRole === "MASTER" && !currentUser?.branchId) {
      toast.error(t("roleManagement.adminNoBranch"))
      return
    }

    try {
      setIsUpdating(true)
      await updateRole({ id: user.id, role: selectedRole }).unwrap()
      toast.success(t("roleManagement.roleChanged"))
      await triggerAllUsers(branchId || undefined).unwrap()
      setSelectedRole(null)
    } catch (error) {
      toast.error(t("roleManagement.roleChangeError"))
      console.error("Помилка:", error)
    } finally {
      setIsUpdating(false)
    }
  }

  const getAllowedRoles = (): RoleType[] => {
    if (currentUser?.role === "SUPERADMIN") {
      return roleOptions.filter(role => role !== user.role)
    } else if (currentUser?.role === "ADMIN") {
      return ["MASTER", "CLIENT"].filter(
        role => role !== user.role,
      ) as RoleType[]
    }
    return []
  }

  const allowedRoles = getAllowedRoles()

  return (
    <Card className="w-full max-w-md p-4 mb-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border">
      <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 min-w-0 space-y-1">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {user.name}
          </h4>
          <h6 className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {user.email}
          </h6>
        </div>

        {showDeleteButton && onOpenDeleteModal && (
          <Button
            className="w-full sm:w-auto mt-2 sm:mt-0"
            endContent={<CiCircleRemove className="text-lg" />}
            color="danger"
            variant="flat"
            size="sm"
            onPress={() => onOpenDeleteModal(user)}
            isLoading={isDeleting}
          >
            {t("userItem.delete")}
          </Button>
        )}
      </CardHeader>

      <CardBody className=" space-y-2">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {t("userItem.currentRole")}
          <span className="font-semibold pl-1 text-gray-900 dark:text-white">
            {t(`userItem.roles.${user.role}`)}
          </span>
        </p>

        <CardFooter className="flex flex-col justify-between sm:flex-row ">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("userItem.selectRole")}
            </p>
            <ButtonGroup>
              {allowedRoles.map(role => (
                <Button
                  key={role}
                  size="sm"
                  variant={selectedRole === role ? "solid" : "bordered"}
                  color={selectedRole === role ? "primary" : "default"}
                  onPress={() => setSelectedRole(role)}
                  isDisabled={isUpdating}
                >
                  {t(`userItem.roles.${role}`)}
                </Button>
              ))}
            </ButtonGroup>
          </div>

          <Button
            className="w-full sm:w-auto mt-2"
            size="sm"
            color="primary"
            variant="solid"
            onPress={handleUpdateClick}
            isDisabled={
              !selectedRole ||
              isUpdating ||
              (selectedRole === "MASTER" && !currentUser?.branchId)
            }
          >
            {isUpdating ? (
              <div className="flex items-center gap-2">
                <Spinner size="sm" color="white" />
                <span>{t("userItem.updating")}</span>
              </div>
            ) : (
              t("userItem.update")
            )}
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  )
}

export default UserItem
