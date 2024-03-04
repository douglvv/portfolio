"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  const handleClick = () => {
    if (!isOpen && isBrowser()) {
      setIsOpen(!isOpen);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    if (isOpen) setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className="top-0 fixed z-50 w-full shadow bg-transparent 
        backdrop-blur-lg text-custom-white"
      >
        <nav className="flex flex-wrap items-center justify-between p-6 container text-lg">
          <div>
            <Link
              href="#inicio"
              className="font-semibold tracking-wider transition duration-300
              hover:text-secondary"
            >
              <h1>@douglvv</h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="list-none flex flex-row gap-2">
              <li className="list-item">
                <Button
                  variant={"link"}
                  asChild
                  className="text-custom-white text-lg"
                >
                  <Link
                    href="#inicio"
                    className="font-semibold tracking-wider hover:text-secondary 
                    transition duration-300"
                  >
                    Início
                  </Link>
                </Button>
              </li>
              <li className="list-item">
                <Button
                  variant={"link"}
                  asChild
                  className="text-custom-white text-lg"
                >
                  <Link
                    href="#sobre"
                    className="font-semibold tracking-wider hover:text-secondary 
                    transition duration-300"
                  >
                    Sobre
                  </Link>
                </Button>
              </li>
              <li className="list-item">
                <Button
                  variant={"link"}
                  asChild
                  className="text-custom-white text-lg"
                >
                  <Link
                    href="#projetos"
                    className="font-semibold tracking-wider hover:text-secondary 
                    transition duration-300"
                  >
                    Projetos
                  </Link>
                </Button>
              </li>
              <li className="list-item">
                <Button
                  variant={"link"}
                  asChild
                  className="text-custom-white text-lg"
                >
                  <Link
                    href="#contato"
                    className="font-semibold tracking-wider hover:text-secondary"
                  >
                    Contato
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            {isOpen ? (
              <button onClick={handleClick}>
                <X className="text-custom-white hover:text-secondary" />
              </button>
            ) : (
              <button onClick={handleClick}>
                <Menu className="text-custom-white hover:text-secondary" />
              </button>
            )}
          </div>
        </nav>
      </header>

      {isOpen && (
        <div
          className="md:hidden absolute h-screen w-full z-40 mb-4 py-2 px-4
          flex-col justify-center flex items-center transition duration-300
          text-center direction-normal bg-custom-black"
        >
          <ul className="list-none flex flex-col gap-12">
            <li className="list-item">
              <Button
                variant={"link"}
                asChild
                className="text-custom-white text-2xl"
                onClick={handleClick}
              >
                <Link
                  href="/"
                  className="font-semibold tracking-wider hover:text-secondary 
                    transition duration-300"
                >
                  Início
                </Link>
              </Button>
            </li>
            <li className="list-item">
              <Button
                variant={"link"}
                asChild
                className="text-custom-white text-2xl"
                onClick={handleClick}
              >
                <Link
                  href="#sobre"
                  className="font-semibold tracking-wider hover:text-secondary 
                    transition duration-300"
                >
                  Sobre
                </Link>
              </Button>
            </li>
            <li className="list-item">
              <Button
                variant={"link"}
                asChild
                className="text-custom-white text-2xl"
                onClick={handleClick}
              >
                <Link
                  href="#projetos"
                  className="font-semibold tracking-wider hover:text-secondary 
                    transition duration-300"
                >
                  Projetos
                </Link>
              </Button>
            </li>
            <li className="list-item">
              <Button
                variant={"link"}
                asChild
                className="text-custom-white text-2xl"
                onClick={handleClick}
              >
                <Link
                  href="#contato"
                  className="font-semibold tracking-wider hover:text-secondary"
                >
                  Contato
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
