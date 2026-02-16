import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="flex items-center justify-between h-16 px-6 sm:px-8 max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground">glsilk © {new Date().getFullYear()}</p>

        <p className="text-sm text-muted-foreground">
          Built by{" "}
          <Link
            href="https://github.com/jefferypippitt"
            className="text-primary hover:opacity-80 transition-opacity"
          >
            Jeffery Pippitt
          </Link>
        </p>
      </div>
    </footer>
  );
}
