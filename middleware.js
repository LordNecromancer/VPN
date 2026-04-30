// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const url = request.nextUrl;

//   const target = `https://lordnecromancer.top${url.pathname}${url.search}`;

//   return NextResponse.rewrite(target);
// }

// export const config = {
//   matcher: '/:path*',
// };
import { NextResponse } from 'next/server';

export function middleware(request) {
  return new NextResponse("MIDDLEWARE WORKING");
}

export const config = {
  matcher: '/:path*',
};
