import { Button } from "./ui/button";

function ContactSection() {
  return (
    <section className="relative z-10 h-screen w-full py-[88px]" id="contato">
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
