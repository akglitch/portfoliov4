"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
    {
        name: 'Data Analytics with Power BI',
        issuer: 'Ghana-India Kofi Annan Centre of Excellence in ICT (GI-KACE)',
        date: '2024', // Assuming recent, or leaving generic if unknown
        description: 'Comprehensive training in data analysis, visualization, and business intelligence using Microsoft Power BI.',
        icon: Award,
    },
    {
        name: 'Agile Scrum Methodology',
        issuer: 'Lean Icon Training and Technology',
        date: '2024',
        description: 'Mastery of Agile principles and Scrum framework for effective project management and software development.',
        icon: CheckCircle,
    }
];

export const Certifications: React.FC = () => {
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
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="certifications" className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-20 px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <div className="flex items-baseline space-x-2 mb-12">
                        <span className="text-[var(--accent-primary)] text-xl font-mono">03.</span>
                        <h2 className="text-3xl font-semibold">Certifications</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {certifications.map((cert) => {
                            const Icon = cert.icon;
                            return (
                                <motion.div
                                    key={cert.name}
                                    variants={itemVariants}
                                    className="glass rounded-xl p-8 hover:bg-[var(--bg-tertiary)] transition-colors duration-300 border border-[var(--accent-primary)]/10 hover:border-[var(--accent-primary)]/30 group"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-3 bg-[var(--accent-primary)]/10 rounded-lg group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                                            <Icon className="w-8 h-8 text-[var(--accent-primary)]" />
                                        </div>
                                        {/* Optional: Add date if needed 
                                        <span className="text-sm font-mono text-[var(--text-secondary)]">{cert.date}</span>
                                        */}
                                    </div>
                                    
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                                        {cert.name}
                                    </h3>
                                    
                                    <p className="text-[var(--accent-secondary)] font-medium mb-4">
                                        {cert.issuer}
                                    </p>
                                    
                                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                        {cert.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
