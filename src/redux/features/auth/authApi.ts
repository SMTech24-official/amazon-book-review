import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        return {
          url: "auth/login",
          method: "POST",
          body: userInfo,
        };
      },
      invalidatesTags: ["User"],
    }),
    resetPassword: builder.mutation({
      query: (userInfo) => {
        return {
          url: "auth/reset-password",
          method: "POST",
          body: userInfo,
        };
      },
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (userInfo) => {
        return {
          url: "users/update-profile",
          method: "PATCH",
          body: userInfo,
        };
      },
      invalidatesTags: ["User"],
    }),
    changePassword: builder.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: "auth/change-password",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["User"],
    }),
    register: builder.mutation({
      query: ({ userInfo, token }) => {
        return {
          url: `users/register${token ? `?token=${token}` : ""}`,
          method: "POST",
          body: userInfo,
        };
      },
    }),
    forget: builder.mutation({
      query: ({ email }) => {
        return {
          url: `auth/forget-password`,
          method: "POST",
          body: email,
        };
      },
    }),
    otp: builder.mutation({
      query: (userInfo) => {
        return {
          url: "users/verify-otp",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    userData: builder.query({
      query: () => ({
        url: "users/get-me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getAllUser: builder.query({
      query: () => ({
        url: "users/get-all-users",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    reviewData: builder.query({
      query: () => ({
        url: "reading/my-book-review/all",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    userActivity: builder.query({
      query: () => ({
        url: "activity/get-all/all",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useOtpMutation,
  useUserDataQuery,
  useReviewDataQuery,
  useUserActivityQuery,
  useGetAllUserQuery,
  useChangePasswordMutation,
  useForgetMutation,
  useResetPasswordMutation,
} = authApi;
