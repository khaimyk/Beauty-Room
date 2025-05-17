import { useContext, useState } from "react"
import { ThemeContext } from "../theme-provider"
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Tooltip,
} from "@heroui/react"
import { FaRegMoon, FaUserLock } from "react-icons/fa"
import { LuSunMedium } from "react-icons/lu"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { logout, selectIsAuthenticated } from "../../features/useSlice"
import { Link, useNavigate } from "react-router"
import { Paths } from "../../utils/paths"
import { CiLogin, CiLogout } from "react-icons/ci"
import { NavBar } from "../nav-bar"
import LanguageSwitcher from "../LanguageSwitcher"
import { useTranslation } from "react-i18next"

export const Header = ({
  userRole,
  isAdminPanel = false,
}: {
  userRole?: string
  isAdminPanel?: boolean
}) => {
  const { selectedBranch } = useAppSelector(state => state.branch)
  const { branch: userBranch } = useAppSelector(state => state.auth.user) ?? {}

  const { theme, toggleTheme } = useContext(ThemeContext)
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()
  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem("token")
    navigate(Paths.auth)
  }

  const resolvedBranchName =
    userBranch?.name || selectedBranch?.name || t("header.home")
  const resolvedBranchPath = userBranch?.id
    ? `${Paths.branch}/${userBranch.id}`
    : selectedBranch?.id
      ? `${Paths.branch}/${selectedBranch.id}`
      : Paths.branch

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="max-w-[800px] mx-auto "
    >
      <NavbarContent className="md:hidden" justify="start">
        {isAdminPanel && (
          <NavbarMenuToggle
            aria-label={
              isMenuOpen ? t("header.closeMenu") : t("header.openMenu")
            }
          />
        )}
        <NavbarBrand>
          <div className="font-bold text-inherit">
            <Link to={resolvedBranchPath} className="flex items-center gap-2">
              {resolvedBranchName}
            </Link>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu className=" hidden md:flex">
        <NavBar
          userRole={
            userRole as "CLIENT" | "MASTER" | "ADMIN" | "SUPERADMIN" | undefined
          }
          branchId={selectedBranch?.id}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </NavbarMenu>

      <NavbarBrand className="hidden md:flex">
        <div className="font-bold text-inherit">
          <Link
            to={
              selectedBranch?.id
                ? `${Paths.branch}/${selectedBranch.id}`
                : Paths.branch
            }
            className="flex items-center gap-2"
          >
            {selectedBranch?.name ? selectedBranch?.name : t("header.home")}
          </Link>
        </div>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className="lg:flex text-3xl cursor-pointer">
          {isAuthenticated ? (
            <Link to={Paths.user}>
              <FaUserLock />
            </Link>
          ) : null}
        </NavbarItem>

        <NavbarItem className="lg:flex text-3xl cursor-pointer">
          <LanguageSwitcher />
        </NavbarItem>

        <NavbarItem
          className="lg:flex text-3xl cursor-pointer"
          onClick={() => toggleTheme()}
        >
          {theme === "light" ? <FaRegMoon /> : <LuSunMedium />}
        </NavbarItem>

        <NavbarItem>
          {isAuthenticated ? (
            <Button
              color="default"
              variant="flat"
              className="gap-2"
              onPress={handleLogout}
            >
              <CiLogout />
              <Tooltip className="sm:hidden" content={t("header.logout")}>
                <span className="hidden sm:block ">{t("header.logout")}</span>
              </Tooltip>
            </Button>
          ) : (
            <Button
              color="default"
              variant="flat"
              className="gap-2"
              onPress={() => navigate(Paths.auth)}
            >
              <CiLogin />
              <Tooltip className="sm:hidden" content={t("header.login")}>
                <span className="hidden sm:block ">{t("header.login")}</span>
              </Tooltip>
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
