import { baseApi } from "../../api/baseApi";

const authorGuidApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAuthorGuide: builder.query({
      query: () => ({
        url: "/authorGuide/author-guide",
        method: "GET",
      }),
      providesTags: ["authorGuide"],
    }),
    getSingleAuthorGuide: builder.query({
      query: (id) => ({
        url: `/authorGuide/author-guide/${id}`,
        method: "GET",
      }),
      providesTags: ["authorGuide"],
    }),
    // addKnowledgeHubVideo: builder.mutation({
    //   query: (body) => {
    //     return {
    //       url: `knowledgeHub/add-knowledge-hub-video`,
    //       method: "POST",
    //       body: body,
    //     };
    //   },
    //   invalidatesTags: ["knowledgeHub"],
    // }),
    // updateKnowledgeHubVideo: builder.mutation({
    //   query: (body) => {
    //     return {
    //       url: `knowledgeHub/update-video/${body?.id}`,
    //       method: "PATCH",
    //       body: body,
    //     };
    //   },
    //   invalidatesTags: ["knowledgeHub"],
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
    useGetAllAuthorGuideQuery,
    useGetSingleAuthorGuideQuery
} = authorGuidApi;
