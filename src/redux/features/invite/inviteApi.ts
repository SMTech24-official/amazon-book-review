import { baseApi } from "../../api/baseApi";

const knowledgeHubApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getInviteLink: builder.query({
      query: () => ({
        url: "/invite",
        method: "GET",
      }),
      providesTags: ["invite"],
    }),
  }),
});

export const {
    useGetInviteLinkQuery,
} = knowledgeHubApi;
