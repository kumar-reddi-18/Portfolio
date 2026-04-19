'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Code2, Users, ExternalLink } from 'lucide-react';

const stats = [
    { label: 'Years Experience', value: '4+', icon: Briefcase },
    { label: 'Users Served', value: '100K+', icon: Users },
    { label: 'Features Shipped', value: '100+', icon: Code2 },
    { label: 'SDE → Lead', value: 'Growth', icon: TrendingUp },
];

const experiences = [
    {
        role: "Founder's Office",
        company: 'Swipe (YC S21)',
        href: 'https://getswipe.in',
        period: 'July 2024 — Present',
        color: '#06b6d4',
        points: [
            'Collaborated with founders to drive technical innovation and align product strategies.',
            'Spearheaded scalable backend system deployments, optimizing performance & reliability.',
            'Addressed customer-facing issues and delivered feature enhancements under tight deadlines.',
        ],
    },
    {
        role: 'Lead Software Developer',
        company: 'Swipe (YC S21)',
        href: 'https://getswipe.in',
        period: 'Sep 2022 — Present',
        color: '#10b981',
        points: [
            'Designed, developed & deployed 100+ features using React, Next.js, Flask & AWS.',
            'Conducted comprehensive code reviews and mentored the full-stack team.',
            'Revamped core backend components for faster performance and scalability.',
        ],
    },
    {
        role: 'Software Developer (SDE-1)',
        company: 'Swipe (YC S21)',
        href: 'https://getswipe.in',
        period: 'March 2022 — Aug 2022',
        color: '#818cf8',
        points: [
            'Built and optimized backend services using Flask and AWS for rapid feature rollouts.',
            'Designed scalable solutions for business-critical workflows.',
            'Automated deployment processes using Docker, reducing deployment times.',
        ],
    },
    {
        role: 'Software Developer Intern',
        company: 'Nexus',
        href: '#',
        period: 'Aug 2021 — Feb 2022',
        color: 'rgba(255,255,255,0.2)',
        points: [
            'Assisted in resolving customer-facing issues and contributed to React frontend development.',
        ],
    },
    {
        role: 'Freelance Developer',
        company: 'Self-Employed',
        href: '#projects',
        period: '2024 — Present',
        color: '#f59e0b',
        points: [
            'Built complete business websites for clients across cab booking, accounting & service industries.',
            'Delivered RioCabs — a premium cab booking platform with WhatsApp integration.',
            'Specialized in Next.js, Framer Motion animations, and mobile-responsive design.',
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                {/* Header */}
                <div className="mb-14">
                    <p className="section-tag">Background</p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4 leading-tight"
                    >
                        4+ Years of Building{' '}
                        <span className="text-gradient">Real Products</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/50 max-w-xl text-base"
                    >
                        From intern to founding team, and now freelancing — here&apos;s my journey building products used by 2M+ users.
                    </motion.p>
                </div>

                {/* Stats strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="glass-card rounded-2xl p-5 flex flex-col gap-2"
                        >
                            <stat.icon size={20} className="text-[#06b6d4]" />
                            <div className="text-2xl font-black">{stat.value}</div>
                            <div className="text-xs text-white/40 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative pl-12">
                    <div className="timeline-line" />
                    <div className="flex flex-col gap-6">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={exp.role + exp.period}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute -left-[29px] top-6 w-3.5 h-3.5 rounded-full border-2 border-[#080b12]"
                                    style={{ background: exp.color }}
                                />

                                <div className="glass-card rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 group">
                                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                        <div>
                                            <h3 className="text-lg font-bold" style={{ color: exp.color }}>
                                                {exp.role}
                                            </h3>
                                            <div className="flex items-center gap-1 text-sm text-white/40 mt-0.5">
                                                {exp.href !== '#' && exp.href !== '#projects' ? (
                                                    <a
                                                        href={exp.href}
                                                        target="_blank"
                                                        className="hover:text-white/70 transition-colors underline decoration-white/20 flex items-center gap-1"
                                                    >
                                                        {exp.company}
                                                        <ExternalLink size={11} />
                                                    </a>
                                                ) : (
                                                    <span>{exp.company}</span>
                                                )}
                                            </div>
                                        </div>
                                        <span className="text-xs font-medium text-white/30 bg-white/[0.05] px-3 py-1.5 rounded-full shrink-0">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <ul className="space-y-1.5">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="text-sm text-white/55 flex gap-2">
                                                <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: exp.color }} />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
