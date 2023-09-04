import Breadcrumbs from "../../components/atoms/ViewBlocks/Breadcrumbs";
import Contact from "../../components/organisms/Contact";
import SectionHeader from "../../components/atoms/ViewBlocks/SectionHeader";
import Social from "../../components/atoms/ViewBlocks/Social";
export const dynamic = 'force-static'

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
