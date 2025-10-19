import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:py-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="text-sm">Glsilk © 2025</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <p>
            Built by{" "}
            <Link
              href="https://github.com/jefferypippitt"
              className="text-primary"
            >
              Jeffery Pippitt
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
