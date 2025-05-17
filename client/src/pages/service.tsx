import { Accordion, AccordionItem, Button, Checkbox } from "@heroui/react"
import { useGetAllServisesQuery } from "../app/services/serviceApi"
import { useNavigate, useSearchParams } from "react-router"
import { useEffect, useState } from "react"
import { Paths } from "../utils/paths"
import type { Service } from "../app/types"
import { useTranslation } from "react-i18next"
import { currencySymbols } from "../utils/options"

export const ServiceBooking = () => {
  const { data, isLoading, error } = useGetAllServisesQuery(undefined, {})
  const [searchParams] = useSearchParams()
  const [userId, setUserId] = useState<string | null>(null)
  const [selectedServices, setSelectedServices] = useState<
    {
      id: string
      name: string
      price: number
      currency: string
      duration: string
      masterId?: string
      masterName?: string
    }[]
  >([])
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    const id = searchParams.get("userId")
    if (id) setUserId(id)
  }, [searchParams])

  if (isLoading) return <p>{t("services.loading")}</p>
  if (error) return <p>{t("services.error")}</p>
  if (!data || data.length === 0) return <p>{t("services.notFound")}</p>

  if (!userId) return <p>{t("services.userNotSelected")}</p>

  const filteredServices = data.filter(service => {
    const isServiceOwner = service.userId === userId
    const isAssignedMaster = service.masters?.some(m => m.masterId === userId)
    return isServiceOwner || isAssignedMaster
  })

  if (filteredServices.length === 0)
    return <p>{t("services.noServicesForUser")}</p>

  const groupedServices = new Map()
  filteredServices.forEach(service => {
    if (!groupedServices.has(service.category.name)) {
      groupedServices.set(service.category.name, [])
    }
    groupedServices.get(service.category.name).push(service)
  })

  const formatDuration = (totalMinutes: number) => {
    if (totalMinutes < 1) return ""

    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60

    let timeString = t("services.duration") + " "

    if (hours > 0) {
      timeString += `${hours} ${t("services.hours")}`
      if (minutes > 0) {
        timeString += ` ${minutes} ${t("services.minutes")}`
      }
    } else {
      timeString += `${minutes} ${t("services.minutes")}`
    }

    return timeString
  }

  const toggleServiceSelection = (service: {
    id: string
    name: string
    price: number
    currency: string
    duration: string
    masterId?: string
    masterName?: string
    masters?: { master?: { id: string; name: string } }[]
  }) => {
    setSelectedServices(prevSelected => {
      const alreadySelected = prevSelected.find(item => item.id === service.id)
      if (alreadySelected) {
        return prevSelected.filter(item => item.id !== service.id)
      } else {
        const master = service.masters?.[0]?.master
        return [
          ...prevSelected,
          {
            id: service.id,
            name: service.name,
            price: service.price,
            currency: service.currency,
            duration: String(service.duration),
            masterId: master?.id,
            masterName: master?.name,
          },
        ]
      }
    })
  }

  const totalCost = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0,
  )
  const totalDuration = selectedServices.reduce(
    (sum, service) => sum + Number(service.duration),
    0,
  )

  const handleProceedToBooking = () => {
    if (!selectedServices.length) return alert(t("services.selectAtLeastOne"))
    navigate(Paths.booking, {
      state: {
        userId,
        totalDuration,
        selectedServices,
        totalCost,
      },
    })
  }

  return (
    <div className="p-4">
      {[...groupedServices.entries()].map(([categoryName, services]) => (
        <Accordion key={categoryName} className="mb-4 ">
          <AccordionItem
            title={
              <span className="font-bold text-xl uppercase">
                {categoryName}
              </span>
            }
            textValue={t("services.showServices")}
          >
            {services.map((service: Service) => {
              const {
                name,
                id,
                price,
                currency,
                duration,
                description,
                masters,
              } = service
              const master = masters?.[0]?.master

              return (
                <div
                  key={id}
                  className={`p-4 my-2 rounded-lg border-medium border-default flex hover:bg-gray-50 transition-colors justify-between items-center cursor-pointer dark:bg-gray-800 ${
                    selectedServices.some(s => s.id === service.id)
                      ? "bg-blue-100"
                      : ""
                  }`}
                  onClick={() =>
                    toggleServiceSelection({
                      id,
                      name,
                      price,
                      currency: currency,
                      duration: String(duration),
                      masterId: master?.id,
                      masterName: master?.name,
                    })
                  }
                >
                  <div className="dark:text-white">
                    <h3 className="text-lg font-semibold uppercase">{name}</h3>
                    <p>
                      {t("services.price")} {price}{" "}
                      {currencySymbols[
                        currency as keyof typeof currencySymbols
                      ] || ""}
                    </p>
                    <p>
                      {t("services.duration")} {duration}{" "}
                      {t("services.minutes")}
                    </p>

                    <p>
                      {t("services.description")} {description}
                    </p>
                  </div>
                  <Checkbox
                    isSelected={selectedServices.some(s => s.id === id)}
                    isReadOnly
                    isDisabled
                    radius="md"
                    size="lg"
                  />
                </div>
              )
            })}
          </AccordionItem>
        </Accordion>
      ))}

      {selectedServices.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 max-w-[800px] bg-gray-300 dark:bg-gray-600 border-default shadow-lg p-4 mx-auto mb-4 rounded-lg">
          <p className="text-sm font-semibold mb-2 flex justify-between">
            {t("services.servicesSelected", {
              count: selectedServices.length,
            })}{" "}
            {selectedServices.length > 1
              ? t("services.services")
              : t("services.service")}
            {selectedServices.length > 5 ? t("services.service5") : ""}
            <span className="pl-2 font-normal">
              {formatDuration(totalDuration)}
            </span>
            <span className="ml-auto">
              {t("bookingDetails.total")}
              {totalCost}{" "}
              {currencySymbols[
                selectedServices[0].currency as keyof typeof currencySymbols
              ] || ""}
            </span>
          </p>
          <Button
            className="w-full bg-blue-600 text-white"
            onPress={handleProceedToBooking}
          >
            {t("services.continue")}
          </Button>
        </div>
      )}
    </div>
  )
}
