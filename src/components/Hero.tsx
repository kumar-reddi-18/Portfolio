'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Star, Users, Zap } from 'lucide-react';

const roles = ['Fullstack Developer', 'Freelancer', 'Lead SDE at Swipe (YC)', 'React & Next.js Expert'];

export default function Hero() {
    const [roleIdx, setRoleIdx] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const current = roles[roleIdx];
        let timer: ReturnType<typeof setTimeout>;
        if (typing) {
            if (displayed.length < current.length) {
                timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
            } else {
                timer = setTimeout(() => setTyping(false), 1800);
            }
        } else {
            if (displayed.length > 0) {
                timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
            } else {
                setRoleIdx((i) => (i + 1) % roles.length);
                setTyping(true);
            }
        }
        return () => clearTimeout(timer);
    }, [displayed, typing, roleIdx]);

    const trustBadges = [
        { icon: Briefcase, label: 'Swipe (YC S21)', sub: 'Founding Team' },
        { icon: Star, label: '4+ Years', sub: 'Experience' },
        { icon: Users, label: '100K+ Users', sub: 'Apps Built' },
        { icon: Zap, label: '100+ Features', sub: 'Shipped' },
    ];

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 relative overflow-hidden"
        >
            {/* Ambient glows */}
            <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-[#818cf8]/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#06b6d4]/5 rounded-full blur-[180px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-5xl mx-auto text-center relative z-10 pb-12"
            >
                {/* Available badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="inline-flex items-center gap-2 mb-8"
                >
                    <span className="badge badge-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                        Available for Freelance Projects
                    </span>
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.05] tracking-tight"
                >
                    Hi, I&apos;m{' '}
                    <span className="text-gradient">Kumar Reddi</span>
                </motion.h1>

                {/* Typing role */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="text-xl md:text-2xl font-semibold text-white/50 mb-6 h-8"
                >
                    <span className="text-[#06b6d4]">{displayed}</span>
                    <span className="inline-block w-0.5 h-6 bg-[#06b6d4] ml-0.5 animate-pulse" />
                </motion.div>

                {/* Sub description */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    I build fast, modern web applications that clients & users love — from sleek marketing sites to complex SaaS platforms. Let&apos;s turn your idea into reality.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.38, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <a
                        href="#projects"
                        className="btn-primary w-full sm:w-auto px-8 py-4 text-base font-bold flex items-center justify-center gap-2"
                    >
                        View My Projects
                        <ArrowRight size={18} />
                    </a>
                    <a
                        href="#contact"
                        className="w-full sm:w-auto glass-morphism text-white px-8 py-4 rounded-2xl text-base font-bold flex items-center justify-center gap-2 hover:bg-white/[0.07] hover:border-white/20 transition-all"
                    >
                        Hire Me for a Project
                    </a>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
                >
                    {trustBadges.map((badge, i) => (
                        <div key={i} className="glass-card rounded-2xl p-4 flex flex-col items-center gap-2 text-center">
                            <badge.icon size={20} className="text-[#06b6d4]" />
                            <div className="text-sm font-bold text-white/90">{badge.label}</div>
                            <div className="text-xs text-white/40">{badge.sub}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.a
                href="#experience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/50 transition-colors cursor-pointer group"
            >
                <div className="w-6 h-10 border border-white/15 rounded-full flex justify-center pt-1.5 group-hover:border-[#06b6d4]/40 transition-colors">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-1 h-1 bg-white/30 group-hover:bg-[#06b6d4] rounded-full transition-colors"
                    />
                </div>
            </motion.a>
        </section>
    );
}
