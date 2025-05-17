import { useState } from "react"
import { useForm } from "react-hook-form"
import { Input } from "../components/input"
import { Button, Link } from "@heroui/react"
import { useLazyCurrentQuery, useLoginMutation } from "../app/services/userApi"
import { useNavigate } from "react-router-dom"
import { ErrorMessage } from "../components/error-message"
import { hasErrorField } from "../utils/has-error-field"
import { Paths } from "../utils/paths"
import { useAppDispatch } from "../app/hooks"
import { setBranch } from "./branchSlice"
import { useTranslation } from "react-i18next"

type Login = {
  email: string
  password: string
}
type Props = {
  setSelected: (value: string) => void
}
export const LoginComponent: React.FC<Props> = ({ setSelected }) => {
  const { handleSubmit, control } = useForm<Login>({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const [login, { isLoading }] = useLoginMutation()
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [triggerCurrentQuery] = useLazyCurrentQuery()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const selectedBranchRaw = localStorage.getItem("selectedBranch")
  const selectedBranch = selectedBranchRaw
    ? JSON.parse(selectedBranchRaw)
    : null
  const onSubmit = async (data: Login) => {
    try {
      setError("")
      await login(data).unwrap()
      const user = await triggerCurrentQuery().unwrap()

      const role = user?.role
      const branchId = user?.branch?.id

      if ((role === "MASTER" || role === "ADMIN") && branchId) {
        dispatch(setBranch(branchId))
        navigate(Paths.branch + "/" + branchId)
      } else if (selectedBranch?.id) {
        dispatch(setBranch(selectedBranch.id))
        navigate(Paths.branch + "/" + selectedBranch.id)
      } else {
        navigate(Paths.branch)
      }
    } catch (err: any) {
      if (hasErrorField(err)) {
        setError(err.data?.error ?? t("auth.serverError"))
      } else if (err.status === 400) {
        setError(t("auth.invalidCredentials"))
      } else {
        setError(t("auth.unexpectedError"))
      }
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
        {t("auth.noAccount")}{" "}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected("register")}
        >
          {t("auth.register")}
        </Link>{" "}
      </p>
      <p className="text-center text-small">
        {t("auth.forgotPassword")}{" "}
        <Link
          size="sm"
          className="cursor-pointer"
          onPress={() => setSelected("forgot")}
        >
          {t("auth.resetPassword")}
        </Link>
      </p>

      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
          {t("auth.login")}
        </Button>
      </div>
    </form>
  )
}
