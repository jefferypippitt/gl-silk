"use client";

import Link from "next/link";
import Image from "next/image";
import { SearchToggle } from "fumadocs-ui/components/layout/search-toggle";
import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-16 px-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-xl font-bold hover:opacity-80 transition-opacity"
        >
          glsilk
        </Link>
        <Link
          href="/blocks"
          className="text-sm font-medium hover:opacity-80 transition-opacity"
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
    </nav>
  );
}
