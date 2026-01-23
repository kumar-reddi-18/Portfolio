'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto text-center relative z-10 pb-20"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism text-sm font-medium mb-8 text-primary"
                >
                    <Sparkles size={16} />
                    <span>Available for Freelance Projects</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-black mb-8 leading-[1.1]"
                >
                    Kumar <span className="text-gradient">Reddi</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Lead Software Developer & Fullstack Specialist with <span className="text-white font-semibold">4+ years</span> of experience in building high-performance web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <a href="#experience" className="w-full md:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-105 active:scale-95">
                        View My Work
                        <ArrowRight size={20} />
                    </a>
                    <a href="#contact" className="w-full md:w-auto glass-morphism text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-white/5 hover:scale-105 active:scale-95">
                        <Code size={20} />
                        Let's Collaborate
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.a
                href="#experience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer transition-colors hover:text-primary z-20 group"
            >
                <div className="w-[28px] h-[48px] border-2 border-white/20 rounded-full p-1.5 group-hover:border-primary/50 transition-colors flex justify-center">
                    <motion.div
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-1.5 h-1.5 bg-white group-hover:bg-primary rounded-full"
                    />
                </div>
            </motion.a>
        </section>
    );
}
