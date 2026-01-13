"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const blogPosts = [
    {
        title: "The Future of Artificial Intelligence in Web Development",
        excerpt: "Exploring how LLMs and generative AI are transforming the way we build and maintain modern web applications.",
        date: "Jan 12, 2026",
        readTime: "5 min read",
        slug: "future-of-ai-web-dev",
        category: "AI & ML",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Mastering Framer Motion for Advanced UI Animations",
        excerpt: "A deep dive into creating fluid, high-performance animations that wow users without sacrificing performance.",
        date: "Jan 08, 2026",
        readTime: "8 min read",
        slug: "mastering-framer-motion",
        category: "Design",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Scaling Next.js Applications to Millions of Users",
        excerpt: "Best practices for architecture, caching, and deployment strategies for enterprise-grade Next.js projects.",
        date: "Jan 03, 2026",
        readTime: "12 min read",
        slug: "scaling-nextjs-apps",
        category: "Architecture",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    }
];

export default function BlogPage() {
    return (
        <main className="bg-[var(--bg-primary)] min-h-screen">
            <Nav />

            <div className="pt-32 pb-20 px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-[var(--text-primary)] mb-6 tracking-tighter">
                            THE BLOG<span className="text-[var(--accent-primary)]">.</span>
                        </h1>
                        <p className="text-[var(--text-secondary)] text-xl max-w-2xl leading-relaxed">
                            Thoughts, tutorials, and insights on software engineering, data science, and the future of technology.
                        </p>
                    </motion.div>

                    {/* Featured Post */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/blog/${post.slug}`} className="group block h-full">
                                    <div className="glass rounded-[2rem] overflow-hidden h-full flex flex-col border border-white/5 hover:border-[var(--accent-primary)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--accent-primary)]/10 group-hover:-translate-y-2">
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-[var(--accent-primary)] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-[var(--text-tertiary)] text-xs font-bold uppercase tracking-wider mb-4">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {post.date}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {post.readTime}
                                                </div>
                                            </div>

                                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4 leading-tight group-hover:text-[var(--accent-primary)] transition-colors">
                                                {post.title}
                                            </h2>

                                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
                                                {post.excerpt}
                                            </p>

                                            <div className="mt-auto flex items-center gap-2 text-[var(--accent-primary)] font-black text-xs uppercase tracking-tighter group-hover:gap-4 transition-all">
                                                Read Story <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
