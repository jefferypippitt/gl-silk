const stats = [
  { value: "10,000+", label: "Active users each month" },
  { value: "50%", label: "Reduction in support tickets" },
  { value: "2x", label: "Increase in feature adoption" },
  { value: "99.99%", label: "Service uptime" },
];

export function HeroSectionV6Stats() {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
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
    </div>
  );
}
