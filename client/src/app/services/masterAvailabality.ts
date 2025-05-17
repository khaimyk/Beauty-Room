import type { MasterAvailability } from "../types"
import { api } from "./api"

export const masterAvailabilityApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllMasterAvailability: builder.query<
      MasterAvailability[],
      string | undefined
    >({
      query: branchId => ({
        url: "/masterAvailability",
        params: branchId ? { branchId } : {},
        method: "GET",
      }),
    }),
    getMasterAvailabilityById: builder.query<MasterAvailability, string>({
      query: id => ({
        url: `/masterAvailability/${id}`,
        method: "GET",
      }),
    }),
    createMasterAvailability: builder.mutation<
      MasterAvailability,
      {
        id: string
        availability: {
          date: string
          slots: { startTime: string }[]
        }[]
      }
    >({
      query: ({ id, availability }) => ({
        url: `/masterAvailability/save`,
        method: "POST",
        body: { userId: id, availability }, // Тільки availability
      }),
    }),
  }),
})

export const {
  useGetAllMasterAvailabilityQuery,
  useLazyGetAllMasterAvailabilityQuery,
  useGetMasterAvailabilityByIdQuery,
  useCreateMasterAvailabilityMutation,
} = masterAvailabilityApi

export const {
  endpoints: {
    getAllMasterAvailability,
    getMasterAvailabilityById,
    createMasterAvailability,
  },
} = masterAvailabilityApi
