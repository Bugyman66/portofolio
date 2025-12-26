"use client";

import { Section } from "@/components/layout/section";
import { motion } from "framer-motion";

const skills = [
    {
        category: "Blockchain & Smart Contracts",
        items: ["Aptos Move", "Solidity (EVM)", "Rust", "Foundry", "Hardhat", "Dagdev", "Remix"]
    },
    {
        category: "Protocol Design",
        items: ["Tokenomics", "Governance Systems", "ZK Circuits (Circom)", "Commit-Reveal", "Reputation Systems", "Secured systems"]
    },
    {
        category: "Web3 Infrastructure",
        items: ["Account Abstraction (ERC-4337)", "Indexers (The Graph)", "Wallet Adapters", "IPFS",]
    },
    {
        category: "Backend & Systems",
        items: ["Node.js", "Flask", "TypeScript", "PostgreSQL", "MongoDB", "System Architecture", "API Design"]
    },
    {
        category: "Frontend & Design",
        items: ["Next.js", "React", "Vue", "Tailwind CSS", "Shadcn UI", "Framer Motion"]
    },
    {
        category: "Tools & Technologies",
        items: ["Git", "GitHub", "GitLab", "Docker", "AWS", "Firebase", "Supabase"]
    }
];

export function Skills() {
    return (
        <Section id="skills" className="bg-zinc-900/20">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Technical Capabilities</h2>
                <p className="max-w-xl text-zinc-400">
                    Focusing on the entire Web3 stack, from low-level smart contract logic to high-level protocol architecture.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {skills.map((group, index) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-lg border border-white/5 bg-white/5 p-6 backdrop-blur-sm"
                    >
                        <h3 className="mb-4 text-lg font-semibold text-white">{group.category}</h3>
                        <ul className="space-y-2">
                            {group.items.map((item) => (
                                <li key={item} className="text-sm text-zinc-400 flex items-center">
                                    <span className="mr-2 h-1 w-1 rounded-full bg-zinc-600"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
