'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Code2, Users } from 'lucide-react';

const stats = [
    { label: 'Years Experience', value: '4+', icon: Briefcase },
    { label: 'Role Progression', value: 'SDE to Lead', icon: TrendingUp },
    { label: 'Full-stack Skills', value: '13+', icon: Code2 },
    { label: 'Scale (Users)', value: '100K+', icon: Users },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 relative">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto"
            >
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-8"
                        >
                            Crafting Digital <br />
                            <span className="text-gradient">Experiences</span> for 4+ Years
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-foreground/70 text-lg mb-8"
                        >
                            I am Kumar Reddi, a founding team member at a Y Combinator-backed company Swipe and currently Lead Software Developer. With 3+ years of experience, I excel in delivering impactful solutions and driving strategic growth.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="glass-morphism p-6 rounded-3xl"
                                >
                                    <stat.icon className="text-primary mb-4" size={24} />
                                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-sm text-foreground/50">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 grid grid-cols-1 gap-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-morphism p-8 rounded-[40px] border-l-4 border-l-primary"
                        >
                            <h3 className="text-xl font-bold mb-2 text-primary">Founder's Office</h3>
                            <p className="text-sm text-foreground/50 mb-4">July 2024 — Present • <a href="https://getswipe.in" target="_blank" className="hover:text-primary transition-colors underline decoration-primary/30">Swipe (YC S21)</a></p>
                            <ul className="text-foreground/70 text-sm list-disc pl-4 space-y-2">
                                <li>Collaborated with founders and other leadership to drive technical innovation and align product strategies with business goals.</li>
                                <li>Spearheaded the deployment of scalable backend systems, optimizing performance and reliability.</li>
                                <li>Actively addressed customer-facing issues and delivered feature enhancements within tight deadlines.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-morphism p-8 rounded-[40px] border-l-4 border-l-secondary"
                        >
                            <h3 className="text-xl font-bold mb-2 text-secondary">Lead Software Developer</h3>
                            <p className="text-sm text-foreground/50 mb-4">Sep 2022 — Present • <a href="https://getswipe.in" target="_blank" className="hover:text-secondary transition-colors underline decoration-secondary/30">Swipe (YC S21)</a></p>
                            <ul className="text-foreground/70 text-sm list-disc pl-4 space-y-2">
                                <li>Designed, developed, and deployed 100+ features leveraging React js, Next js, Flask and AWS.</li>
                                <li>Conducted comprehensive code reviews to maintain best practices and mentor for full-stack team.</li>
                                <li>Revamped core backend components for faster performance and scalability.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-morphism p-8 rounded-[40px] border-l-4 border-l-white/20"
                        >
                            <h3 className="text-xl font-bold mb-2">Software Developer (SDE-1)</h3>
                            <p className="text-sm text-foreground/50 mb-4">March 2022 — Aug 2022 • <a href="https://getswipe.in" target="_blank" className="hover:text-white transition-colors underline decoration-white/30">Swipe (YC S21)</a></p>
                            <ul className="text-foreground/70 text-sm list-disc pl-4 space-y-2">
                                <li>Built and optimized backend services using Flask and AWS to support rapid feature rollouts.</li>
                                <li>Designed scalable solutions for business-critical workflows, ensuring reliability and performance.</li>
                                <li>Automated processes using Docker to enhance efficiency and reduce deployment times.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="glass-morphism p-8 rounded-[40px] border-l-4 border-l-white/10"
                        >
                            <h3 className="text-xl font-bold mb-2">Software Developer Intern</h3>
                            <p className="text-sm text-foreground/50 mb-4">Aug 2021 — Feb 2022 • Nexus</p>
                            <p className="text-foreground/70 text-sm">
                                Assisted in resolving customer-facing issues and contributed to frontend development using React.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
