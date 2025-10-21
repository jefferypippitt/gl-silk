import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SplitTextAnimation } from "@/components/ui/split-text-animation";
import { AnimatedButtons } from "@/components/ui/animated-buttons";
import Container from "@/components/container";
import Navbar from "@/components/navbar";
import { SmokeRingBackground } from "@/components/smoke-ring-bg";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <main className="relative flex flex-col items-center justify-center px-6 py-16 flex-1">
        <SmokeRingBackground />

        <div className="max-w-4xl mx-auto text-center space-y-4">
          <SplitTextAnimation
            text="Supercharge Your UI"
            animationType="fade"
            className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4 max-w-3xl mx-auto"
            duration={0.8}
            stagger={0.03}
          />
          <SplitTextAnimation
            text="Dive into a library of open-source components that combine stunning design with simplicity. Build faster. Experiment confidently."
            animationType="slide"
            direction="up"
            className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed"
            duration={1.2}
            stagger={0.02}
            delay={0.3}
          />
          <AnimatedButtons className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="default">
              <Link href="/docs">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="default">
              <Link href="/docs/components">View Components</Link>
            </Button>
          </AnimatedButtons>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
