import React from 'react';

const otherProjects = [

 
    {
        title: "Contact Manager",
        description: "A web app that enables users to easily store and find contact information, such as names and addresses.",
        technologies: ["React.js", "Bootstrap",],
        github: "#",
        link: "#"
    },
    {
        title: " Shopspaces",
        description: "I sometimes contributed to the frontend development of shopspaces.",
        technologies: ["Next.js", "Tailwind", "Material UI"],
        github: "#",
        link: "#"
    }
];

const OtherProjects: React.FC = () => {
    return (
        <section className="bg-[#0a192f] text-white py-16 px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold mb-12 text-center">Other Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {otherProjects.map((project, index) => (
                        <div key={index} className="relative bg-[#112240] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]">
                            <div className="flex items-center justify-between mb-4">
                                <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18m-9 5h9" />
                                </svg>
                                <div className="flex space-x-4">
                                    <a href={project.github} className="text-gray-400 hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.25c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10zM12 12h.01M8.93 8.93a5.5 5.5 0 016.14 0M9.17 15.07a5.5 5.5 0 015.66 0M7.05 12.59a8 8 0 009.9 0" />
                                        </svg>
                                    </a>
                                    <a href={project.link} className="text-gray-400 hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3H9a6 6 0 00-6 6v6a6 6 0 006 6h6a6 6 0 006-6V9a6 6 0 00-6-6z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <h3 className="text-md text-green-400 font-bold mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                            <ul className="flex space-x-4 text-gray-400 text-xs">
                                {project.technologies.map((tech, techIndex) => (
                                    <li key={techIndex}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherProjects;
