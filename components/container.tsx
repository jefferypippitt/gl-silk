import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 border-l border-r border-border flex-1",
        className
      )}
    >
      {children}
    </div>
  );
}
