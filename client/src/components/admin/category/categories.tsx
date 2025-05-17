import { useContext, useState } from "react"
import {
  useLazyGetAllCategoriesQuery,
  useLazyGetCategoryByIdQuery,
  useRemoveCategoryMutation,
} from "../../../app/services/categoryApi"
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
import { EditCategory } from "./edit"
import { CiCircleRemove, CiEdit } from "react-icons/ci"
import { formatToClientDate } from "../../../utils/format-to-client-date"
import { ThemeContext } from "../../theme-provider"
import { useLazyCurrentQuery } from "../../../app/services/userApi"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import type { User } from "../../../app/types"
import { useTranslation } from "react-i18next"

type Props = {
  id: string
  name: string
  user: User
  createdAt?: Date
  branchId: string
}

export const Categories = ({
  name = "",
  id = "",
  user = {} as User,
  createdAt,
  branchId = "",
}: Props) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
  const { theme } = useContext(ThemeContext)
  const [deleteCategory, { isLoading: isDeleting }] =
    useRemoveCategoryMutation()
  const [triggerAllCategories] = useLazyGetAllCategoriesQuery()
  const [triggerGetCategoryByIdQuery] = useLazyGetCategoryByIdQuery()
  const [triggerCurrentQuery] = useLazyCurrentQuery()
  const [isDeleteModal, setDeleteModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { t } = useTranslation()

  const handleDelete = async () => {
    try {
      await deleteCategory(id).unwrap()
      await triggerAllCategories(branchId).unwrap()
      setDeleteModal(false)
      setErrorMessage(null)
      toast.success(t("category.deleteSuccess"))
    } catch (error) {
      console.error("Error deleting category:", error)
      setErrorMessage(t("category.deleteError"))
    }
  }

  const handleClose = async () => {
    try {
      if (id) {
        await triggerGetCategoryByIdQuery(id)
        await triggerCurrentQuery()
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
                  {t("category.author")}
                  <span className="font-semibold pl-2">
                    {user?.name || t("category.unknownAuthor")}
                  </span>
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold ">
                    {t("category.created")}
                  </span>{" "}
                  {createdAt && formatToClientDate(createdAt)}
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
                  {t("category.editButton")}
                </Button>
                <Button
                  variant="flat"
                  color="danger"
                  size="sm"
                  startContent={<CiCircleRemove size={18} />}
                  onPress={() => setDeleteModal(true)}
                  className="w-full sm:w-auto hover:bg-danger-100 dark:hover:bg-danger-900 transition-colors"
                >
                  {t("category.deleteButton")}
                </Button>
              </div>
            </div>
          </div>
        </AccordionItem>
      </Accordion>

      {/* Edit Modal */}
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
                {t("category.editTitle")}
              </ModalHeader>
              <ModalBody className="py-4">
                <EditCategory onClose={handleClose} categoryId={id} />
              </ModalBody>
              <ModalFooter className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <Button
                  variant="light"
                  onPress={onClose}
                  className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {t("category.close")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModal}
        onOpenChange={setDeleteModal}
        className={`${theme} text-foreground`}
        backdrop="blur"
      >
        <ModalContent className="max-w-md">
          <ModalHeader className="text-xl font-bold border-b border-gray-200 dark:border-gray-700 pb-3">
            {t("category.deleteConfirmTitle")}
          </ModalHeader>
          <ModalBody className="py-4">
            <p className="text-gray-700 dark:text-gray-300">
              {t("category.deleteConfirmMessage")}
              <span className="font-semibold text-danger">"{name}"</span>?
            </p>
            {errorMessage && (
              <p className="mt-2 text-sm text-danger-500 dark:text-danger-400">
                {errorMessage}
              </p>
            )}
          </ModalBody>
          <ModalFooter className="flex flex-col sm:flex-row gap-2 border-t border-gray-200 dark:border-gray-700 pt-3">
            <Button
              variant="solid"
              color="danger"
              onPress={handleDelete}
              isLoading={isDeleting}
              className="w-full sm:w-auto hover:bg-danger-600"
            >
              {isDeleting ? t("category.deleting") : t("category.deleteSubmit")}
            </Button>
            <Button
              variant="light"
              onPress={() => {
                setDeleteModal(false)
                setErrorMessage(null)
              }}
              className="w-full sm:w-auto border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {t("category.cancel")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
