import { NextRequest, NextResponse } from "next/server"
import prisma from "./lib/prisma"
import jwt, { JwtPayload } from 'jsonwebtoken'
export function middleware(request: NextRequest) {
  console.log("middleware")
  const { pathname } = request.nextUrl
  let token = request.cookies.get('token')?.value
  console.log('token', token)
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET as string, async (err, decoded) => {
      if (err) {
        console.error(err)
        // return NextResponse.redirect(new URL('/login', request.url))
      }
      const id = (decoded as JwtPayload)?.id as number || null
      if( !decoded || !id) {
        return NextResponse.next()
      }
      const user = await prisma.user.findUnique({
        where: {
          id
        }
      })
      if (!user) {
        return NextResponse.next()
      }
      console.log("User logged in", user)
      return NextResponse.next()
    })
  }
  return NextResponse.next()
  // if (pathname.startsWith('/api/admin') || pathname.startsWith('/api/user') || pathname.startsWith('/auth/')) {
    // const allowedRoutes = ['/auth/login', '/auth/register']
    // const isRouteAllowed = allowedRoutes.some((prefix) => pathname.startsWith(prefix))

    // if (!token) {
    //   if (isRouteAllowed) {

    //     return NextResponse.next()
    //   }

    //   return NextResponse.redirect(new URL('/login', request.url))
    // }


    // if (isRouteAllowed && token) {
    //   return NextResponse.redirect(new URL('/', request.url))
    // }
  // }
}