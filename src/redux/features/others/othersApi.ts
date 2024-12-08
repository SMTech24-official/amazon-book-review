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
    getAllCustomersReviews: builder.query({
      query: () => ({
        url: `/homeReview`,
        method: "GET",
      }),
      providesTags: ["Others"],
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
    postCustomerReview: builder.mutation({
      query: (data) => {
        return {
          url: `homeReview`,
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
    deleteCustomerReview: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `homeReview/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Others"],
    }),
  }),
});

export const {
  useGetAllFaqQuery,
  useGetAllCustomersReviewsQuery,
  usePostFAQMutation,
  useDeleteFAqMutation,
  usePostCustomerReviewMutation,
  useDeleteCustomerReviewMutation,
} = othersApi;
