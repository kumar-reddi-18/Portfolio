'use client';

import { motion } from 'framer-motion';
const technologies = [
    { name: 'Python', icon: '/tech/python.svg' },
    { name: 'JavaScript', icon: '/tech/javascript.svg' },
    { name: 'TypeScript', icon: '/tech/typescript.svg' },
    { name: 'Flask', icon: '/tech/flask.svg' },
    { name: 'React.js', icon: '/tech/react.svg' },
    { name: 'Redux', icon: '/tech/redux.svg' },
    { name: 'Next.js', icon: '/tech/nextjs.svg' },
    { name: 'Node.js', icon: '/tech/nodedotjs.svg' },
    { name: 'Tailwind', icon: '/tech/tailwindcss.svg' },
    { name: 'MySQL', icon: '/tech/mysql.svg' },
    { name: 'AWS', icon: '/tech/aws.svg' },
    { name: 'Docker', icon: '/tech/docker.svg' },
];

export default function TechStack() {
    return (
        <section id="tech-stack" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Technical <span className="text-gradient">Arsenal</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/50 max-w-xl mx-auto text-lg"
                    >
                        The tools and technologies I use to build scalable, high-performance applications.
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: idx * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="glass-morphism px-8 py-6 rounded-[32px] flex flex-col items-center gap-4 min-w-[140px] group transition-all duration-300 hover:border-primary/50"
                        >
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10 object-contain transition-all"
                                />
                            </div>
                            <span className="font-bold text-sm group-hover:text-white transition-colors">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
