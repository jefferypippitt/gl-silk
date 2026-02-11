"use client";

import { useState, useCallback } from "react";
import { Button } from "@/registry/new-york/ui/button";
import { cn } from "@/lib/utils";
import { Check, Terminal } from "lucide-react";

export function CopyInstallCommand({
  name,
  className,
}: {
  name: string;
} & React.ComponentProps<typeof Button>) {
  const [copied, setCopied] = useState(false);

  const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "https://glsilk.vercel.app").replace(/\/$/, "");
  const command = `pnpm dlx shadcn@latest add "${baseUrl}/r/${name}.json"`;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = command;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [command]);

  return (
    <Button
      aria-label="Copy install command"
      size="sm"
      variant="outline"
      className={cn(
        "gap-1.5 font-mono shadow-none",
        className
      )}
      onClick={handleCopy}
    >
      {copied ? (
        <Check className="h-3 w-3" />
      ) : (
        <Terminal className="h-3 w-3" />
      )}
      <span className="text-muted-foreground whitespace-nowrap">
        pnpm dlx shadcn@latest add {name}
      </span>
    </Button>
  );
}
