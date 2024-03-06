/* eslint-disable @next/next/no-img-element */
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
