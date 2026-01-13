"use client";
import { NextUIProvider } from "@nextui-org/react";
import Hero from "./components/Hero";
import { About } from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { Projects } from "./components/Projects";
import OtherProjects from "./components/otherProjects";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="relative">
        <CustomCursor />
        <ScrollProgress />
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <OtherProjects />
        <Contact />
        <Footer />
        <ThemeToggle />
      </main>
    </NextUIProvider>
  );
}

