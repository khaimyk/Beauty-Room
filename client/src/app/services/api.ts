import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../constants"
import type { RootState } from "../store"

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/api`,
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as RootState).auth.token || localStorage.getItem("token")
    const user = (getState() as RootState).auth.current

    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
    // Додаємо branchId для ADMIN та MASTER
    if (
      user &&
      (user.role === "ADMIN" || user.role === "MASTER") &&
      user.branchId
    ) {
      headers.set("X-Branch-Id", user.branchId.toString())
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})
