"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/akglitch',
            icon: Github,
        },
        {
            name: 'Twitter',
            url: 'https://x.com/Aninakwageorge1',
            icon: Twitter,
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kwaku-ntiri-aninakwa-b01ba5221/',
            icon: Linkedin,
        },
    ];

    return (
        <footer className="bg-[var(--bg-secondary)] text-[var(--text-primary)] py-12 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center space-y-8">
                    {/* Social Links */}
                    <div className="flex space-x-6">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                >
                                    <Icon className="w-6 h-6" />
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-[var(--text-secondary)] text-sm">
                            &copy; {new Date().getFullYear()} Kwaku Ntiri. All Rights Reserved.
                        </p>
                        <p className="text-[var(--text-tertiary)] text-xs mt-2">
                            Built with Next.js, TypeScript, and Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="absolute bottom-8 right-8 glass p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
            >
                <ArrowUp className="w-6 h-6 text-[var(--accent-primary)]" />
            </motion.button>
        </footer>
    );
};

export default Footer;
