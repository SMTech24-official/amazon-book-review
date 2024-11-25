import { baseApi } from "../../api/baseApi";

const knowledgeHubApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getKnowledgeHubVideo: builder.query({
      query: () => ({
        url: "/knowledgeHub/get-video",
        method: "GET",
      }),
      providesTags: ["knowledgeHub"],
    }),
    addKnowledgeHubVideo: builder.mutation({
      query: (body) => {
        return {
          url: `knowledgeHub/add-knowledge-hub-video`,
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["knowledgeHub"],
    }),
    updateKnowledgeHubVideo: builder.mutation({
      query: (body) => {
        return {
          url: `knowledgeHub/update-video/${body?.id}`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["knowledgeHub"],
    }),
 
  }),
});

export const {
    useGetKnowledgeHubVideoQuery,
    useAddKnowledgeHubVideoMutation,
    useUpdateKnowledgeHubVideoMutation
} = knowledgeHubApi;
