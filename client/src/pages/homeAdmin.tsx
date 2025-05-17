import { Role } from "../components/admin/user/Role"
import { useTranslation } from "react-i18next"

export const HomeAdmin = () => {
  const { t } = useTranslation()
  return (
    <Role filterRoles={["MASTER", "ADMIN"]} title={t("home.adminAndMasters")} />
  )
}
