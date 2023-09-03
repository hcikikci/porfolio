import Landing from "@/app/components/organisms/Landing";
import WordOfTheDay from "@/app/components/organisms/WordOfTheDay";
import Projects from "@/app/components/organisms/Projects";
import Skills from "@/app/components/organisms/Skills";
import AboutMe from "@/app/components/organisms/AboutMe";
import Contact from "@/app/components/organisms/Contact";

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
