import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { decrypt } from "./app/lib/session"

const protectedRoutes = ["/admin"]
const publicRoutes = ["/", "/login"]

export default async function proxy(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const cookie = (await cookies()).get("session")?.value;
    const session = await decrypt(cookie);

    if(isProtectedRoute && !session?.userId){
        return NextResponse.redirect(new URL("/login", req.nextUrl))
    }

    // if(isProtectedRoute && session?.role !== "admin") {
    //     return NextResponse.redirect(new URL("/", req.nextUrl))
    // }

    NextResponse.next();
} 

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};