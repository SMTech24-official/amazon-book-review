/* eslint-disable @typescript-eslint/no-explicit-any */

import { setUser } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import { verifyToken } from "./verifyToken";

// Now handleAsyncWithToast accepts dispatch as an argument
export const handleAsyncWithToast = async (
  asyncCallback: () => Promise<any>,
  loadingMessage: string,
  successMessage?: string,
  errorMessage?: string,
  isSetUserToRedux: boolean = false, // New parameter to determine if the user should be set
  dispatch?: any // Accept the dispatch function as a parameter
) => {
  const toastInit = toast.loading(loadingMessage);

  try {
    const res = await asyncCallback()
    console.log(res?.data);
    
    if (res?.data?.success) {
      toast.success(successMessage || res.data.message, {
        id: toastInit,
      });

      
      // If isSetUserToRedux is true, dispatch the setUser action
      if (isSetUserToRedux && dispatch && res?.data?.data?.accessToken) {
        const user = await verifyToken(res?.data?.data?.accessToken);
        await dispatch(setUser({ user: user, token: res?.data?.data?.accessToken }));
        // dispatch(setUser({ user: res.data.user, token: res.data.accessToken }));
      }
    }

    if (res?.message) {
      toast.success(res.message, {
        id: toastInit,
      });
    }

    if (!res?.data?.success) {
      toast.error(res?.error?.data?.message, {
        id: toastInit,
      });
    }

    return res; // Return response if needed
  } catch (error) {
    toast.error(
      errorMessage || (error as any)?.message || "Something went wrong",
      {
        id: toastInit,
      }
    );
    throw error; // Rethrow error if further handling is needed
  } finally {
    // Delay for 2 seconds before dismissing the toast
    setTimeout(() => {
      toast.dismiss(toastInit);
    }, 2000);
  }
};
