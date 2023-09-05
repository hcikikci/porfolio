import Breadcrumbs from "../../components/atoms/ViewBlocks/Breadcrumbs";
import Projects from "../../components/organisms/Projects";

export async function generateMetadata({ params }){
    // read route params then fetch data
    // get params from route
    const { locale } = params;

    const enTitle = 'Halitcan Çıkıkçı: Innovative Web & Product Design Projects';
    const trTitle = 'Halitcan Çıkıkçı: Yenilikçi Web & Ürün Tasarım Projeleri';

    const enDescription = "Explore the diverse range of projects by Halitcan Çıkıkçı. From cutting-edge web development to creative product design, get insights into his multifaceted expertise.";
    const trDescription = 'Halitcan Çıkıkçı\'nın çeşitli projelerini keşfedin. Son teknoloji web geliştirmeden yaratıcı ürün tasarımına kadar, çok yönlü uzmanlığı hakkında bilgi edinin.';

    const enKeywords = ['Halitcan Çıkıkçı', 'Innovative Projects', 'Web Development', 'Product Design', 'Full-Stack Developer', 'Design and Coding'];
    const trKeywords = ['Halitcan Çıkıkçı', 'Yenilikçi Projeler', 'Web Geliştirme', 'Ürün Tasarımı', 'Full-Stack Geliştirici', 'Tasarım ve Kodlama'];

    return {
        title: locale === "tr" ? trTitle : enTitle,
        description: locale === "tr" ? trDescription : enDescription,
        keywords: locale === "tr" ? trKeywords : enKeywords,
    };

}

export default function page() {
  return (
      <main className="pb-20">
          <Breadcrumbs page={"projects"}/>
          <Projects onPage={false}/>
      </main>
  )
}
