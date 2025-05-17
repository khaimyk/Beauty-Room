import { useContext, useEffect, useState } from "react"
import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react"
import { ThemeContext } from "../theme-provider"
import { CiCircleRemove } from "react-icons/ci"
import { formatToClientDate } from "../../utils/format-to-client-date"
import {
  useDeleteReviewMutation,
  useLazyGetAllReviewsQuery,
} from "../../app/services/reviewApi"
import { FaStar } from "react-icons/fa"
import { useAppSelector } from "../../app/hooks"
import { selectCurrent } from "../../features/useSlice"
import { Succes } from "../button/succes"
import { useTranslation } from "react-i18next"

interface Props {
  id: string
  comment?: string
  rating: number
  client?: string
  createdAt?: Date
}

const getRandomColor = (): string => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

export const Reviews = ({
  comment = "",
  id = "",
  rating = 0,
  client = "",
  createdAt,
}: Props) => {
  const { theme } = useContext(ThemeContext)
  const [deleteReview] = useDeleteReviewMutation()
  const [triggerAllReviews] = useLazyGetAllReviewsQuery()
  const [isDeleteModal, setDeleteModal] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const current = useAppSelector(selectCurrent)
  const { t } = useTranslation()
  const handleDelete = async () => {
    try {
      await deleteReview(id).unwrap()

      setIsSuccess(true)
      await triggerAllReviews().unwrap()
    } catch (error) {
      console.error("Помилка при видаленні відгуку:", error)
      setFeedbackMessage(t("reviews.deleteError"))
      setIsSuccess(false)
    }
  }
  // Автоматичне закриття модального вікна через 2 секунди після успішного відправлення
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setDeleteModal(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isSuccess])

  return (
    <div className="flex flex-col p-4 gap-4 border-b border-gray-300 dark:border-gray-700">
      <div className="flex items-center gap-4">
        <Avatar size="md" className={`${getRandomColor()} text-white`} />
        <div className="flex-grow">
          <h2 className="text-lg font-semibold">{client}</h2>
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                size={18}
                className={i < rating ? "text-yellow-500" : "text-gray-400"}
              />
            ))}
            {createdAt && (
              <p className="text-sm text-gray-500">
                {formatToClientDate(createdAt)}
              </p>
            )}
          </div>
          {current?.role === "SUPERADMIN" && (
            <div className="absolute right-4">
              <Button isIconOnly onPress={() => setDeleteModal(true)}>
                <CiCircleRemove size={28} className="text-red-500" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {comment && (
        <p className="text-gray-600 dark:text-gray-300 ml-12">{comment}</p>
      )}

      {feedbackMessage && (
        <p className="text-center text-red-500 mt-2">{feedbackMessage}</p>
      )}

      <Modal
        isOpen={isDeleteModal}
        onOpenChange={setDeleteModal}
        backdrop="blur"
        className={`${theme} text-foreground`}
        placement="center"
      >
        <ModalContent>
          <ModalHeader>{t("reviews.deleteConfirm")}</ModalHeader>
          <ModalBody>
            {isSuccess && <Succes children={t("reviews.deleteSuccess")} />}
            <p>{t("reviews.deletePrompt", { client })}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onPress={handleDelete}>
              {t("reviews.delete")}
            </Button>

            <Button onPress={() => setDeleteModal(false)}>
              {" "}
              {t("reviews.cancel")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
