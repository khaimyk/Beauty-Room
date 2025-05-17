// components/BookingCard.tsx
import { FaRegCalendarCheck } from "react-icons/fa"
import { Button, Spinner, Tooltip } from "@heroui/react"
import type { Booking } from "../../../app/types"
import { useTranslation } from "react-i18next"
import { currencySymbols } from "../../../utils/options"

interface BookingCardProps {
  booking: Booking
  currentTime: Date
  userRole?: string
  onConfirm?: (id: string) => Promise<void>
  onCancel?: (id: string) => Promise<void>
  isUpdating?: boolean
  updatingId?: string | null
}

export const BookingCard = ({
  booking,
  currentTime,
  userRole,
  onConfirm,
  onCancel,
  isUpdating,
  updatingId,
}: BookingCardProps) => {
  const bookingDateTime = new Date(booking.date)
  const [hours, minutes] = (booking.notes ?? "0:0").split(":").map(Number)
  const time = new Date()
  time.setHours(hours, minutes, 0, 0)
  bookingDateTime.setHours(time.getHours(), time.getMinutes(), 0, 0)

  const { t, i18n } = useTranslation()
  const isPastBooking = bookingDateTime <= currentTime

  return (
    <div className="group border border-gray-200 dark:border-gray-700 rounded-lg p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <Tooltip
              content={
                booking.status === "CONFIRMED"
                  ? t("bookingAdmin.status.confirmed")
                  : booking.status === "PENDING"
                    ? t("bookingAdmin.status.pending")
                    : t("bookingAdmin.status.cancelled")
              }
              placement="right"
              showArrow
            >
              <span
                className={`inline-block w-3 h-3 rounded-full ${
                  booking.status === "CONFIRMED"
                    ? "bg-success"
                    : booking.status === "PENDING"
                      ? "bg-warning"
                      : "bg-danger"
                }`}
              />
            </Tooltip>
            <div>
              <h4 className="text-lg font-semibold">
                {t("bookingAdmin.master")}: {booking.user?.name}
              </h4>
              <h4 className="text-lg font-semibold">
                {t("bookingAdmin.client")}: {booking.client?.name}
              </h4>
            </div>
          </div>
          <div className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
            <FaRegCalendarCheck className="mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">
                {new Date(booking.date).toLocaleDateString(i18n.language, {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p>{booking.notes || t("bookingAdmin.timeNotSpecified")}</p>
            </div>
          </div>
        </div>
        <div className="bg-content2 p-3 rounded-lg min-w-[120px]">
          <p className="text-sm font-semibold text-center">
            {" "}
            {t("bookingAdmin.duration")}
          </p>
          <p className="text-center font-bold">
            {booking.time} {t("bookingAdmin.minutes")}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="font-semibold text-lg">{t("bookingAdmin.services")}</h3>
        {booking.services?.map((service: any) => (
          <div
            key={service.id}
            className="flex justify-between items-center p-2 hover:bg-content2 rounded-lg transition-colors"
          >
            <div>
              <p className="font-medium">{service.name}</p>
              <p className="text-sm text-gray-500">
                {service.duration} {t("bookingAdmin.minutes")}
              </p>
            </div>
            <p className="font-semibold">
              {service.price}{" "}
              {currencySymbols[
                service.currency as keyof typeof currencySymbols
              ] || ""}
            </p>
          </div>
        ))}
      </div>

      {!isPastBooking &&
        booking.status === "PENDING" &&
        (userRole === "ADMIN" || userRole === "MASTER") && (
          <div className="mt-4 flex flex-wrap gap-3 justify-end">
            <Button
              size="sm"
              color="success"
              onPress={() => onConfirm?.(booking.id)}
              disabled={isUpdating}
              className="min-w-[120px]"
            >
              {updatingId === booking.id ? (
                <Spinner size="sm" />
              ) : (
                t("bookingAdmin.confirm")
              )}
            </Button>
            <Button
              size="sm"
              color="danger"
              variant="flat"
              onPress={() => onCancel?.(booking.id)}
              disabled={isUpdating}
              className="min-w-[120px]"
            >
              {updatingId === booking.id ? (
                <Spinner size="sm" />
              ) : (
                t("bookingAdmin.cancel")
              )}
            </Button>
          </div>
        )}
    </div>
  )
}
