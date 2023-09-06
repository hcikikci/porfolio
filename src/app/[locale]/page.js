import Landing from "../components/organisms/Landing";
import WordOfTheDay from "../components/organisms/WordOfTheDay";
import Projects from "../components/organisms/Projects";
import Skills from "../components/organisms/Skills";
import AboutMe from "../components/organisms/AboutMe";
import Contact from "../components/organisms/Contact";
import {metadata} from "../[locale]/layout";
export const dynamic = 'force-static'

export async function generateMetadata({ params }){
    const { locale } = params;

    const enTitle = 'Halitcan Çıkıkçı - Product Designer and Full-Stack Developer';
    const trTitle = 'Halitcan Çıkıkçı - Ürün Tasarımcısı ve Full-Stack Geliştirici';

    const enDescription = 'Halitcan Çıkıkçı is a talented product designer and full-stack developer currently contributing his expertise to the innovative startup, \'Agile Master\'.';
    const trDescription = 'Halitcan Çıkıkçı, yetenekli bir ürün tasarımcısı ve full-stack geliştirici olarak, şu anda \'Agile Master\' adlı yenilikçi startup fikri ile kariyerine katkı sağlamaktadır.';

    const enKeywords = ['Halitcan Çıkıkçı', 'Product Designer', 'Full-Stack Developer', 'Software Projects', 'Web Development', 'Design and Coding Specialist'];
    const trKeywords = ['Halitcan Çıkıkçı', 'Ürün Tasarımcısı', 'Full-Stack Developer', 'Yazılım Projeleri', 'Web Geliştirme', 'Tasarım ve Kodlama Uzmanı'];

    return {
        ...metadata,
        title: locale === "tr" ? trTitle : enTitle,
        description: locale === "tr" ? trDescription : enDescription,
        keywords: locale === "tr" ? trKeywords : enKeywords,
        alternates: {
            canonical: '/'+locale,
            languages: {
                'en-US': '/en',
                'tr-TR': '/tr',
            },
        },
    };
}

export default function Home() {
    return (
        <main>
            <Landing/>
            <WordOfTheDay/>
            <Projects/>
            <Skills/>
            <AboutMe/>
            <Contact/>
        </main>
    )
}
