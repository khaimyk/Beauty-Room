import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react"
import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { ThemeContext } from "../theme-provider"

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const { theme } = useContext(ThemeContext)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
  const flag = [
    {
      code: "en",
      emoji: "🇬🇧",
    },
    {
      code: "pl",
      emoji: "🇵🇱",
    },
    {
      code: "uk",
      emoji: "🇺🇦",
    },
  ]
  return (
    <Dropdown className={`${theme} text-foreground `}>
      <DropdownTrigger>
        <span>{flag.find(item => item.code === i18n.language)?.emoji}</span>
      </DropdownTrigger>
      <DropdownMenu aria-label="Select Language">
        <DropdownItem key="en" onClick={() => changeLanguage("en")}>
          🇬🇧 English
        </DropdownItem>
        <DropdownItem key="pl" onClick={() => changeLanguage("pl")}>
          🇵🇱 Polish
        </DropdownItem>
        <DropdownItem key="uk" onClick={() => changeLanguage("uk")}>
          🇺🇦 Українська
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default LanguageSwitcher
