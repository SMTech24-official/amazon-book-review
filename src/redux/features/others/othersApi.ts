import { baseApi } from "../../api/baseApi";

const othersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFaq: builder.query({
      query: () => ({
        url: "questions",
        method: "GET",
      }),
      providesTags: ["Others"],
    }),
    getSinglePendingReviews: builder.query({
      query: (id) => ({
        url: `/admin/single-review/${id}`,
        method: "GET",
      }),
      providesTags: ["Review"],
    }),
    postFAQ: builder.mutation({
      query: (data) => {
        return {
          url: `questions`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Others"],
    }),
    rejectReview: builder.mutation({
      query: (id) => {
        return {
          url: `questions`,
          method: "DELETE",
          // body: userInfo,
        };
      },
      invalidatesTags: ["Book"],
    }),
  }),
});

export const {
  useGetAllFaqQuery,
  useGetSinglePendingReviewsQuery,
  useRejectReviewMutation,
  usePostFAQMutation,
} = othersApi;
