import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ({
        url: "/book",
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    getAllLibraryBooks: builder.query({
      query: () => ({
        url: "/book/library",
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    getAllPendingBooks: builder.query({
      query: () => ({
        url: "/admin",
        method: "GET",
      }),
      providesTags: ["Book"],
    }),
    getAllReadingBooks: builder.query({
      query: (state) => ({
        url: `/reading/${state}`,
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
    singleBookReview: builder.query({
      query: (id) => ({
        url: `/reading/${id}`,
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
    addBook: builder.mutation({
      query: ( data ) => {
        console.log(data);
        return {
          url: `book/add-book`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Book"],
    }),
    startReading: builder.mutation({
      query: ({ id }) => {
        return {
          url: `reading/start-reading/${id}`,
          method: "POST",
        };
      },
      invalidatesTags: ["Book"],
    }),
    finishReading: builder.mutation({
      query: ( id ) => {
        console.log(id);
        return {
          url: `reading/finish-reading/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["Book"],
    }),
    completeReview: builder.mutation({
      query: ( id ) => {
        console.log(id);
        return {
          url: `reading/give-review/${id}`,
          method: "PATCH",
        };
      },
      invalidatesTags: ["Book"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetAllReadingBooksQuery,
  useGetAllLibraryBooksQuery,
  useGetAllPendingBooksQuery,
  useSingleBookQuery,
  useSingleBookReviewQuery,
  useApproveBookMutation,
  useRejectBookMutation,
  useAddBookMutation,
  useStartReadingMutation,
  useFinishReadingMutation,
  useCompleteReviewMutation
} = authApi;
