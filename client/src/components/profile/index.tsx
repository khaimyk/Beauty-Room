import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Spinner,
} from "@heroui/react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { FaRegCalendarCheck } from "react-icons/fa"
import { useEffect, useState } from "react"
import {
  useCancelBookingMutation,
  useConfirmBookingMutation,
  useGetBookingsByUserIdQuery,
} from "../../app/services/bookingApi"
import { Paths } from "../../utils/paths"
import type { Booking } from "../../app/types"
import { useBookingFilters } from "../../components/admin/booking/useBookingFilters"
import { BookingCard } from "../../components/admin/booking/bookingCard"
import { useTranslation } from "react-i18next"

export const Profile = ({ current }: { current: any }) => {
  const navigate = useNavigate()
  const [confirmBooking] = useConfirmBookingMutation()
  const [cancelBooking] = useCancelBookingMutation()
  const { data: bookings, isLoading } = useGetBookingsByUserIdQuery(
    current?.id || "",
    { skip: !current?.id },
  )
  const { t } = useTranslation()
  const [currentTime, setCurrentTime] = useState(new Date())
  const [bookingsState, setBookingsState] = useState<Booking[]>([])

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (bookings) setBookingsState(bookings)
  }, [bookings])

  const { upcomingBookings } = useBookingFilters(bookingsState, currentTime)

  const nearestBookings = upcomingBookings.slice(0, 2)

  const handleConfirm = async (id: string) => {
    try {
      await confirmBooking(id).unwrap()
      setBookingsState(prev =>
        prev.map(b => (b.id === id ? { ...b, status: "CONFIRMED" } : b)),
      )
      toast.success(t("profile.bookingConfirmed"))
    } catch (e) {
      toast.error(t("profile.confirmError"))
    }
  }

  const handleCancel = async (id: string) => {
    try {
      await cancelBooking(id).unwrap()
      setBookingsState(prev =>
        prev.map(b => (b.id === id ? { ...b, status: "CANCELLED" } : b)),
      )
      toast.error(t("profile.bookingCancelled"))
    } catch (e) {
      toast.error(t("profile.cancelError"))
    }
  }

  if (!current)
    return <p className="text-danger">{t("profile.userNotFound")}</p>
  if (isLoading) return <Spinner label={t("profile.loading")} color="primary" />

  return (
    <Card className="w-full max-w-3xl p-4 md:p-6 shadow-lg">
      <CardBody className="space-y-6">
        <h2 className="text-2xl font-bold text-center md:text-left">
          {t("profile.title")}
        </h2>
        <ToastContainer position="top-center" autoClose={3000} />

        {nearestBookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8">
            <FaRegCalendarCheck className="text-gray-400 text-5xl mb-4" />
            <p className="text-gray-500 text-lg">{t("profile.noBookings")}</p>
          </div>
        ) : (
          <div className="space-y-8">
            {nearestBookings.map(booking => (
              <BookingCard
                key={booking.id}
                booking={booking}
                currentTime={currentTime}
                userRole={current?.role}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
              />
            ))}
          </div>
        )}
      </CardBody>

      {bookings?.length ? (
        <>
          <Divider />
          <CardFooter className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
            <span className="font-semibold text-gray-600">
              {t("profile.totalBookings")} {bookings.length}
            </span>

            <Button
              color="primary"
              variant="flat"
              onPress={() =>
                navigate(Paths.AdminAllBookings, { state: { current } })
              }
              className="w-full md:w-auto"
            >
              {t("profile.viewAll")}
            </Button>
          </CardFooter>
        </>
      ) : null}
    </Card>
  )
}
