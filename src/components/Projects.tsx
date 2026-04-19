'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Car, BookOpen, LayoutDashboard } from 'lucide-react';

const projects = [
    {
        title: 'RioCabs — Premium Cab Booking Platform',
        description:
            'A fully responsive cab booking website built for a local cab operator in Hyderabad. Features real-time WhatsApp booking, animated hero section with glassmorphism, interactive fleet showcase, fare estimator, and smooth Framer Motion scroll animations.',
        tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'WhatsApp API'],
        github: '#',
        link: 'https://riocabshyderabad.com',
        badge: 'Freelance',
        badgeClass: 'badge-warning',
        icon: Car,
        color: '#f59e0b',
        featured: true,
    },
    {
        title: 'Student Assessment System',
        description:
            'A web application to monitor student academic performance by conducting assignments, tracking progress, and providing course materials — deployed on web hosting.',
        tech: ['Flask', 'MySQL', 'Web Hosting'],
        github: 'https://github.com/kumar-18/SAS',
        link: 'https://github.com/kumar-18/SAS',
        badge: 'Open Source',
        badgeClass: 'badge-accent',
        icon: BookOpen,
        color: '#818cf8',
        featured: false,
    },
    {
        title: 'Swipe Billing Infrastructure',
        description:
            'Architected high-scale billing and payments infrastructure for Swipe, a YC-backed fintech startup. Handled millions of invoices, payments, and complex tax computations at scale.',
        tech: ['Python', 'React', 'AWS', 'Flask'],
        github: '#',
        link: '#',
        badge: 'Professional',
        badgeClass: 'badge-primary',
        icon: LayoutDashboard,
        color: '#06b6d4',
        featured: false,
    },
];

export default function Projects() {
    const featured = projects.filter((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="py-24 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                {/* Header */}
                <div className="mb-14">
                    <p className="section-tag">Portfolio</p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4"
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 max-w-xl text-base"
                    >
                        A selection of work spanning freelance client projects, open source, and large-scale professional engineering.
                    </motion.p>
                </div>

                {/* Featured card */}
                {featured.map((project, idx) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card rounded-3xl overflow-hidden mb-8 group hover:border-[#f59e0b]/20 transition-all duration-500"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Visual panel */}
                            <div
                                className="relative h-56 md:h-auto overflow-hidden flex items-center justify-center"
                                style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}
                            >
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{ background: `radial-gradient(circle at 50% 50%, ${project.color}, transparent 70%)` }}
                                />
                                <project.icon
                                    size={80}
                                    className="opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                                    style={{ color: project.color }}
                                />
                                {/* Floating badge */}
                                <div className="absolute top-4 left-4">
                                    <span className={`badge ${project.badgeClass}`}>
                                        ★ {project.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Content panel */}
                            <div className="p-8 md:p-10 flex flex-col justify-center">
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full"
                                            style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-black mb-3 group-hover:text-gradient transition-all">
                                    {project.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed mb-8">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-4">
                                    {project.link !== '#' && (
                                        <a
                                            href={project.link}
                                            className="btn-primary px-5 py-2.5 text-sm flex items-center gap-2"
                                        >
                                            Live Preview
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                    {project.github !== '#' && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
                                        >
                                            <Github size={18} />
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* Regular cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {rest.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="glass-card rounded-2xl overflow-hidden group hover:border-white/15 transition-all duration-300"
                        >
                            {/* Mini visual header */}
                            <div
                                className="h-28 flex items-center justify-between px-6 relative overflow-hidden"
                                style={{ background: `linear-gradient(135deg, ${project.color}12, transparent)` }}
                            >
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{ background: `radial-gradient(circle at 100% 50%, ${project.color}, transparent 70%)` }}
                                />
                                <project.icon size={40} className="opacity-20" style={{ color: project.color }} />
                                <span className={`badge ${project.badgeClass}`}>{project.badge}</span>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full"
                                            style={{ background: `${project.color}10`, color: project.color }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed mb-5">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-3">
                                    {project.link !== '#' && (
                                        <a
                                            href={project.link}
                                            className="flex items-center gap-1.5 text-sm font-semibold"
                                            style={{ color: project.color }}
                                        >
                                            Live Preview
                                            <ExternalLink size={13} />
                                        </a>
                                    )}
                                    {project.github !== '#' && (
                                        <a href={project.github} target="_blank" className="text-white/30 hover:text-white transition-colors ml-auto">
                                            <Github size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
