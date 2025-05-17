import { Button } from "@heroui/react"
import { Input } from "../../components/input"
import { useForm } from "react-hook-form"
import { FaTelegram } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { ErrorMessage } from "../../components/error-message"
import { useState, useEffect, useCallback } from "react"
import { PhoneNumberInput } from "../input/phone"
import { useTranslation } from "react-i18next"

interface Client {
  name: string
  nickName: string
  phoneNumber: string
}

interface ClientDataFormProps {
  onSubmit: (data: Client) => void
  isLoading: boolean
  error: string
  defaultValues: Client
}

const platformButtons = [
  {
    platform: "telegram" as const,
    icon: <FaTelegram size={30} color="#0088CC" />,
  },
  {
    platform: "email" as const,
    icon: <BiLogoGmail size={30} color="#EA4335" />,
  },
]

export const ClientDataForm = ({
  onSubmit,
  isLoading,
  error,
  defaultValues,
}: ClientDataFormProps) => {
  const { handleSubmit, control, setValue, watch } = useForm<Client>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues,
  })
  const { t } = useTranslation()
  const [selectedPlatform, setSelectedPlatform] = useState<
    "telegram" | "email"
  >()
  const [validationError, setValidationError] = useState("")
  const [isAuthorized, setIsAuthorized] = useState(!!defaultValues?.name)

  const handlePlatformChange = (platform: "telegram" | "email") => {
    setSelectedPlatform(platform)
    setValue("nickName", platform === "telegram" ? "" : "")
    setValidationError("")
  }

  const validateNickName = useCallback(
    (nickName: string) => {
      if (!nickName) return t("clientForm.requiredField")
      const processedNickName = nickName.startsWith("+")
        ? nickName.substring(1)
        : nickName

      const patterns = {
        email: {
          regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          error: t("clientForm.invalidEmail"),
        },
        telegram: {
          regex: /^(?:\d{10,15}|@[a-zA-Z0-9_]{5,32})$/,
          error: t("clientForm.invalidTelegram"),
        },
      }

      if (selectedPlatform) {
        if (!patterns[selectedPlatform].regex.test(processedNickName)) {
          return patterns[selectedPlatform].error
        }
      }
      return ""
    },
    [selectedPlatform, t],
  )

  const nickNameValue = watch("nickName")

  useEffect(() => {
    if (nickNameValue) {
      const error = validateNickName(nickNameValue)
      setValidationError(error)
    } else {
      setValidationError("")
    }
  }, [nickNameValue, selectedPlatform, validateNickName])

  useEffect(() => {
    if (defaultValues) {
      setIsAuthorized(true)
      setValue("name", defaultValues.name || "")
      setValue("phoneNumber", defaultValues.phoneNumber || "")

      // Обробляємо nickName - видаляємо + якщо він є
      const processedNickName = defaultValues.nickName?.startsWith("+")
        ? defaultValues.nickName.substring(1)
        : defaultValues.nickName || ""

      setValue("nickName", processedNickName)

      // Автовизначення платформи
      if (processedNickName) {
        if (processedNickName.startsWith("@")) {
          setSelectedPlatform("telegram")
        } else if (/@.*\./.test(processedNickName)) {
          setSelectedPlatform("email")
        } else if (/^\d+$/.test(processedNickName)) {
          setSelectedPlatform("telegram")
        }
      }
    }
  }, [defaultValues, setValue])

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      {isAuthorized && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <p className=" text-medium ">{t("clientForm.authorizedAs")}</p>
          <h2 className="font-bold text-lg">{defaultValues.name}</h2>

          <p className=" text-medium mt-1">{t("clientForm.phone")} </p>
          <span className="font-bold text-lg">
            {defaultValues.phoneNumber.replace(
              /(\+\d{2,3})(\d{3})(\d{3})(\d{3})/,
              "$1-$2-$3-$4",
            )}
          </span>

          {selectedPlatform && (
            <p className=" text-medium">
              {selectedPlatform === "telegram"
                ? t("clientForm.telegram")
                : t("clientForm.email")}
              <span className="font-bold text-lg pl-1">
                {defaultValues.nickName}
              </span>
            </p>
          )}
        </div>
      )}

      {!isAuthorized && (
        <>
          <Input
            name="name"
            label={t("clientForm.nameLabel")}
            control={control}
            required={t("clientForm.requiredField")}
            rules={{
              minLength: {
                value: 3,
                message: t("clientForm.minLength", { min: 3 }),
              },
            }}
            placeholder={t("clientForm.namePlaceholder")}
          />

          <PhoneNumberInput
            name="phoneNumber"
            control={control}
            label={t("clientForm.phoneLabel")}
            defaultValue={defaultValues?.phoneNumber || ""}
            rules={{
              required: t("clientForm.requiredField"),
              validate: (value: string) => {
                if (!/^\+\d{10,15}$/.test(value)) {
                  return t("clientForm.invalidPhone")
                }
                return true
              },
            }}
          />

          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              {t("clientForm.contactMethod")}
            </p>
            <div className="flex gap-3">
              {platformButtons.map(({ platform, icon }) => (
                <Button
                  key={platform}
                  size="lg"
                  isIconOnly
                  variant={selectedPlatform === platform ? "shadow" : "light"}
                  onPress={() => handlePlatformChange(platform)}
                  aria-label={platform}
                >
                  {icon}
                </Button>
              ))}
            </div>
          </div>

          {selectedPlatform && (
            <>
              <Input
                name="nickName"
                label={
                  selectedPlatform === "telegram"
                    ? t("clientForm.telegramLabel")
                    : t("clientForm.emailLabel")
                }
                control={control}
                required={t("clientForm.requiredField")}
                placeholder={
                  selectedPlatform === "telegram"
                    ? t("clientForm.telegramPlaceholder")
                    : t("clientForm.emailPlaceholder")
                }
              />
              {validationError && (
                <p className="text-red-500 text-sm">{validationError}</p>
              )}
            </>
          )}
        </>
      )}

      <ErrorMessage error={error} />

      <Button
        type="submit"
        color="primary"
        size="lg"
        isLoading={isLoading}
        fullWidth
        className="mt-4"
        isDisabled={!isAuthorized && !!validationError}
      >
        {isAuthorized
          ? t("clientForm.continue")
          : t("clientForm.confirmBooking")}
      </Button>
    </form>
  )
}
