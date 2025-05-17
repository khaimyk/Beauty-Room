// features/forgot-password.tsx
import { useForm } from "react-hook-form"
import { Input } from "../components/input"
import { Button, Link } from "@heroui/react"
import { useState } from "react"
import { ErrorMessage } from "../components/error-message"
import { hasErrorField } from "../utils/has-error-field"
import { useForgotPasswordMutation } from "../app/services/userApi"
import { useTranslation } from "react-i18next"

type Props = {
  setSelected: (value: string) => void
}

export const ForgotPassword: React.FC<Props> = ({ setSelected }) => {
  const { handleSubmit, control } = useForm<{ email: string }>({
    defaultValues: { email: "" },
  })

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const { t } = useTranslation()
  const onSubmit = async (data: { email: string }) => {
    try {
      setError("")
      await forgotPassword(data).unwrap()
      setSuccess(true)
    } catch (err: any) {
      if (hasErrorField(err)) {
        setError(err.data?.error ?? t("auth.serverError"))
      } else if (err.status === 400 || err.status === 500) {
        setError(t("auth.unexpectedError"))
      } else if (err.status === 404) {
        setError(t("auth.userNotFound"))
      } else {
        setError(t("auth.unexpectedError"))
      }
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      {success ? (
        <div>
          <p className="text-success text-lg text-center py-10">
            {t("auth.instructionsSent")}
          </p>
          <Button
            fullWidth
            color="primary"
            onPress={() => setSelected("login")}
            className="px-6 py-2"
          >
            {t("auth.back")}
          </Button>
        </div>
      ) : (
        <>
          <Input
            control={control}
            rules={{
              required: t("auth.emailRequired"),
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: t("auth.emailInvalid"),
              },
            }}
            name="email"
            label="Email"
            type="email"
            required={t("auth.emailRequired")}
          />
          <ErrorMessage error={error} />
          <div className="flex justify-between text-small">
            <Link color="primary" onPress={() => setSelected("login")}>
              {t("auth.back")}
            </Link>
          </div>
          <Button type="submit" color="primary" fullWidth isLoading={isLoading}>
            {t("auth.sendInstructions")}
          </Button>
        </>
      )}
    </form>
  )
}
