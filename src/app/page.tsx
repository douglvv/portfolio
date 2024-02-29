/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="top-0 sticky z-50 w-full shadow bg-transparent backdrop-blur-lg">
        <nav className="flex flex-wrap items-center justify-between p-4 container">
          <div>
            <Link
              href="/"
              className="font-semibold tracking-wider hover:text-secondary"
            >
              <h1>@douglvv</h1>
            </Link>
          </div>
          <div>
            <ul className="list-none flex flex-row gap-2">
              <li className="list-item">
                <Button variant={"link"} asChild className="text-custom-white">
                  <Link
                    href="/"
                    className="font-semibold tracking-wider hover:text-secondary"
                  >
                    Início
                  </Link>
                </Button>
              </li>
              <li className="list-item">
                <Button variant={"link"} asChild className="text-custom-white">
                  <Link
                    href="#sobre"
                    className="font-semibold tracking-wider hover:text-secondary"
                  >
                    Sobre
                  </Link>
                </Button>
              </li>
              <li className="list-item">
                <Button variant={"link"} asChild className="text-custom-white">
                  <Link
                    href="#"
                    className="font-semibold tracking-wider hover:text-secondary"
                  >
                    Projetos
                  </Link>
                </Button>
              </li>
              <li className="list-item">
                <Button variant={"link"} asChild className="text-custom-white">
                  <Link
                    href="#"
                    className="font-semibold tracking-wider hover:text-secondary"
                  >
                    Contato
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="w-full relative h-screen flex items-center justify-center -mt-[72px]
        bg-gradient-to-br from-primary/20 from-10% to-50% to-custom-black pt-12"
        id="home"
      >
        <div
          className="items-center justify-center container p-4 grid grid-cols-1
           lg:grid-cols-2 mt-8 sm:mt-4"
        >
          <div className="flex items-center justify-center sm:gap-4">
            <div className="flex flex-col gap-6 items-center lg:items-start lg:text-start text-center ">
              <h1 className="text-4xl md:text-7xl font-extrabold font-sans  text-custom-white shadow">
                Douglas Vidal
                <br />
                {/* Douglas Vidal */}
                <p className="text-primary">Desenvolvedor Web</p>
              </h1>
              <h3 className="text-secondary text-md md:text-xl font-sans font-medium ">
                Eu amet irure cupidatat minim veniam exercitation ipsum elit ad
                culpa pariatur.
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
                variant={"outline"}
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
                rounded-full mix-blend-screen filter blur-2xl opacity-70 animate-blob"
              />
              <div
                className="absolute top-12 right-24 w-64 h-64 bg-indigo-700
                rounded-full mix-blend-screen filter blur-2xl opacity-70 animate-blob 
                animation-delay-2000"
              />
              <div
                className="absolute bottom-2 right-44 w-64 h-64 bg-purple-900
                rounded-full mix-blend-screen filter blur-2xl opacity-70 animate-blob 
                animation-delay-4000"
              />

              <img
                className="relative max-h-[450px] w-auto drop-shadow"
                src="hero-img.png"
                alt="Web developer coding on a laptop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section
        className="relative z-10 w-full h-screen mt-[72px] pb-[72px] bg-gradient-to-b
      from-custom-black to-primary/20"
      >
        <div
          className="flex flex-col items-center justify-center container gap-2 mb-4"
          id="sobre"
        >
          <h1
            className="text-2xl md:text-5xl font-extrabold tracking-widest font-sans
            uppercase bg-clip-text bg-gradient-to-r from-secondary 
            to-primary-foreground text-transparent"
          >
            Sobre mim
          </h1>
          <span className="w-6 h-1 bg-primary rounded"></span>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 
          justify-center container p-4 relative z-20"
        >
          <div className="flex flex-col gap-2 items-start justify-start">
            <h3 className="text-lg md:text-xl font-semibold">
              Me conheça melhor:
            </h3>
            <p className="text-base md:text-lg text-secondary">
              Sou um desenvolvedor web, graduado em Análise e Desenvolvimento de
              Sistemas pelo Instituto Federal de Santa Catarina no ano de 2023.
              <br />
              Atualmente buscando oportunidades para ingressar no mercado de
              trabalho e aprimorar minhas habilidades.
              <br />
              Possuo disponibilidade também para trabalhos freelance.
              <br />
              Caso tenha interesse sinta-se à vontade para
              <a href="#contato" className="text-primary">
                {" "}
                entrar em contato
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start">
            <h3 className="text-lg md:text-xl font-semibold">Habilidades:</h3>
            <div className="flex flex-row flex-wrap gap-3">
              <Button variant={"secondary"}>Javascript</Button>
              <Button variant={"secondary"}>Typescript</Button>
              <Button variant={"secondary"}>React</Button>
              <Button variant={"secondary"}>Node.js</Button>
              <Button variant={"secondary"}>Next.js</Button>
              <Button variant={"secondary"}>Tailwind</Button>
              <Button variant={"secondary"}>Socket.io</Button>
              <Button variant={"secondary"}>Docker</Button>
              <Button variant={"secondary"}>Bootsrap</Button>
              <Button variant={"secondary"}>Git</Button>
            </div>
          </div>
        </div>

        {/* Blobs for styling */}
        <div
          className="absolute z-0 top-12 right-40 w-64 h-64 bg-purple-700/35
          rounded-full mix-blend-screen filter blur-2xl animate-blob"
          style={{ pointerEvents: "none" }}
        />
        <div
          className="absolute z-0 top-8 right-24 w-64 h-64 bg-primary/35
          rounded-full mix-blend-screen filter blur-2xl animate-blob 
          animation-delay-2000"
          style={{ pointerEvents: "none" }}
        />
      </section>

      {/* Projetos */}
      <section className="h-screen w-full bg-gradient-to-b
      to-custom-black from-30% from-primary/20 py-[72px]">
        <div className="container flex items-center justify-center flex-col gap-2 mb-4">
          <h3
            className="text-2xl md:text-5xl font-extrabold tracking-widest 
              font-sans uppercase bg-clip-text bg-gradient-to-r from-secondary 
              to-primary-foreground text-transparent"
          >
            Projetos
          </h3>
          <span className="w-6 h-1 bg-primary rounded"></span>
        </div>
      </section>

      {/* Contato */}
      <section className="h-screen w-full bg-gradient-to-b
      from-custom-black from-30% to-primary/20 py-[72px]">
        <div className="container flex items-center justify-center flex-col gap-2 mb-4">
          <h3
            className="text-2xl md:text-5xl font-extrabold tracking-widest 
              font-sans uppercase bg-clip-text bg-gradient-to-r from-secondary 
              to-primary-foreground text-transparent"
          >
            Contato
          </h3>
          <span className="w-6 h-1 bg-primary rounded"></span>
        </div>
      </section>
    </main>
  );
}