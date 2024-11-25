import { baseApi } from "../../api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllMembers: builder.query({
      query: () => ({
        url: "/admin/users/get-all",
        method: "GET",
      }),
      providesTags: ["Member"],
    }),
    getSingleMember: builder.query({
      query: (id) => ({
        url: `/admin/single-user/${id}`,
        method: "GET",
      }),
      providesTags: ["Member"],
    }),
    // approveReview: builder.mutation({
    //   query: (id) => {
    //     return {
    //       url: `admin/review/approve/${id}`,
    //       method: "PUT",
    //       // body: userInfo,
    //     };
    //   },
    //   invalidatesTags: ["Book"],
    // }),
    // rejectReview: builder.mutation({
    //   query: (id) => {
    //     return {
    //       url: `admin/review/rejected/${id}`,
    //       method: "DELETE",
    //       // body: userInfo,
    //     };
    //   },
    //   invalidatesTags: ["Book"],
    // }),
  }),
});

export const {
useGetAllMembersQuery,
useGetSingleMemberQuery
// useApproveReviewMutation,
// useRejectReviewMutation
} = reviewApi;
