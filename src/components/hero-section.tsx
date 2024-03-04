import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

function HeroSection() {
  return (
    <section
      className="w-full min-h-screen flex items-start md:items-center z-10 
      bg-gradient-to-bl from-primary/20 from-10% to-50%
      to-custom-black overflow-x-hidden justify-center"
      id="inicio"
    >
      <div className="flex items-center justify-center container p-4 md:mt-8 mt-24 relative">
        <div className="flex items-center justify-center sm:gap-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <h1
                className="text-4xl md:text-6xl lg:text-8xl font-extrabold 
                font-sans text-custom-white shadow -tracking-wider"
              >
                Portfolio
              </h1>
              <h1
                className="text-4xl md:text-6xl lg:text-8xl font-extrabold shadow
                font-sans text-custom-white -tracking-wider text-white/0 mb-4
                bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-primary"
                style={{ lineHeight: "1.2" }}
              >
                Douglas Vidal
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
        {/* <div
          className="absolute z-0 w-52 h-52 lg:w-72 lg:h-72 rounded-full
            top-1/3 -left-14 lg:-top-28 lg:-left-44 bg-purple-700/40
            mix-blend-screen filter blur-3xl md:blur-3xl animate-blob"
          style={{ pointerEvents: "none" }}
        /> */}
        <div
          className="absolute z-0 w-52 h-52 lg:w-72 lg:h-72 rounded-full
            top-[60%] -left-20 lg:-top-8 lg:-left-56  bg-primary/40
            mix-blend-screen filter blur-3xl md:blur-3xl animate-blob
            animation-delay-2000"
          style={{ pointerEvents: "none" }}
        />
      </div>
{/* 
      <Link href={"#sobre"} className="bottom-16 my-4 absolute">
        <Button
          className="animate-bounce duration-1000 rounded-full"
          variant={"outline"}
          size={"icon"}
        >
          <ChevronDown className="w-8 h-8 pt-1" />
        </Button>
      </Link> */}
    </section>
  );
}

export default HeroSection;
