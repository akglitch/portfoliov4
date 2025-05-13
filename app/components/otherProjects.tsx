import React from 'react';

const otherProjects = [
    {
        title: " Shopspaces",
        description: "I sometimes contributed to the frontend development of shopspaces.",
        technologies: ["Next.js", "Tailwind", "Material UI"],
        github: "https://github.com/akglitch/shopspaces",
        link: "https://shopspaces.vercel.app/"
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
                                    <img src="/internet.svg" alt="GitHub Logo" className="text-gray-50 h-5 w-5" />

                                    </a>
                                    <a href={project.link} className="text-gray-400 hover:text-white">
                                    <img src="/github.svg" alt="GitHub Logo" className=" text-gray-50 h-5 w-5" />
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
