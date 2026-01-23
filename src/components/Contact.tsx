'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, Github } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-12 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="glass-morphism rounded-[32px] md:rounded-[48px] p-6 md:p-16 overflow-hidden relative">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-6xl font-bold mb-6 md:mb-8"
                        >
                            Let’s Build <br />
                            Something <span className="text-gradient">Epic</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-foreground/70 text-base md:text-lg mb-10 md:mb-16 max-w-2xl mx-auto"
                        >
                            I'm always open to new projects, collaborations, or just a friendly chat. Reach out through any of these platforms!
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.a
                                href="mailto:kumarreddi18@gmail.com"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group glass-morphism p-8 rounded-[32px] hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Mail size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Email</h3>
                                <p className="text-foreground/50 text-sm">kumarreddi18@gmail.com</p>
                            </motion.a>

                            <motion.a
                                href="https://linkedin.com/in/kumar-reddi"
                                target="_blank"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="group glass-morphism p-8 rounded-[32px] hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                    <Linkedin size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                                <p className="text-foreground/50 text-sm">kumar-reddi</p>
                            </motion.a>

                            <motion.a
                                href="https://github.com/kumar-reddi"
                                target="_blank"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="group glass-morphism p-8 rounded-[32px] hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                    <Github size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">GitHub</h3>
                                <p className="text-foreground/50 text-sm">github.com/kumar-reddi</p>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
