import type { RoleType, User } from "../types"
import { api } from "./api"

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query: userData => ({
        url: "/user/login",
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation<
      { name: string; email: string; password: string },
      { name: string; email: string; password: string }
    >({
      query: userData => ({
        url: "/user/register",
        method: "POST",
        body: userData,
      }),
    }),
    current: builder.query<User, void>({
      query: () => ({
        url: "/user/current",
        method: "GET",
      }),
    }),
    getAllUsers: builder.query<User[], string | undefined>({
      query: branchId => ({
        url: "/user",
        params: branchId ? { branchId } : {},
        method: "GET",
      }),
    }),
    getAllUserClients: builder.query<User[], void>({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    getUserById: builder.query<User, string>({
      query: id => ({
        url: `/user/${id}`,
        method: "GET",
      }),
    }),
    editUser: builder.mutation<User, { userData: FormData; id: string }>({
      query: ({ userData, id }) => ({
        url: `/user/edit/${id}`,
        method: "PUT",
        body: userData,
      }),
    }),
    updateRole: builder.mutation<User, { id: string; role: RoleType }>({
      query: ({ id, role }) => ({
        url: `/user/role/${id}`,
        method: "PUT",
        body: { role },
      }),
    }),
    removeUser: builder.mutation<void, string>({
      query: id => ({
        url: `/user/remove/${id}?withRelations=true`,
        method: "DELETE",
      }),
    }),

    forgotPassword: builder.mutation<void, { email: string }>({
      query: data => ({
        url: "/user/forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation<void, { token: string; password: string }>({
      query: data => ({
        url: "/user/reset-password/",
        method: "POST",
        body: data,
      }),
    }),
  }),
})
export const {
  useRegisterMutation,
  useLoginMutation,
  useGetAllUsersQuery,
  useLazyGetUserByIdQuery,
  useCurrentQuery,
  useLazyCurrentQuery,
  useEditUserMutation,
  useRemoveUserMutation,
  useGetUserByIdQuery,
  useUpdateRoleMutation,
  useLazyGetAllUsersQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetAllUserClientsQuery,
} = userApi
export const {
  endpoints: {
    login,
    register,
    current,
    getAllUsers,
    editUser,
    removeUser,
    getUserById,
    updateRole,
    forgotPassword,
    resetPassword,
    getAllUserClients,
  },
} = userApi
