import Breadcrumbs from "@/app/components/atoms/ViewBlocks/Breadcrumbs";
import AboutMe from "@/app/components/organisms/AboutMe";
import Skills from "@/app/components/organisms/Skills";

export default function page() {
    return (
        <main className="pb-20">
            <Breadcrumbs page={"about-me"}/>
            <AboutMe onPage={true}/>
            <Skills/>
        </main>
    )
}
