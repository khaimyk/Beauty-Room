import { Container } from "../container"
import { Outlet } from "react-router-dom"

import { AppLayout } from "./app"
import { Footer } from "../footer"

export const Layout = () => {
  return (
    <>
      <AppLayout />
      <main>
        <Container>
          <div className="flex-1 p-4 max-w-[800px]  mx-auto dark:bg-gray-800  bg-slate-200 rounded-lg shadow-md">
            <Outlet />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
