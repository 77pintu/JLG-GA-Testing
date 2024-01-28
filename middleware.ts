import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { isLogin } from './services/Auth'
const protectedRoutes = [
  '/chatbox',
  '/mylearning',
  '/coupons',
  '/profile',
  '/certificates',
  '/orderhistory',
  '/changepassword',
  '/notifications',
  '/managelicenses',
]
export function middleware(request: NextRequest) {
    const isLogin = false;
  if (!isLogin && protectedRoutes.includes(request.nextUrl.pathname)) {
    const loginUrl = new URL('/', request.url)
    return NextResponse.redirect(loginUrl)
  }
}