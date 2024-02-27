/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="top-0 sticky z-50 w-full shadow bg-transparent backdrop-blur-lg">
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
        className="w-full relative h-screen flex items-center justify-center -mt-[72px]
        bg-custom-black"
        // bg-gradient-to-br from-primary/20 from-10% to-50% to-custom-black
        // "
        id="home"
      >
        <div
          className="items-center justify-center container p-4 grid grid-cols-1
           lg:grid-cols-2 mt-8 sm:mt-4"
        >
          <div className="flex items-center justify-center sm:gap-4">
            <div className="flex flex-col gap-6 items-start">
              <h1 className="text-4xl md:text-7xl font-extrabold font-sans text-start text-custom-white shadow">
                Olá, eu sou
                <br />
                <p className="text-primary">Douglas Vidal</p>
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

              <Button
                className="uppercase text-custom-white font-bold"
                size={"lg"}
              >
                Download CV
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center mx-8 mt-16 md:mt-0">
            <div className="relative">
              {/* Blurry blobs */}
              <div
                className="absolute top-6 left-20 w-64 h-64 bg-primary 
                rounded-full mix-blend-screen filter blur-2xl opacity-80 animate-blob"
              />
              <div
                className="absolute top-12 right-24 w-64 h-64 bg-indigo-700
                rounded-full mix-blend-screen filter blur-2xl opacity-80 animate-blob 
                animation-delay-2000"
              />
              <div
                className="absolute bottom-2 right-44 w-64 h-64 bg-purple-800
                rounded-full mix-blend-screen filter blur-2xl opacity-80 animate-blob 
                animation-delay-4000"
              />

              <img
                className="relative max-h-[450px] w-auto"
                src="hero-img.png"
                alt="Web developer coding on a laptop"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-screen -mt-[72px] z-50 py-24 bg-primary text-primary-foreground">
        <div className="flex items-center justify-center container" id="sobre">
          <h1 className="mb-4 text-2xl md:text-5xl font-extrabold tracking-widest font-sans uppercase">
            Sobre mim
          </h1>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16
          justify-center container p-4"
        >
          <div className="flex flex-col gap-2 items-start justify-start">
            <h3 className="text-lg md:text-xl font-semibold">
              Me conheça melhor:
            </h3>
            <p className="text-base md:text-lg text-secondary">
              Incididunt ad magna adipisicing velit esse do in anim ut ipsum ut.
              Tempor aliqua nisi officia nostrud esse laborum labore anim
              aliquip id fugiat tempor elit sunt. Sunt ut dolore in veniam
              occaecat nisi ex irure cupidatat ipsum.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start">
            <h3 className="text-lg md:text-xl font-semibold">Habilidades:</h3>
            <div className="flex flex-row flex-wrap gap-3">
              <Button variant={"secondary"}>Teste</Button>
              <Button variant={"secondary"}>Teste</Button>
              <Button variant={"secondary"}>Teste</Button>
              <Button variant={"secondary"}>Teste</Button>
              <Button variant={"secondary"}>Teste</Button>
              <Button variant={"secondary"}>Teste</Button>
              <Button variant={"secondary"}>Teste</Button>
              <Button variant={"secondary"}>Teste</Button>
              <Button variant={"secondary"}>Teste</Button>
              <Button variant={"secondary"}>Teste</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen w-full py-8">
        <div className="container flex items-center justify-center">
          <h1 className="text-2xl md:text-5xl font-extrabold font-sans tracking-wider">
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
