"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Terminal } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-black/90 pt-20">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay"></div>
                {/* Primary subtle glow */}
                <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]"></div>
                {/* Secondary subtle glow */}
                <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[120px]"></div>
                {/* Center faint accent */}
                <div className="absolute top-[30%] left-[50%] -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-primary/5 blur-[100px]"></div>
            </div>

            <div className="z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8 inline-flex items-center rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-400 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2 mr-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for audits & protocol design
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="mb-8 text-5xl font-bold tracking-wide text-white sm:text-7xl md:text-8xl"
                >
                    <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                        Saeed Abba Ahmad
                    </span>
                    <span className="block mt-4 text-2xl sm:text-4xl md:text-5xl font-medium tracking-normal text-zinc-400">
                        Fullstack Web3 Protocol Engineer
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="mb-12 max-w-2xl text-lg text-zinc-400 sm:text-xl leading-relaxed font-light"
                >
                    Architecting secure, decentralized systems and smart contract infrastructure.
                    Specializing in EVM & Move ecosystems, mechanism design, and ZK primitives.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col gap-5 sm:flex-row items-center"
                >
                    <Button
                        variant="primary" // Assuming default is primary-like or we will style it
                        size="lg"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative h-12 min-w-[160px] overflow-hidden rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300"
                    >
                        <span className="relative z-10 font-semibold flex items-center">
                            View Work
                            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                    </Button>

                    <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group h-12 min-w-[160px] rounded-full text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
                    >
                        <span className="flex items-center font-medium">
                            <Terminal className="mr-2 h-4 w-4" />
                            Book a Call
                        </span>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
