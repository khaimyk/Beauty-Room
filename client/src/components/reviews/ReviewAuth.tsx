import { useState, useContext, useEffect } from "react"
import { Button } from "@heroui/react"
import { useLazySearchClientsQuery } from "../../app/services/clientApi"
import type { Client } from "../../app/types"
import { ReviewModal } from "../reviews"
import { ThemeContext } from "../theme-provider"
import { Input } from "../input"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "../error-message"
import { useTranslation } from "react-i18next"

interface Props {
  onClose: () => void
  userId: string
  branchId: string
  defaultValues?: Client
  isAuthenticated?: boolean
}

export const ClientSearch: React.FC<Props> = ({
  onClose,
  userId,
  branchId,
  defaultValues,
  isAuthenticated = false,
}) => {
  const [searchParams, setSearchParams] = useState<Partial<Client>>(
    defaultValues || {},
  )
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [triggerSearch, { data, isLoading }] = useLazySearchClientsQuery()
  const { theme } = useContext(ThemeContext)
  const [error, setError] = useState("")
  const [searchMessage, setSearchMessage] = useState("")
  const { t } = useTranslation()
  useEffect(() => {
    if (isAuthenticated && defaultValues) {
      setSelectedClient({
        ...defaultValues,
        id: defaultValues.id || "temp-id", // тимчасовий id для аутентифікованих клієнтів
      })
    }
  }, [isAuthenticated, defaultValues])

  useEffect(() => {
    if (data) {
      if (data.length > 0) {
        setSelectedClient(data[0])
        setSearchMessage("")
      } else {
        setSearchMessage(t("reviews.searchNotFound"))
        setSelectedClient(null)
        setSearchParams({})
      }
    }
  }, [data, t])

  const handleSearch = async () => {
    if (!searchParams.name || !searchParams.phoneNumber) {
      setError(t("reviews.searchError"))
      return
    }
    setError("")
    setSearchMessage("")
    try {
      await triggerSearch(searchParams).unwrap()
    } catch (error) {
      console.error("Search Error:", error)
      setError(t("reviews.searchError404"))
    }
  }

  const { control } = useForm<Client>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: defaultValues || {
      name: "",
      phoneNumber: "",
    },
  })

  if (selectedClient) {
    return (
      <ReviewModal
        client={selectedClient}
        userId={userId}
        branchId={branchId}
        onClose={() => {
          setSelectedClient(null)
          onClose()
        }}
        isAuthenticated={isAuthenticated}
      />
    )
  }

  return (
    <div
      className={`flex flex-col items-center space-y-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-xl shadow-md w-full max-w-md mx-auto ${theme}`}
    >
      <h2 className="text-lg font-semibold">
        {isAuthenticated
          ? t("reviews.authenticatedAs")
          : t("reviews.authTitle")}
      </h2>
      <p className="text-center">
        {isAuthenticated ? t("reviews.reviewPrompt") : t("reviews.authPrompt")}
      </p>

      <Input
        control={control}
        name="name"
        label={t("reviews.userName")}
        required={t("reviews.requiredField")}
        type="text"
        placeholder={t("reviews.userNamePlaceholder")}
        onChange={e =>
          setSearchParams({ ...searchParams, name: e.target.value })
        }
        value={searchParams.name || ""}
        disabled={isAuthenticated}
        className="w-full border-slate-950"
      />

      <Input
        control={control}
        name="phoneNumber"
        label={t("reviews.phone")}
        required={t("reviews.requiredField")}
        type="tel"
        placeholder={t("reviews.phonePlaceholder")}
        onChange={e =>
          setSearchParams({
            ...searchParams,
            phoneNumber: e.target.value.replace(/^\+/, ""),
          })
        }
        value={searchParams.phoneNumber || ""}
        disabled={isAuthenticated}
        className="w-full"
      />

      <ErrorMessage error={error} />
      {searchMessage && (
        <p className="text-red-500 text-sm text-center">{searchMessage}</p>
      )}

      {!isAuthenticated && (
        <Button
          color="primary"
          onPress={handleSearch}
          disabled={
            !searchParams.name || !searchParams.phoneNumber || isLoading
          }
          className={`mt-2 w-full ${
            !searchParams.name || !searchParams.phoneNumber
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          {isLoading ? t("reviews.loading") : t("reviews.searchSubmit")}
        </Button>
      )}
    </div>
  )
}
