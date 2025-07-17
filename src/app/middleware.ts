import { NextRequest, NextResponse } from 'next/server';
import {locales, defaultLocale, Locale} from '@/lib/i18n/config';

function getLocaleFromAcceptLanguage(acceptLanguage: string | null): string {
    console.log('🌐 Accept-Language header:', acceptLanguage);

    if (!acceptLanguage) {
        console.log('⚠️ No Accept-Language header, defaulting to:', defaultLocale);
        return defaultLocale;
    }

    // Parse Accept-Language header
    const languages = acceptLanguage
        .split(',')
        .map(lang => {
            const [code, q = '1'] = lang.trim().split(';q=');
            return {
                code: code.toLowerCase().split('-')[0], // Get base language code (e.g., 'en' from 'en-US')
                quality: parseFloat(q)
            };
        })
        .sort((a, b) => b.quality - a.quality); // Sort by quality (preference)

    console.log('🔍 Parsed languages:', languages);
    console.log('✅ Supported locales:', locales);

    // Find the first supported locale
    for (const { code } of languages) {
        if (locales.includes(code as Locale)) {
            console.log('🎯 Found matching locale:', code);
            return code;
        }
    }

    console.log('❌ No matching locale found, defaulting to:', defaultLocale);
    return defaultLocale;
}

function getLocaleFromPathname(pathname: string): string | null {
    const segments = pathname.split('/');
    const firstSegment = segments[1];

    console.log('📍 Checking pathname:', pathname);
    console.log('🔍 First segment:', firstSegment);

    if (locales.includes(firstSegment as Locale)) {
        console.log('✅ Found locale in pathname:', firstSegment);
        return firstSegment;
    }

    console.log('❌ No locale found in pathname');
    return null;
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const userAgent = request.headers.get('user-agent');

    console.log('\n🚀 Middleware triggered');
    console.log('📍 Pathname:', pathname);
    console.log('👤 User Agent:', userAgent?.slice(0, 100) + '...');

    // Check if pathname already has a locale
    const pathnameHasLocale = getLocaleFromPathname(pathname);

    if (pathnameHasLocale) {
        // Pathname already has a locale, continue normally
        console.log('✅ Locale already in pathname, continuing normally');
        console.log('─'.repeat(50));
        return NextResponse.next();
    }

    // No locale in pathname, detect from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    const detectedLocale = getLocaleFromAcceptLanguage(acceptLanguage);

    // Redirect to the detected locale
    const redirectUrl = new URL(`/${detectedLocale}${pathname}`, request.url);
    console.log('🔄 Redirecting to:', redirectUrl.pathname);
    console.log('─'.repeat(50));

    return NextResponse.redirect(redirectUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next, api, etc.)
        '/((?!_next|api|favicon.ico|sitemap.xml|robots.txt|.*\\.).*)',
    ],
};