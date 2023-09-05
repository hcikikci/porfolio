import Landing from "../components/organisms/Landing";
import WordOfTheDay from "../components/organisms/WordOfTheDay";
import Projects from "../components/organisms/Projects";
import Skills from "../components/organisms/Skills";
import AboutMe from "../components/organisms/AboutMe";
import Contact from "../components/organisms/Contact";
export const dynamic = 'force-static'

export async function generateMetadata({ params }){
    // read route params then fetch data
    // get params from route
    const { locale } = params;

    const enTitle = 'Halitcan Çıkıkçı: Product Designer & Full-Stack Developer';
    const trTitle = 'Halitcan Çıkıkçı: Ürün Tasarımcısı & Full-Stack Geliştirici';

    const enDescription = "Welcome to the official website of Halitcan Çıkıkçı. A seasoned product designer and full-stack developer, he is driving innovation at the startup 'Agile Master'. Explore his portfolio, skills, and services.";
    const trDescription = 'Halitcan Çıkıkçı\'nın resmi web sitesine hoş geldiniz. Deneyimli bir ürün tasarımcısı ve full-stack geliştirici olarak, şu anda "Agile Master" adlı startup\'da inovasyonu yönlendiriyor. Portföyü, yetenekleri ve hizmetleri keşfedin.';

    const enKeywords = ['Halitcan Çıkıkçı Official', 'Top Product Designer', 'Expert Full-Stack Developer', 'Innovative Software Solutions', 'Web Development Services', 'Design Portfolio'];
    const trKeywords = ['Halitcan Çıkıkçı Resmi', 'Önde Gelen Ürün Tasarımcısı', 'Uzman Full-Stack Geliştirici', 'Yenilikçi Yazılım Çözümleri', 'Web Geliştirme Hizmetleri', 'Tasarım Portföyü'];

    return {
        title: locale === "tr" ? trTitle : enTitle,
        description: locale === "tr" ? trDescription : enDescription,
        keywords: locale === "tr" ? trKeywords : enKeywords,
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
