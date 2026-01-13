"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function BlogPost({ params }: { params: { slug: string } }) {
    const router = useRouter();

    // In a real app, you'd fetch based on slug
    const post = {
        title: params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h3>The Current Landscape</h3>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <blockquote>
        "The best way to predict the future is to create it." - Peter Drucker
      </blockquote>

      <h3>Key Takeaways</h3>
      <ul>
        <li>Efficiency in development cycles increases by 40%.</li>
        <li>User experience reaches new heights of personalization.</li>
        <li>Scalability becomes a native feature rather than an afterthought.</li>
      </ul>

      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    `,
        date: "Jan 12, 2026",
        readTime: "5 min read",
        category: "Insights",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
    };

    return (
        <main className="bg-[var(--bg-primary)] min-h-screen">
            <Nav />

            <div className="pt-32 pb-20 px-4">
                <article className="max-w-4xl mx-auto">
                    {/* Back Button */}
                    <motion.button
                        onClick={() => router.back()}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] font-bold text-xs uppercase mb-12 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
                    </motion.button>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                                {post.category}
                            </span>
                            <div className="h-px flex-grow bg-white/10" />
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-[var(--text-primary)] leading-tight mb-8 tracking-tighter">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-between gap-6 border-y border-white/5 py-8">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                                    <Calendar className="w-4 h-4" />
                                    {post.date}
                                </div>
                                <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime}
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="p-3 bg-white/5 rounded-2xl hover:bg-[var(--accent-primary)]/20 transition-all">
                                    <Share2 className="w-5 h-5 text-[var(--accent-primary)]" />
                                </button>
                                <button className="p-3 bg-white/5 rounded-2xl hover:bg-[var(--accent-primary)]/20 transition-all">
                                    <Bookmark className="w-5 h-5 text-[var(--accent-primary)]" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-[3rem] overflow-hidden mb-16 shadow-2xl border border-white/5"
                    >
                        <img src={post.image} alt={post.title} className="w-full aspect-video object-cover" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-[var(--text-primary)] prose-headings:font-black prose-headings:tracking-tighter
              prose-p:text-[var(--text-secondary)] prose-p:leading-relaxed
              prose-strong:text-[var(--accent-primary)]
              prose-blockquote:border-l-[var(--accent-primary)] prose-blockquote:bg-[var(--accent-primary)]/5 prose-blockquote:py-2 prose-blockquote:rounded-r-2xl prose-blockquote:italic
              prose-ul:text-[var(--text-secondary)]
              "
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>

            <Footer />
        </main>
    );
}
