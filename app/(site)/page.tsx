import type { Metadata } from "next";
import Container from "@/components/container";
import { HeroSectionMacOsTerminal } from "@/components/hero-section-mac-os-terminal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Craft without the grind",
  description: "Quality components and blocks. Install. Ship.",
};

export default function Home() {
  return (
    <div className="relative flex h-full min-h-0 flex-1 flex-col items-center justify-center">
      <Container className="flex h-full min-h-0 flex-col items-center justify-center py-4 text-center lg:py-6">
        <div className="flex w-full max-w-4xl flex-col items-center gap-5 lg:gap-6">
          <section>
            <Badge
              asChild
              variant="secondary"
            >
              <Link href="/changelog" className="inline-flex items-center gap-1">
                What's New
                <ArrowRight className="size-4" />
              </Link>
            </Badge>
          </section>

          <section className="flex flex-col items-center gap-4">
            <h1 className="max-w-4xl text-4xl tracking-tight font-pixel-circle md:text-5xl lg:text-6xl">
              Craft without the grind
            </h1>

            <p className="max-w-3xl tracking-tight md:text-lg font-light">
              Quality components and blocks. Install. Ship.
            </p>
          </section>

          <section className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="sm">
              <Link href="/docs">Get Started</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/docs/components">View Components</Link>
            </Button>
          </section>

          <section className="w-full max-w-4xl text-left mt-4">
            <HeroSectionMacOsTerminal />
          </section>
        </div>
      </Container>
    </div>
  );
}
