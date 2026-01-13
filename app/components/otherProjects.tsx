"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

const otherProjects = [
    {
        title: "Shopspaces",
        description: "I sometimes contributed to the frontend development of shopspaces.",
        technologies: ["Next.js", "Tailwind", "Material UI"],
        github: "https://github.com/akglitch/shopspaces",
        link: "https://shopspaces.vercel.app/"
    }
];

const OtherProjects: React.FC = () => {
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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-16 px-8">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="max-w-6xl mx-auto"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl font-semibold mb-12 text-center"
                >
                    Other Notable Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="glass p-6 rounded-lg shadow-lg transition-all hover:shadow-xl hover:shadow-[var(--accent-primary)]/20"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <svg
                                    className="h-10 w-10 text-[var(--accent-primary)]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 7h18M3 12h18m-9 5h9"
                                    />
                                </svg>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl text-[var(--accent-primary)] font-bold mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs text-[var(--text-tertiary)]"
                                    >
                                        {tech}
                                        {techIndex < project.technologies.length - 1 && ' •'}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default OtherProjects;
