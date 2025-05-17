import type { Service } from "../types"
import { api } from "./api"

export const serviceApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllServises: builder.query<Service[], string | undefined>({
      query: branchId => ({
        url: "/service",
        params: branchId ? { branchId } : {},
        method: "GET",
      }),
    }),
    getServiceById: builder.query<Service, string>({
      query: id => ({
        url: `/service/${id}`,
        method: "GET",
      }),
    }),
    createServise: builder.mutation<Service, Partial<Service>>({
      query: serviceData => ({
        url: "/service/add",
        method: "POST",
        body: serviceData,
      }),
    }),
    editService: builder.mutation<
      Service,
      { id: string; updatedService: Partial<Service> }
    >({
      query: ({ id, updatedService }) => ({
        url: `/service/edit/${id}`,
        method: "PUT",
        body: updatedService,
      }),
    }),
    removeService: builder.mutation<void, string>({
      query: id => ({
        url: `/service/remove/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useCreateServiseMutation,
  useGetAllServisesQuery,
  useGetServiceByIdQuery,
  useEditServiceMutation,
  useRemoveServiceMutation,
  useLazyGetAllServisesQuery,
  useLazyGetServiceByIdQuery,
} = serviceApi

export const {
  endpoints: {
    createServise,
    getAllServises,
    getServiceById,
    editService,
    removeService,
  },
} = serviceApi
