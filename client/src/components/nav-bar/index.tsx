import { NavButton } from "../nav-button"
import {
  FaBookOpen,
  FaUserLock,
  FaCalendarAlt,
  FaListAlt,
  FaUsersCog,
} from "react-icons/fa"
import { Paths } from "../../utils/paths"
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react"
import type { RoleType } from "../../app/types"
import { FaUserDoctor } from "react-icons/fa6"
import { useContext } from "react"
import { ThemeContext } from "../theme-provider"
import { useTranslation } from "react-i18next"

interface NavBarProps {
  userRole?: RoleType
  branchId?: string
  isMenuOpen?: boolean
  setIsMenuOpen?: (isOpen: boolean) => void
}

export const NavBar = ({
  userRole,
  branchId,
  isMenuOpen,
  setIsMenuOpen,
}: NavBarProps) => {
  const { t } = useTranslation()
  const getPathWithBranch = (path: string) => {
    if (userRole === "SUPERADMIN" || !branchId) return path
    return `${path}?branchId=${branchId}`
  }
  const { theme } = useContext(ThemeContext)
  const baseNavItems = [
    {
      path: getPathWithBranch(Paths.AdminAllBookings),
      icon: <FaCalendarAlt className="shrink-0 text-lg" />,
      label: t("navBar.bookings"),
      roles: ["SUPERADMIN", "ADMIN", "MASTER"],
    },
  ]

  const roleSpecificNavItems = [
    {
      path: getPathWithBranch(Paths.AdminUser),
      icon: <FaUserDoctor className="shrink-0 text-lg" />,
      label: t("navBar.employees"),
      roles: ["SUPERADMIN", "ADMIN"],
    },
    {
      path: getPathWithBranch(Paths.AdminClient),
      icon: <FaUserLock className="shrink-0 text-lg" />,
      label: t("navBar.clients"),
      roles: ["SUPERADMIN", "ADMIN"],
    },
    {
      path: getPathWithBranch(Paths.AdminMasterAvailability),
      icon: <FaUsersCog className="shrink-0 text-lg" />,
      label: t("navBar.schedule"),
      roles: ["SUPERADMIN", "ADMIN", "MASTER"],
    },
    {
      path: getPathWithBranch(Paths.AdminCategory),
      icon: <FaListAlt className="shrink-0 text-lg" />,
      label: t("navBar.categories"),
      roles: ["SUPERADMIN", "ADMIN", "MASTER"],
    },
    {
      path: getPathWithBranch(Paths.AdminService),
      icon: <FaBookOpen className="shrink-0 text-lg" />,
      label: t("navBar.services"),
      roles: ["SUPERADMIN", "ADMIN", "MASTER"],
    },
    {
      path: Paths.AdminBranch,
      icon: <FaBookOpen className="shrink-0 text-lg" />,
      label: t("navBar.branches"),
      roles: ["SUPERADMIN"],
    },
  ]

  const filteredNavItems = [...baseNavItems, ...roleSpecificNavItems]
    .filter(item => item.roles.includes(userRole || "CLIENT"))
    .map(({ roles, ...rest }) => rest)

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`transition-all duration-300 ${
        isMenuOpen
          ? "bg-transparent p-0 shadow-none h-full"
          : "bg-stone-50 dark:bg-gray-800 p-1 lg:p-4 h-full"
      }`}
      maxWidth="full"
      isBlurred={false}
    >
      {/* Desktop */}
      <NavbarContent
        className="hidden md:flex w-full  flex-col gap-1"
        justify="end"
      >
        {filteredNavItems.map((item, index) => (
          <NavbarItem key={index} className="w-full">
            <NavButton
              href={item.path}
              icon={item.icon}
              className="w-full  px-4 py-3 text-lg rounded-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-700"
              activeClass="bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-white font-semibold"
            >
              {item.label}
            </NavButton>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile */}
      <NavbarMenu
        className={`transition-all duration-300  ${theme} text-foreground`}
      >
        {filteredNavItems.map((item, index) => (
          <NavbarMenuItem key={index} className="dark:bg-gray-800 bg-slate-100">
            <div
              className="w-full"
              onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
            >
              <NavButton
                href={item.path}
                icon={item.icon}
                className="w-full px-4 py-3 text-lg rounded-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-700"
                activeClass="bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-white font-semibold"
              >
                {item.label}
              </NavButton>
            </div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
