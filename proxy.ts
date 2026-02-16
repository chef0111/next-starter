import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from './lib/session';

export async function proxy(request: NextRequest) {
  const sessionData = await getServerSession();
  const session = sessionData?.session;
  const pathname = request.nextUrl.pathname;

  // Protected routes - require authentication
  const protectedRoutes: string[] = [];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Auth routes - redirect to home if already logged in
  const authRoutes: string[] = [];
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // Redirect unauthenticated users from protected routes to login
  if (isProtectedRoute && !session) {
    const url = new URL('/login', request.url);
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }

  // Redirect logged-in users away from auth pages
  if (isAuthRoute && session) {
    const from = request.nextUrl.searchParams.get('from');
    const redirectUrl =
      from && from.startsWith('/') && !from.startsWith('//') ? from : '/';
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
