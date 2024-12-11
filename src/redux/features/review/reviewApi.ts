import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPendingReviews: builder.query({
      query: () => ({
        url: "/admin/review/all",
        method: "GET",
      }),
      providesTags: ["Review"],
    }),
    getSinglePendingReviews: builder.query({
      query: (id) => ({
        url: `/admin/single-review/${id}`,
        method: "GET",
      }),
      providesTags: ["Review"],
    }),
    approveReview: builder.mutation({
      query: (id) => {
        return {
          url: `admin/review/approve/${id}`,
          method: "PUT",
          // body: userInfo,
        };
      },
      invalidatesTags: ["Review"],
    }),
    rejectReview: builder.mutation({
      query: (id) => {
        return {
          url: `admin/review/rejected/${id}`,
          method: "DELETE",
          // body: userInfo,
        };
      },
      invalidatesTags: ["Review"],
    }),
  }),
});

export const {
  useGetAllPendingReviewsQuery,
  useGetSinglePendingReviewsQuery,
  useApproveReviewMutation,
  useRejectReviewMutation,
} = reviewApi;
