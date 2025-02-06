import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const LOCALES = ['en-US', 'pt-BR'];
const DEFAULT_LOCALE = 'en-US';

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return match(languages, LOCALES, DEFAULT_LOCALE);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const locale = getLocale(request);
  const country = locale.split('-')[1];

  // Armazena a localização nos cookies
  const response = NextResponse.next();
  response.cookies.set('locale', locale);
  response.cookies.set('country', country);

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*).*)'],
};
