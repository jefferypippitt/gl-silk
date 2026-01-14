import { SplitTextAnimation } from "@/components/ui/split-text-animation";
import Container from "@/components/container";
import Navbar from "@/components/navbar";
import { SmokeRingBackground } from "@/components/smoke-ring-bg";
import { Footer } from "@/components/footer";
import { DelayedButtons } from "@/components/delayed-buttons";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <main className="relative flex flex-col items-center justify-center px-6 py-16 flex-1">
        <SmokeRingBackground />

        <div className="max-w-4xl mx-auto text-center space-y-4">
          <SplitTextAnimation
            text="Supercharge your website"
            animationType="scale"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 max-w-3xl mx-auto"
            duration={0.3}
            stagger={0.02}
          />

          <SplitTextAnimation
            text="Build faster. Experiment confidently."
            animationType="fade"
            className="max-w-xl mx-auto text-lg leading-relaxed"
            duration={0.3}
            stagger={0.02}
          />
          <DelayedButtons delay={500} />
        </div>
      </main>
      <Footer />
    </Container>
  );
}
