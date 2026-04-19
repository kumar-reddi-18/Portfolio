'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // mailto fallback — opens email client with filled details
        const subject = encodeURIComponent(`Project Inquiry from ${form.name}`);
        const body = encodeURIComponent(`Hi Kumar,\n\n${form.message}\n\nBest regards,\n${form.name}\n${form.email}`);
        window.open(`mailto:kumarreddi18@gmail.com?subject=${subject}&body=${body}`, '_blank');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    const socials = [
        {
            icon: Mail,
            label: 'Email',
            value: 'kumarreddi18@gmail.com',
            href: 'mailto:kumarreddi18@gmail.com',
            color: '#06b6d4',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'kumar-reddi',
            href: 'https://linkedin.com/in/kumar-reddi',
            color: '#818cf8',
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'kumar-18',
            href: 'https://github.com/kumar-18',
            color: '#10b981',
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: '+91 98496 96083',
            href: 'https://wa.me/919849696083',
            color: '#25D366',
        },
    ];

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-14">
                    <p className="section-tag">Get In Touch</p>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4"
                    >
                        Start a Project{' '}
                        <span className="text-gradient">Together</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 max-w-md text-base"
                    >
                        Have a project in mind? Fill in the form and I&apos;ll get back to you within 24 hours.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card rounded-3xl p-8"
                    >
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                                <CheckCircle size={48} className="text-[#10b981]" />
                                <h3 className="text-2xl font-bold">Message Sent!</h3>
                                <p className="text-white/50 text-sm">Your email client should have opened. I&apos;ll reply within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div>
                                    <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Smith"
                                        className="form-input"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="john@company.com"
                                        className="form-input"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-white/40 uppercase tracking-wider mb-2">
                                        Tell Me About Your Project
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        placeholder="I need a website for my business that includes..."
                                        className="form-input resize-none"
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn-primary px-6 py-4 text-sm font-bold flex items-center justify-center gap-2 mt-2"
                                >
                                    <Send size={16} />
                                    Send Message
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Right side info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col gap-6"
                    >
                        {/* What I help with */}
                        <div className="glass-card rounded-3xl p-8">
                            <h3 className="text-base font-bold mb-1 text-white/80">What I can help you build</h3>
                            <p className="text-white/40 text-sm mb-5">From idea to production, I handle the full stack.</p>
                            <ul className="space-y-3">
                                {[
                                    'Business websites & landing pages',
                                    'SaaS platforms & web apps',
                                    'E-commerce & booking systems',
                                    'API integration & backend systems',
                                    'Mobile-responsive redesigns',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                                        <ArrowRight size={14} className="text-[#06b6d4] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact links */}
                        <div className="flex flex-col gap-3">
                            {socials.map((social, idx) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + idx * 0.08 }}
                                    className="glass-card rounded-2xl p-4 flex items-center gap-4 group hover:border-white/15 transition-all duration-300"
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                                        style={{ background: `${social.color}15`, color: social.color }}
                                    >
                                        <social.icon size={18} />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-xs text-white/30 font-medium">{social.label}</div>
                                        <div className="text-sm text-white/70 group-hover:text-white transition-colors truncate">{social.value}</div>
                                    </div>
                                    <ArrowRight size={14} className="ml-auto text-white/20 group-hover:text-white/50 transition-colors shrink-0" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
