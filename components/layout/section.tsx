import { cn } from "@/utils/cn";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    containerClassName?: string;
}

export function Section({ className, containerClassName, children, id, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("w-full border-b border-white/5 last:border-0", containerClassName)}
            {...props}
        >
            <div className={cn("mx-auto max-w-6xl px-6 py-16 md:py-32", className)}>
                {children}
            </div>
        </section>
    );
}
