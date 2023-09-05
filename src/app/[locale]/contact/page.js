import Breadcrumbs from "../../components/atoms/ViewBlocks/Breadcrumbs";
import Contact from "../../components/organisms/Contact";
import SectionHeader from "../../components/atoms/ViewBlocks/SectionHeader";
import Social from "../../components/atoms/ViewBlocks/Social";
import {metadata} from "../../[locale]/layout";
export const dynamic = 'force-static'
export async function generateMetadata({ params }){
    // read route params then fetch data
    // get params from route
    const { locale } = params;

    const enTitle = 'Get in Touch with Halitcan Çıkıkçı: For Projects, Inquiries, and Collaborations';
    const trTitle = 'Halitcan Çıkıkçı ile İletişime Geçin: Projeler, Sorular ve İşbirlikleri için';

    const enDescription = "Reach out to Halitcan Çıkıkçı for all your queries, job proposals, and collaboration ideas. Feel free to ask questions or discuss potential projects.";
    const trDescription = 'Tüm sorularınız, iş teklifleriniz ve işbirliği fikirleriniz için Halitcan Çıkıkçı ile iletişime geçin. Sorular sormaktan veya potansiyel projeler hakkında konuşmaktan çekinmeyin.';

    const enKeywords = ['Halitcan Çıkıkçı Contact', 'Inquiries', 'Job Proposals', 'Collaboration Ideas', 'Web Development Contact', 'Product Design Contact'];
    const trKeywords = ['Halitcan Çıkıkçı İletişim', 'Sorular', 'İş Teklifleri', 'İşbirliği Fikirleri', 'Web Geliştirme İletişim', 'Ürün Tasarım İletişim'];

    return {
        ...metadata,
        title: locale === "tr" ? trTitle : enTitle,
        description: locale === "tr" ? trDescription : enDescription,
        keywords: locale === "tr" ? trKeywords : enKeywords,
    };

}
export default function page() {

    return (
      <main className="pb-10">
          <Breadcrumbs page={"contact"}/>
          <Contact onPage={true}/>
          <SectionHeader title={"media"} dontShowHR={true}/>
          <Social withNicknames={true} className="py-5"/>
      </main>
  )
}
