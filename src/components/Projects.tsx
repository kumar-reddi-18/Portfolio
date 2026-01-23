'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Student Assessment System',
        description: 'A web application used to monitor student academic performance by conducting assignments and providing course materials.',
        tech: ['Flask', 'MySQL', 'Web Hosting'],
        github: 'https://github.com/kumar-reddi/SAS',
        link: 'https://github.com/kumar-reddi/SAS',
        image: '/projects/sas.png',
    },
    {
        title: 'Swipe Billing Infrastructure',
        description: 'Architecting high-scale billing and payments infrastructure for a YC-backed startup.',
        tech: ['Python', 'React', 'AWS'],
        github: '#',
        link: '#',
        image: '/projects/billing.png',
    },
    {
        title: 'Scalable Backend Architecture',
        description: 'Spearheaded the deployment of high-performance backend systems, optimizing core components for maximum reliability and scalability.',
        tech: ['Flask', 'AWS', 'Docker'],
        github: '#',
        link: '#',
        image: '/projects/backend.png',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Featured <span className="text-gradient">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/50 max-w-xl text-lg"
                    >
                        A selection of my recent work in fullstack development and architectural design.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group glass-morphism rounded-[32px] overflow-hidden"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-60" />
                            </div>

                            <div className="p-8">
                                <div className="flex gap-2 mb-4">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-foreground/50 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4">
                                    {project.link !== '#' && (
                                        <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-primary group/link hover:brightness-125 transition-all">
                                            Live Preview
                                            <ExternalLink size={16} className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                                        </a>
                                    )}
                                    <a href={project.github} className="text-foreground/70 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
