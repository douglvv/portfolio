"use client"
import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import ContactForm from "./contact-form";
import { motion } from "framer-motion";

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
        <motion.h3
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 33,
            duration: 0.5,
            bounce: 0.5,
          }}
          viewport={{ once: true }}
          className="text-2xl md:text-5xl font-extrabold tracking-widest 
              font-sans uppercase bg-clip-text bg-gradient-to-r from-secondary 
              to-primary-foreground text-transparent"
        >
          Contato
        </motion.h3>
        <motion.span
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 33,
            duration: 0.5,
            bounce: 0.5,
            delay: 0.1,
          }}
          viewport={{ once: true }}
          className="w-6 h-1 bg-primary rounded"
        ></motion.span>
      </div>

      <div
        className="container grid grid-cols-1 md:grid-cols-2 justify-center
      gap-16 md:gap-8"
      >
        <div className="flex items-start justify-start mt-4">
          <div className="max-w-[450px]">
            <h1 className="text-lg md:text-2xl font-semibold mb-2">
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
              <h3 className="text-base md:text-lg text-secondary">
                vidaldl01@gmail.com
              </h3>
            </Link>
          </div>
        </div>
        <div className="max-w-[650px]">
          <ContactForm />
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
