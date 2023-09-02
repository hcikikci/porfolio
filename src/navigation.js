import {
    createLocalizedPathnamesNavigation,
    Pathnames
} from 'next-intl/navigation';

export const locales = ['en', 'tr'];

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
    // If all locales use the same pathname, a
    // single external path can be provided.
    '/': '/',

    '/projects': {
        en: '/projects',
        tr: '/projeler'
    },
    '/about-me': {
        en: '/about-me',
        tr: '/hakkimda'
    },
    '/contact': {
        en: '/contact',
        tr: '/iletisim'
    },

} ;

export const {Link, redirect, usePathname, useRouter} =
    createLocalizedPathnamesNavigation({locales, pathnames});