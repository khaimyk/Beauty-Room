import { useContext, useState } from "react"
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Switch,
  useDisclosure,
} from "@heroui/react"

import { CiCircleRemove, CiEdit } from "react-icons/ci"
import { formatToClientDate } from "../../utils/format-to-client-date"
import { ThemeContext } from "../theme-provider"
import {
  useGetAllUsersQuery,
  useLazyCurrentQuery,
} from "../../app/services/userApi"

import { EditBranch } from "../admin/branch/edit"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  useDeleteBranchMutation,
  useEditBranchMutation,
  useGetBranchByIdQuery,
  useLazyGetAllBranchesQuery,
  useLazyGetBranchByIdQuery,
} from "../../app/services/branchApi"
import { BASE_URL } from "../../constants"
import { useTranslation } from "react-i18next"

type Props = {
  id: string
  name: string
  address: string
  image: string
  phoneNumber: string
  description: string
  city: string
  status: "ACTIVE" | "INACTIVE"
  adminId: string
  createdAt?: Date
  updatedAt?: Date
}

export const Branches = ({
  name = "",
  id = "",
  address = "",
  image = "",
  phoneNumber = "",
  description = "",
  city = "",
  adminId = "",
  status = "INACTIVE",
  createdAt = new Date(),
}: Props) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const { data } = useGetBranchByIdQuery(id ?? "")
  const { theme } = useContext(ThemeContext)
  const [deleteBranch, { isLoading: isDeleting }] = useDeleteBranchMutation()
  const [triggerAllBranches] = useLazyGetAllBranchesQuery()
  const [triggerByIdBranch] = useLazyGetBranchByIdQuery()
  const [triggerCurrentQuery] = useLazyCurrentQuery()
  const [isDeleteModal, setDeleteModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [localStatus, setLocalStatus] = useState(status)
  const [editBranch] = useEditBranchMutation()
  const { t } = useTranslation()
  const { data: users = [] } = useGetAllUsersQuery(undefined, {})

  const admin = users.find(user => user.id === adminId)
  const adminName = admin?.name || t("branches.unknown")
  const handleDelete = async () => {
    try {
      await deleteBranch(id).unwrap()
      await triggerAllBranches().unwrap()
      setDeleteModal(false)
      // Закрити модальне вікно після успіху
      toast.success(t("branches.deleteSuccess"))
    } catch (error) {
      console.error("Error deleting category:", error)
      setErrorMessage(t("branches.deleteError"))
    }
  }
  const handleClose = async () => {
    try {
      if (id) {
        await triggerByIdBranch(id)
        await triggerCurrentQuery()
        onClose()
      }
    } catch (err) {
      console.log(err)
    }
  }
  const handleToggleStatus = async () => {
    const newStatus = localStatus === "ACTIVE" ? "INACTIVE" : "ACTIVE"
    try {
      const formData = new FormData()
      formData.append("status", newStatus)
      await editBranch({ id, formData }).unwrap()
      setLocalStatus(newStatus)
      toast.success(
        t("branches.statusUpdated", {
          status:
            newStatus === "ACTIVE"
              ? t("branches.active")
              : t("branches.inactive"),
        }),
      )
    } catch (e) {
      toast.error(t("branches.statusUpdateError"))
    }
  }
  return (
    <div className="mb-4 hover:shadow-md transition-shadow duration-200">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        toastClassName="rounded-lg shadow-sm"
        progressClassName="bg-blue-500"
      />
      <Accordion
        variant="splitted"
        className="shadow-sm rounded-lg  dark:bg-gray-800"
      >
        <AccordionItem
          aria-label={name}
          key={id}
          textValue={name}
          title={
            <div className="flex justify-between items-center w-full p-3">
              <div className="flex items-center gap-2">
                <Avatar
                  size="md"
                  src={image ? `${BASE_URL}${image}` : ""}
                  classNames={{
                    base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B] mr-2",
                    icon: "text-black/80",
                    img: "object-top object-cover",
                  }}
                />
                <div className="flex flex-col items-start gap-2">
                  <span className="text-lg font-bold text-gray-800 dark:text-gray-200 truncate">
                    {name}
                  </span>

                  <p className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {createdAt && formatToClientDate(createdAt)}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                  </p>
                </div>
              </div>

              {/* Right block: status */}
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="font-semibold">{t("branches.status")}</span>

                {localStatus === "ACTIVE" ? (
                  <span className="text-green-500">{t("branches.active")}</span>
                ) : (
                  <span className="text-red-500">{t("branches.inactive")}</span>
                )}
                <Switch
                  isSelected={localStatus === "ACTIVE"}
                  onChange={handleToggleStatus}
                  size="sm"
                />
              </div>
            </div>
          }
          className="border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-500 transition-colors"
        >
          <div className="p-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 rounded-b-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <p className="text-gray-700 dark:text-gray-300">
                  {t("branches.admin")}
                  <span className="font-semibold pl-2">{adminName}</span>
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold pr-2">
                    {t("branches.created")}
                  </span>
                  {createdAt && formatToClientDate(createdAt)}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold pr-2">
                    {t("branches.addressFull")}
                  </span>
                  {city + ", " + address}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold pr-2">
                    {t("branches.phoneFull")}
                  </span>
                  {phoneNumber || ""}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold pr-2">
                    {t("branches.descriptionFull")}
                  </span>
                  {description || ""}
                </p>
              </div>

              <div className="flex flex-row lg:flex-col gap-4">
                <Button
                  color="primary"
                  variant="flat"
                  size="sm"
                  startContent={<CiEdit size={18} />}
                  onPress={onOpen}
                  className="w-full sm:w-auto hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                >
                  {t("branches.edit")}
                </Button>
                <Button
                  variant="flat"
                  color="danger"
                  size="sm"
                  startContent={<CiCircleRemove size={18} />}
                  onPress={() => setDeleteModal(true)}
                  className="w-full sm:w-auto hover:bg-danger-100 dark:hover:bg-danger-900 transition-colors"
                >
                  {t("branches.delete")}
                </Button>
              </div>
            </div>
          </div>

          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className={`${theme} text-foreground`}
            backdrop="blur"
            scrollBehavior="inside"
            size="lg"
            placement="center"
          >
            <ModalContent className="max-w-md md:max-w-lg max-h-[90vh]">
              {onClose => (
                <>
                  <ModalHeader className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-3">
                    {t("branches.editTitle")}
                  </ModalHeader>
                  <ModalBody className="py-4">
                    <EditBranch
                      onClose={handleClose}
                      branch={data}
                      users={users}
                    />
                  </ModalBody>
                  <ModalFooter className="border-t border-gray-200 dark:border-gray-700 pt-3">
                    <Button
                      variant="light"
                      onPress={onClose}
                      className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {t("branches.close")}
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <Modal
            isOpen={isDeleteModal}
            isDismissable={false}
            isKeyboardDismissDisabled={false}
            onOpenChange={setDeleteModal}
            className={`${theme} text-foreground`}
            backdrop="blur"
          >
            <ModalContent>
              <ModalHeader>{t("branches.deleteConfirm")}</ModalHeader>
              <ModalBody>
                <p>{t("branches.deletePrompt", { name })}</p>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  onPress={handleDelete}
                  isLoading={isDeleting}
                >
                  {t("branches.delete")}
                </Button>
                <Button onPress={() => setDeleteModal(false)}>
                  {" "}
                  {t("branches.cancel")}
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
