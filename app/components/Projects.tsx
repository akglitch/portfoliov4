import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Bluehut",
    description:
      "A subscription based web application for an engineering firm based in Accra,Gh",
    technologies: ["Next.js", "Typescript", "Next UI","Tailwind"],
    image: "/bluehut.png",
    link: "https://www.bluehutsolutions.ca/",
    github: "https://github.com/akglitch/bluuhut",
  },
{
  title: "Moverz",
  description: "An on-demand moving service web application connecting customers with professional movers.",
  technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS", "Material UI"],
  image: "/moverz.png", 
  link: "https://moverz.vercel.app/",
  github: "https://github.com/akglitch/moverz"
},

{
  title: "LiquidLounge",
  description: "Explore the world of fine wines and exquisite drinks. Immerse yourself in the rich flavors and aromas that make every sip a moment to cherish.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Framer Motion"],
  image: "/lounge.png",
  link: "https://llounge.vercel.app/",
  github: "https://github.com/akglitch/llounge"
}


];

export const Projects: React.FC = () => {
  return (
    <div id="projects">
      <section className="bg-[#0a192f] text-white py-16 px-8 sm:min-h-screen lg:min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline space-x-2 mb-12">
            <span className="text-green-400 text-xl font-mono">02.</span>
            <h2 className="text-3xl font-semibold">
              Some Projects I&apos;ve Built
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#112240] rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={project.image}
                    alt={`${project.title} Project`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-green-400 mb-1">
                    Featured Project
                  </h3>
                  <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                  <p className="text-sm text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap space-x-3 text-gray-400 text-xs mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="bg-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-4">
                    <Link
                      href={project.link}
                      className="text-gray-400  hover:text-white transition-colors duration-200"
                    >
                     <img src="/github.svg" alt="Internet logo" className="text-gray-50 h-5 w-5" />

                    </Link>
                      <Link
                      href={project.github}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                     <img src="/internet.svg " alt="GitHub Logo" className=" text-gray-50 h-5 w-5" />

                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
