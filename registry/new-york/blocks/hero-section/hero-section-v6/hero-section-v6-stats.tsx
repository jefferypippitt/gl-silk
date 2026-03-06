const stats = [
  { value: "1,240+", label: "Active teams" },
  { value: "99.95%", label: "Uptime (last 12 months)" },
  { value: "< 180ms", label: "Median API latency" },
  { value: "42%", label: "Faster release cycles" },
];

export function HeroSectionV6Stats() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-border/70 bg-background/80 px-4 py-3 text-left shadow-sm backdrop-blur-sm dark:border-border/60 dark:bg-background/40"
        >
          <p className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {stat.value}
          </p>
          <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
