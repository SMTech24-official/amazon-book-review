import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPendingBooks: builder.query({
      query: () => ({
        url: "/admin",
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    singleBook: builder.query({
      query: (id) => ({
        url: `/admin/book/${id}`,
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    approveBook: builder.mutation({
      query: (id) => {
        return {
          url: `admin/approve/${id}`,
          method: "PUT",
          // body: userInfo,
        };
      },
      invalidatesTags: ["Book"],
    }),
    rejectBook: builder.mutation({
      query: (id) => {
        return {
          url: `admin/reject/${id}`,
          method: "PUT",
          // body: userInfo,
        };
      },
      invalidatesTags: ["Book"],
    }),
  }),
});

export const {
  useGetAllPendingBooksQuery,
  useSingleBookQuery,
  useApproveBookMutation,
  useRejectBookMutation,
} = authApi;
