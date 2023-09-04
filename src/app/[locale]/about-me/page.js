import Breadcrumbs from "../../components/atoms/ViewBlocks/Breadcrumbs";
import AboutMe from "../../components/organisms/AboutMe";
import Skills from "../../components/organisms/Skills";

export default function page() {
    return (
        <main className="pb-20">
            <Breadcrumbs page={"about-me"}/>
            <AboutMe onPage={true}/>
            <Skills/>
        </main>
    )
}
