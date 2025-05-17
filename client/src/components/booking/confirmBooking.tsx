import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Card, Button, Spinner } from "@heroui/react"
import {
  useConfirmBookingMutation,
  useCancelBookingMutation,
} from "../../app/services/bookingApi"
import { useAppSelector } from "../../app/hooks"
import { Paths } from "../../utils/paths"
import { useTranslation } from "react-i18next"

export const ConfirmBooking = () => {
  const { id } = useParams()
  const { selectedBranch } = useAppSelector(state => state.branch)
  const navigate = useNavigate()
  const [confirmBooking, { isLoading: isConfirming }] =
    useConfirmBookingMutation()
  const [cancelBooking, { isLoading: isCancelling }] =
    useCancelBookingMutation()
  const [message, setMessage] = useState("")
  const { t } = useTranslation()
  useEffect(() => {
    if (!id) {
      setMessage(t("booking.bookingNotFound"))
    }
  }, [id, t])

  const handleConfirm = async () => {
    try {
      await confirmBooking(id)
      setMessage(t(t("booking.confirmed")))
    } catch {
      setMessage(t("booking.confirmError"))
    }
  }

  const handleCancel = async () => {
    try {
      await cancelBooking(id)
      setMessage(t("booking.cancelled"))
    } catch {
      setMessage(t("booking.cancelError"))
    }
  }

  return (
    <Card className="p-6 text-center">
      <h2 className="text-2xl font-bold">{t("booking.confirmTitle")}</h2>
      {message ? (
        <p className="text-lg mt-4">{message}</p>
      ) : (
        <div className="flex justify-center gap-4 mt-6">
          <Button
            color="success"
            onPress={handleConfirm}
            disabled={isConfirming}
          >
            {isConfirming ? <Spinner /> : t("booking.confirmButton")}
          </Button>
          <Button color="danger" onPress={handleCancel} disabled={isCancelling}>
            {isCancelling ? <Spinner /> : t("booking.cancelButton")}
          </Button>
        </div>
      )}
      <Button
        className="mt-4"
        onPress={() => navigate(Paths.branch + "/" + selectedBranch?.id)}
      >
        {t("booking.backButton")}
      </Button>
    </Card>
  )
}
