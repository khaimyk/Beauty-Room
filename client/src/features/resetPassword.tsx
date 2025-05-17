// features/reset-password.tsx
import { useNavigate, useSearchParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import { Input } from "../components/input"
import { Button, Card, CardBody, CardHeader } from "@heroui/react"
import { useResetPasswordMutation } from "../app/services/userApi"
import { useState } from "react"
import { ErrorMessage } from "../components/error-message"
import { Paths } from "../utils/paths"
import { useTranslation } from "react-i18next"

export const ResetPasswordComponent: React.FC = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get("token")
  const [resetPassword, { isLoading }] = useResetPasswordMutation()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { handleSubmit, control, watch } = useForm<{
    password: string
    confirmPassword: string
  }>({
    defaultValues: { password: "", confirmPassword: "" },
  })

  const password = watch("password")

  const onSubmit = async (data: { password: string }) => {
    try {
      await resetPassword({
        token: token || "",
        password: data.password,
      }).unwrap()
      setSuccess(true)
    } catch (err) {
      setError(t("auth.invalidToken"))
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <Card className="w-full max-w-[500px] shadow-2xl rounded-2xl border border-gray-200">
        <CardHeader className="flex items-center justify-center py-6">
          <h2 className="text-2xl font-semibold text-center">
            {t("auth.resetTitle")}
          </h2>
        </CardHeader>
        <CardBody className="px-6 pb-6">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {success ? (
              <div className="text-center space-y-4">
                <p className="text-green-600 text-lg py-5">
                  ✅ {t("auth.passwordResetSuccess")}
                </p>
                <Button
                  color="primary"
                  onPress={() => navigate(Paths.auth)}
                  fullWidth
                >
                  {t("auth.login")}
                </Button>
              </div>
            ) : (
              <>
                <Input
                  control={control}
                  name="password"
                  label={t("auth.newPassword")}
                  type="password"
                  rules={{
                    required: t("auth.passwordRequired"),
                    minLength: {
                      value: 8,
                      message: t("auth.passwordMinLength"),
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                      message: t("auth.passwordPattern"),
                    },
                  }}
                />
                <Input
                  control={control}
                  name="confirmPassword"
                  label={t("auth.confirmPassword")}
                  type="password"
                  rules={{
                    validate: (value: string): string | true =>
                      value === password || t("auth.passwordsMatch"),
                  }}
                />
                <ErrorMessage error={error} />
                <Button
                  color="primary"
                  type="submit"
                  fullWidth
                  isLoading={isLoading}
                >
                  {t("auth.resetPassword")}
                </Button>
                <Button
                  variant="faded"
                  onPress={() => navigate(Paths.auth)}
                  fullWidth
                  className="hover:underline text-sm"
                >
                  {t("auth.returnToLogin")}
                </Button>
              </>
            )}
          </form>
        </CardBody>
      </Card>
    </div>
  )
}
