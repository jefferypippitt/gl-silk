import "./logo-cloud-section-v1.css";
import { DrizzleOrmLight } from "@/components/ui/svgs/drizzleOrmLight";
import { DrizzleOrmDark } from "@/components/ui/svgs/drizzleOrmDark";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Neon } from "@/components/ui/svgs/neon";
import { Planetscale } from "@/components/ui/svgs/planetscale";
import { PlanetscaleDark } from "@/components/ui/svgs/planetscaleDark";
import { Upstash } from "@/components/ui/svgs/upstash";
import { TursoLight } from "@/components/ui/svgs/tursoLight";
import { TursoDark } from "@/components/ui/svgs/tursoDark";
import { Convex } from "@/components/ui/svgs/convex";
import { MongodbIconLight } from "@/components/ui/svgs/mongodbIconLight";
import { MongodbIconDark } from "@/components/ui/svgs/mongodbIconDark";
import { Postgresql } from "@/components/ui/svgs/postgresql";

// ─── Logo items ───────────────────────────────────────────────────────────────

const databases: { name: string; icon: React.ReactNode }[] = [
  {
    name: "Drizzle",
    icon: (
      <>
        <DrizzleOrmLight className="h-9 w-auto dark:hidden" />
        <DrizzleOrmDark className="h-9 w-auto hidden dark:block" />
      </>
    ),
  },
  {
    name: "Supabase",
    icon: <Supabase className="h-9 w-auto" />,
  },
  {
    name: "Neon",
    icon: <Neon className="h-9 w-auto" />,
  },
  {
    name: "PlanetScale",
    icon: (
      <>
        <Planetscale className="h-9 w-auto dark:hidden" />
        <PlanetscaleDark className="h-9 w-auto hidden dark:block" />
      </>
    ),
  },
  {
    name: "Upstash",
    icon: <Upstash className="h-9 w-auto" />,
  },
  {
    name: "Turso",
    icon: (
      <>
        <TursoLight className="h-9 w-auto dark:hidden" />
        <TursoDark className="h-9 w-auto hidden dark:block" />
      </>
    ),
  },
  {
    name: "Convex",
    icon: <Convex className="h-9 w-auto" />,
  },
  {
    name: "MongoDB",
    icon: (
      <>
        <MongodbIconLight className="h-9 w-auto dark:hidden" />
        <MongodbIconDark className="h-9 w-auto hidden dark:block" />
      </>
    ),
  },
  {
    name: "PostgreSQL",
    icon: <Postgresql className="h-9 w-auto" />,
  },
];

// ─── Logo card ────────────────────────────────────────────────────────────────

function LogoItem({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-sm shrink-0 select-none">
      {icon}
      <span className="text-base font-medium text-foreground whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function LogoCloudSectionV1() {
  const items = [...databases, ...databases];

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">
            Integrations
          </p>
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Lorem ipsum dolor
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>

        {/* Marquee */}
        <div
          className="marquee-outer mt-14 w-full overflow-hidden py-2"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          }}
        >
          <div className="marquee-track gap-5 pr-5">
            {items.map((db, i) => (
              <LogoItem key={i} name={db.name} icon={db.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
