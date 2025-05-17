import { Outlet } from "react-router-dom"
import { NavBar } from "../nav-bar"
import { Container } from "../container"
import { AppLayout } from "./app"
import { useAppSelector } from "../../app/hooks"
import { selectCurrent } from "../../features/useSlice"
import { Footer } from "../footer"

export const AdminPanel = () => {
  const user = useAppSelector(selectCurrent)
  const branchId = user?.branchId

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <AppLayout userRole={user?.role} isAdminPanel={true} />

      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <aside className="hidden md:flex w-56 lg:w-64 bg-stone-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="w-full p-1 lg:p-4 overflow-y-auto h-full">
            <NavBar userRole={user?.role} branchId={branchId} />
          </div>
        </aside>

        <main className={`flex-1 overflow-auto bg-white dark:bg-black md:ml-0`}>
          <Container className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
            <Outlet />
          </Container>
        </main>
      </div>

      <Footer />
    </div>
  )
}
