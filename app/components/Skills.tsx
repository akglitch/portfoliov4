"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    Code2,
    Database,
    Server,
    Cpu,
    Terminal,
    Brain,
    Layout,
    Palette,
    Layers,
    Zap,
    GitBranch,
    Github,
    BarChart3,
    PieChart,
    Sigma
} from 'lucide-react';

const skills = [
    { name: 'React', icon: Layers, level: 90, category: 'Frontend' },
    { name: 'Next.js', icon: Zap, level: 85, category: 'Frontend' },
    { name: 'TypeScript', icon: Code2, level: 80, category: 'Frontend' },
    { name: 'JavaScript', icon: Code2, level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: Palette, level: 85, category: 'Frontend' },
    { name: 'Node.js', icon: Server, level: 85, category: 'Backend' },
    { name: 'Express.js', icon: Server, level: 80, category: 'Backend' },
    { name: 'MongoDB', icon: Database, level: 75, category: 'Backend' },
    { name: 'Firebase', icon: Database, level: 70, category: 'Backend' },
    { name: 'Python', icon: Terminal, level: 75, category: 'Languages' },
    { name: 'TensorFlow', icon: Brain, level: 65, category: 'AI/ML' },
    { name: 'PyTorch', icon: Brain, level: 60, category: 'AI/ML' },
    { name: 'Scikit-learn', icon: Cpu, level: 70, category: 'Data Science' },
    { name: 'Pandas', icon: BarChart3, level: 80, category: 'Data Science' },
    { name: 'NumPy', icon: Sigma, level: 75, category: 'Data Science' },
    { name: 'Matplotlib', icon: PieChart, level: 70, category: 'Data Science' },
    { name: 'Git', icon: GitBranch, level: 85, category: 'Tools' },
    { name: 'GitHub', icon: Github, level: 85, category: 'Tools' },
];

const categories = ['Frontend', 'Backend', 'Languages', 'Data Science', 'AI/ML', 'Tools'];

export const Skills: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const itemVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            },
        },
    };

    const filteredSkills = activeCategory === 'All'
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <div id="skills" className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-20 px-8 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <div className="flex items-baseline space-x-2 mb-12">
                        <span className="text-[var(--accent-primary)] text-xl font-mono">02.</span>
                        <h2 className="text-3xl font-semibold">Skills & Technologies</h2>
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap gap-3 mb-12 justify-center">
                        <button
                            onClick={() => setActiveCategory('All')}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === 'All'
                                    ? 'bg-[var(--accent-primary)] text-white shadow-lg shadow-[var(--accent-primary)]/30'
                                    : 'glass hover:bg-[var(--bg-tertiary)]'
                                }`}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'bg-[var(--accent-primary)] text-white shadow-lg shadow-[var(--accent-primary)]/30'
                                        : 'glass hover:bg-[var(--bg-tertiary)]'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Skills Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        layout
                    >
                        {filteredSkills.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <motion.div
                                    key={skill.name}
                                    variants={itemVariants}
                                    layout
                                    className="glass rounded-xl p-6 hover:shadow-2xl hover:shadow-[var(--accent-primary)]/20 transition-all duration-300 group relative overflow-hidden"
                                >
                                    {/* Gradient overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/0 to-[var(--accent-secondary)]/0 group-hover:from-[var(--accent-primary)]/5 group-hover:to-[var(--accent-secondary)]/5 transition-all duration-300 rounded-xl" />

                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="p-3 bg-[var(--accent-primary)]/10 rounded-lg group-hover:bg-[var(--accent-primary)]/20 group-hover:scale-110 transition-all duration-300">
                                                <Icon className="w-7 h-7 text-[var(--accent-primary)]" />
                                            </div>
                                            <span className="text-sm font-mono text-[var(--text-secondary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        <h3 className="font-semibold text-lg mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                                            {skill.name}
                                        </h3>

                                        <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full"
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                                transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                                            />
                                        </div>

                                        <span className="text-xs text-[var(--text-tertiary)] mt-2 block">
                                            {skill.category}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
