import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black py-16">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
                <div className="text-center md:text-left">
                    <p className="text-sm font-medium text-zinc-400">
                        © {new Date().getFullYear()} Saeed. All rights reserved.
                    </p>
                    <p className="mt-2 text-xs text-zinc-700">
                        Built with Love.
                    </p>
                </div>

                <div className="flex gap-8">
                    {[
                        { Icon: Github, href: "https://github.com/bugyman66" },
                        { Icon: Twitter, href: "https://X.com/bugyman66" },
                        { Icon: Linkedin, href: "https://linkedin.com/in/said-abba-ahmad-209417227/" },
                        { Icon: Mail, href: "mailto:saidabbaahmad@gmail.com" }
                    ].map(({ Icon, href }, i) => (
                        <Link
                            key={i}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            className="text-zinc-600 hover:text-primary transition-all duration-300 hover:scale-110"
                        >
                            <Icon size={25} />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
