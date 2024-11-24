import { baseApi } from "../../api/baseApi";

const knowledgeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getKnowledgeVideo: builder.query({
      query: () => ({
        url: "knowledgeHub/get-video",
        method: "GET",
      }),
      providesTags: ["knowledge"],
    }),
  }),
});

export const {
  useGetKnowledgeVideoQuery,
} = knowledgeApi;
