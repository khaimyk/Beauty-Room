import { useNavigate } from "react-router-dom"
import { Button } from "@heroui/react" // Assuming you're using Hero UI
import { GoXCircle } from "react-icons/go"
import { Paths } from "../../utils/paths"
import { useTranslation } from "react-i18next"

export const AccessDenied = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4 text-center">
      <GoXCircle className="text-6xl text-red-500 mx-auto mb-4" />
      <h1 className="text-3xl font-bold text-gray-800">
        {t("profile.accessDenied")}
      </h1>

      <div className="flex gap-4 mt-6">
        <Button
          variant="light"
          onPress={() => navigate(-1)}
          className="px-6 py-2"
        >
          {t("profile.back")}
        </Button>

        <Button
          variant="light"
          onPress={() => navigate(Paths.home)}
          className="px-6 py-2"
        >
          {t("profile.goHome")}
        </Button>
      </div>
    </div>
  )
}
