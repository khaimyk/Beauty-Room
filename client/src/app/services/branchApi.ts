import type { Branch } from "../types"
import { api } from "./api"

export const branchApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllBranches: builder.query<Branch[], void>({
      query: () => ({
        url: "/branch",
        method: "GET",
      }),
    }),
    getBranchById: builder.query<Branch, string>({
      query: id => ({
        url: `/branch/${id}`,
        method: "GET",
      }),
    }),
    createBranch: builder.mutation<Branch, Partial<Branch>>({
      query: BranchData => ({
        url: "/branch/add",
        method: "POST",
        body: BranchData,
      }),
    }),
    editBranch: builder.mutation<Branch, { id: string; formData: FormData }>({
      query: ({ id, formData }) => {
        // Не встановлюємо Content-Type, браузер сам додасть multipart/form-data з boundary
        return {
          url: `branch/edit/${id}`,
          method: "PUT",
          body: formData,
        }
      },
    }),
    deleteBranch: builder.mutation<void, string>({
      query: id => ({
        url: `/branch/remove/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useGetAllBranchesQuery,
  useCreateBranchMutation,
  useGetBranchByIdQuery,
  useDeleteBranchMutation,
  useEditBranchMutation,
  useLazyGetAllBranchesQuery,
  useLazyGetBranchByIdQuery,
} = branchApi

export const {
  endpoints: {
    getAllBranches,
    getBranchById,
    createBranch,
    editBranch,
    deleteBranch,
  },
} = branchApi
