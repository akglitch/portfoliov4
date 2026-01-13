"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            toast.success('Message sent successfully! I\'ll get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div id='contact'>
            <Toaster position="bottom-right" />
            <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] p-8 py-20 min-h-screen flex justify-center items-center">
                <div className="max-w-4xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-[var(--accent-primary)] text-xl font-mono mb-4">06. What&apos;s Next?</h3>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                            I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass rounded-lg p-8"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--text-tertiary)]/20 rounded-lg focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--text-tertiary)]/20 rounded-lg focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-[var(--bg-secondary)] border border-[var(--text-tertiary)]/20 rounded-lg focus:outline-none focus:border-[var(--accent-primary)] transition-colors resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-6 py-3 bg-[var(--accent-primary)] text-white rounded-lg font-medium hover:bg-[var(--accent-secondary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <div className="glass rounded-lg p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <Mail className="w-6 h-6 text-[var(--accent-primary)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Email</h3>
                                        <a
                                            href="mailto:ntirianinakwa@gmail.com"
                                            className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                                        >
                                            ntirianinakwa@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="glass rounded-lg p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-[var(--accent-primary)]" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Location</h3>
                                        <p className="text-[var(--text-secondary)]">
                                            Kumasi, Ghana
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass rounded-lg p-6">
                                <h3 className="font-semibold mb-4">Or reach out directly:</h3>
                                <a
                                    href="mailto:ntirianinakwa@gmail.com"
                                    className="inline-block px-6 py-3 border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] rounded-lg hover:bg-[var(--accent-primary)] hover:text-white transition-all font-medium"
                                >
                                    Say Hello
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
