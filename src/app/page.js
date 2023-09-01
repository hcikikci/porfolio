import Image from 'next/image'
import Button from "@/app/components/atoms/Inputs/Button";
import { Fira_Code } from 'next/font/google'
import Input from "@/app/components/atoms/Inputs/Input";

// If loading a variable font, you don't need to specify the font weight
const firaCode = Fira_Code({ subsets: ['latin'] })
export default function Home() {
  return (
      <main className={firaCode.className}>
        <h1>Home</h1>
        <Button>
            Live &lt;~&gt;
        </Button>
          <Input label={"Deneme"}/>
      </main>
  )
}
