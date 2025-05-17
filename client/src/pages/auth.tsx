import { Card, CardBody, Tab, Tabs } from "@heroui/react"
import { useState } from "react"
import { LoginComponent } from "../features/login"
import { RegisterComponent } from "../features/register"
import { ForgotPassword } from "../features/forgotPassword"
import { Header } from "../components/header"
import { useTranslation } from "react-i18next"

export const Auth = () => {
  const [selected, setSelected] = useState("login")
  const { t } = useTranslation()

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 bg-gray-50 dark:bg-black">
        <div className="w-full max-w-sm sm:max-w-md">
          <Card className="shadow-xl rounded-2xl border border-gray-200">
            <CardBody className="py-6 px-4 sm:px-6">
              <h2 className="text-2xl font-bold text-center mb-6">
                {t("branch.loginTitle")}
              </h2>
              <Tabs
                fullWidth
                size="md"
                selectedKey={selected}
                onSelectionChange={key => setSelected(key as string)}
                className="gap-6"
              >
                <Tab key="login" title={t("branch.login")}>
                  <LoginComponent setSelected={setSelected} />
                </Tab>
                <Tab key="register" title={t("branch.register")}>
                  <RegisterComponent setSelected={setSelected} />
                </Tab>
                <Tab key="forgot" title={t("branch.forgotPassword")}>
                  <ForgotPassword setSelected={setSelected} />
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
