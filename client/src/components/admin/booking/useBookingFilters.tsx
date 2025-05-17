import { useMemo, useState } from "react"
import type { Booking } from "../../../app/types"

export const useBookingFilters = (bookings: Booking[], currentTime: Date) => {
  const [selectedMaster, setSelectedMaster] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [showPastBookings, setShowPastBookings] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)

  const masters = useMemo(() => {
    const uniqueMasters = new Set(
      bookings?.map(b => b.user?.name).filter(Boolean),
    )
    return Array.from(uniqueMasters)
  }, [bookings])

  const filteredByMaster = useMemo(() => {
    if (!selectedMaster) return bookings
    return bookings.filter(booking => booking.user?.name === selectedMaster)
  }, [bookings, selectedMaster])

  const filteredByDate = useMemo(() => {
    if (!selectedDate) return filteredByMaster
    return filteredByMaster.filter(booking => {
      const bookingDate = new Date(booking.date).toISOString().split("T")[0]
      return bookingDate === selectedDate.toISOString().split("T")[0]
    })
  }, [filteredByMaster, selectedDate])

  const filteredByStatus = useMemo(() => {
    if (!selectedStatus || selectedStatus === "ALL") return filteredByDate
    return filteredByDate.filter(booking => booking.status === selectedStatus)
  }, [filteredByDate, selectedStatus])

  const parseBookingDateTime = (booking: Booking) => {
    const [hours, minutes] = (booking.notes ?? "0:0").split(":").map(Number)
    const date = new Date(booking.date)
    date.setHours(hours, minutes, 0, 0)
    return date
  }

  const { upcomingBookings, pastBookings } = useMemo(() => {
    const upcoming =
      filteredByStatus
        ?.filter(booking => parseBookingDateTime(booking) > currentTime)
        .sort((a, b) => {
          if (a.status === "PENDING" && b.status !== "PENDING") return -1
          if (a.status !== "PENDING" && b.status === "PENDING") return 1
          return (
            parseBookingDateTime(a).getTime() -
            parseBookingDateTime(b).getTime()
          )
        }) || []

    const past =
      filteredByStatus
        ?.filter(booking => parseBookingDateTime(booking) <= currentTime)
        .sort(
          (a, b) =>
            parseBookingDateTime(b).getTime() -
            parseBookingDateTime(a).getTime(),
        ) || []

    return { upcomingBookings: upcoming, pastBookings: past }
  }, [filteredByStatus, currentTime])

  const displayedBookings = showPastBookings ? pastBookings : upcomingBookings

  return {
    masters,
    selectedMaster,
    setSelectedMaster,
    selectedDate,
    setSelectedDate,
    selectedStatus,
    setSelectedStatus,
    showPastBookings,
    setShowPastBookings,
    currentPage,
    setCurrentPage,
    upcomingBookings,
    pastBookings,
    displayedBookings,
  }
}
