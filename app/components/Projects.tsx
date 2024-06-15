import React from 'react';
import Image from 'next/image';

const projects = [
  {
    title: "Bluehut",
    description: "A subscription based web application for an engineering firm based in Accra,Gh",
    technologies: ["React", "Typescript", "Styled JSX"],
    image: "/bluehut.png",
    link: "#",
    github: "#"
  },
  {
    title: "Akproperties",
    description: "Web application for a realestate company",
    technologies: ["React", "Javascript", "Vercel"],
    image: "/img1.png", // Replace with your image path
    link: "#",
    github: "#"
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="bg-[#0a192f] text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline space-x-2 mb-12">
          <span className="text-green-400 text-xl font-mono">02.</span>
          <h2 className="text-3xl font-semibold">Some Projects I&apos;ve Built</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#112240] rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
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
                <h3 className="text-sm font-semibold text-green-400 mb-1">Featured Project</h3>
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <ul className="flex flex-wrap space-x-3 text-gray-400 text-xs mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="bg-gray-700 px-2 py-1 rounded">{tech}</li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.25c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10zM12 12h.01M8.93 8.93a5.5 5.5 0 016.14 0M9.17 15.07a5.5 5.5 0 015.66 0M7.05 12.59a8 8 0 009.9 0" />
                    </svg>
                  </a>
                  <a href={project.link} className="text-gray-400 hover:text-white transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3H9a6 6 0 00-6 6v6a6 6 0 006 6h6a6 6 0 006-6V9a6 6 0 00-6-6z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
