"use client";

import Link from "next/link";
import Image from "next/image";
import { SearchToggle } from "fumadocs-ui/components/layout/search-toggle";
import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="flex items-center justify-between h-16 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-lg hover:opacity-80 transition-opacity"
        >
          glsilk
        </Link>
        <Link href="/docs" className="text-sm hover:opacity-80 transition-opacity">
          Documentation
        </Link>
        <Link
          href="/blocks"
          className="text-sm hover:opacity-80 transition-opacity"
        >
          Blocks
        </Link>
        </div>

        <div className="flex items-center gap-2">
          <SearchToggle />
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/jefferypippitt/gl-silk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="hover:opacity-80 transition-opacity"
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
