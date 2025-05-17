import type { Booking } from "../types"
import { api } from "./api"

export const bookingApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllBookings: builder.query<Booking[], string | undefined>({
      query: branchId => ({
        url: "/booking",
        params: branchId ? { branchId } : {},
        method: "GET",
      }),
    }),
    getBookingById: builder.query<Booking, string>({
      query: id => ({
        url: `/booking/${id}`,
        method: "GET",
      }),
    }),
    getBookingsByUserId: builder.query<Booking[], string>({
      query: userId => ({
        url: `/booking/user/${userId}`,
        method: "GET",
      }),
    }),
    createBooking: builder.mutation<Booking, Partial<Booking>>({
      query: bookingData => ({
        url: "/booking/add",
        method: "POST",
        body: bookingData,
      }),
    }),
    editBooking: builder.mutation<
      Booking,
      { id: string; updatedBooking: Partial<Booking> }
    >({
      query: ({ id, updatedBooking }) => ({
        url: `/booking/edit/${id}`,
        method: "PUT",
        body: updatedBooking,
      }),
    }),
    deleteBooking: builder.mutation<void, string>({
      query: id => ({
        url: `/booking/remove/${id}`,
        method: "DELETE",
      }),
    }),
    confirmBooking: builder.mutation({
      query: id => ({
        url: `/booking/confirm/${id}`,
        method: "PUT",
      }),
    }),
    cancelBooking: builder.mutation({
      query: id => ({
        url: `/booking/cancel/${id}`,
        method: "PUT",
      }),
    }),
  }),
})

export const {
  useGetAllBookingsQuery,
  useGetBookingsByUserIdQuery, // ✅ Додаємо хук
  useCreateBookingMutation,
  useGetBookingByIdQuery,
  useDeleteBookingMutation,
  useEditBookingMutation,
  useLazyGetAllBookingsQuery,
  useLazyGetBookingByIdQuery,
  useConfirmBookingMutation,
  useCancelBookingMutation,
} = bookingApi

export const {
  endpoints: {
    getAllBookings,
    getBookingsByUserId, // ✅ Додаємо новий ендпоінт
    getBookingById,
    createBooking,
    editBooking,
    deleteBooking,
    confirmBooking,
    cancelBooking,
  },
} = bookingApi
