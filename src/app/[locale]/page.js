import Landing from "../components/organisms/Landing";
import WordOfTheDay from "../components/organisms/WordOfTheDay";
import Projects from "../components/organisms/Projects";
import Skills from "../components/organisms/Skills";
import AboutMe from "../components/organisms/AboutMe";
import Contact from "../components/organisms/Contact";
export const dynamic = 'force-static'

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
