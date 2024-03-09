function AboutSection() {
  return (
    <section
      className="relative z-10 min-h-fit w-full py-[88px] p-4"
      id="sobre"
      // from-custom-black from-30%% to-primary/20 bg-gradient-to-b"
    >
      <div className="flex flex-col items-center justify-center container gap-2 mb-16">
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
      {/* <div
          className="absolute z-0 lg:w-72 lg:h-72 w-64 h-64 rounded-full
           mix-blend-screen filter blur-3xl animate-blob bg-purple-700/40
           lg:-top-32 lg:right-36 -top-24 -right-20"
          style={{ pointerEvents: "none" }}
        /> */}
      <div
        className="absolute z-0 lg:w-72 lg:h-72 w-64 h-64 rounded-full
          mix-blend-screen filter blur-3xl animate-blob bg-primary/40 
          animation-delay-2000 lg:-top-16 lg:right-16 -top-6 -right-32"
        style={{ pointerEvents: "none" }}
      />
    </section>
  );
}

export default AboutSection;
