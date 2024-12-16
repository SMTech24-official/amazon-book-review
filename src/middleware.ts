import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode"; // Ensure proper import for jwtDecode

export function middleware(request: NextRequest) {
  // Get token from cookies
  const token = request.cookies.get("token")?.value;
  if (!token) {
    // Redirect to home if no token is present
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Decode token to get user info
  let userInfo: { role?: string };
  try {
    userInfo = jwtDecode(token as string) as { role?: string };
    // console.log(userInfo);
  } catch (error) {
    if (error) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return;
  }

  const currentPath = request.nextUrl.pathname;

  // Restrict access to admin paths if user is not an ADMIN
  if (
    currentPath.startsWith("/admin-dashboard") &&
    userInfo?.role !== "admin"
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (currentPath.startsWith("/dashboard") && userInfo?.role !== "author") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin-dashboard/buzzPoints",
    "/admin-dashboard/faq",
    "/admin-dashboard/knowledge-hub",
    "/admin-dashboard/members-details",
    "/admin-dashboard/mew-books",
    "/admin-dashboard/new-review",
    "/admin-dashboard/reading",
    "/admin-dashboard/reviews",
    "/admin-dashboard/settings",
    "/admin-dashboard/support",
    "/admin-dashboard",
    "/dashboard",
    "/dashboard/addBooks",
    "/dashboard/help",
    "/dashboard/knowledgeHub",
    "/dashboard/library",
    "/dashboard/myBooks",
    "/dashboard/reading",
    "/dashboard/referral",
    "/dashboard/settings",
  ], // Apply middleware to all routes
};
