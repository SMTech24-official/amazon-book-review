import { baseApi } from "../../api/baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addPayment: builder.mutation({
      query: () => {
        return {
          url: `payment/create-checkout-session`,
          method: "POST",
        };
      },
   
    }),
  }),
});

export const { useAddPaymentMutation } = paymentApi;
