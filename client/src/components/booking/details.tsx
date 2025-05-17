import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@heroui/react"
import { BASE_URL } from "../../constants"
import { FaRegCalendarCheck } from "react-icons/fa"
import { CiLocationOn } from "react-icons/ci"
import { useAppSelector } from "../../app/hooks"
import { InfoItem } from "../branch"
import { useTranslation } from "react-i18next"
import { currencySymbols } from "../../utils/options"

type Props = {
  getClientById: any
  totalDuration: number
  selectedServices: any[]
  selectedSlot: { startTime: string }
  endTime: string
  selectedDate: Date | null
  totalCost: number
}

export const BookingDetails = ({
  getClientById,
  totalDuration,
  selectedServices,
  selectedSlot,
  endTime,
  selectedDate,
  totalCost,
}: Props) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const { selectedBranch } = useAppSelector(state => state.branch)
  const { t, i18n } = useTranslation()
  const branch = selectedBranch
  if (!getClientById) return <p>{t("bookingDetails.loading")}</p>

  return (
    <Card>
      <CardHeader className="flex flex-col items-start">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-2">
          {branch?.name}
        </h1>

        {branch?.address && (
          <InfoItem
            icon={<CiLocationOn size={22} />}
            title=""
            content={branch.city + ", " + branch.address}
          />
        )}
      </CardHeader>

      <Divider />
      <CardBody>
        <h2 className="text-xl font-semibold mb-2">
          {t("bookingDetails.bookingDetails")}
        </h2>
        <div className="flex items-center mb-4">
          <Avatar
            size="md"
            src={
              getClientById?.image ? `${BASE_URL}${getClientById?.image}` : " "
            }
            classNames={{
              base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
              icon: "text-black/80",
              img: "object-top object-cover",
            }}
          />
          <p className="font-semibold pl-1"> {getClientById?.name}</p>
        </div>

        <div className="text-gray-600 text-lg mb-2 flex gap-4 items-center">
          <div className="rounded "> {<FaRegCalendarCheck size={20} />}</div>

          <p>
            {selectedDate?.toLocaleDateString(i18n.language, options)} <br />
            {selectedSlot.startTime} - {endTime}
          </p>
        </div>
        {/* Services */}
        <div>
          <Divider />
          <div className="flex gap-1 my-2">
            <h3 className="font-semibold ">{t("bookingDetails.services")}</h3>
            <p>
              {t("bookingDetails.durationMinutes", { duration: totalDuration })}
            </p>
          </div>

          {selectedServices.map(service => (
            <div
              key={service.id}
              className="flex items-center justify-between mb-2"
            >
              <p>
                <span>{service.name}</span> <br />
                <span className="text-gray-600">
                  {t("bookingDetails.durationMinutes", {
                    duration: service.duration,
                  })}
                </span>
              </p>
              <span className="ml-2 text-gray-600">
                {service.price}{" "}
                {currencySymbols[
                  service.currency as keyof typeof currencySymbols
                ] || ""}
              </span>
            </div>
          ))}
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-between">
        <span className="font-bold">{t("bookingDetails.total")}</span>
        <span className="font-bold">
          {totalCost}{" "}
          {currencySymbols[
            selectedServices[0]?.currency as keyof typeof currencySymbols
          ] || ""}
        </span>
      </CardFooter>
    </Card>
  )
}
