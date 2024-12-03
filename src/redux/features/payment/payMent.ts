/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const pointApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    payment: builder.mutation({
      query: (body) => {
        return {
          url: `payment/subscribe`,
          method: "PATCH",
          body: body,
        };
      },
      invalidatesTags: ["subscribe"],
    }),
  }),
});

export const { usePaymentMutation } = pointApi;
