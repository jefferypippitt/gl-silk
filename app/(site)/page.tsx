import Container from "@/components/container";
import { PatternBackground } from "@/components/pattern-bg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center py-16">
      <PatternBackground />
      <Container>
        <div className="max-w-4xl w-full mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-display font-normal tracking-tight mb-4 max-w-3xl mx-auto">
            Craft without the grind.
          </h1>

          <p className="max-w-md mx-auto text-lg md:text-xl text-muted-foreground font-display font-normal tracking-tight leading-relaxed">
            Quality components. Paste. Ship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="sm">
              <Link href="/docs">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/docs/components">View Components</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
