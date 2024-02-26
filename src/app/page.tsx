/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="top-0 sticky z-50 w-full shadow bg-white">
        <nav className="flex flex-wrap items-center justify-between p-4 container">
          <div>
            <h1>@douglvv</h1>
          </div>
          <div>
            <ul className="list-none flex flex-row gap-2">
              <li className="list-item">
                <Button variant={"link"} asChild className="active:underline">
                  <Link href="/" className="font-semibold tracking-wider">
                    Início
                  </Link>
                </Button>
              </li>
              <li className="list-item">
                <Button variant={"link"} asChild>
                  <Link href="#sobre" className="font-semibold tracking-wider">
                    Sobre
                  </Link>
                </Button>
              </li>
              <li className="list-item">
                <Button variant={"link"} asChild>
                  <Link href="#" className="font-semibold tracking-wider">
                    Projetos
                  </Link>
                </Button>
              </li>
              <li className="list-item">
                <Button variant={"link"} asChild>
                  <Link href="#" className="font-semibold tracking-wider">
                    Contato
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section
        className="w-full h-screen flex items-center justify-center -mt-[72px]"
        id="home"
      >
        <div
          className="items-center justify-center container p-4 grid grid-cols-1
           lg:grid-cols-2 mt-8 sm:mt-4"
        >
          <div className="flex items-center justify-center sm:gap-4">
            <div className="flex flex-col gap-6 items-start">
              <h1 className="text-4xl md:text-7xl font-extrabold font-sans text-start">
                Olá, eu sou <br /> Douglas Vidal
              </h1>
              <h3 className="text-md md:text-xl font-sans font-medium text-start">
                Eu amet irure cupidatat minim veniam exercitation ipsum elit ad
                culpa pariatur. Mollit aute eiusmod culpa et sint culpa laborum
                dolor proident mollit anim reprehenderit.
              </h3>

              <div className="flex flex-row gap-4">
                <Link href={"https://www.github.com/douglvv"} target="_blank">
                  <Button
                    size={"icon"}
                    className="rounded-full shadow p-2"
                    variant={"outline"}
                    title="Github"
                  >
                    <Github />
                  </Button>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/douglvv/"}
                  target="_blank"
                >
                  <Button
                    size={"icon"}
                    className="rounded-full shadow p-2"
                    variant={"outline"}
                    title="Linkedin"
                  >
                    <Linkedin />
                  </Button>
                </Link>
                <a href={"mailto:vidaldl01@gmail.com"} target="_blank">
                  <Button
                    size={"icon"}
                    className="rounded-full shadow p-2"
                    variant={"outline"}
                    title="E-mail"
                  >
                    <Mail />
                  </Button>
                </a>
              </div>

              <Button className="uppercase" size={"lg"}>
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 md:mt-0">
            <img
              className="max-h-[500px] w-auto"
              src="hero-img.png"
              alt="Web developer coding on a laptop"
            />
          </div>
        </div>
      </section>

      <section className="w-full h-[80vh] mt-4" id="sobre">
        <div className="flex items-center justify-center container p-4">
          <h1 className="text-5xl font-bold tracking-wider text-purple-950">
            Sobre mim
          </h1>
        </div>
      </section>
    </main>
  );
}
