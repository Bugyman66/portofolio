"use client";

import { Section } from "@/components/layout/section";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const research = [
    {
        title: "A Trustless, On-Chain Skill Verification Model for AptosRoom",
        abstract: "AptosRoom introduces Proof of Skill (PoSkill) — a verifiable, on-chain, non-transferable skill identity that evolves based on real task performance and peer evaluation. PoSkill enables trustless task adjudication, fair payments, and merit-based reputation without requiring token staking or centralized authorities.",
        status: "Published",
        tagColor: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    {
        title: "BlockDAG Localnet for Parallel Transaction Execution & Developer Experimentation",
        abstract: "A developer-focused localnet for experimenting with BlockDAG execution, parallel transactions, and DAG-based confirmation models.",
        status: "Published",
        tagColor: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    {
        title: "Probabalistic fast commit for Blockchain confirmation models",
        abstract: "A low-latency blockchain confirmation model using cryptographic randomness and probabilistic ordering guarantees.",
        status: "Ongoing",
        tagColor: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    }
];

export function Research() {
    return (
        <Section id="research">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Research & Explorations</h2>
                <p className="max-w-xl text-zinc-400">
                    Deep dives into protocol mechanics, security models, and the future of decentralized systems.
                </p>
            </div>

            <div className="grid gap-6">
                {research.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative rounded-lg border border-white/10 bg-black/40 p-6 transition-colors hover:bg-white/5"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <h3 className="font-mono text-lg font-medium text-zinc-200 group-hover:text-white transition-colors">{item.title}</h3>
                            <span className={cn("rounded px-2 py-0.5 text-xs font-medium border", item.tagColor)}>
                                {item.status}
                            </span>
                        </div>
                        <p className="text-sm text-zinc-400 max-w-3xl leading-relaxed">
                            {item.abstract}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
