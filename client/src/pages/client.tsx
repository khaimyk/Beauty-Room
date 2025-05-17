import { useLocation, useNavigate } from "react-router"
import { useGetUserByIdQuery } from "../app/services/userApi"
import { BookingDetails } from "../components/booking/details"
import {
  useCreateClientMutation,
  useLazySearchClientsQuery,
} from "../app/services/clientApi"
import { useCreateBookingMutation } from "../app/services/bookingApi"
import { hasErrorField } from "../utils/has-error-field"
import { ClientDataForm } from "../components/client/form"
import { useContext, useEffect, useState } from "react"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Spinner,
} from "@heroui/react"
import { Paths } from "../utils/paths"
import { ThemeContext } from "../components/theme-provider"
import { useAppSelector } from "../app/hooks"
import { selectCurrent } from "../features/useSlice"
import { useTranslation } from "react-i18next"

interface PropState {
  userId: string
  totalDuration: number
  selectedServices: {
    id: string
    name: string
    price: number
    duration: string
  }[]
  selectedSlot: { startTime: string }
  endTime: string
  selectedDate: Date | null
  totalCost: number
  bookingNotes: string
}

export const ClientForm = () => {
  const location = useLocation()
  const current = useAppSelector(selectCurrent)
  const { t } = useTranslation()
  const { selectedBranch } = useAppSelector(state => state.branch)
  const navigate = useNavigate()
  const {
    userId,
    totalDuration,
    selectedServices,
    selectedSlot,
    endTime,
    selectedDate,
    totalCost,
    bookingNotes,
  } = location.state as PropState

  const { data: masterData, isLoading: isMasterLoading } = useGetUserByIdQuery(
    userId ?? "",
  )
  const [createBooking] = useCreateBookingMutation()
  const [createClient, { isLoading: isCreatingClient }] =
    useCreateClientMutation()
  const [triggerSearch, { isLoading: isSearching }] =
    useLazySearchClientsQuery()
  const [error, setError] = useState("")
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [clientNickname, setClientNickname] = useState("")
  const { theme } = useContext(ThemeContext)
  const [clientData, setClientData] = useState<any>(null)

  useEffect(() => {
    const fetchClientData = async () => {
      if (current?.id) {
        try {
          const result = await triggerSearch({ userId: current.id }).unwrap()
          if (result.length > 0) {
            setClientData(result[0])
          }
        } catch (err) {
          console.error("Помилка при пошуку клієнта", err)
        }
      }
    }
    fetchClientData()
  }, [current, triggerSearch])
  const handleSubmit = async (clientData: any) => {
    try {
      if (!clientData.name || !clientData.phoneNumber) {
        setError(t("clientForm.requiredFields"))
        return
      }
      setError("")

      const searchResult = await triggerSearch({
        name: clientData.name,
        phoneNumber: clientData.phoneNumber,
        userId: current?.id || "",
      }).unwrap()

      let clientId = searchResult?.length > 0 ? searchResult[0].id : null

      if (!clientId) {
        const createdClient = await createClient(clientData).unwrap()
        clientId = createdClient?.id
      }

      if (!clientId) throw new Error(t("clientForm.createClientError"))
      if (!selectedDate) throw new Error(t("clientForm.selectDateError"))

      const bookingData = {
        clientId,
        userId,
        serviceId: selectedServices.map(service => service.id),
        date: selectedDate,
        time: totalDuration.toString(),
        notes: bookingNotes,
      }

      await createBooking(bookingData).unwrap()
      setClientNickname(clientData.nickName || "")
      onOpen()
    } catch (error) {
      setError(
        hasErrorField(error) ? error.data.error : t("clientForm.unknownError"),
      )
    }
  }

  const handleOpenTelegram = () => {
    window.open(
      `https://t.me/BookingBR_bot?start=from_website`,
      "_blank",
      "noopener,noreferrer",
    )
    navigate(Paths.branch + "/" + selectedBranch?.id)
  }

  const handleGoToHome = () => navigate(Paths.branch + "/" + selectedBranch?.id)

  const isLoading = isMasterLoading || isCreatingClient || isSearching

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          {t("clientForm.title")}
        </h1>

        <BookingDetails
          getClientById={masterData}
          totalDuration={totalDuration}
          selectedServices={selectedServices}
          selectedSlot={selectedSlot}
          endTime={endTime}
          selectedDate={selectedDate}
          totalCost={totalCost}
        />

        <Card className="w-full  shadow-md">
          <CardHeader className="px-6 pt-6 pb-2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {t("clientForm.yourData")}
            </h2>
          </CardHeader>
          <CardBody className="px-6 pb-6">
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Spinner size="lg" color="primary" />
              </div>
            ) : (
              <ClientDataForm
                onSubmit={handleSubmit}
                isLoading={isLoading}
                error={error}
                defaultValues={clientData}
              />
            )}
          </CardBody>
        </Card>

        <Modal
          isOpen={isOpen}
          isDismissable={false}
          onOpenChange={onOpenChange}
          backdrop="blur"
          classNames={{
            base: "max-w-md",
            closeButton: "hidden",
          }}
          className={`${theme} text-foreground`}
          placement="center"
        >
          <ModalContent>
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl font-bold">
                {t("booking.successTitle")}
              </ModalHeader>
              <ModalBody className="pb-4">
                <p className="text-gray-700 dark:text-gray-300">
                  {t("booking.successMessage")}
                </p>

                {clientNickname?.includes("@") &&
                !clientNickname?.startsWith("@") ? (
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">
                      {t("booking.emailConfirmation")}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      {t("booking.thanks")}
                    </p>
                  </div>
                ) : (
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      {t("booking.telegramConfirmation")}
                    </p>

                    <Button
                      color="primary"
                      className="w-full font-medium"
                      onPress={handleOpenTelegram}
                    >
                      {t("booking.goToTelegram")}
                    </Button>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      {t("booking.thanks")}
                    </p>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  variant="flat"
                  className="w-full font-medium"
                  onPress={handleGoToHome}
                >
                  {t("booking.goHome")}
                </Button>
              </ModalFooter>
            </>
          </ModalContent>
        </Modal>
      </div>
    </div>
  )
}
