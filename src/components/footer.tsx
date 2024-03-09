import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <footer className="w-full my-8 min-h-fit text-secondary">
      <Separator className="my-4 block bg-custom-white md:hidden" />
      <div className="flex flex-wrap md:items-center items-start justify-between container text-base">
        <div>
          <Link
            href="#inicio"
            className="font-semibold tracking-wider transition duration-300
              hover:text-secondary"
          >
            <h1>@douglvv</h1>
          </Link>
        </div>

        <div>
          <ul className="list-none flex flex-col md:flex-row flex-wrap gap-2">
            <li className="list-item">
              <Button variant={"link"} asChild className="text-secondary">
                <Link
                  href="#inicio"
                  className="font-semibold tracking-wider 
                    transition duration-300"
                >
                  Início
                </Link>
              </Button>
            </li>
            <li className="list-item">
              <Button variant={"link"} asChild className="text-secondary">
                <Link
                  href="#sobre"
                  className="font-semibold tracking-wider 
                    transition duration-300"
                >
                  Sobre
                </Link>
              </Button>
            </li>
            <li className="list-item">
              <Button variant={"link"} asChild className="text-secondary">
                <Link
                  href="#projetos"
                  className="font-semibold tracking-wider 
                    transition duration-300"
                >
                  Projetos
                </Link>
              </Button>
            </li>
            <li className="list-item">
              <Button variant={"link"} asChild className="text-secondary">
                <Link
                  href="#contato"
                  className="font-semibold tracking-wider"
                >
                  Contato
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <Separator className="my-8 bg-secondary rounded" />
      </div>

      <div className="flex items-start justify-start container text-secondary/50">
        <p>© 2024 by @douglvv</p>
      </div>
    </footer>
  );
}

export default Footer;
