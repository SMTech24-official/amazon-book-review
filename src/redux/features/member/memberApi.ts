/* eslint-disable @typescript-eslint/no-explicit-any */
import { TQueryParam } from "@/interface/globalType";
import { baseApi } from "../../api/baseApi";


const memberApi = baseApi.injectEndpoints({
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
    getAllBooksForSingleAuthor: builder.query({
      query: (data) => {
        const params = new URLSearchParams();
        if (data?.queryObj) {
          data?.queryObj.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `admin/books/get-all/${data?.memberId}`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["Member"],
    }),
  }),
});

export const {
  useGetAllMembersQuery,
  useGetSingleMemberQuery,
  useGetAllBooksForSingleAuthorQuery
} = memberApi;
