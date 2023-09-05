"use client";
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

function onError(error) {
    if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        // Missing translations are expected and should only log an error

    } else {
        // Other errors indicate a bug in the app and should be reported
        console.log(error)
    }
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
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="alternate" hrefLang="en" href="/en" />
            <link rel="alternate" hrefLang="tr" href="/tr" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'Halitcan Çıkıkçı',
                        url: 'https://halitcancikikci.com',
                        image: 'https://halitcancikikci.com/halitcancikikci.png',
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
        </Head>
            <body className={firaCode.className + " bg-[#EBECFF] bg-[url(/shapesbg.png)] bg-contain"} suppressHydrationWarning={true}>
            <GoogleAnalytics/>
            <NextIntlClientProvider onError={onError} locale={locale} messages={messages}>
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
