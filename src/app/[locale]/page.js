import Landing from "@/app/components/organisms/Landing";
import WordOfTheDay from "@/app/components/organisms/WordOfTheDay";
import Projects from "@/app/components/organisms/Projects";

export default function Home() {
  return (
      <main>
        <Landing/>
        <WordOfTheDay/>
        <Projects/>
      </main>
  )
}
