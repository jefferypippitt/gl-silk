import Container from "@/components/container";
import { HeroSectionMacOsTerminal } from "@/components/hero-section-mac-os-terminal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center">
      <Container className="flex flex-col items-center text-center py-16 lg:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-4xl">
          Craft without the grind
        </h1>

        <p className="mt-5 max-w-md text-lg md:text-xl tracking-tight font-light">
          Quality components and blocks. Install. Ship.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild size="sm" className="rounded-full">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="rounded-full">
            <Link href="/docs/components">View Components</Link>
          </Button>
        </div>

        <div className="w-full max-w-4xl mt-12 lg:mt-16 text-left">
          <HeroSectionMacOsTerminal />
        </div>
      </Container>
    </div>
  );
}
