/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    payment: builder.mutation({
      query: (body) => {
        return {
          url: `payment/create-subscription`,
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["subscribe"],
    }),
    unSubscribe: builder.mutation({
      query: (data) => {
        return {
          url: `payment/cancel-subscription`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["subscribe"],
    }),
    updatePayment: builder.mutation({
      query: (data) => {
        return {
          url: `payment/update-subscription`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["subscribe"],
    }),
  }),
});

export const {
  usePaymentMutation,
  useUnSubscribeMutation,
  useUpdatePaymentMutation,
} = paymentApi;
