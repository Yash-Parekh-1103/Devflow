import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isAdminRoute = createRouteMatcher(['/new(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isAdminRoute(req)) {
    const { sessionClaims } = auth();

    // If the user does not have the admin role, redirect them to the home page
    if (sessionClaims?.metadata.role !== 'admin') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
