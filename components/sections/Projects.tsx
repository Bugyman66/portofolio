"use client";

import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Projects() {
    return (
        <Section id="projects">
            <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Selected Work</h2>
                    <p className="max-w-xl text-zinc-400">
                        A collection of protocols, dApps, and infrastructure I&apos;ve built or contributed to.
                    </p>
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Link href={project.link} target="_blank" className="block h-full">
                            <Card className="h-full flex flex-col p-0 overflow-hidden border-zinc-800 bg-zinc-900/40">
                                <div className="relative aspect-video w-full overflow-hidden bg-zinc-800 group">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-zinc-600 font-mono text-xs">
                                            [Project Preview: {project.title}]
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col p-6 flex-grow">
                                    <div className="mb-3 flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="rounded-full border border-zinc-700 bg-zinc-800/50 px-2 py-1 text-xs text-zinc-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                                        {project.title}
                                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
