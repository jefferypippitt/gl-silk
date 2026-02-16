"use client";

import {
  MacOsTerminal,
  type TerminalStep,
} from "@/components/mac-os-terminal";

const HERO_STEPS: TerminalStep[] = [
  {
    type: "command",
    text: 'pnpm dlx shadcn@latest add "https://glsilk.vercel.app/r/hero-section-v1.json"',
  },
  { type: "loading", text: "Checking registry..." },
  { type: "success", text: "√ Checking registry." },
  { type: "success", text: "√ Installing dependencies." },
  { type: "blank", text: "" },
  { type: "output", text: "√ Created 3 files:" },
  { type: "output", text: "  - app\\glsilk\\hero-section-v1\\page.tsx" },
  { type: "output", text: "  - app\\glsilk\\hero-section-v1.tsx" },
  { type: "output", text: "  - app\\glsilk\\hero-section-v1.css" },
  { type: "blank", text: "" },
  { type: "success", text: "Success! Component installed successfully." },
  { type: "output", text: "You may now import and use the component." },
];

export function HeroSectionMacOsTerminal() {
  return (
    <MacOsTerminal
      steps={HERO_STEPS}
      title="projects"
      subtitle="-zsh"
      dimensions="80×20"
      prompt="glsilk@MacBook-Pro ~ %"
    />
  );
}
