"use client";

import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Projects() {
    return (
        <Section id="projects" className="py-24">
            <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end px-4">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected Work</h2>
                    <p className="max-w-xl text-zinc-400 text-lg">
                        Protocol design, smart contract infrastructure, and dApps.
                    </p>
                </div>
                <div className="h-px bg-zinc-800 flex-1 ml-8 hidden md:block"></div>
            </div>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-2">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileHover={{ y: -8 }}
                    >
                        <Link href={project.link} target="_blank" className="group block h-full">
                            <article className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-[#080808] border border-white/5 transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-[0_0_30px_rgba(0,243,255,0.05)]">
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900/50">
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60"></div>
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-zinc-700 font-mono text-xs tracking-widest uppercase">
                                            [Preview Unavailable]
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col p-6 flex-grow relative z-20">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </div>

                                    <p className="mb-6 text-sm text-zinc-400 leading-relaxed font-light">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded bg-white/5 text-zinc-400 border border-white/5 group-hover:border-white/10 transition-colors"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
