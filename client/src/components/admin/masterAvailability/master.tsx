import { parseDate } from "@internationalized/date"
import type { CalendarDate, DateValue } from "@internationalized/date"
import { Button, Calendar } from "@heroui/react"
import { useEffect, useState, useMemo } from "react"
import { today, getLocalTimeZone } from "@internationalized/date"
import { MasterCalendar } from "./availablity"
import { useTranslation } from "react-i18next"
import { I18nProvider } from "@react-aria/i18n"

type Slot = { startTime: string }
type DaySchedule = { date: string; slots: Slot[] }

type Props = {
  id: string | undefined
  days: string | string[] | undefined
  schedule: DaySchedule[]
  user: string | undefined
  editable?: boolean
}

const CalendarComponent = ({
  id,
  days = "",
  schedule = [],
  user = "",
  editable = false,
}: Props) => {
  const [selectedDates, setSelectedDates] = useState<CalendarDate[]>([])
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [editing, setEditing] = useState(false)

  const { t, i18n } = useTranslation()

  // Створюємо мапу дат до слотів
  const timeSlotsMap = useMemo(() => {
    const map: Record<string, string[]> = {}
    schedule?.forEach(({ date, slots }) => {
      if (date && slots) {
        map[date] = slots
          .filter(slot => slot?.startTime)
          .map(slot => slot.startTime)
      }
    })
    return map
  }, [schedule])

  useEffect(() => {
    if (days) {
      try {
        const parsedDates =
          typeof days === "string"
            ? days.split(",").map(day => parseDate(day.trim()))
            : Array.isArray(days)
              ? days.map(day => parseDate(day))
              : []
        setSelectedDates(parsedDates)
      } catch (error) {
        console.error("Failed to parse dates:", error)
      }
    }
  }, [days])

  const selected = (date: DateValue) =>
    selectedDates.some(d => d.toString() === date.toString())

  const handleDateSelect = (date: DateValue) => {
    const dateString = date.toString()
    setSelectedSlot(selected(date) ? dateString : null)
  }
  return (
    <div className="container mx-auto p-4 border rounded-lg shadow-md mb-4 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        {t("masterAvailability.master")}{" "}
        {user || t("masterAvailability.unknown")}
      </h2>
      {editable && (
        <div className="flex gap-2 mb-4">
          {!editing ? (
            <Button variant="solid" onPress={() => setEditing(true)}>
              {t("masterAvailability.edit")}
            </Button>
          ) : (
            <Button variant="solid" onPress={() => setEditing(false)}>
              {t("masterAvailability.closeEdit")}
            </Button>
          )}
        </div>
      )}

      {editing ? (
        <MasterCalendar masterId={id || ""} />
      ) : (
        <>
          <div className="mb-6">
            <I18nProvider locale={i18n.language}>
              <Calendar
                calendarWidth="100%"
                aria-label={`Calendar for ${user}`}
                maxValue={today(getLocalTimeZone()).add({ months: 3 })}
                minValue={today(getLocalTimeZone()).add({ months: -3 })}
                onChange={handleDateSelect}
                classNames={{
                  base: "border border-gray-300 dark:border-gray-700 rounded-xl",
                  content: "p-0",
                  title:
                    "text-lg font-semibold mb-2 text-gray-800 dark:text-gray-300",
                  cell: "h-12 w-12 md:h-14 md:w-16 text-sm md:text-base",
                  gridHeaderCell: "w-12 md:w-16 md:text-base",
                  cellButton: [
                    "h-full w-full",
                    "hover:bg-primary-100 hover:text-primary-800",
                    "dark:hover:bg-primary-900 dark:hover:text-gray-800",
                    "transition-colors duration-150",
                    "selected:bg-primary-500 selected:text-white",
                    "dark:selected:bg-primary-600",
                  ],
                }}
                isDateUnavailable={(date: DateValue) => !selected(date)}
              />
            </I18nProvider>
          </div>

          {selectedSlot && timeSlotsMap[selectedSlot]?.length ? (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                {t("masterAvailability.workingHours")} {selectedSlot}:
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {Array.from(new Set(timeSlotsMap[selectedSlot])).map(
                  (time, index) => (
                    <div
                      key={index}
                      className="py-2 px-3 rounded-md bg-gray-100 dark:bg-gray-700 text-center"
                    >
                      {time}
                    </div>
                  ),
                )}
              </div>
            </div>
          ) : selectedSlot ? (
            <div className="mt-4">
              <p className="text-gray-600 dark:text-gray-400">
                {t("masterAvailability.notWorking")}
              </p>
            </div>
          ) : null}
        </>
      )}
    </div>
  )
}

export default CalendarComponent
