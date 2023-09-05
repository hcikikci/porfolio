import Breadcrumbs from "../../components/atoms/ViewBlocks/Breadcrumbs";
import AboutMe from "../../components/organisms/AboutMe";
import Skills from "../../components/organisms/Skills";

export async function generateMetadata({ params }){
    // read route params then fetch data
    // get params from route
    const { locale } = params;

    const enTitle = 'Halitcan Çıkıkçı: About Me, Expertise in Web Development & Product Design';
    const trTitle = 'Halitcan Çıkıkçı: Hakkımda, Web Geliştirme & Ürün Tasarımı Uzmanlığı';

    const enDescription = "Get to know Halitcan Çıkıkçı. Dive into his experience, expertise, and personal interests in the realms of product design, web development, and software engineering.";
    const trDescription = 'Halitcan Çıkıkçı\'yı daha yakından tanıyın. Ürün tasarımı, web geliştirme ve yazılım mühendisliği alanlarında deneyimi, uzmanlığı ve kişisel ilgi alanlarına dalın.';

    const enKeywords = ['Halitcan Çıkıkçı About', 'Expertise', 'Web Development Experience', 'Product Design Skills', 'Software Engineering', 'Personal Interests'];
    const trKeywords = ['Halitcan Çıkıkçı Hakkımda', 'Uzmanlık Alanları', 'Web Geliştirme Deneyimi', 'Ürün Tasarımı Yetenekleri', 'Yazılım Mühendisliği', 'Kişisel İlgi Alanları'];

    return {
        title: locale === "tr" ? trTitle : enTitle,
        description: locale === "tr" ? trDescription : enDescription,
        keywords: locale === "tr" ? trKeywords : enKeywords,
    };

}

export default function page() {
    return (
        <main className="pb-20">
            <Breadcrumbs page={"about-me"}/>
            <AboutMe onPage={true}/>
            <Skills/>
        </main>
    )
}
