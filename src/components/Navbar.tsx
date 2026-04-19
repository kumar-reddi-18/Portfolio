'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6',
                scrolled
                    ? 'py-3 bg-[#080b12]/80 backdrop-blur-2xl border-b border-white/[0.06]'
                    : 'py-5'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#home"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 group"
                >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#818cf8] flex items-center justify-center text-white font-black text-sm">
                        K
                    </div>
                    <span className="font-bold text-white/90 group-hover:text-white transition-colors">Kumar Reddi</span>
                </motion.a>

                {/* Desktop Nav */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] px-2 py-1.5 rounded-full"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.06] px-4 py-2 rounded-full transition-all"
                        >
                            {item.name}
                        </a>
                    ))}
                </motion.div>

                {/* CTA + Socials */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="hidden md:flex items-center gap-3"
                >
                    <a href="https://github.com/kumar-18" target="_blank" className="p-2 text-white/40 hover:text-white/80 transition-colors">
                        <Github size={18} />
                    </a>
                    <a href="https://linkedin.com/in/kumar-reddi" target="_blank" className="p-2 text-white/40 hover:text-white/80 transition-colors">
                        <Linkedin size={18} />
                    </a>
                    <a href="https://wa.me/919849696083" target="_blank" className="p-2 text-white/40 hover:text-[#25D366] transition-colors">
                        <MessageCircle size={18} />
                    </a>
                    <a
                        href="#contact"
                        className="btn-primary px-5 py-2.5 text-sm font-semibold flex items-center gap-1.5"
                    >
                        Hire Me
                    </a>
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-4 right-4 mt-2 bg-[#0f1420]/95 backdrop-blur-2xl border border-white/[0.08] rounded-2xl p-5 md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-base font-medium text-white/70 hover:text-white hover:bg-white/[0.05] px-4 py-3 rounded-xl transition-all"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/[0.07] flex items-center justify-between">
                            <div className="flex gap-4">
                                <a href="https://github.com/kumar-18" target="_blank" className="text-white/40 hover:text-white transition-colors"><Github size={20} /></a>
                                <a href="https://linkedin.com/in/kumar-reddi" target="_blank" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
                                <a href="mailto:kumarreddi18@gmail.com" className="text-white/40 hover:text-white transition-colors"><Mail size={20} /></a>
                                <a href="https://wa.me/919849696083" target="_blank" className="text-white/40 hover:text-[#25D366] transition-colors"><MessageCircle size={20} /></a>
                            </div>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary px-5 py-2.5 text-sm">
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
