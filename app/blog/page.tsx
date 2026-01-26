"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const blogPosts = [
    {
        title: "The Rise of Large Language Models: Transforming Software Development",
        excerpt: "Exploring how LLMs like GPT-4, Claude, and Gemini are revolutionizing code generation, debugging, and the entire software development lifecycle.",
        date: "Jan 24, 2026",
        readTime: "8 min read",
        slug: "rise-of-llms-software-dev",
        category: "AI & ML",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Building Scalable APIs with Django REST Framework",
        excerpt: "A comprehensive guide to designing, building, and deploying production-ready RESTful APIs using Django, PostgreSQL, and modern DevOps practices.",
        date: "Jan 20, 2026",
        readTime: "12 min read",
        slug: "scalable-apis-django",
        category: "Backend",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Data Visualization Mastery with Power BI and Python",
        excerpt: "Learn how to create compelling, interactive dashboards that tell data stories using Power BI, Pandas, and advanced visualization techniques.",
        date: "Jan 18, 2026",
        readTime: "10 min read",
        slug: "data-viz-powerbi-python",
        category: "Data Science",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Next.js 15: Server Components and the Future of React",
        excerpt: "Deep dive into React Server Components, streaming SSR, and how Next.js 15 is reshaping modern web application architecture.",
        date: "Jan 15, 2026",
        readTime: "9 min read",
        slug: "nextjs-15-server-components",
        category: "Frontend",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Agile Scrum in the AI Era: Adapting to Rapid Innovation",
        excerpt: "How traditional Agile methodologies are evolving to accommodate AI-assisted development, automated testing, and faster iteration cycles.",
        date: "Jan 12, 2026",
        readTime: "7 min read",
        slug: "agile-scrum-ai-era",
        category: "Project Management",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Machine Learning Model Deployment: From Jupyter to Production",
        excerpt: "Best practices for taking ML models from experimentation to production using Docker, Kubernetes, and MLOps pipelines.",
        date: "Jan 10, 2026",
        readTime: "11 min read",
        slug: "ml-model-deployment",
        category: "AI & ML",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "TypeScript Best Practices for Enterprise Applications",
        excerpt: "Advanced TypeScript patterns, type safety strategies, and architectural decisions for building maintainable large-scale applications.",
        date: "Jan 08, 2026",
        readTime: "10 min read",
        slug: "typescript-enterprise-best-practices",
        category: "Frontend",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "The Data Science Pipeline: From Collection to Insights",
        excerpt: "A complete walkthrough of modern data science workflows using Pandas, NumPy, Scikit-learn, and visualization libraries.",
        date: "Jan 05, 2026",
        readTime: "13 min read",
        slug: "data-science-pipeline",
        category: "Data Science",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Microservices Architecture with Node.js and Docker",
        excerpt: "Building, containerizing, and orchestrating microservices using Node.js, Express, Docker, and Kubernetes for cloud-native applications.",
        date: "Jan 03, 2026",
        readTime: "14 min read",
        slug: "microservices-nodejs-docker",
        category: "Backend",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "AI-Powered Code Review: Tools and Techniques",
        excerpt: "Leveraging AI assistants like GitHub Copilot, Amazon CodeWhisperer, and custom LLMs to improve code quality and catch bugs early.",
        date: "Dec 30, 2025",
        readTime: "6 min read",
        slug: "ai-powered-code-review",
        category: "AI & ML",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Responsive Design in 2026: Beyond Mobile-First",
        excerpt: "Modern responsive design strategies including container queries, fluid typography, and designing for foldable devices and AR glasses.",
        date: "Dec 28, 2025",
        readTime: "8 min read",
        slug: "responsive-design-2026",
        category: "Design",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Database Optimization: MongoDB vs PostgreSQL Performance",
        excerpt: "Comparative analysis of NoSQL and SQL databases, indexing strategies, query optimization, and when to use each for maximum performance.",
        date: "Dec 25, 2025",
        readTime: "12 min read",
        slug: "database-optimization-mongo-postgres",
        category: "Backend",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800"
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
                            Thoughts, tutorials, and insights on AI, software engineering, data science, and the future of technology.
                        </p>
                    </motion.div>

                    {/* Blog Posts Grid */}
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
