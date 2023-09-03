import Breadcrumbs from "@/app/components/atoms/ViewBlocks/Breadcrumbs";
import Projects from "@/app/components/organisms/Projects";

export default function page() {
  return (
      <main className="pb-20">
          <Breadcrumbs page={"projects"}/>
          <Projects onPage={false}/>

      </main>
  )
}
