import { useState, useEffect } from "react"
import { countryCodes } from "../../utils/options"

interface CountryCodeSelectorProps {
  value: string
  onChange: (code: string) => void
  id?: string
}

export const CountryCodeSelector = ({
  value,
  onChange,
  id = "country-code",
}: CountryCodeSelectorProps) => {
  const [selectedValue, setSelectedValue] = useState(
    countryCodes.some(c => c.code === value) ? value : "+380",
  )

  useEffect(() => {
    // Оновлюємо значення, якщо воно змінилося ззовні
    if (countryCodes.some(c => c.code === value)) {
      setSelectedValue(value)
    }
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value
    setSelectedValue(newValue)
    onChange(newValue)
  }

  return (
    <select
      id={id}
      name="countryCode"
      value={selectedValue}
      onChange={handleChange}
      autoComplete="tel-country-code"
      aria-label="Country code"
      className="h-16 px-2 rounded-medium border border-default-200 bg-default-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    >
      {countryCodes.map(country => (
        <option
          key={country.code}
          value={country.code}
          className="flex items-center gap-2"
        >
          {country.flag} {country.code}
        </option>
      ))}
    </select>
  )
}
