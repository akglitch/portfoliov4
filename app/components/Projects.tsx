"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from 'lucide-react';

const projects = [
   {
    title: "Synesthesia Restaurant",
    description:
      "A dining website reimagined as interactive art. Each dish unfolds through animated storytelling, atmospheric soundscapes, and poetic visuals—turning menu browsing into a multisensory journey.",
    technologies: ["Next.js", "Typescript", "Three.js (WebGL)", "GSAP","framer Motion"],
    image: "/synesthesia.png",
    link: "https://lamu-accra.vercel.app/",
    github: "https://github.com/akglitch/LAMU",
  },
  {
    title: "The Photograph",
    description:
      "This is a fully functional, custom-coded portfolio template designed for professional photographers. Built as a passion project",
    technologies: ["Next.js", "Javascript", "framer Motion", "Tailwind",],
    image: "/thephotograph.png",
    link: "https://thephotograph.vercel.app/",
    github: "https://github.com/akglitch/thephotograph",
  },
   {
    title: "Seds Makeover",
    description:
      "This is a performance-driven website concept built for a modern salon or spa.",
    technologies: ["Next.js", "Tyescript", "framer Motion", "Tailwind",],
    image: "/sedsmakeover.png",
    link: "https://sedsmakeover.vercel.app/",
    github: "https://github.com/akglitch/sedsmakeover",
  },
  {
    title: "Bluehut",
    description:
      "A subscription based web application for an engineering firm based in Accra,Gh",
    technologies: ["Next.js", "Typescript", "Next UI", "Tailwind"],
    image: "/bluehut.png",
    link: "https://www.bluehutsolutions.ca/",
    github: "https://github.com/akglitch/bluuhut",
  },
  {
    title: "Moverz",
    description:
      "An on-demand moving service web application connecting customers with professional movers.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Material UI"],
    image: "/moverz.png",
    link: "https://moverz.vercel.app/",
    github: "https://github.com/akglitch/moverz",
  },
  {
    title: "LiquidLounge",
    description:
      "Explore the world of fine wines and exquisite drinks. Immerse yourself in the rich flavors and aromas that make every sip a moment to cherish.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Framer Motion"],
    image: "/lounge.png",
    link: "https://llounge.vercel.app/",
    github: "https://github.com/akglitch/llounge",
  },
];

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div id="projects">
      <section className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-20 px-8 min-h-screen">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-baseline space-x-2 mb-12">
            <span className="text-[var(--accent-primary)] text-xl font-mono">05.</span>
            <h2 className="text-3xl font-semibold">Some Projects I&apos;ve Built</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass rounded-lg overflow-hidden group perspective-1000"
              >
                <div className="relative w-full h-64 bg-[var(--bg-tertiary)] overflow-hidden flex items-center justify-center p-4">
                  <div className="relative w-full h-full shadow-2xl border border-white/5 rounded-sm overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} Project`}
                      layout="fill"
                      objectFit="contain"
                      className="transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-[var(--accent-primary)]">
                      Featured Project
                    </h3>
                    <div className="flex space-x-3">
                      <Link
                        href={project.github}
                        className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                      <Link
                        href={project.link}
                        className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-[var(--bg-tertiary)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
