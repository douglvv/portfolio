/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="top-0 sticky z-50 w-full shadow bg-transparent">
        <nav className="flex flex-wrap items-center justify-between p-4 container text-custom-white">
          <div>
            <h1 className="font-extrabold tracking-wider">@douglvv</h1>
          </div>
          <div>
            <ul className="list-none flex flex-row gap-2">
              <li className="list-item">
                <Button variant={"link"} asChild className="text-custom-white">
                  <Link href="/" className="font-semibold tracking-wider">
                    Início
                  </Link>
                </Button>
              </li>
              <li className="list-item">
                <Button variant={"link"} asChild className="text-custom-white">
                  <Link href="#sobre" className="font-semibold tracking-wider">
                    Sobre
                  </Link>
                </Button>
              </li>
              <li className="list-item">
                <Button variant={"link"} asChild className="text-custom-white">
                  <Link href="#" className="font-semibold tracking-wider">
                    Projetos
                  </Link>
                </Button>
              </li>
              <li className="list-item">
                <Button variant={"link"} asChild className="text-custom-white">
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
        className="w-full min-h-screen flex items-center justify-center -mt-[72px] bg-custom-black"
        id="home"
      >
        <div
          className="items-center justify-center container p-4 grid grid-cols-1
           lg:grid-cols-2 mt-8 sm:mt-4"
        >
          <div className="flex items-center justify-center sm:gap-4">
            <div className="flex flex-col gap-6 items-start">
              <h1 className="text-4xl md:text-7xl font-extrabold font-sans text-start text-custom-white shadow">
                Olá, eu sou <br /> Douglas Vidal
              </h1>
              <h3 className="text-secondary text-md md:text-xl font-sans font-medium text-start">
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

              <Button className="uppercase text-custom-white font-bold" size={"lg"}>
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center mx-8 mt-16 md:mt-0">
            <img
              className="max-h-[500px] w-auto"
              src="hero-img.png"
              alt="Web developer coding on a laptop"
            />
          </div>
        </div>
      </section>

      <section className="w-full h-fit -mt-[72px] z-50 py-32 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800">
        <div
          className="flex items-center justify-center container p-4"
          id="sobre"
        >
          <h1 className="mb-3 text-2xl md:text-5xl font-extrabold tracking-widest font-sans text-neutral-300">
            Sobre mim
          </h1>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16
          justify-center container p-4"
        >
          <div className="flex flex-col gap-2 items-start justify-start">
            <h3 className="text-lg md:text-xl text-neutral-200 font-semibold">
              Me conheça melhor:
            </h3>
            <p className="text-base md:text-lg text-neutral-300">
              Incididunt ad magna adipisicing velit esse do in anim ut ipsum ut.
              Tempor aliqua nisi officia nostrud esse laborum labore anim
              aliquip id fugiat tempor elit sunt. Sunt ut dolore in veniam
              occaecat nisi ex irure cupidatat ipsum.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start">
            <h3 className="text-lg md:text-xl text-neutral-200 font-semibold">
              Habilidades:
            </h3>
            <div className="flex flex-row flex-wrap gap-3">
              <Button>Teste</Button>
              <Button>Teste</Button>
              <Button>Teste</Button>
              <Button>Teste</Button>
              <Button>Teste</Button>
              <Button>Teste</Button>
              <Button>Teste</Button>
              <Button>Teste</Button>
              <Button>Teste</Button>
              <Button>Teste</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen w-full bg-neutral-300 py-8">
        <div className="container flex items-center justify-center">
          <h1 className="text-2xl md:text-5xl font-extrabold font-sans tracking-wider text-neutral-950">
            Projetos
          </h1>
        </div>
      </section>
    </main>
  );
}

// dark-purple -> #1e1f3b
// primary-purple -> #5c6cff
// custom-white -> #fafafa
// custom-black -> #000414
