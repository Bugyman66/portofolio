"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-black pt-20">
            {/* Background Noise/Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
                <div className="absolute top-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-[100px] pointer-events-none"></div>
            </div>

            <div className="z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400 backdrop-blur-sm"
                >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Available for audits & protocol design
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
                >
                    Said Abba Ahmad
                    <span className="block text-zinc-500 mt-2 text-2xl sm:text-4xl md:text-5xl font-semibold tracking-normal">
                        Web3 Protocol Engineer
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-10 max-w-2xl text-lg text-zinc-400 sm:text-xl leading-relaxed"
                >
                    Architecting secure, decentralized systems and smart contract infrastructure.
                    Specializing in EVM & Move ecosystems, mechanism design, and ZK primitives.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col gap-4 sm:flex-row"
                >
                    <Button variant="primary" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Projects
                    </Button>
                    <Button variant="secondary" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
