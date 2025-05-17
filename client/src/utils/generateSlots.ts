interface Slot {
  startTime: string
  endTime: string
}

export const generateSlots = (
  workingHours: { start: string; end: string },
  intervalMinutes: number,
): Slot[] => {
  const slots: Slot[] = []
  const start = new Date(`1970-01-01T${workingHours.start}:00`)
  const end = new Date(`1970-01-01T${workingHours.end}:00`)

  let current = new Date(start)

  while (current < end) {
    const slotStart = new Date(current)
    const slotEnd = new Date(current)
    slotEnd.setMinutes(slotEnd.getMinutes() + intervalMinutes)

    if (slotEnd <= end) {
      slots.push({
        startTime: slotStart.toTimeString().slice(0, 5),
        endTime: slotEnd.toTimeString().slice(0, 5),
      })
    }

    current.setMinutes(current.getMinutes() + intervalMinutes)
  }

  return slots
}
