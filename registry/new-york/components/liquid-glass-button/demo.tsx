"use client";

import { LiquidGlassButton } from "./liquid-glass-button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function LiquidGlassButtonDemo() {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-lg border">
      {/* Centered button within demo container */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="pointer-events-auto">
          <LiquidGlassButton variant="default" size="default">
            Liquid Glass
          </LiquidGlassButton>
        </div>
      </div>

      {/* Scrollable Lorem ipsum content */}
      <ScrollArea className="h-full px-8 py-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Lorem Ipsum Content</h2>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="mt-8">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </p>
          <div className="h-24 md:h-32" aria-hidden />
        </div>
      </ScrollArea>
    </div>
  );
}
