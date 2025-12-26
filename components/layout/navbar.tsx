"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md supports-[backdrop-filter]:bg-black/60">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                <Link href="/" className="text-lg font-bold tracking-wider text-white hover:text-zinc-300 transition-colors">
                    SAEED<span className="text-zinc-600">.VC</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 md:flex">
                    {["Projects", "Skills", "Research", "Gallery", "Contact"].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="text-sm font-medium text-zinc-400 hover:text-primary transition-colors hover:shadow-[0_0_10px_rgba(0,243,255,0.2)]"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex gap-4 border-r border-white/10 pr-4 mr-4">
                        <Link href="https://github.com/bugyman66" target="_blank" className="text-zinc-400 hover:text-white transition-colors hover:scale-110">
                            <Github size={18} />
                        </Link>
                        <Link href="https://x.com/bugyman66" target="_blank" className="text-zinc-400 hover:text-white transition-colors hover:scale-110">
                            <Twitter size={18} />
                        </Link>
                    </div>
                    <Button variant="primary" size="sm" onClick={() => scrollToSection("contact")} className="hidden sm:flex">
                        Contact
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="text-zinc-400 hover:text-white md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-b border-white/5 bg-black/95 backdrop-blur-xl md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col space-y-6 px-6 py-8">
                            {["Projects", "Skills", "Research", "Contact", "Gallery"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-left text-lg font-medium text-zinc-400 hover:text-white transition-colors"
                                >
                                    {item}
                                </button>
                            ))}
                            <div className="pt-6 flex gap-6 border-t border-white/10">
                                <Link href="https://github.com/bugyman66" target="_blank" className="text-zinc-400 hover:text-white hover:scale-110 transition-transform"><Github size={20} /></Link>
                                <Link href="https://x.com/bugyman66" target="_blank" className="text-zinc-400 hover:text-white hover:scale-110 transition-transform"><Twitter size={20} /></Link>
                            </div>
                            <Button variant="primary" size="lg" onClick={() => scrollToSection("contact")} className="w-full">
                                Contact
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
