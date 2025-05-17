import { useContext, useState } from "react"
import {
  Accordion,
  AccordionItem,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react"

import { CiCircleRemove, CiEdit } from "react-icons/ci"
import { formatToClientDate } from "../../../utils/format-to-client-date"
import { ThemeContext } from "../../theme-provider"
import { useLazyCurrentQuery } from "../../../app/services/userApi"
import {
  useGetServiceByIdQuery,
  useLazyGetAllServisesQuery,
  useLazyGetServiceByIdQuery,
  useRemoveServiceMutation,
} from "../../../app/services/serviceApi"
import { EditService } from "./edit"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useTranslation } from "react-i18next"
import { currencySymbols } from "../../../utils/options"

type Props = {
  id: string
  name: string
  user: string | undefined
  createdAt?: Date
  updatedAt?: Date
  price: number
  currency: string
  duration: number
  description: string
  branchId: string
  masters?: { masterId: string; master: { id: string; name: string } }[]
}

export const Services = ({
  name = "",
  id = "",
  user = "",
  createdAt,
  updatedAt,
  price,
  currency,
  duration,
  description = "",
  branchId = "",
  masters = [],
}: Props) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const { data } = useGetServiceByIdQuery(id ?? "")
  const { theme } = useContext(ThemeContext)
  const [deleteService, { isLoading: isDeleting }] = useRemoveServiceMutation()
  const [triggerAllServises] = useLazyGetAllServisesQuery()
  const [triggerGetServiseByIdQuery] = useLazyGetServiceByIdQuery()
  const [triggerCurrentQuery] = useLazyCurrentQuery()
  const [isDeleteModal, setDeleteModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { t } = useTranslation()
  const handleDelete = async () => {
    try {
      await deleteService(id).unwrap()
      await triggerAllServises(branchId).unwrap()
      setDeleteModal(false)
      // Закрити модальне вікно після успіху
      toast.success(t("adminService.deleteSuccess"))
    } catch (error) {
      console.error("Error deleting category:", error)
      setErrorMessage(t("adminService.deleteError"))
    }
  }
  const handleClose = async () => {
    try {
      if (id) {
        await triggerGetServiseByIdQuery(id)
        await triggerCurrentQuery()
        await triggerAllServises(branchId).unwrap()
        onClose()
      }
    } catch (err) {
      console.log(err)
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
            <div className="flex flex-col  justify-between w-full p-3">
              <span className="text-lg font-bold text-gray-800 dark:text-gray-200 truncate">
                {name}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {createdAt && formatToClientDate(createdAt)}
                </span>
                <span className="hidden md:inline-block w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></span>
              </div>
            </div>
          }
          className="border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-500 transition-colors"
        >
          <div className="p-4 space-y-4 bg-gray-50 dark:bg-gray-700/50 rounded-b-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <p className="text-gray-700 dark:text-gray-300">
                  {t("adminService.author")}
                  <span className="font-semibold pl-1">
                    {user || t("adminService.unknown")}
                  </span>
                </p>
                {updatedAt && createdAt && updatedAt !== createdAt ? (
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold pr-1">
                      {t("adminService.updated")}
                    </span>
                    {formatToClientDate(updatedAt)}{" "}
                    {user && (
                      <span className="italic text-sm text-gray-500 pl-1">
                        ({t("adminService.by")}: {user})
                      </span>
                    )}
                  </p>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold pr-1">
                      {t("adminService.created")}
                    </span>
                    {formatToClientDate(createdAt)}
                  </p>
                )}

                {masters && masters.length > 0 && (
                  <div>
                    {masters.map(({ master }) => (
                      <p key={master.id}>
                        {t("adminService.master")} {master.name}
                      </p>
                    ))}
                  </div>
                )}
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold pr-1">
                    {t("adminService.price")}
                  </span>
                  {price || ""}
                  {currencySymbols[currency as keyof typeof currencySymbols] ||
                    currency}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold pr-1">
                    {t("adminService.duration")}
                  </span>
                  {duration || ""} {t("adminService.minutes")}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold pr-1">
                    {t("adminService.description")}
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
                  {t("adminService.edit")}
                </Button>
                <Button
                  variant="flat"
                  color="danger"
                  size="sm"
                  startContent={<CiCircleRemove size={18} />}
                  onPress={() => setDeleteModal(true)}
                  className="w-full sm:w-auto hover:bg-danger-100 dark:hover:bg-danger-900 transition-colors"
                >
                  {t("adminService.delete")}
                </Button>
              </div>
            </div>
          </div>

          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className={`${theme} text-foreground`}
            backdrop="blur"
            size="lg"
            placement="center"
          >
            <ModalContent className="max-w-md md:max-w-lg">
              {onClose => (
                <>
                  <ModalHeader className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-3">
                    {t("adminService.titleEdit")}
                  </ModalHeader>
                  <ModalBody className="py-4">
                    <EditService
                      onClose={handleClose}
                      servise={data}
                      branchId={branchId}
                    />
                  </ModalBody>
                  <ModalFooter className="border-t border-gray-200 dark:border-gray-700 pt-3">
                    <Button
                      variant="light"
                      onPress={onClose}
                      className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {t("adminService.close")}
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
            placement="center"
          >
            <ModalContent>
              <ModalHeader>{t("adminService.deleteConfirm")}</ModalHeader>
              <ModalBody>
                <p>{t("adminService.deleteMessage", { name })}</p>
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  onPress={handleDelete}
                  isLoading={isDeleting}
                >
                  {t("adminService.delete")}
                </Button>
                <Button onPress={() => setDeleteModal(false)}>
                  {" "}
                  {t("adminService.cancel")}
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
