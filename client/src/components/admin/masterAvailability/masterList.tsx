import CalendarComponent from "./master"
import { useTranslation } from "react-i18next"

type Slot = { startTime: string }
type DaySchedule = { date: string; slots: Slot[] }
type MasterListProps = {
  masters: {
    id: string
    days: string | string[] | undefined
    schedule: DaySchedule[]
    user: { id: string; name: string | undefined } | undefined
  }[]
  excludeId?: string
  editable?: boolean
}

const MasterList = ({
  masters,
  excludeId,
  editable = false,
}: MasterListProps) => {
  const filteredMasters = masters.filter(
    master => master.user?.id !== excludeId,
  )

  const { t } = useTranslation()

  if (!filteredMasters || filteredMasters.length === 0) {
    return (
      <div className=" py-10  text-center bg-slate-200 dark:bg-gray-800">
        <h3 className="text-2xl text-center font-bold">
          {t("masterAvailability.noMasters")}
        </h3>
      </div>
    )
  }

  return (
    <>
      {filteredMasters.map(({ id, days, schedule, user }) => (
        <CalendarComponent
          key={id}
          id={user?.id}
          days={days}
          schedule={schedule || []}
          user={user?.name}
          editable={editable}
        />
      ))}
    </>
  )
}

export default MasterList
