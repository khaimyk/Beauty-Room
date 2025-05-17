import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { HeroUIProvider } from "@heroui/react"
import "./index.css"
import "./i18n"
import { store } from "./app/store"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Paths } from "./utils/paths"
import { Home } from "./pages/home"
import { ThemeProvider } from "./components/theme-provider"
import { Layout } from "./components/layout"
import { UserProfile } from "./pages/user"
import { AboutUs } from "./pages/aboutUs"
import { Auth } from "./pages/auth"
import { ServiceBooking } from "./pages/service"
import { AdminPanel } from "./components/layout/adminPanel"
import { Role } from "./components/admin/user/Role"
import { AdminCategory } from "./components/admin/category"
import { AdminService } from "./components/admin/service"
import { Booking } from "./pages/booking"
import { ClientForm } from "./pages/client"
import { AdminBookings } from "./components/admin/booking/bookings"
import { MasterAvailability } from "./components/admin/masterAvailability"
import { Reviews } from "./pages/review"
import { HomeAdmin } from "./pages/homeAdmin"
import { SuperAdminBranch } from "./components/superAdmin"
import { AllBranches } from "./pages/allBranches"
import { AuthGuard } from "./features/authGuard"
import { ResetPasswordComponent } from "./features/resetPassword"
import { AdminClient } from "./components/admin/client"

const container = document.getElementById("root")
const router = createBrowserRouter([
  {
    path: Paths.auth,
    element: <Auth />,
  },
  {
    path: Paths.resetPassword,
    element: <ResetPasswordComponent />,
  },
  {
    path: Paths.home,
    element: <Layout />,

    children: [
      {
        path: Paths.branch + "/:branchId",
        element: <Home />,
      },
      {
        path: Paths.user,
        element: <UserProfile />,
      },
      {
        path: Paths.about_us + "/:branchId",
        element: <AboutUs />,
      },
      {
        path: Paths.service,
        element: <ServiceBooking />,
      },
      { path: Paths.client, element: <ClientForm /> },
      { path: Paths.booking, element: <Booking /> },
      { path: Paths.review, element: <Reviews /> },
      { path: Paths.branch, element: <AllBranches /> },
      // Add more child routes as needed
    ],
  },
  {
    path: Paths.admin,
    element: <AdminPanel />,
    children: [
      { path: Paths.admin, element: <HomeAdmin /> },
      { path: Paths.AdminClient, element: <AdminClient /> },
      { path: Paths.AdminService, element: <AdminService /> },
      { path: Paths.AdminCategory, element: <AdminCategory /> },
      {
        path: Paths.AdminMasterAvailability,
        element: <MasterAvailability />,
      },
      { path: Paths.AdminUser, element: <Role /> },
      { path: Paths.AdminAllBookings, element: <AdminBookings /> },
      {
        path: Paths.AdminBranch,

        element: <SuperAdminBranch />,
      },
    ],
  },
  // Add more routes as needed
])
if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <HeroUIProvider>
          <ThemeProvider>
            <AuthGuard optional={true}>
              <RouterProvider router={router} />
            </AuthGuard>
          </ThemeProvider>
        </HeroUIProvider>
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
