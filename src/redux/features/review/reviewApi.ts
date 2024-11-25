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
    approveReview: builder.mutation({
      query: (id) => {
        return {
          url: `admin/review/approve/${id}`,
          method: "PUT",
          // body: userInfo,
        };
      },
      invalidatesTags: ["Book"],
    }),
    rejectReview: builder.mutation({
      query: (id) => {
        return {
          url: `admin/review/rejected/${id}`,
          method: "DELETE",
          // body: userInfo,
        };
      },
      invalidatesTags: ["Book"],
    }),
  }),
});

export const {
  useGetAllPendingReviewsQuery,
useApproveReviewMutation,
useRejectReviewMutation
} = reviewApi;
