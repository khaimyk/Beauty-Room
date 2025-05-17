import { useState, useEffect } from "react"
import { FaStar } from "react-icons/fa"
import { Button, Textarea } from "@heroui/react"
import { IoMdCreate } from "react-icons/io"
import { Controller, useForm } from "react-hook-form"
import { ErrorMessage } from "../error-message"
import {
  useCreateReviewMutation,
  useLazyGetAllReviewsQuery,
} from "../../app/services/reviewApi"
import type { Client } from "../../app/types"
import { Succes } from "../button/succes"
import { useTranslation } from "react-i18next"

type Props = {
  onClose: () => void
  client: Client
  userId: string
  branchId: string
  isAuthenticated?: boolean
}

export const ReviewModal: React.FC<Props> = ({
  onClose = () => null,
  client,
  userId,
  branchId,
  isAuthenticated = false,
}) => {
  const [rating, setRating] = useState(0)
  const [createReview] = useCreateReviewMutation()
  const [triggerAllReviews] = useLazyGetAllReviewsQuery()
  const [feedbackMessage, setFeedbackMessage] = useState<string>("")
  const [isSuccess, setIsSuccess] = useState(false)
  const { t } = useTranslation()
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm()

  const error = errors?.comment?.message as string

  const onSubmit = handleSubmit(async data => {
    if (!rating) {
      setFeedbackMessage(t("reviews.ratingRequired"))
      return
    }

    try {
      await createReview({
        comment: data.comment,
        rating,
        clientId: client.id,
        userId: userId,
        branchId: branchId,
      }).unwrap()
      reset()
      setRating(0)
      setIsSuccess(true)
      await triggerAllReviews().unwrap()
    } catch (error) {
      console.error("Помилка при відправці відгуку:", error)
      setFeedbackMessage(t("reviews.submitError"))
      setIsSuccess(false)
    }
  })

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        onClose()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isSuccess, onClose])

  return (
    <div className="relative">
      {isSuccess && <Succes children={t("reviews.submitSuccess")} />}
      <form onSubmit={onSubmit} className="p-4">
        {isAuthenticated && (
          <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
            <p className="font-medium">{t("reviews.authenticatedAs")}</p>
            <h2 className="font-bold text-lg">{client.name}</h2>
            <h2 className="font-bold text-lg">
              {client.phoneNumber.replace(
                /(\+\d{2,3})(\d{3})(\d{3})(\d{3})/,
                "$1-$2-$3-$4",
              )}
            </h2>
          </div>
        )}

        <div className="flex flex-col items-center">
          <p className="text-center mb-4">{t("reviews.reviewPrompt")}</p>
          <div className="flex space-x-2 pb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                size={32}
                className={`cursor-pointer ${
                  i < rating ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => setRating(i + 1)}
              />
            ))}
          </div>
          {!rating && feedbackMessage && (
            <p className="text-red-500 text-lg mb-4">{feedbackMessage}</p>
          )}
        </div>

        <Controller
          name="comment"
          control={control}
          defaultValue=""
          rules={{ required: t("reviews.commentRequired") }}
          render={({ field }) => (
            <Textarea
              {...field}
              labelPlacement="outside"
              placeholder={t("reviews.commentRequired")}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        />
        <p className="text-center text-sm mt-2 text-red-500 dark:text-red-400">
          {t("reviews.warning")}
        </p>

        {errors.comment && <ErrorMessage error={error} />}

        <Button
          color="success"
          className="w-full mt-4 flex justify-center items-center"
          endContent={<IoMdCreate />}
          type="submit"
        >
          {t("reviews.submit")}
        </Button>
      </form>
    </div>
  )
}
