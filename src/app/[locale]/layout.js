import '../globals.css'
import {Montserrat, Inter} from 'next/font/google'
import {NextIntlClientProvider, useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

export const firaCode = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Halitcan Çıkıkçı',
  description: 'Halit is a product designer and full-stack developer',
}

export async function generateStaticParams() {
    return ['en', 'tr'].map((locale) => ({ locale }))
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
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content={metadata.description}/>
            <title>Halitcan Çıkıkçı</title>
        </head>
            <body className={firaCode.className + " bg-[#EBECFF] bg-[url(/shapesbg.png)] bg-contain"} suppressHydrationWarning={true}>
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
