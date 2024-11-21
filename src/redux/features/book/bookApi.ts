
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
        // login: builder.mutation({
        //     query: (userInfo) => {
        //         return {
        //             url: "auth/login",
        //             method: "POST",
        //             body: userInfo,
        //         }
        //     },
        //       invalidatesTags: ["User"]
        // }),
        // updateUser: builder.mutation({
        //     query: (userInfo) => {
        //         return {
        //             url: "user/me",
        //             method: "PATCH",
        //             body: userInfo,
        //         }
        //     },
        //     invalidatesTags: ["User"],
        // }),
        // register: builder.mutation({
        //     query: (userInfo) => {
        //         return {
        //             url: "users/register",
        //             method: "POST",
        //             body: userInfo,
        //         }
        //     },
        // }),
        // otp: builder.mutation({
        //     query: (userInfo) => {
        //         return {
        //             url: "users/verify-otp",
        //             method: "POST",
        //             body: userInfo,
        //         }
        //     },
        // }),
      
    }),
});

export const { useGetAllPendingBooksQuery } = authApi;
