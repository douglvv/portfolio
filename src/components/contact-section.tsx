import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

// https://medium.com/@rbgadotti/valida%C3%A7%C3%A3o-de-formul%C3%A1rio-com-zod-e-react-hook-form-garantindo-a-integridade-dos-dados-nos-seus-b1802aa329f1

function ContactSection() {
  return (
    <section
      className="relative z-10 min-h-screen w-full py-[88px]"
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

      <div
        className="container grid grid-cols-1 md:grid-cols-2 justify-center
      gap-16 md:gap-8"
      >
        <div className="flex items-start justify-start mt-4">
          <div className="max-w-[450px]">
            <h1 className="text-lg md:text-2xl font-semibold mb-3">
              Por favor preencha o formulário.
            </h1>
            <h3 className="text-base md:text-lg text-secondary mb-8">
              Entrarei em contato o mais breve possível.
            </h3>
            <Link
              className="flex gap-4 items-center w-fit"
              href={"mailto:vidaldl01@gmail.com"}
            >
              <Mail className="text-secondary" />
              <h3 className="text-base md:text-lg text-secondary font-semibold">
                vidaldl01@gmail.com
              </h3>
            </Link>
          </div>
        </div>
        <div className="max-w-[650px]">
          <form className="mt-4 text-sm lg:text-base">
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                className="text-custom-white mt-1 px-4 py-2 w-full border 
                rounded-md focus:outline-none focus:ring focus:border-primary
                tracking-wider bg-primary/20"
                placeholder="Nome"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="text-custom-white mt-1 px-4 py-2 w-full border 
                rounded-md focus:outline-none focus:ring focus:border-primary
                tracking-wider bg-primary/20"
                placeholder="Endereço de email"
                required
              />
            </div>
            <div className="mb-8">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="text-custom-white mt-1 px-4 py-2 w-full border 
                rounded-md focus:outline-none focus:ring focus:border-primary
                tracking-wider bg-primary/20"
                placeholder="Deixe sua mensagem"
                required
              />
            </div>
            <Button
              className="w-full tracking-wide font-medium text-base lg:text-lg py-6 uppercase"
              variant={"default"}
              size={"lg"}
              type="submit"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>

      {/* Blobs */}
      {/* <div
          className="absolute -z-10 lg:w-72 lg:h-72 w-64 h-64 rounded-full
           mix-blend-screen filter blur-3xl animate-blob bg-purple-700/40
           lg:-top-24 lg:right-36 -top-16 -right-20"
          style={{ pointerEvents: "none" }}
        /> */}
      <div
        className="absolute -z-10 lg:w-72 lg:h-72 w-64 h-64 rounded-full
          mix-blend-screen filter blur-3xl animate-blob bg-primary/40 
          animation-delay-2000 lg:-top-10 lg:right-16 -top-0 -right-32"
        style={{ pointerEvents: "none" }}
      />
    </section>
  );
}

export default ContactSection;
