import { useState, useEffect, useCallback } from "react"
import { Controller } from "react-hook-form"
import { CountryCodeSelector } from "./countryCodeSelector"
import { Input } from "@heroui/react"
import { countryCodes } from "../../utils/options"
import { MdOutlinePhone } from "react-icons/md"
import { useTranslation } from "react-i18next"

interface PhoneNumberInputProps {
  control: any
  name: string
  label: string
  rules?: any
  id?: string
  defaultValue?: string
}

export const PhoneNumberInput = ({
  control,
  name,
  rules,
  id = name,
  defaultValue = "",
}: PhoneNumberInputProps) => {
  const [countryCode, setCountryCode] = useState("+380")
  const [displayValue, setDisplayValue] = useState("")
  const { t } = useTranslation()

  useEffect(() => {
    if (defaultValue) {
      // Визначаємо код країни зі збереженого номера
      const matchedCountry = countryCodes.find(country =>
        defaultValue.startsWith(country.code),
      )

      if (matchedCountry) {
        setCountryCode(matchedCountry.code)
        const numberPart = defaultValue.replace(matchedCountry.code, "")
        setDisplayValue(formatPhoneNumber(numberPart))
      }
    }
  }, [defaultValue])

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "")
    let formatted = ""
    for (let i = 0; i < digits.length; i++) {
      if (i === 3 || i === 6) {
        formatted += "-"
      }
      if (i < 9) {
        formatted += digits[i]
      }
    }
    return formatted
  }

  const handlePhoneChange = useCallback(
    (
      fieldOnChange: (value: string) => void,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => {
      const input = e.target.value
      const formatted = formatPhoneNumber(input)
      setDisplayValue(formatted)
      const digits = formatted.replace(/\D/g, "")
      const fullNumber = countryCode + digits
      fieldOnChange(fullNumber)
    },
    [countryCode],
  )

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-1">
          <label htmlFor={id} className="text-sm text-default-600"></label>
          <div className="flex items-center gap-2 ">
            <CountryCodeSelector
              value={countryCode}
              onChange={code => setCountryCode(code)}
              id={`${id}-country`}
            />
            <Input
              id={id}
              type="tel"
              label={t("clientForm.phone")}
              size="lg"
              placeholder="XXX-XXX-XXX"
              value={displayValue}
              onChange={e => handlePhoneChange(field.onChange, e)}
              className={`h-16   w-full ${fieldState.error ? "border-danger" : ""}`}
              aria-invalid={fieldState.invalid}
              aria-describedby={`${id}-error`}
              endContent={
                <MdOutlinePhone size={24} className="text-default-400" />
              }
            />
          </div>
          {fieldState.error && (
            <p id={`${id}-error`} className="text-xs text-danger">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  )
}
