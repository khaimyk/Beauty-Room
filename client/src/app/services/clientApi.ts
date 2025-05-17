import type { Client } from "../types"
import { api } from "./api"

export const clientApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllClients: builder.query<Client[], string | undefined>({
      query: branchId => ({
        url: "/client",
        params: branchId ? { branchId } : {},
        method: "GET",
      }),
    }),
    searchClients: builder.query<Client[], Partial<Client>>({
      query: searchParams => ({
        url: "/client/search",
        method: "GET",
        params: searchParams, // Передаем параметры поиска в запросе
      }),
    }),
    getClientById: builder.query<Client, string>({
      query: id => ({
        url: `/client/${id}`,
        method: "GET",
      }),
    }),
    createClient: builder.mutation<Client, Partial<Client>>({
      query: clientData => ({
        url: "/client/add",
        method: "POST",
        body: clientData,
      }),
    }),
    editClient: builder.mutation<
      Client,
      { id: string; updatedClient: Partial<Client> }
    >({
      query: ({ id, updatedClient }) => ({
        url: `/client/edit/${id}`,
        method: "PUT",
        body: updatedClient,
      }),
    }),
    deleteClient: builder.mutation<void, string>({
      query: id => ({
        url: `/client/remove/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useGetAllClientsQuery,
  useCreateClientMutation,
  useGetClientByIdQuery,
  useDeleteClientMutation,
  useEditClientMutation,
  useLazyGetAllClientsQuery,
  useLazyGetClientByIdQuery,
  useLazySearchClientsQuery,
} = clientApi

export const {
  endpoints: {
    getAllClients,
    getClientById,
    createClient,
    editClient,
    deleteClient,
    searchClients,
  },
} = clientApi
