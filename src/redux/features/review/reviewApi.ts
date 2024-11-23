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
    // singleBook: builder.query({
    //   query: (id) => ({
    //     url: `/admin/book/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["Book"],
    // }),
    // approveBook: builder.mutation({
    //   query: (id) => {
    //     return {
    //       url: `admin/approve/${id}`,
    //       method: "PUT",
    //       // body: userInfo,
    //     };
    //   },
    //   invalidatesTags: ["Book"],
    // }),
    // rejectBook: builder.mutation({
    //   query: (id) => {
    //     return {
    //       url: `admin/reject/${id}`,
    //       method: "PUT",
    //       // body: userInfo,
    //     };
    //   },
    //   invalidatesTags: ["Book"],
    // }),
  }),
});

export const {
  useGetAllPendingReviewsQuery,
//   useSingleBookQuery,
//   useApproveBookMutation,
//   useRejectBookMutation,
} = reviewApi;
