import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black py-12">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
                <div className="text-center md:text-left">
                    <p className="text-sm font-medium text-zinc-400">
                        © {new Date().getFullYear()} Saeed. All rights reserved.
                    </p>
                    <p className="mt-1 text-xs text-zinc-600">
                        Built with Next.js & Tailwind CSS.
                    </p>
                </div>

                <div className="flex gap-6">
                    <Link href="https://github.com/bugyman66" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="https://twitter.com/virtualconneckt" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                        <Twitter size={20} />
                    </Link>
                    <Link href="https://linkedin.com/in/abdoulaahmad" target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="mailto:hello@example.com" className="text-zinc-500 hover:text-white transition-colors">
                        <Mail size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
