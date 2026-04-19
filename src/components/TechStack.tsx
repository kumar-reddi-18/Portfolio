'use client';

import { motion } from 'framer-motion';

const row1 = [
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

const row2 = [
    { name: 'React.js', icon: '/tech/react.svg' },
    { name: 'Next.js', icon: '/tech/nextjs.svg' },
    { name: 'TypeScript', icon: '/tech/typescript.svg' },
    { name: 'Tailwind CSS', icon: '/tech/tailwindcss.svg' },
    { name: 'Node.js', icon: '/tech/nodedotjs.svg' },
    { name: 'Python', icon: '/tech/python.svg' },
    { name: 'Flask', icon: '/tech/flask.svg' },
    { name: 'MySQL', icon: '/tech/mysql.svg' },
    { name: 'Redux', icon: '/tech/redux.svg' },
    { name: 'JavaScript', icon: '/tech/javascript.svg' },
    { name: 'AWS', icon: '/tech/aws.svg' },
    { name: 'Docker', icon: '/tech/docker.svg' },
];

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
    const doubled = [...items, ...items];
    return (
        <div className="overflow-hidden">
            <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
                {doubled.map((tech, idx) => (
                    <div
                        key={`${tech.name}-${idx}`}
                        className="flex items-center gap-3 glass-morphism rounded-2xl px-5 py-3 mx-2 min-w-max group hover:border-[#06b6d4]/30 transition-all duration-300"
                    >
                        <div className="w-7 h-7 flex items-center justify-center">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className="w-6 h-6 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                        </div>
                        <span className="text-sm font-semibold text-white/60 group-hover:text-white/90 transition-colors whitespace-nowrap">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function TechStack() {
    return (
        <section id="tech-stack" className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="section-tag justify-center">Tech Stack</p>
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        My Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-white/40 max-w-md mx-auto text-base">
                        The tools and technologies I use to build fast, scalable, and beautiful applications.
                    </p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-4"
            >
                <MarqueeRow items={row1} />
                <MarqueeRow items={row2} reverse />
            </motion.div>
        </section>
    );
}
