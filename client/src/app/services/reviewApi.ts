import type { Review } from "../types"
import { api } from "./api"

export const reviewApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllReviews: builder.query<Review[], void>({
      query: () => ({
        url: "/review",
        method: "GET",
      }),
    }),
    getReviewById: builder.query<Review, string>({
      query: id => ({
        url: `/review/${id}`,
        method: "GET",
      }),
    }),
    createReview: builder.mutation<Review, Partial<Review>>({
      query: reviewData => ({
        url: "/review/add",
        method: "POST",
        body: reviewData,
      }),
    }),

    deleteReview: builder.mutation<void, string>({
      query: id => ({
        url: `/review/remove/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useGetAllReviewsQuery,
  useGetReviewByIdQuery,
  useCreateReviewMutation,
  useDeleteReviewMutation,
  useLazyGetAllReviewsQuery,
  useLazyGetReviewByIdQuery,
} = reviewApi

export const {
  endpoints: { getAllReviews, getReviewById, createReview, deleteReview },
} = reviewApi
