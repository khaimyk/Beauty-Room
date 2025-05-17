import { useSearchParams } from "react-router"
import { useAppSelector } from "../../../app/hooks"
import { useGetAllMasterAvailabilityQuery } from "../../../app/services/masterAvailabality"
import { selectCurrent } from "../../../features/useSlice"
import { AccessDenied } from "../../error-message/accessDenied"
import MasterList from "./masterList"
import { Spinner } from "@heroui/react"
import CalendarComponent from "./master"
import { useTranslation } from "react-i18next"

interface Master {
  id: string
  availability:
    | string
    | { date: string; slots: { startTime: string; endTime: string }[] }[]
  user?: {
    id: string
    name: string
  }
}
type Slot = { startTime: string }
type DaySchedule = { date: string; slots: Slot[] }
interface FormattedMaster {
  id: string
  days: string | string[] | undefined
  schedule: DaySchedule[]
  user:
    | {
        id: string
        name: string | undefined
      }
    | undefined
}

const formatMasters = (masters: Master[]): FormattedMaster[] => {
  return masters.map(master => ({
    id: master.id,
    days: Array.isArray(master.availability)
      ? master.availability.map(slot =>
          typeof slot === "string" ? slot : slot.date,
        )
      : [],
    schedule:
      typeof master.availability?.[0] !== "string"
        ? (master.availability as DaySchedule[])
        : [],
    user: master.user
      ? { id: master.user.id || "", name: master.user.name || "" }
      : undefined,
  }))
}

export const MasterAvailability = () => {
  const [searchParams] = useSearchParams()
  const branchId = searchParams.get("branchId")
  const { data, isLoading } = useGetAllMasterAvailabilityQuery(branchId || "")
  const current = useAppSelector(selectCurrent)
  const { t } = useTranslation()
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Spinner size="lg" className="text-blue-500" />
      </div>
    )
  }

  if (!current) {
    return <AccessDenied />
  }

  const formattedMasters = data ? formatMasters(data) : []

  switch (current.role) {
    case "SUPERADMIN":
      return (
        <div className="container mx-auto p-4">
          <h3 className="text-xl font-bold  mb-4">
            {t("masterAvailability.title")}
          </h3>
          <MasterList
            masters={formattedMasters}
            excludeId={current.id}
            editable={true}
          />
        </div>
      )
    case "ADMIN":
      return (
        <div className="container mx-auto p-4">
          <h3 className="text-xl font-bold  mb-4">
            {t("masterAvailability.title")}
          </h3>
          <MasterList
            masters={formattedMasters}
            excludeId={current.id}
            editable={true}
          />
        </div>
      )
    case "MASTER": {
      const masterData = formattedMasters.find(
        master => master.id === current.id,
      )

      if (!masterData) {
        return (
          <h3 className="text-2xl text-center py-10 font-bold">
            {t("masterAvailability.errors.saving")}
          </h3>
        )
      }
      return (
        <div className="container mx-auto p-4">
          <h3 className="text-xl font-bold mb-4">
            {t("masterAvailability.yourCalendar")}
          </h3>
          <CalendarComponent
            id={current.id}
            days={formattedMasters[0].days}
            schedule={formattedMasters[0].schedule}
            user={formattedMasters[0].user?.name}
          />
        </div>
      )
    }
    default:
      return (
        <h3 className="text-2xl text-center py-10 font-bold">
          {t("masterAvailability.accessDenied")}
        </h3>
      )
  }
}
