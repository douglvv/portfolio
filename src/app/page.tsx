/* eslint-disable @next/next/no-img-element */
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section
        className="w-full min-h-screen flex items-start md:items-center justify-center -mt-[88px] py-[88px]
        bg-gradient-to-bl from-primary/20 from-10% to-50% to-custom-black overflow-x-hidden z-10"
        id="home"
      >
        <div className="flex items-center justify-center container p-4 md:mt-8 mt-24 relative">
          <div className="flex items-center justify-center sm:gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-8">
                <h1
                  className="text-4xl md:text-6xl lg:text-8xl font-extrabold 
                  font-sans text-custom-white shadow -tracking-wider mb-4"
                  style={{ lineHeight: "1.2" }}
                >
                  Portfolio
                  <p className="text-white/0 bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-primary shadow">
                    Douglas Vidal
                  </p>
                </h1>
                <h3
                  className="text-secondary text-lg md:text-xl lg:text-2xl 
                font-sans font-medium shadow max-w-[300px] md:max-w-[450px] lg:max-w-[600px] mx-auto"
                >
                  Desenvolvedor web buscando aprender e aprimorar minhas
                  habilidades.
                </h3>
              </div>

              <div className="flex flex-row gap-4 mb-4 items-center justify-center">
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
                size={"xl"}
                variant={"outline"}
              >
                Download CV
              </Button>
            </div>
          </div>      

          {/* Blobs */}
          <div
            className="absolute z-0 w-64 h-64 lg:w-72 lg:h-72 rounded-full
            top-1/3 -left-14 lg:-top-28 lg:-left-44 bg-purple-700/40
            mix-blend-screen filter blur-3xl md:blur-3xl animate-blob"
            style={{ pointerEvents: "none" }}
          />
          <div
            className="absolute z-0 w-64 h-64 lg:w-72 lg:h-72 rounded-full
            top-[60%] -left-20 lg:-top-8 lg:-left-56  bg-primary/40
            mix-blend-screen filter blur-3xl md:blur-3xl animate-blob
            animation-delay-2000"
            style={{ pointerEvents: "none" }}
          />    
        </div>
      </section>

      {/* Sobre */}
      <section
        className="relative z-10 w-full min-h-fit mt-[88px] pb-[88px]"
        // from-custom-black from-30%% to-primary/20 bg-gradient-to-b"
      >
        <div
          className="flex flex-col items-center justify-center container gap-2 mb-16"
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
          className="grid grid-cols-1 lg:grid-cols-2 items-start gap-16 
          justify-center container p-4 relative z-20"
        >
          <div className="flex flex-col gap-2 items-start justify-start">
            <h3 className="text-base md:text-lg font-semibold">
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
              Caso tenha interesse sinta-se à vontade para{" "}
              <a
                href="#contato"
                className="text-blue-500 underline underline-offset-4"
              >
                entrar em contato
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start">
            <h3 className="text-base md:text-lg font-semibold">Habilidades:</h3>
            {/* TODO: mudar para gris com flex-shrink */}
            <div className="flex flex-row flex-grow flex-wrap gap-3">
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Typescript
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                React
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Redux
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Next.js
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Vite
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Shadcn
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Tailwind
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Bootstrap
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Styled Components
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Framer Motion
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                React Sring
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Socket.io
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Docker
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Git
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Node.js
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Express
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                MongoDB
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                MySQL
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Sequelize
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Mongoose
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Handlebars
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                API
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                JWT
              </span>
              <span
                className="py-2 px-4 rounded-lg bg-white/20 text-primary-foreground
                backdrop-blur-lg text-center hover:bg-white/40 cursor-default"
              >
                Jest
              </span>
            </div>
          </div>
        </div>

        {/* Blobs */}
        <div
          className="absolute z-0 lg:w-72 lg:h-72 w-64 h-64 rounded-full
           mix-blend-screen filter blur-3xl animate-blob bg-purple-700/40
           lg:-top-32 lg:right-36 -top-24 -right-20"
          style={{ pointerEvents: "none" }}
        />
        <div
          className="absolute z-0 lg:w-72 lg:h-72 w-64 h-64 rounded-full
          mix-blend-screen filter blur-3xl animate-blob bg-primary/40 
          animation-delay-2000 lg:-top-16 lg:right-16 -top-6 -right-32"
          style={{ pointerEvents: "none" }}
        />
      </section>

      {/* Projetos */}
      <section
        className="relative z-10 min-h-screen w-full py-[88px] p-4"
        // to-custom-black from-30% to-70% from-primary/20 bg-gradient-to-b"
        id="projetos"
      >
        <div
          className="container flex items-center justify-center flex-col gap-2
          mb-16"
        >
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
          className="grid grid-cols-1 md:grid-cols-2 items-center justify-center
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
                Uma aplicação web projetada para fornecer aos usuários
                informações sobre filmes e séries do banco de dados do IMDb.
                <br />
                Permite que os usuários pesquisem e acessem informações
                detalhadas sobre os títulos, além de salva-los nos favoritos de
                suas contas para serem acessados posteriormente.
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

              <Link
                href={"https://github.com/douglvv/cinepic3"}
                target="_blank"
              >
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
                A principal funcionalidade é permitir a organização e
                persistência de links, oferecendo a capacidade de reordená-los
                por meio de drag and drop.
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
        <div
          className="absolute -z-10 w-64 h-80 lg:w-72 lg:h-96 rounded-full
          bg-purple-700/40 mix-blend-screen filter blur-3xl animate-blob
            lg:-top-8 lg:left-24 top-0 -left-36"
          style={{ pointerEvents: "none" }}
        />
        <div
          className="absolute -z-10 w-64 h-80 lg:w-72 lg:h-96 rounded-full
          bg-primary/40 mix-blend-screen filter blur-3xl animate-blob 
          animation-delay-2000 lg:top-6 lg:left-32 top-16 -left-28"
          style={{ pointerEvents: "none" }}
        />
      </section>

      {/* Contato */}
      <section
        className="h-screen w-full py-[88px]"
        //  bg-gradient-to-b from-custom-black
        // from-40% to-80% to-primary/20"
        id="contato"
      >
        <div
          className="container flex items-center justify-center flex-col gap-2
          mb-16"
        >
          <h3
            className="text-2xl md:text-5xl font-extrabold tracking-widest 
              font-sans uppercase bg-clip-text bg-gradient-to-r from-secondary 
              to-primary-foreground text-transparent"
          >
            Contato
          </h3>
          <span className="w-6 h-1 bg-primary rounded"></span>
        </div>

        <div className="container flex flex-col items-center justify-center">
          <h1>
            Sinta-se à vontade para preencher o formulário, assim que possível
            irei retornar sua mensagem.
          </h1>
          <form className="mt-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="text-custom-black mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="text-custom-black mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Digite seu email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="text-custom-black mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Digite sua mensagem"
                required
              />
            </div>
            <Button size={"lg"} type="submit">
              Enviar
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
