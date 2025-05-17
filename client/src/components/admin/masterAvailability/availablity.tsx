import { useState, useEffect, useCallback } from "react"
import { Accordion, AccordionItem, Calendar, Tooltip } from "@heroui/react"
import { Button, Input, Spinner } from "@heroui/react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  useCreateMasterAvailabilityMutation,
  useGetMasterAvailabilityByIdQuery,
} from "../../../app/services/masterAvailabality"
import { today, getLocalTimeZone } from "@internationalized/date"
import { MdDeleteForever } from "react-icons/md"
import { IoMdAdd } from "react-icons/io"
import { useTranslation } from "react-i18next"
import { I18nProvider } from "@react-aria/i18n"

export const MasterCalendar = ({ masterId }: { masterId: string }) => {
  const [selectedDays, setSelectedDays] = useState<
    { date: Date; slots: { startTime: string }[] }[]
  >([])
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [timeSlotsTemplate, setTimeSlotsTemplate] = useState<
    { startTime: string }[]
  >([{ startTime: "09:00" }])
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())

  const { data: existingAvailability, isLoading: isFetching } =
    useGetMasterAvailabilityByIdQuery(masterId)

  const [createMasterAvailability] = useCreateMasterAvailabilityMutation()

  const { t, i18n } = useTranslation()

  // Функція для сортування слотів за часом
  const sortSlots = useCallback((slots: { startTime: string }[]) => {
    return [...slots].sort((a, b) => {
      const timeA = a.startTime.replace(":", "")
      const timeB = b.startTime.replace(":", "")
      return Number(timeA) - Number(timeB)
    })
  }, [])

  // Функція для перевірки унікальності часу
  const isTimeSlotUnique = useCallback(
    (slots: { startTime: string }[], time: string) => {
      return !slots.some(slot => slot.startTime === time)
    },
    [],
  )

  useEffect(() => {
    if (existingAvailability) {
      try {
        const availability =
          typeof existingAvailability.availability === "string"
            ? JSON.parse(existingAvailability.availability)
            : existingAvailability.availability

        const sortedAvailability = availability.map(({ date, slots }: any) => ({
          date: new Date(date),
          slots: sortSlots(slots.map(({ startTime }: any) => ({ startTime }))),
        }))

        setSelectedDays(sortedAvailability)

        if (availability.length > 0 && availability[0].slots?.length > 0) {
          setTimeSlotsTemplate(sortSlots(availability[0].slots))
        }
      } catch (error) {
        console.error("Error parsing availability data:", error)
        toast.error("Помилка завантаження доступних дат")
      }
    }
  }, [existingAvailability, sortSlots])

  const toggleDateSelection = (date: unknown) => {
    const parsedDate = new Date(date as string)
    if (isNaN(parsedDate.getTime())) return

    setSelectedDays(prev => {
      const isSelected = prev.some(
        ({ date }) => date.toDateString() === parsedDate.toDateString(),
      )

      return isSelected
        ? prev.filter(
            ({ date }) => date.toDateString() !== parsedDate.toDateString(),
          )
        : [
            ...prev,
            {
              date: parsedDate,
              slots: sortSlots([...timeSlotsTemplate]),
            },
          ]
    })

    toast.success(
      selectedDays.some(
        d => d.date.toDateString() === parsedDate.toDateString(),
      )
        ? t("masterAvailability.dateRemoved")
        : t("masterAvailability.dateAdded"),
    )
  }

  const handleAddSlot = (date: Date) => {
    setSelectedDays(prev =>
      prev.map(item =>
        item.date.toDateString() === date.toDateString()
          ? {
              ...item,
              slots: sortSlots([...item.slots, { startTime: "09:00" }]),
            }
          : item,
      ),
    )
  }

  const handleTimeChange = (date: Date, slotIndex: number, value: string) => {
    setSelectedDays(prev =>
      prev.map(item => {
        if (item.date.toDateString() !== date.toDateString()) return item

        // Перевірка на унікальність часу
        if (
          !isTimeSlotUnique(
            item.slots.filter((_, index) => index !== slotIndex),
            value,
          )
        ) {
          toast.error(t("masterAvailability.validation.duplicates"))
          return item
        }

        const updatedSlots = item.slots.map((slot, index) =>
          index === slotIndex ? { ...slot, startTime: value } : slot,
        )

        return {
          ...item,
          slots: sortSlots(updatedSlots),
        }
      }),
    )
  }

  const handleDeleteSlot = (date: Date, slotIndex: number) => {
    setSelectedDays(prev =>
      prev.map(item =>
        item.date.toDateString() === date.toDateString()
          ? {
              ...item,
              slots: item.slots.filter((_, index) => index !== slotIndex),
            }
          : item,
      ),
    )
  }

  const handleDeleteDay = (date: Date) => {
    setSelectedDays(prev =>
      prev.filter(item => item.date.toDateString() !== date.toDateString()),
    )
    toast.success(t("masterAvailability.dayRemoved"))
  }

  const handleSave = async () => {
    if (selectedDays.some(day => day.slots.length === 0)) {
      toast.error(t("masterAvailability.validation.emptySlots"))
      return
    }

    // Додаткова перевірка на унікальність годин
    const hasDuplicates = selectedDays.some(day => {
      const times = day.slots.map(slot => slot.startTime)
      return new Set(times).size !== times.length
    })

    if (hasDuplicates) {
      toast.error(t("masterAvailability.validation.duplicates"))
      return
    }

    setIsSaving(true)
    try {
      const availabilityData = selectedDays.map(({ date, slots }) => ({
        date: date.toISOString().split("T")[0],
        slots: sortSlots(slots),
      }))

      await createMasterAvailability({
        id: masterId,
        availability: availabilityData,
      }).unwrap()

      toast.success(t("masterAvailability.success.saved"))
    } catch (error: any) {
      console.error("Не вдалося зберегти доступність:", error)
      toast.error(t("masterAvailability.errors.saving"))
    } finally {
      setIsSaving(false)
    }
  }

  // Функція для фільтрації дат за місяць
  const filterDaysByMonth = (monthOffset: number) => {
    const targetDate = new Date(currentMonth)
    targetDate.setMonth(targetDate.getMonth() + monthOffset)
    setCurrentMonth(targetDate)
  }

  // Функція для отримання дат поточного місяця
  const getDaysForCurrentMonth = () => {
    return selectedDays.filter(day => {
      return (
        day.date.getMonth() === currentMonth.getMonth() &&
        day.date.getFullYear() === currentMonth.getFullYear()
      )
    })
  }

  return (
    <div className="container mx-auto p-3  bg-slate-200 dark:bg-gray-800 rounded-lg shadow-sm">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        toastClassName="rounded-lg shadow-sm"
        progressClassName="bg-blue-500"
      />

      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
        {t("masterAvailability.editTitle")}
      </h1>

      {isFetching ? (
        <div className="flex justify-center items-center h-40">
          <Spinner size="lg" className="text-blue-500" />
        </div>
      ) : (
        <div className="space-y-6">
          <div className="rounded-lg border border-gray-300 dark:border-gray-600">
            <I18nProvider locale={i18n.language}>
              <Calendar
                calendarWidth="100%"
                onChange={toggleDateSelection}
                isDateUnavailable={date =>
                  selectedDays.some(
                    ({ date: d }) =>
                      d.toDateString() ===
                      new Date(date as unknown as string).toDateString(),
                  )
                }
                defaultValue={today(getLocalTimeZone())}
                maxValue={today(getLocalTimeZone()).add({ months: 3 })}
                minValue={today(getLocalTimeZone())}
                prevButtonProps={{
                  onPress: () => filterDaysByMonth(-1),
                  variant: "bordered",
                  size: "lg",
                }}
                nextButtonProps={{
                  onPress: () => filterDaysByMonth(1),
                  variant: "bordered",
                  size: "lg",
                }}
                classNames={{
                  base: "border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm ",
                  content: "p-0 ",
                  title:
                    "text-lg font-semibold mb-2 text-gray-800 dark:text-gray-300 ",
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
                }}
              />
            </I18nProvider>
          </div>

          <div className="space-y-4">
            {getDaysForCurrentMonth().length > 0 ? (
              <div className="space-y-3">
                <Accordion variant="splitted" selectionMode="multiple">
                  {getDaysForCurrentMonth().map(({ date, slots }, index) => (
                    <AccordionItem
                      key={index}
                      textValue={date.toLocaleDateString(i18n.language, {
                        weekday: "short",
                        day: "numeric",
                        month: "long",
                      })}
                      title={
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {date.toLocaleDateString(i18n.language, {
                              weekday: "short",
                              day: "numeric",
                              month: "long",
                            })}
                          </span>
                          <div className="flex justify-between items-center gap-4">
                            <Tooltip
                              content={t("masterAvailability.deleteDate")}
                            >
                              <span
                                className="cursor-pointer p-2"
                                onClick={() => handleDeleteDay(date)}
                              >
                                <MdDeleteForever size={18} color="#EA4335" />
                              </span>
                            </Tooltip>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {slots.length}
                            </span>
                          </div>
                        </div>
                      }
                      className="px-4 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="p-4 space-y-4">
                        <div className="grid grid-cols-2  md:grid-cols-3 gap-3">
                          {slots.map((slot, slotIndex) => (
                            <div
                              key={slotIndex}
                              className="flex gap-2 items-center"
                            >
                              <Input
                                type="time"
                                value={slot.startTime}
                                onChange={e =>
                                  handleTimeChange(
                                    date,
                                    slotIndex,
                                    e.target.value,
                                  )
                                }
                                className="flex-1 max-w-[120px]"
                              />
                              <Button
                                size="sm"
                                isIconOnly
                                variant="light"
                                color="danger"
                                onPress={() =>
                                  handleDeleteSlot(date, slotIndex)
                                }
                                aria-label={t("masterAvailability.deleteHour")}
                              >
                                <MdDeleteForever size={18} />
                              </Button>
                            </div>
                          ))}
                        </div>

                        <Button
                          size="sm"
                          variant="flat"
                          onPress={() => handleAddSlot(date)}
                          startContent={<IoMdAdd size={18} />}
                        >
                          {t("masterAvailability.addHour")}
                        </Button>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : (
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
                {t("masterAvailability.noSelectedDays")}
              </div>
            )}
          </div>

          <Button
            color="primary"
            size="lg"
            fullWidth
            onPress={handleSave}
            disabled={isSaving || selectedDays.length === 0}
            className="mt-6 shadow-sm"
          >
            {isSaving ? (
              <span className="flex items-center gap-2">
                <Spinner size="sm" /> {t("masterAvailability.saving")}
              </span>
            ) : (
              t("masterAvailability.save")
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
