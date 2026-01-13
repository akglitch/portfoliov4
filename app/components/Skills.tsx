"use client";
import React from 'react';
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
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

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
        <div id="skills" className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-20 px-8 min-h-screen">
            <div className="max-w-6xl mx-auto">
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

                    {categories.map((category) => (
                        <div key={category} className="mb-12">
                            <h3 className="text-xl font-semibold mb-6 text-[var(--accent-secondary)]">
                                {category}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {skills
                                    .filter((skill) => skill.category === category)
                                    .map((skill, index) => {
                                        const Icon = skill.icon;
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                variants={itemVariants}
                                                className="glass rounded-lg p-6 hover:shadow-lg hover:shadow-[var(--accent-primary)]/20 transition-all duration-300 group"
                                            >
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center space-x-3">
                                                        <Icon className="w-8 h-8 text-[var(--accent-primary)] group-hover:scale-110 transition-transform" />
                                                        <span className="font-medium">{skill.name}</span>
                                                    </div>
                                                    <span className="text-sm text-[var(--text-secondary)]">
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                                <div className="w-full bg-[var(--bg-tertiary)] rounded-full h-2 overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full"
                                                        initial={{ width: 0 }}
                                                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                                        transition={{ duration: 1, delay: index * 0.1 }}
                                                    />
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
