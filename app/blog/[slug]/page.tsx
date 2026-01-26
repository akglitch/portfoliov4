"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// Blog post content database
const blogContent: Record<string, any> = {
    "rise-of-llms-software-dev": {
        title: "The Rise of Large Language Models: Transforming Software Development",
        date: "Jan 24, 2026",
        readTime: "8 min read",
        category: "AI & ML",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
        content: `
            <p>Large Language Models (LLMs) have fundamentally transformed how we approach software development. Tools like GPT-4, Claude, and Gemini are no longer just experimental technologies—they're production-ready assistants that enhance developer productivity and code quality.</p>

            <h3>The Impact on Development Workflows</h3>
            <p>Modern LLMs excel at code generation, debugging, documentation, and even architectural planning. GitHub Copilot, powered by OpenAI's Codex, has shown that AI pair programming can increase developer productivity by 55% according to recent studies. These tools understand context, suggest optimal solutions, and can refactor legacy code with remarkable accuracy.</p>

            <blockquote>"AI won't replace developers, but developers who use AI will replace those who don't." - Industry Consensus</blockquote>

            <h3>Key Applications in Software Engineering</h3>
            <ul>
                <li><strong>Code Generation:</strong> LLMs can generate boilerplate code, implement algorithms, and create entire functions from natural language descriptions.</li>
                <li><strong>Bug Detection:</strong> Advanced models can identify security vulnerabilities, logic errors, and performance bottlenecks before code reaches production.</li>
                <li><strong>Documentation:</strong> Automatic generation of comprehensive documentation, including docstrings, README files, and API references.</li>
                <li><strong>Code Review:</strong> AI-powered code reviews that check for best practices, style consistency, and potential issues.</li>
            </ul>

            <h3>The Future of AI-Assisted Development</h3>
            <p>As LLMs continue to evolve, we're seeing the emergence of specialized models trained on specific programming languages and frameworks. The integration of AI into IDEs, CI/CD pipelines, and development workflows is becoming seamless. However, the human element remains crucial—developers must understand the code generated and make informed decisions about implementation.</p>

            <p>The key to success in this new era is learning to effectively collaborate with AI tools while maintaining strong fundamentals in software engineering principles, architecture, and problem-solving.</p>
        `
    },
    "scalable-apis-django": {
        title: "Building Scalable APIs with Django REST Framework",
        date: "Jan 20, 2026",
        readTime: "12 min read",
        category: "Backend",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
        content: `
            <p>Django REST Framework (DRF) is a powerful toolkit for building Web APIs in Python. When combined with proper architectural patterns and optimization techniques, it can handle millions of requests while maintaining clean, maintainable code.</p>

            <h3>Core Principles for Scalable APIs</h3>
            <p>Building scalable APIs requires careful consideration of database queries, caching strategies, serialization efficiency, and proper use of Django's ORM. The key is to minimize database hits, leverage caching layers, and implement pagination for large datasets.</p>

            <h3>Essential Optimization Techniques</h3>
            <ul>
                <li><strong>Database Optimization:</strong> Use select_related() and prefetch_related() to reduce N+1 queries. Implement database indexing on frequently queried fields.</li>
                <li><strong>Caching Strategies:</strong> Implement Redis for caching frequently accessed data. Use Django's cache framework for view-level and template-level caching.</li>
                <li><strong>Serializer Optimization:</strong> Use SerializerMethodField sparingly, implement custom serializers for complex data structures, and leverage DRF's built-in performance features.</li>
                <li><strong>Pagination:</strong> Implement cursor-based pagination for large datasets to improve performance and user experience.</li>
            </ul>

            <blockquote>"Premature optimization is the root of all evil, but knowing when to optimize is the mark of a great engineer." - Donald Knuth (adapted)</blockquote>

            <h3>Authentication and Security</h3>
            <p>Implement JWT (JSON Web Tokens) for stateless authentication, use Django's built-in security features, and always validate and sanitize user input. Enable CORS properly and implement rate limiting to prevent abuse.</p>

            <h3>Deployment Best Practices</h3>
            <p>Use Gunicorn or uWSGI as the WSGI server, implement Nginx as a reverse proxy, containerize with Docker for consistency across environments, and use PostgreSQL for production databases. Monitor performance with tools like New Relic or Datadog.</p>
        `
    },
    "data-viz-powerbi-python": {
        title: "Data Visualization Mastery with Power BI and Python",
        date: "Jan 18, 2026",
        readTime: "10 min read",
        category: "Data Science",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        content: `
            <p>Effective data visualization transforms raw data into actionable insights. Power BI, combined with Python's data manipulation capabilities, creates a powerful ecosystem for building interactive, insightful dashboards that drive business decisions.</p>

            <h3>The Power of Integration</h3>
            <p>Power BI's native integration with Python allows data scientists to leverage libraries like Pandas for data manipulation, Matplotlib and Seaborn for custom visualizations, and Scikit-learn for predictive analytics—all within the Power BI environment.</p>

            <h3>Best Practices for Dashboard Design</h3>
            <ul>
                <li><strong>Know Your Audience:</strong> Design dashboards based on user needs and technical proficiency. Executives need high-level KPIs, while analysts need detailed drill-down capabilities.</li>
                <li><strong>Visual Hierarchy:</strong> Use size, color, and position to guide attention to the most important metrics. Follow the F-pattern or Z-pattern for layout.</li>
                <li><strong>Color Psychology:</strong> Use color purposefully—green for positive trends, red for alerts, and neutral colors for context. Ensure accessibility with colorblind-friendly palettes.</li>
                <li><strong>Interactivity:</strong> Implement filters, slicers, and drill-through pages to enable exploration without overwhelming users.</li>
            </ul>

            <blockquote>"The greatest value of a picture is when it forces us to notice what we never expected to see." - John Tukey</blockquote>

            <h3>Python Integration Techniques</h3>
            <p>Use Python scripts in Power Query for advanced data transformation, create custom visuals using Matplotlib or Plotly, implement machine learning models for predictive analytics, and automate report generation with Python APIs.</p>

            <h3>Performance Optimization</h3>
            <p>Optimize DAX queries for faster calculations, use aggregated tables for large datasets, implement incremental refresh for time-series data, and leverage DirectQuery vs Import mode appropriately based on data size and refresh requirements.</p>
        `
    },
    "nextjs-15-server-components": {
        title: "Next.js 15: Server Components and the Future of React",
        date: "Jan 15, 2026",
        readTime: "9 min read",
        category: "Frontend",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200",
        content: `
            <p>Next.js 15 represents a paradigm shift in how we build React applications. React Server Components (RSC) fundamentally change the mental model of component architecture, offering unprecedented performance and developer experience improvements.</p>

            <h3>Understanding Server Components</h3>
            <p>Server Components render on the server and send only the necessary HTML to the client, dramatically reducing JavaScript bundle sizes. They can directly access backend resources like databases and file systems without exposing sensitive data to the client.</p>

            <h3>Key Benefits and Use Cases</h3>
            <ul>
                <li><strong>Zero Client-Side JavaScript:</strong> Server Components don't add to the client bundle, resulting in faster initial page loads and better performance on low-powered devices.</li>
                <li><strong>Direct Backend Access:</strong> Query databases, read files, and access environment variables directly in your components without API routes.</li>
                <li><strong>Automatic Code Splitting:</strong> Next.js automatically splits code at the component level, loading only what's needed for each page.</li>
                <li><strong>Streaming and Suspense:</strong> Stream content as it becomes available, improving perceived performance with progressive rendering.</li>
            </ul>

            <blockquote>"The future of React is server-first, but client-interactive where it matters." - React Core Team</blockquote>

            <h3>Migration Strategies</h3>
            <p>Start by identifying components that don't need interactivity—these are prime candidates for Server Components. Use the 'use client' directive only for components that require browser APIs, event handlers, or state management. Gradually refactor your application, testing thoroughly at each step.</p>

            <h3>Performance Implications</h3>
            <p>Applications using Server Components typically see 30-50% reduction in JavaScript bundle sizes, faster Time to Interactive (TTI), and improved Core Web Vitals scores. The streaming capabilities enable progressive enhancement, showing content to users faster than traditional SSR.</p>
        `
    },
    "agile-scrum-ai-era": {
        title: "Agile Scrum in the AI Era: Adapting to Rapid Innovation",
        date: "Jan 12, 2026",
        readTime: "7 min read",
        category: "Project Management",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
        content: `
            <p>The integration of AI tools into software development has accelerated delivery cycles and changed team dynamics. Agile Scrum methodologies must evolve to accommodate AI-assisted development while maintaining the core principles of collaboration, iteration, and continuous improvement.</p>

            <h3>AI's Impact on Sprint Planning</h3>
            <p>AI tools like GitHub Copilot and ChatGPT have reduced the time required for certain development tasks by 40-60%. This means sprint velocity calculations need recalibration, and story point estimations must account for AI assistance. Teams should track which tasks benefit most from AI to improve future planning accuracy.</p>

            <h3>Adapting Scrum Ceremonies</h3>
            <ul>
                <li><strong>Sprint Planning:</strong> Include discussions about which AI tools will be used for specific tasks. Estimate stories considering AI assistance but maintain buffer for review and refinement.</li>
                <li><strong>Daily Standups:</strong> Address AI-related blockers, such as tool limitations or unexpected AI-generated code issues. Share successful AI prompts and techniques.</li>
                <li><strong>Sprint Reviews:</strong> Demonstrate not just the feature, but how AI tools contributed to its development. Discuss quality metrics for AI-generated code.</li>
                <li><strong>Retrospectives:</strong> Evaluate AI tool effectiveness, discuss ethical considerations, and identify opportunities for better AI integration.</li>
            </ul>

            <blockquote>"Agile is not about going fast. It's about being able to change direction quickly when needed." - Modern Agile Principle</blockquote>

            <h3>Quality Assurance in the AI Era</h3>
            <p>AI-generated code requires rigorous review processes. Implement pair programming where one developer uses AI tools while another reviews in real-time. Establish code review guidelines specifically for AI-generated code, focusing on security, performance, and maintainability.</p>

            <h3>Ethical Considerations</h3>
            <p>Teams must address licensing concerns with AI-generated code, ensure transparency about AI usage with stakeholders, maintain skill development despite AI assistance, and establish guidelines for when to use AI versus traditional development approaches.</p>
        `
    },
    "ml-model-deployment": {
        title: "Machine Learning Model Deployment: From Jupyter to Production",
        date: "Jan 10, 2026",
        readTime: "11 min read",
        category: "AI & ML",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200",
        content: `
            <p>The journey from a Jupyter notebook to a production ML system is complex and fraught with challenges. Understanding MLOps principles and deployment strategies is crucial for data scientists and ML engineers who want their models to create real-world impact.</p>

            <h3>The MLOps Pipeline</h3>
            <p>MLOps combines machine learning, DevOps, and data engineering to create reproducible, scalable ML systems. The pipeline includes data versioning, model training, validation, deployment, monitoring, and retraining—all automated and version-controlled.</p>

            <h3>Deployment Strategies</h3>
            <ul>
                <li><strong>Containerization:</strong> Use Docker to package models with all dependencies, ensuring consistency across development, staging, and production environments.</li>
                <li><strong>API Deployment:</strong> Wrap models in REST or gRPC APIs using frameworks like FastAPI or Flask. Implement proper authentication, rate limiting, and error handling.</li>
                <li><strong>Batch vs Real-Time:</strong> Choose batch processing for non-time-sensitive predictions (daily recommendations) and real-time inference for interactive applications (fraud detection).</li>
                <li><strong>Model Serving:</strong> Use specialized tools like TensorFlow Serving, TorchServe, or cloud services (AWS SageMaker, Azure ML) for optimized model serving.</li>
            </ul>

            <blockquote>"In theory, there is no difference between theory and practice. In practice, there is." - Yogi Berra (relevant to ML deployment)</blockquote>

            <h3>Monitoring and Maintenance</h3>
            <p>Production ML models require continuous monitoring for data drift, model performance degradation, and system health. Implement logging for predictions, track key metrics (accuracy, latency, throughput), set up alerts for anomalies, and establish retraining pipelines when performance degrades.</p>

            <h3>Best Practices</h3>
            <p>Version everything—data, code, models, and configurations. Implement A/B testing for model updates, maintain model documentation and lineage, use feature stores for consistency, and establish rollback procedures for failed deployments.</p>
        `
    }
};

export default function BlogPost({ params }: { params: { slug: string } }) {
    const router = useRouter();

    // Get post content or use default
    const post = blogContent[params.slug] || {
        title: params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        content: `
            <p>This article is currently being developed. Please check back soon for the full content.</p>
            <p>In the meantime, explore our other articles on AI, software development, and data science.</p>
        `,
        date: "Jan 2026",
        readTime: "Coming soon",
        category: "Tech",
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
              prose-li:marker:text-[var(--accent-primary)]
              "
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </div>

            <Footer />
        </main>
    );
}
