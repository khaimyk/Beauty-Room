import {
  Calendar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Button,
  Pagination,
  Select,
  SelectItem,
  Spinner,
} from "@heroui/react"
import { FaRegCalendarCheck } from "react-icons/fa"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useMemo, useState, useEffect, useCallback } from "react"

import { today, getLocalTimeZone } from "@internationalized/date"
import {
  useCancelBookingMutation,
  useConfirmBookingMutation,
  useGetAllBookingsQuery,
} from "../../../app/services/bookingApi"
import { useAppSelector } from "../../../app/hooks"
import { selectCurrent } from "../../../features/useSlice"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { BookingCard } from "./bookingCard"
import { useBookingFilters } from "./useBookingFilters"
import { I18nProvider } from "@react-aria/i18n"
import { useTranslation } from "react-i18next"

export const AdminBookings = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const branchId = searchParams.get("branchId")
  const { data: bookings = [], isLoading } = useGetAllBookingsQuery(
    branchId || undefined,
  )
  const user = useAppSelector(selectCurrent)
  const [isUpdating, setIsUpdating] = useState(false)
  const [updatingId, setUpdatingId] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [bookingsState, setBookingsState] = useState(bookings)

  const { t, i18n } = useTranslation()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (bookings && bookings.length > 0) {
      setBookingsState(bookings)
    }
  }, [bookings])

  const filteredBookings = useMemo(() => {
    if (user?.role === "MASTER") {
      return bookingsState.filter(booking => booking.user?.id === user.id)
    } else if (user?.role === "CLIENT") {
      return bookingsState.filter(booking => booking.client?.id === user.id)
    }
    return bookingsState
  }, [bookingsState, user])

  const {
    masters,
    setSelectedMaster,
    selectedDate,
    setSelectedDate,
    showPastBookings,
    setShowPastBookings,
    currentPage,
    setCurrentPage,
    displayedBookings,
    setSelectedStatus,
  } = useBookingFilters(filteredBookings, currentTime)

  const handleToggleBookings = useCallback(
    (showPast: boolean) => {
      setShowPastBookings(showPast)
      setCurrentPage(1)
    },
    [setShowPastBookings, setCurrentPage],
  )

  // Мемоізовані стилі календаря
  const calendarStyles = useMemo(
    () => ({
      base: "border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm ",
      content: "p-0 ",
      title: "text-lg font-semibold mb-2 text-gray-800 dark:text-gray-300 ",
      cell: "h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 text-sm",
      gridHeaderCell: "w-10 sm:w-12 md:w-14 text-sm font-medium",
      cellButton: [
        "h-full w-full",
        "hover:bg-primary-100 hover:text-primary-800",
        "dark:hover:bg-primary-900 dark:hover:text-gray-800",
        "transition-colors duration-150",
        "selected:bg-primary-500 selected:text-white",
        "dark:selected:bg-primary-600",
      ],
    }),
    [],
  )

  const itemsPerPage = 10
  const paginatedBookings = displayedBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  const [confirmBooking] = useConfirmBookingMutation()
  const [cancelBooking] = useCancelBookingMutation()

  const handleConfirm = async (id: string) => {
    setIsUpdating(true)
    setUpdatingId(id)
    try {
      await confirmBooking(id).unwrap()
      setBookingsState(prev =>
        prev.map(booking =>
          booking.id === id ? { ...booking, status: "CONFIRMED" } : booking,
        ),
      )
      toast.success(t("bookingAdmin.success.confirmed"))
    } catch (error) {
      toast.error(t("bookingAdmin.error.confirm"))
    } finally {
      setIsUpdating(false)
      setUpdatingId(null)
    }
  }

  const handleCancel = async (id: string) => {
    setIsUpdating(true)
    setUpdatingId(id)
    try {
      await cancelBooking(id).unwrap()
      setBookingsState(prev =>
        prev.map(booking =>
          booking.id === id ? { ...booking, status: "CANCELLED" } : booking,
        ),
      )
      toast.success(t("bookingAdmin.success.cancelled"))
    } catch (error) {
      toast.error(t("bookingAdmin.error.cancel"))
    } finally {
      setIsUpdating(false)
      setUpdatingId(null)
    }
  }

  if (isLoading)
    return <Spinner label={t("bookingAdmin.loading")} color="primary" />

  return (
    <section className="container mx-auto px-4   lg:px-8 ">
      <ToastContainer position="top-center" autoClose={3000} />

      <Card className="shadow-lg overflow-hidden bg-slate-200  dark:bg-gray-800 p-4 rounded-lg ">
        <CardHeader className=" px-6  justify-center ">
          <h1 className="text-3xl sm:text-3xl font-bold ">
            {t("bookingAdmin.allBookings")}
          </h1>
        </CardHeader>

        <Divider className="bg-gray-100 dark:bg-gray-700" />

        <CardBody className=" space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              {t("bookingAdmin.selectDate")}
            </h2>
            <Button
              variant="light"
              size="sm"
              className="text-lg text-blue-600 hover:underline dark:text-blue-200"
              onPress={() => setSelectedDate(null)}
              isDisabled={!selectedDate}
            >
              {t("bookingAdmin.resetDate")}
            </Button>
          </div>
          <I18nProvider locale={i18n.language}>
            <Calendar
              calendarWidth="100%"
              maxValue={today(getLocalTimeZone()).add({ months: 3 })}
              minValue={today(getLocalTimeZone()).add({ months: -3 })}
              classNames={calendarStyles}
              prevButtonProps={{
                variant: "bordered",
                size: "lg",
              }}
              nextButtonProps={{
                variant: "bordered",
                size: "lg",
              }}
              value={
                selectedDate
                  ? today(getLocalTimeZone()).set({
                      year: selectedDate.getFullYear(),
                      month: selectedDate.getMonth() + 1,
                      day: selectedDate.getDate(),
                    })
                  : null
              }
              onChange={date =>
                setSelectedDate(
                  date ? new Date(date as unknown as string) : null,
                )
              }
            />
          </I18nProvider>

          {/* Вибір майстра */}
          {user?.role === "ADMIN" && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                {t("bookingAdmin.selectMaster")}
              </h2>
              <Select
                label={t("bookingAdmin.master")}
                labelPlacement="outside"
                className="max-w-xs"
                classNames={{
                  trigger: "h-12 border-2 border-gray-200 dark:border-gray-600",
                  label: "text-gray-700 dark:text-gray-300 font-medium",
                  popoverContent: "bg-white dark:bg-gray-700",
                }}
                onChange={e => setSelectedMaster(e.target.value)}
              >
                {masters.map(master => (
                  <SelectItem
                    key={master}
                    className="text-gray-800 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-blue-900/50"
                  >
                    {master}
                  </SelectItem>
                ))}
              </Select>
            </div>
          )}

          <Select
            label={t("bookingAdmin.selectStatus")}
            onChange={e => setSelectedStatus(e.target.value)}
            labelPlacement="outside"
            className="max-w-xs"
            classNames={{
              trigger: "h-12 border-2 border-gray-200 dark:border-gray-600",
              label: "text-gray-700 dark:text-gray-300 font-medium",
              popoverContent: "bg-white dark:bg-gray-700",
            }}
          >
            <SelectItem key="ALL">
              {t("bookingAdmin.statusOptions.all")}
            </SelectItem>
            <SelectItem key="PENDING">
              {t("bookingAdmin.statusOptions.pending")}
            </SelectItem>
            <SelectItem key="CONFIRMED">
              {t("bookingAdmin.statusOptions.confirmed")}
            </SelectItem>
            <SelectItem key="CANCELLED">
              {t("bookingAdmin.statusOptions.cancelled")}
            </SelectItem>
          </Select>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              radius="lg"
              variant={!showPastBookings ? "solid" : "light"}
              className={`font-medium min-w-[150px] ${
                !showPastBookings ? "shadow-md" : "bg-gray-100 dark:bg-gray-700"
              }`}
              onPress={() => handleToggleBookings(false)}
            >
              {t("bookingAdmin.futureBookings")}
            </Button>
            <Button
              radius="lg"
              variant={showPastBookings ? "solid" : "light"}
              className={`font-medium min-w-[150px] ${
                showPastBookings ? "shadow-md" : "bg-gray-100 dark:bg-gray-700"
              }`}
              onPress={() => handleToggleBookings(true)}
            >
              {t("bookingAdmin.pastBookings")}
            </Button>
          </div>

          {/* Список бронювань */}
          {paginatedBookings.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
              <FaRegCalendarCheck className="text-gray-400 text-5xl mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {showPastBookings
                  ? t("bookingAdmin.noBookingsPast")
                  : t("bookingAdmin.noBookingsFuture")}
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {paginatedBookings.map(booking => (
                <BookingCard
                  key={booking.id}
                  booking={booking}
                  currentTime={currentTime}
                  userRole={user?.role}
                  onConfirm={handleConfirm}
                  onCancel={handleCancel}
                  isUpdating={isUpdating}
                  updatingId={updatingId}
                />
              ))}
            </div>
          )}
        </CardBody>

        <CardFooter>
          <div className="flex flex-col items-center w-full space-y-4">
            {displayedBookings.length > itemsPerPage && (
              <Pagination
                total={Math.ceil(displayedBookings.length / itemsPerPage)}
                initialPage={1}
                onChange={setCurrentPage}
                classNames={{
                  item: "text-sm font-medium",
                  cursor: "bg-blue-500 dark:bg-blue-600",
                }}
              />
            )}
            <Button
              size="lg"
              color="primary"
              variant="flat"
              className="w-full sm:w-auto"
              onPress={() => navigate(-1)}
            >
              {t("bookingAdmin.back")}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
