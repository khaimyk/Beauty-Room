import { Button, CircularProgress } from "@heroui/react"
import { useNavigate, useLocation } from "react-router"
import { useState, useMemo, useEffect } from "react"
import { Calendar } from "@heroui/react"
import {
  today,
  getLocalTimeZone,
  isToday,
  parseDate,
} from "@internationalized/date"
import { I18nProvider } from "@react-aria/i18n"
import { Paths } from "../utils/paths"
import { useGetMasterAvailabilityByIdQuery } from "../app/services/masterAvailabality"
import { useGetBookingsByUserIdQuery } from "../app/services/bookingApi"
import type { DateValue } from "@heroui/react"
import { useTranslation } from "react-i18next"
import i18n from "../i18n"

interface PropState {
  userId: string
  totalDuration: number // Тривалість послуги в хвилинах
  totalCost: number
  notes: string
  selectedServices: {
    id: string
    name: string
    price: number
    duration: string
  }[]
}

interface Slot {
  startTime: string
}

export const Booking = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { userId, totalDuration, selectedServices, totalCost } =
    location.state as PropState
  const { t } = useTranslation()

  // Запити даних
  const {
    data: availabilityData,
    isLoading: isAvailabilityLoading,
    error: availabilityError,
  } = useGetMasterAvailabilityByIdQuery(userId)

  const {
    data: bookingsData,
    isLoading: isBookingsLoading,
    error: bookingsError,
  } = useGetBookingsByUserIdQuery(userId)

  // Стани
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  // Оновлення поточного часу кожну хвилину
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Оновлюємо кожну хвилину

    return () => clearInterval(timer)
  }, [])

  // Мемоізовані обчислення
  const availableDates = useMemo(() => {
    if (!availabilityData) return []

    const parsedAvailability =
      typeof availabilityData.availability === "string"
        ? JSON.parse(availabilityData.availability)
        : availabilityData.availability

    return parsedAvailability.map(({ date }: any) => new Date(date))
  }, [availabilityData])

  const availableSlots = useMemo(() => {
    if (!selectedDate || !availabilityData || !bookingsData) return []

    const selectedDateString = selectedDate.toISOString().split("T")[0]
    const parsedAvailability =
      typeof availabilityData.availability === "string"
        ? JSON.parse(availabilityData.availability)
        : availabilityData.availability

    const selectedDay = parsedAvailability.find(
      ({ date }: any) => date === selectedDateString,
    )

    if (!selectedDay?.slots) return []

    const bookedSlots = bookingsData
      .filter(
        (booking: any) =>
          new Date(booking.date).toISOString().split("T")[0] ===
          selectedDateString,
      )
      .map((booking: any) => booking.notes)

    return selectedDay.slots.filter((slot: Slot) => {
      // Фільтруємо заброньовані слоти
      if (bookedSlots.includes(slot.startTime)) return false

      // Якщо це не сьогодні, то показуємо всі доступні слоти
      if (
        !isToday(
          parseDate(selectedDate.toISOString().split("T")[0]),
          getLocalTimeZone(),
        )
      )
        return true

      // Для сьогоднішнього дня перевіряємо час
      const [hours, minutes] = slot.startTime.split(":").map(Number)
      const slotTime = new Date()
      slotTime.setHours(hours, minutes, 0, 0)

      // Додаємо годину (60 хвилин) до поточного часу
      const oneHourLater = new Date(currentTime.getTime() + 60 * 60000)

      // Повертаємо тільки ті слоти, які починаються не раніше ніж через годину
      return slotTime >= oneHourLater
    })
  }, [selectedDate, availabilityData, bookingsData, currentTime])

  // Обробники подій
  const handleDateChange = (date: DateValue) => {
    setSelectedDate(new Date(date as unknown as string))
    setSelectedSlot(null)
  }

  const handleSlotClick = (slot: Slot) => {
    setSelectedSlot(slot)
  }

  const handleConfirmBooking = () => {
    if (!selectedSlot || !selectedDate) return

    const endTime = calculateEndTime(selectedSlot.startTime, totalDuration)
    const bookingNotes = selectedSlot.startTime

    navigate(Paths.client, {
      state: {
        userId,
        totalDuration,
        selectedServices,
        selectedSlot,
        endTime,
        selectedDate,
        totalCost,
        bookingNotes,
      },
    })
  }
  const formatDuration = (totalMinutes: number) => {
    if (totalMinutes < 1) return ""

    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    let timeString = t("booking.duration") + " "

    if (hours > 0) {
      timeString += `${hours} ${t("booking.hours")}`
      if (minutes > 0) {
        timeString += ` ${minutes} ${t("booking.minutes")}`
      }
    } else {
      timeString += `${minutes} ${t("booking.minutes")}`
    }

    return timeString
  }

  // Допоміжні функції
  const calculateEndTime = (startTime: string, duration: number): string => {
    const [hours, minutes] = startTime.split(":").map(Number)
    const totalMinutes = hours * 60 + minutes + duration
    const endHours = Math.floor(totalMinutes / 60)
    const endMinutes = totalMinutes % 60
    return `${String(endHours).padStart(2, "0")}:${String(endMinutes).padStart(2, "0")}`
  }

  const isDateUnavailable = (date: DateValue) => {
    const currentDate = new Date(date as unknown as string)
    return !availableDates.some(
      (availableDate: Date) =>
        availableDate.toDateString() === currentDate.toDateString(),
    )
  }

  // Стани завантаження та помилок
  if (!userId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <p className="text-lg text-danger-500 mb-4">{t("booking.noMaster")}</p>
        <Button
          color="primary"
          onPress={() => navigate(-1)}
          className="px-6 py-3"
        >
          {t("booking.goBack")}
        </Button>
      </div>
    )
  }

  if (isAvailabilityLoading || isBookingsLoading) {
    return <CircularProgress aria-label="Loading..." />
  }

  if (availabilityError || bookingsError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4">
        <p className="text-lg text-danger-500 mb-4">
          {t("booking.loadingError")}
        </p>
        <Button
          color="primary"
          onPress={() => window.location.reload()}
          className="px-6 py-3"
        >
          {t("booking.refresh")}
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-2 md:p-4 lg:p-8 ">
      <div className=" flex flex-col items-center justify-between rounded-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-300">
          {t("booking.title")}
        </h1>

        <div className="mb-8 ">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
            {t("booking.chooseDate")}
          </h2>

          <div className="overflow-x-auto ">
            <I18nProvider locale="uk">
              <Calendar
                calendarWidth="100%"
                onChange={handleDateChange}
                maxValue={today(getLocalTimeZone()).add({ months: 3 })}
                minValue={today(getLocalTimeZone())}
                prevButtonProps={{
                  variant: "bordered",
                  size: "lg",
                }}
                nextButtonProps={{
                  variant: "bordered",
                  size: "lg",
                }}
                classNames={{
                  base: "border border-gray-300 dark:border-gray-700 rounded-xl  ",
                  content: "p-0",
                  title:
                    "text-lg font-semibold mb-2 text-gray-800 dark:text-gray-300 ",

                  cell: "h-14 w-14 md:h-18 md:w-18 text-sm md:text-base text-gray-800 dark:text-gray-300",
                  gridHeaderCell: "w-14 md:w-18 md:text-base",

                  cellButton: [
                    "h-full w-full",
                    "hover:bg-primary-100 hover:text-primary-800",
                    "dark:hover:bg-primary-900 dark:hover:text-gray-800",
                    "transition-colors duration-150",
                  ],
                }}
                isDateUnavailable={isDateUnavailable}
              />
            </I18nProvider>
          </div>
        </div>

        {selectedDate && (
          <div className="mb-8 transition-all duration-300 ease-in-out">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-300">
              {t("booking.chooseTime")}
              <span className="ml-2 text-gray-600 dark:text-gray-200">
                {selectedDate.toLocaleDateString(i18n.language)}
              </span>
            </h2>

            {availableSlots.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {availableSlots.map((slot: Slot, index: number) => {
                  const [hours, minutes] = slot.startTime.split(":").map(Number)
                  const slotTime = new Date(selectedDate)
                  slotTime.setHours(hours, minutes, 0, 0)

                  const isSlotAvailable =
                    !isToday(
                      parseDate(selectedDate.toISOString().split("T")[0]),
                      getLocalTimeZone(),
                    ) ||
                    slotTime >= new Date(currentTime.getTime() + 60 * 60000)

                  return (
                    <Button
                      key={index}
                      radius="sm"
                      color={selectedSlot === slot ? "primary" : "default"}
                      size="lg"
                      className={`h-12 transition-all ${
                        selectedSlot === slot
                          ? "scale-105 shadow-lg"
                          : "hover:scale-105 hover:shadow-md"
                      }`}
                      onPress={() => handleSlotClick(slot)}
                      isDisabled={!isSlotAvailable}
                    >
                      {slot.startTime}
                      {!isSlotAvailable && (
                        <span className="text-xs block text-gray-500">
                          {t("booking.unavailable")}
                        </span>
                      )}
                    </Button>
                  )
                })}
              </div>
            ) : (
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                <p className="text-gray-500 dark:text-gray-300">
                  {t("booking.noSlots")}
                </p>
              </div>
            )}
          </div>
        )}

        {selectedSlot && (
          <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="space-y-2">
                <p className="font-medium text-gray-800 dark:text-gray-300">
                  {t("booking.selectedTime")}
                  <span className=" ml-2 text-primary-600">
                    {selectedSlot.startTime}
                  </span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {formatDuration(totalDuration)}
                </p>
              </div>
              <Button
                color="primary"
                size="lg"
                className="w-full sm:w-auto px-8 py-3 text-lg font-medium"
                onPress={handleConfirmBooking}
              >
                {t("booking.confirm")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
