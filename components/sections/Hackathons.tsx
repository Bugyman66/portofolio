"use client";

import { Section } from "@/components/layout/section";
import { motion } from "framer-motion";
import { Trophy, Users, Mic, Building2, } from "lucide-react";

const events = [
    {
        type: "Hackathon",
        title: "cntrl+move hackathon ",
        role: "Lead Engineer",
        result: "Finalist (infractructure Track)",
        date: "2025",
        icon: Trophy
    },
    {
        type: "Speaking",
        title: "Aptos IRL event dutse",
        role: "Speaker",
        result: "Topic: getting started on aptos",
        date: "2025",
        icon: Mic

    },
    {
        type: "speaking",
        title: "Hedera community meet-up",
        role: "Speaker",
        result: "Topic: web3 development as a beginner",
        date: "2025",
        icon: Trophy
    },
    {
        type: "Hackathon",
        title: "Blockdag hackathon 2.0",
        role: "Lead developer",
        result: "winners",
        date: "2025",
        icon: Trophy
    },
    {
        type: "Community",
        title: "Aptos Hausa",
        role: "C.T.O",
        result: "Mentored 20+ Junior Devs",
        date: "2024- Present",
        icon: Users
    },
    {
        type: "Hackathon",
        title: "SUI buildathon kaduna",
        role: "Lead developer",
        result: "3rd place",
        date: "2025",
        icon: Trophy
    },
    {
        type: "Buildathon",
        title: "Blockdag Global race",
        role: "Lead developer",
        result: "ongoing",
        date: "2025",
        icon: Trophy
    },
    {
        type: "Hackathon",
        title: "Blockdag hackathon kano 1.0",
        role: "judge",
        result: "audit 25+ projects",
        date: "2025",
        icon: Users
    },
    {
        type: "community",
        title: "Blockdag hackathon dutse 1.0",
        role: "judge",
        result: "audited 20+ projects",
        date: "2025",
        icon: Users
    },
    {
        type: "Boothcamp",
        title: "Aptos Assembly cohort 2",
        role: "participant",
        result: "finalist",
        date: "2025",
        icon: Building2
    },
];

export function Hackathons() {
    return (
        <Section id="community">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Community & Events</h2>
            </div>

            <div className="space-y-6">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ translateX: 5 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4 rounded-xl border border-white/5 bg-zinc-900/30 p-6 md:flex-row md:items-center md:justify-between hover:border-white/10 transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-primary">
                                <event.icon size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white">{event.title}</h3>
                                <p className="text-sm text-zinc-400">{event.type} • {event.date}</p>
                            </div>
                        </div>
                        <div className="text-left md:text-right">
                            <p className="text-sm font-medium text-white">{event.role}</p>
                            <p className="text-sm text-zinc-500">{event.result}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
