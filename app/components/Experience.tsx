"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
    {
        company: 'Ministry of Youth Development and Empowerment',
        position: 'Software Developer & Website Administrator',
        period: 'Jan 2026 - Present',
        location: 'Accra, Ghana',
        description: 'Developing and maintaining the ministry\'s digital infrastructure, managing the official website, and creating software solutions to support youth development initiatives.',
        technologies: ['React', 'Node.js', 'WordPress', 'MySQL', 'REST API'],
        achievements: [
            'Managing and maintaining ministry\'s official website',
            'Developing custom software solutions for youth empowerment programs',
            'Implementing digital systems to streamline ministry operations',
        ]
    },
    {
        company: 'Lean Icon Training and Technology',
        position: 'Backend Developer',
        period: 'Jan 2026 - Present',
        location: 'Accra, Ghana',
        description: 'Building robust backend systems and APIs for training management platforms and educational technology solutions.',
        technologies: ['Django', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Docker'],
        achievements: [
            'Developing scalable backend architecture for training platforms',
            'Implementing secure authentication and authorization systems',
            'Optimizing database queries for improved performance',
        ]
    },
    {
        company: 'Bluehut Solutions',
        position: 'Software Engineer',
        period: '2023 - Present',
        location: 'Accra, Ghana',
        description: 'Building accessible, human-centered products and leading frontend development for subscription-based web applications.',
        technologies: ['Next.js', 'TypeScript', 'Next UI', 'Tailwind CSS', 'Firebase'],
        achievements: [
            'Developed and deployed subscription-based platform serving 100+ clients',
            'Implemented responsive UI components with 95% accessibility score',
            'Reduced page load times by 40% through optimization techniques',
        ]
    },
    {
        company: 'Freelance Developer',
        position: 'Full Stack Developer',
        period: '2022 - 2023',
        location: 'Remote',
        description: 'Worked with various clients to build custom web applications and e-commerce solutions.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Material UI'],
        achievements: [
            'Delivered 15+ projects on time and within budget',
            'Built custom CMS for content management',
            'Achieved 98% client satisfaction rating',
        ]
    },
    {
        company: 'Tech Startup',
        position: 'Junior Developer',
        period: '2021 - 2022',
        location: 'Kumasi, Ghana',
        description: 'Contributed to the development of mobile-first web applications and API integrations.',
        technologies: ['JavaScript', 'Python', 'Django', 'PostgreSQL', 'REST API'],
        achievements: [
            'Implemented RESTful APIs serving 10k+ daily requests',
            'Collaborated with design team on UI/UX improvements',
            'Maintained 99.9% uptime for production applications',
        ]
    },
];

export const Experience: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

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
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div id="experience" className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-20 px-8 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <div className="flex items-baseline space-x-2 mb-12">
                        <span className="text-[var(--accent-primary)] text-xl font-mono">03.</span>
                        <h2 className="text-3xl font-semibold">Experience</h2>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[var(--accent-primary)]" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto md:text-left'
                                    } md:w-1/2`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 md:translate-x-0">
                                    <motion.div
                                        whileHover={{ scale: 1.2 }}
                                        className="w-4 h-4 bg-[var(--accent-primary)] rounded-full border-4 border-[var(--bg-secondary)] pulse-glow"
                                    />
                                </div>

                                <motion.div
                                    className="glass rounded-lg p-6 ml-8 md:ml-0 hover:shadow-lg hover:shadow-[var(--accent-primary)]/20 transition-all duration-300"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                                            <h3 className="text-xl font-bold text-[var(--accent-primary)]">
                                                {exp.position}
                                            </h3>
                                            <h4 className="text-lg font-semibold">{exp.company}</h4>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4 text-sm text-[var(--text-secondary)] mb-4">
                                        <span className="flex items-center space-x-1">
                                            <Calendar />
                                            <span>{exp.period}</span>
                                        </span>
                                        <span className="flex items-center space-x-1">
                                            <Briefcase />
                                            <span>{exp.location}</span>
                                        </span>
                                    </div>

                                    <p className="text-[var(--text-secondary)] mb-4">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-xs rounded-full bg-[var(--bg-tertiary)] text-[var(--accent-primary)] border border-[var(--accent-primary)]/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => toggleExpand(index)}
                                        className="flex items-center space-x-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors mb-2"
                                    >
                                        <span className="text-sm font-medium">
                                            {expandedIndex === index ? 'Hide Details' : 'Show Details'}
                                        </span>
                                        {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
                                    </button>

                                    <motion.div
                                        initial={false}
                                        animate={{ height: expandedIndex === index ? 'auto' : 0 }}
                                        className="overflow-hidden"
                                    >
                                        <ul className="space-y-2 mt-4">
                                            {exp.achievements.map((achievement, achIndex) => (
                                                <li
                                                    key={achIndex}
                                                    className="flex items-start space-x-2 text-sm text-[var(--text-secondary)]"
                                                >
                                                    <span className="text-[var(--accent-primary)] mt-1">▹</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Experience;
