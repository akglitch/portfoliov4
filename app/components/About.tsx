"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const About: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const technologies = [
        "React", "JavaScript", "Python",
        "Express Js", "MongoDb", "NodeJs",
        "Power BI", "TensorFlow",
        "Git", "GitHub",
        "Pandas", "Numpy"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div id='about'>
            <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] pb-20 pt-20 p-8 min-h-screen">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="max-w-6xl mx-auto"
                >
                    <motion.div variants={itemVariants} className="flex items-baseline space-x-2 mb-8">
                        <span className="text-[var(--accent-primary)] text-xl font-mono">01.</span>
                        <h1 className="text-3xl font-semibold">About Me</h1>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div variants={itemVariants} className="md:col-span-2">
                            <p className="text-base leading-relaxed mb-4 text-[var(--text-secondary)]">
                                Hello! I&apos;m Kwaku, a Software Developer based in Accra, Ghana.
                            </p>
                            <p className="text-base leading-relaxed mb-4 text-[ var(--text-secondary)]">
                                I enjoy creating beautiful and reliable applications for the internet. My goal is to always build scalable products and performant experiences.
                            </p>
                            <p className="text-base leading-relaxed mb-4 text-[var(--text-secondary)]">
                                Here are a few technologies I&apos;ve been working with recently:
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="md:col-span-1">
                            <div className="grid grid-cols-2 gap-3 text-sm">
                                {technologies.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="flex items-center glass p-3 rounded-lg shadow-md hover:shadow-lg hover:shadow-[var(--accent-primary)]/20 transition-all"
                                    >
                                        <ChevronRight className="w-4 h-4 text-[var(--accent-primary)] mr-2" />
                                        <p className="text-[var(--text-primary)]">{tech}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

