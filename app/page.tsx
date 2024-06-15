import Image from "next/image";

import Hero from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import OtherProjects from "./components/otherProjects";
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";



export default function Home() {
  return (
    <main className="">
  <Hero />
  <About />
 <Projects />
 <OtherProjects />
 <Contact />
 <Footer />
    </main>
  );
}
