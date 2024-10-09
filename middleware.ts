import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Define your allowed IPs
  const allowedIPs = ["192.168.2.6", "::ffff:127.0.0.1"]; // Replace with actual IPs

  // Get the IP address from the request
  const ip = req.ip ?? req.headers.get("x-forwarded-for")?.split(",")[0] ?? "";
  console.log(ip);
  // Check if the request's IP matches any of the allowed IPs
  const isLiveSite = allowedIPs.includes(ip);

  // Pass the result (true/false) as a header to be accessed later
  const response = NextResponse.next();
  response.headers.set("x-site-live", isLiveSite.toString());
  return response;
}

export const config = {
  matcher: ['/(.*)'], // Apply to all routes
};