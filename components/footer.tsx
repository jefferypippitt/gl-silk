import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between h-16 px-6">
        <p className="text-sm text-muted-foreground">Glsilk © 2025</p>

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
