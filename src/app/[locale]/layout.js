import '../globals.css'
import {Montserrat, Inter} from 'next/font/google'
import {IntlErrorCode, NextIntlClientProvider, useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import Head from "next/head";
import GoogleAnalytics from "../GoogleAnalytics";

export const firaCode = Montserrat({ subsets: ['latin'] })

export async function generateStaticParams() {
    return ['en', 'tr'].map((locale) => ({ locale }))
}
export const metadata = {
    metadataBase: new URL('https://halitcancikikci.com/'),
    openGraph: {
        title: 'Halitcan Çıkıkçı - Product Designer & Full-Stack Developer',
        description: 'Focused on creating sustainable solutions that make lives easier by merging technology and creativity.',
        image: 'https://halitcancikikci.com/halitcancikikci.webp',
        url: 'https://halitcancikikci.com',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Halitcan Çıkıkçı - Product Designer & Full-Stack Developer',
        description: 'Focused on creating sustainable solutions that make lives easier by merging technology and creativity.',
        image: 'https://halitcancikikci.com/halitcancikikci.webp',
        url: 'https://halitcancikikci.com',
    },
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en',
            'tr-TR': '/tr',
        },
    },
}

export default async function RootLayout({children, params: { locale }}) {

    let messages;
    try {
        messages = (await import(`../../content/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}  >
            <body className={firaCode.className + " bg-[#EBECFF] bg-[url(/shapesbg.webp)] bg-contain"} suppressHydrationWarning={true}>
            <GoogleAnalytics/>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'Halitcan Çıkıkçı',
                        url: 'https://halitcancikikci.com',
                        image: 'https://halitcancikikci.com/halitcancikikci.webp',
                        jobTitle: 'Full-Stack Developer and Product Designer',
                        worksFor: {
                            '@type': 'Organization',
                            name: 'Self-employed'
                        },
                        sameAs: [
                            'https://www.linkedin.com/in/halitcan-çıkıkçı/',
                            'https://twitter.com/halitcancikikci',
                            'https://github.com/hcikikci',
                            'https://discordapp.com/users/hcikikci',
                            'hello@halitcancikikci.com',
                        ]
                    })
                }}
            />
            <NextIntlClientProvider locale={locale} messages={messages}>
                <Header className="containercustom"/>
                    <div className="containercustom">
                        {children}
                    </div>
                <Footer/>
            </NextIntlClientProvider>
        </body>
        </html>
    )
}
