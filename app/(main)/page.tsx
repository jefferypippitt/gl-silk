import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col gap-6 text-center px-4 py-16 items-center justify-center min-h-[calc(100vh-8rem)]">
      <h1 className="text-4xl font-bold tracking-tight">Supercharge Your UI</h1>
      <p className="text-md text-muted-foreground max-w-2xl mx-auto">
        Dive into a library of open-source components that combine stunning
        design with simplicity.
        <br />
        Build faster. Experiment confidently.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="default" asChild className="gap-2">
          <Link href="/docs">Get Started</Link>
        </Button>
        <Button size="default" variant="outline" asChild className="gap-2">
          <Link href="/blocks">Browse Components</Link>
        </Button>
      </div>
    </section>
  );
}
