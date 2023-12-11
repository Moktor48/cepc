// export { default } from "next-auth/middleware"
import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
//Augment request with user token
export default withAuth(
    function middleware(request: NextRequestWithAuth) {

    },
    {
    callbacks: {
        authorized: ({token}) => token?.role === "admin"
    }}
)
export const config = { matcher: ["/coalition/:path*", "/person/:path*"] }