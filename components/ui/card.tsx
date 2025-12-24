import { cn } from "@/utils/cn";

export function Card({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-6 text-zinc-100 backdrop-blur-sm",
                "transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
