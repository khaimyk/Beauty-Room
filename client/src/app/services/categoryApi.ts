import type { Category } from "../types"
import { api } from "./api"

export const categoryApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllCategories: builder.query<Category[], string | undefined>({
      query: branchId => ({
        url: "/category",
        params: branchId ? { branchId } : {},
        method: "GET",
      }),
    }),
    getCategoryById: builder.query<Category, string>({
      query: id => ({
        url: `/category/${id}`,
        method: "GET",
      }),
    }),
    createCategory: builder.mutation<Category, Partial<Category>>({
      query: categoryData => ({
        url: "/category/add",
        method: "POST",
        body: categoryData,
      }),
    }),
    editCategory: builder.mutation<
      Category,
      { id: string; categoryData: Partial<Category> }
    >({
      query: ({ id, categoryData }) => ({
        url: `/category/edit/${id}`,
        method: "PUT",
        body: categoryData,
      }),
    }),
    removeCategory: builder.mutation<void, string>({
      query: id => ({
        url: `/category/remove/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,
  useEditCategoryMutation,
  useGetCategoryByIdQuery,
  useRemoveCategoryMutation,
  useLazyGetAllCategoriesQuery,
  useLazyGetCategoryByIdQuery,
} = categoryApi

export const {
  endpoints: {
    getAllCategories,
    getCategoryById,
    createCategory,
    editCategory,
    removeCategory,
  },
} = categoryApi
