"use client";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="text-center">
            <div className="mx-auto max-w-2xl bg-zinc-900/30 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">Ready to Build?</h2>
                <p className="mb-8 text-lg text-zinc-400">
                    Whether you need a protocol audit, smart contract architecture, or a technical co-founder, let&apos;s discuss how we can ship.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = 'https://calendar.app.google/itH27hM98gikf2iD9'}>
                        <Calendar className="mr-2 h-4 w-4" /> Book a Discovery Call
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => window.location.href = 'mailto:saidabbaahmad@gmail.com'}>
                        <Mail className="mr-2 h-4 w-4" /> Email Me
                    </Button>
                </div>
            </div>
        </Section>
    );
}
