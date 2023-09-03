import Breadcrumbs from "@/app/components/atoms/ViewBlocks/Breadcrumbs";
import Contact from "@/app/components/organisms/Contact";
import SectionHeader from "@/app/components/atoms/ViewBlocks/SectionHeader";
import Social from "@/app/components/atoms/ViewBlocks/Social";

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
