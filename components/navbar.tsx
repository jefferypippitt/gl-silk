"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchContext } from "fumadocs-ui/contexts/search";
import { useTheme } from "next-themes";
import { Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { setOpenSearch } = useSearchContext();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="flex items-center justify-between h-16 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" asChild className="hover:bg-transparent">
            <Link href="/" aria-label="Home">
              <Image
                src="/glsilk-logo.png"
                alt="glsilk"
                width={20}
                height={20}
              />
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs/installation">Docs</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs/components">Components</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/blocks">Blocks</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpenSearch(true)}
            aria-label="Search"
          >
            <Search className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle theme"
          >
            <Sun className="size-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/jefferypippitt/gl-silk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <Image
                src="/github.svg"
                alt="GitHub"
                width={18}
                height={18}
                className="dark:invert"
              />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
