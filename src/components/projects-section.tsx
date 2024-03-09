/* eslint-disable @next/next/no-img-element */
import { Github } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

function ProjectsSection() {
  return (
    <section
      className="relative z-10 min-h-screen w-full py-[88px] p-4"
      // to-custom-black from-30% to-70% from-primary/20 bg-gradient-to-b"
      id="projetos"
    >
      <div className="container flex items-center justify-center flex-col gap-2 mb-16">
        <h3
          className="text-2xl md:text-5xl font-extrabold tracking-widest 
              font-sans uppercase bg-clip-text bg-gradient-to-r from-secondary 
              to-primary-foreground text-transparent"
        >
          Projetos
        </h3>
        <span className="w-6 h-1 bg-primary rounded"></span>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-start justify-center
          gap-16 container"
      >
        {/* Card */}
        <div
          className="flex flex-col gap-2 rounded-lg p-4 shadow bg-gradient-to-br 
            from-transparent via-primary/20 to-transparent backdrop-blur-3xl"
        >
          <div className="flex gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            <h1 className="text-lg md:text-xl font-semibold">Cinepic</h1>
          </div>
          <div>
            <img
              src="/cinepic.png"
              alt="Preview do projeto Cinepic"
              className="rounded-md max-w-full h-auto p-2 mb-2 shadow"
            />
            <p className="text-sm md:text-base text-secondary px-2">
              Uma aplicação web projetada para fornecer aos usuários informações
              sobre filmes e séries do banco de dados do IMDb.
              <br />
              Permite que os usuários pesquisem e acessem informações detalhadas
              sobre os títulos, além de salva-los nos favoritos de suas contas
              para serem acessados posteriormente.
            </p>
          </div>
          <div className="flex flex-row gap-1 flex-wrap p-1">
            <Badge>typescript</Badge>
            <Badge>next.js</Badge>
            <Badge>clerk auth</Badge>
            <Badge>mongodb</Badge>
            <Badge>tailwind</Badge>
            <Badge>shadcn</Badge>
          </div>
          <div className="flex flex-row gap-3 flex-shrink p-1 mt-3">
            <Link href={"https://cinepic.vercel.app"} target="_blank">
              <Button
                title="Cinepic"
                variant={"outline"}
                className="bg-custom-black/40"
              >
                Live demo
              </Button>
            </Link>

            <Link href={"https://github.com/douglvv/cinepic3"} target="_blank">
              <Button
                title="Repositório"
                variant={"outline"}
                className="bg-custom-black/40"
              >
                <Github />
              </Button>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="flex flex-col gap-2 rounded-lg p-4 shadow bg-gradient-to-br 
            from-transparent via-primary/20 to-transparent backdrop-blur-3xl"
        >
          <div className="flex gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            <h1 className="text-lg md:text-xl font-semibold">URLR</h1>
          </div>
          <div>
            <img
              src="/urlr.png"
              alt="Preview do projeto URLR"
              className="rounded-md max-w-full h-auto p-2 mb-2 shadow"
            />
            <p className="text-sm md:text-base text-secondary px-2">
              Interface de usuário inspirada no conceito do Link Tree.
              <br />
              A principal funcionalidade é permitir a organização e persistência
              de links, oferecendo a capacidade de reordená-los por meio de drag
              and drop.
              <br />
              As alterações na ordem dos links são salvas utilizando Redux
              Persist para armazenamento local.
            </p>
          </div>
          <div className="flex flex-row gap-1 flex-wrap p-1">
            <Badge>react</Badge>
            <Badge>redux</Badge>
            <Badge>redux persist</Badge>
            <Badge>framer motion</Badge>
            <Badge>drag n drop</Badge>
            <Badge>tailwind</Badge>
          </div>
          <div className="flex flex-row gap-3 flex-shrink p-1 mt-3">
            <Link href={"https://urlrr.vercel.app"} target="_blank">
              <Button
                title="URLR"
                variant={"outline"}
                className="bg-custom-black/40"
              >
                Live demo
              </Button>
            </Link>

            <Link href={"https://github.com/douglvv/urlr"} target="_blank">
              <Button
                title="Repositório"
                variant={"outline"}
                className="bg-custom-black/40"
              >
                <Github />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Blobs */}
      {/* <div
          className="absolute -z-10 w-64 h-80 lg:w-72 lg:h-96 rounded-full
          bg-purple-700/40 mix-blend-screen filter blur-3xl animate-blob
            lg:-top-8 lg:left-24 top-0 -left-36"
          style={{ pointerEvents: "none" }}
        /> */}
      <div
        className="absolute -z-10 w-64 h-80 lg:w-72 lg:h-96 rounded-full
          bg-primary/40 mix-blend-screen filter blur-3xl animate-blob 
          lg:top-6 lg:left-32 top-16 -left-28"
        style={{ pointerEvents: "none" }}
      />
    </section>
  );
}

export default ProjectsSection;
