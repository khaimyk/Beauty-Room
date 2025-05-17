import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/react"
import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaTelegram } from "react-icons/fa"
import { useContext } from "react"
import { ThemeContext } from "../theme-provider"

export const Footer = () => {
  const { t } = useTranslation()
  const { theme } = useContext(ThemeContext)

  return (
    <footer className="w-full px-4 py-3 z-50 border-t border-gray-200 text-sm text-gray-600">
      <div className="max-w-[800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <Link to="/privacy" className="hover:underline">
          {t("footer.privacyPolicy")}
        </Link>
        <Popover placement="top" className={`${theme} text-foreground `}>
          <PopoverTrigger>
            <span className="text-md text-gray-500 cursor-pointer">
              © 2025 {t("footer.developer")}
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-40">
            <div className="px-8 py-4 flex flex-row gap-4">
              <a href="https://www.linkedin.com/in/valentyn-khaimyk-66207332b/ ">
                <FaLinkedin color=" #0A66C2" size={24} />
              </a>
              <a href="https://t.me/VKhaimyk ">
                <FaTelegram color=" #0088CC" size={24} />
              </a>
              <a href="mailto: haimyk1999@gmail.com">
                <MdEmail color=" #FF0000" size={24} />
              </a>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </footer>
  )
}
