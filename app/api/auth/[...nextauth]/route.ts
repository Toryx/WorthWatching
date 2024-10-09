import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Adjust the path based on where you place the file

const handler = NextAuth(authOptions);

// Export the handler for GET and POST requests
export { handler as GET, handler as POST };