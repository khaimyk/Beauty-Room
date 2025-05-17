import { useForm } from "react-hook-form"
import { Input } from "../components/input"
import { Button, Link } from "@heroui/react"
import { useLoginMutation, useRegisterMutation } from "../app/services/userApi"
import { hasErrorField } from "../utils/has-error-field"
import { ErrorMessage } from "../components/error-message"
import { useState } from "react"
import { Paths } from "../utils/paths"
import { useNavigate } from "react-router"
import { useTranslation } from "react-i18next"

type Register = {
  name: string
  email: string
  password: string
}
type Props = {
  setSelected: (value: string) => void
}
export const RegisterComponent: React.FC<Props> = ({ setSelected }) => {
  const { handleSubmit, control } = useForm<Register>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const [register, { isLoading }] = useRegisterMutation()
  const [login] = useLoginMutation()
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onSubmit = async (data: Register) => {
    try {
      await register(data).unwrap()
      const loginData = {
        email: data.email,
        password: data.password,
      }
      await login(loginData).unwrap()
      const branchId = localStorage.getItem("branchId")
      navigate(branchId ? Paths.branch + "/" + branchId : Paths.branch)
    } catch (error) {
      if (hasErrorField(error)) {
        setError(error.data.error)
      }
    }
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        rules={{ required: t("auth.nameRequired") }}
        name="name"
        label={t("auth.name")}
        type="text"
        required={t("auth.nameRequired")}
      />
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
        label={t("auth.email")}
        type="email"
        required={t("auth.emailRequired")}
      />
      <Input
        control={control}
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
        name="password"
        label={t("auth.password")}
        required={t("auth.passwordRequired")}
      />
      <ErrorMessage error={error} />
      <p className="text-center text-small">
        {t("auth.haveAccount")}{" "}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected("login")}
        >
          {t("auth.login")}
        </Link>{" "}
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          {t("auth.register")}
        </Button>
      </div>
    </form>
  )
}
