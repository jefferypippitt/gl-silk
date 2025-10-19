"use client";

import Link from "next/link";
import Image from "next/image";
import { SearchToggle } from "fumadocs-ui/components/layout/search-toggle";
import { ThemeToggle } from "fumadocs-ui/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-lg">Glsilk</span>
        </Link>

        <div className="flex items-center justify-end gap-2">
          <SearchToggle />
          <ThemeToggle />
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
                width={16}
                height={16}
                className="dark:invert"
              />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
