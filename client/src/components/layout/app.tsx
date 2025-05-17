import type { PropsWithChildren } from "react"
import { Header } from "../header"

interface AppLayoutProps {
  userRole?: string
  isAdminPanel?: boolean
}

export const AppLayout = ({
  userRole,
  isAdminPanel = false,
  children,
}: PropsWithChildren<AppLayoutProps>) => {
  return (
    <div>
      <Header userRole={userRole} isAdminPanel={isAdminPanel} />
      {children}
    </div>
  )
}
