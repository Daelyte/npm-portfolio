import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Allow access to maintenance page and static assets
  if (
    request.nextUrl.pathname === '/maintenance.html' ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/images')
  ) {
    return NextResponse.next();
  }

  // Redirect all other requests to maintenance page
  return NextResponse.redirect(new URL('/maintenance.html', request.url));
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
