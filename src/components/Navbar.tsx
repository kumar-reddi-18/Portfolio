'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
                scrolled ? 'py-3' : 'py-6'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold text-gradient cursor-pointer"
                >
                    KR.
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 glass-morphism px-8 py-2 rounded-full">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Socials / CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="https://github.com/kumar-reddi" target="_blank" className="p-2 hover:text-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/kumar-reddi-9133b5155" target="_blank" className="p-2 hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="#contact" className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95">
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 mt-2 mx-4 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:hidden flex flex-col gap-4 text-center shadow-2xl"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium hover:text-primary transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <hr className="border-white/10" />
                        <div className="flex justify-center gap-6 py-2">
                            <a href="https://github.com/kumar-reddi" target="_blank"><Github size={24} /></a>
                            <a href="https://linkedin.com/in/kumar-reddi-9133b5155" target="_blank"><Linkedin size={24} /></a>
                            <a href="mailto:kumarreddi18@gmail.com"><Mail size={24} /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
