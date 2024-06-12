import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// * This file redirects the initial page (uwaterloopm.com) to the home page (uwaterloopm.com/home)
// * This makes organization easier and a more consistent folder structure with every page be a directory in the app router

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }
}
