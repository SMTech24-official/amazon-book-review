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
    deleteFAq: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `questions/${id}`,
          method: "DELETE",
          // body: userInfo,
        };
      },
      invalidatesTags: ["Others"],
    }),
  }),
});

export const {
  useGetAllFaqQuery,
  useGetSinglePendingReviewsQuery,
  usePostFAQMutation,
  useDeleteFAqMutation,
} = othersApi;
