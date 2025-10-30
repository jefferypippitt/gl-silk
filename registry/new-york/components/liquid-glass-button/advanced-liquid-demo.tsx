"use client";

import { useState } from "react";
import { Copy, Check, RotateCcw } from "lucide-react";
import { LiquidGlassButton } from "./liquid-glass-button";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { OpenInV0Button } from "@/components/open-in-v0-button";

export function LiquidGlassAdvancedDemo() {
  const [distortionStrength, setDistortionStrength] = useState(1.0);
  const [borderRadius, setBorderRadius] = useState(0.6);
  const [blur, setBlur] = useState(0.25);
  const [brightness, setBrightness] = useState(1.5);
  const [copied, setCopied] = useState(false);

  // Generate code snippet with current values
  const generateCode = () => {
    const props = [];

    // Always show all props with current values for easy copying
    props.push(`  distortionStrength={${distortionStrength.toFixed(2)}}`);
    props.push(`  borderRadius={${borderRadius.toFixed(2)}}`);
    props.push(`  blur={${blur.toFixed(2)}}`);
    props.push(`  brightness={${brightness.toFixed(2)}}`);

    return `<LiquidGlassButton
${props.join("\n")}
>
  Advanced Control
</LiquidGlassButton>`;
  };

  const codeSnippet = generateCode();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleReset = () => {
    setDistortionStrength(1.0);
    setBorderRadius(0.6);
    setBlur(0.25);
    setBrightness(1.5);
  };

  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <OpenInV0Button name="liquid-glass-button-advanced" />
      </div>
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left: Demo container */}
        <div className="relative h-[600px] overflow-hidden rounded-lg border">
          {/* Centered button within demo container */}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <div className="pointer-events-auto">
              <LiquidGlassButton
                distortionStrength={distortionStrength}
                borderRadius={borderRadius}
                blur={blur}
                brightness={brightness}
              >
                Advanced Control
              </LiquidGlassButton>
            </div>
          </div>

          {/* Scrollable Lorem ipsum content */}
          <ScrollArea className="h-full px-8 py-10">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Lorem Ipsum Content</h2>
              <p className="mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="h-24 md:h-32" aria-hidden />
            </div>
          </ScrollArea>
        </div>

        {/* Right: Combined controls and code panel */}
        <div className="h-[600px] rounded-lg border p-4 flex flex-col min-h-0 overflow-hidden">
          {/* Top: Action buttons */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Controls & Code</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="gap-2"
              >
                <RotateCcw className="size-4" />
                Reset
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="gap-2"
              >
                {copied ? (
                  <>
                    <Check className="size-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="size-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Scrollable content: Controls and Code */}
          <ScrollArea className="flex-1 min-h-0">
            <div className="space-y-6 pr-4">
              {/* Controls Section */}
              <div className="space-y-6">
                {/* Distortion Group */}
                <div>
                  <h4 className="text-sm font-semibold mb-3 text-foreground">
                    Distortion
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="distortion"
                          className="text-sm font-medium"
                        >
                          Strength
                        </label>
                        <span className="text-xs text-muted-foreground">
                          {distortionStrength.toFixed(2)}
                        </span>
                      </div>
                      <Slider
                        id="distortion"
                        min={0}
                        max={2}
                        step={0.02}
                        value={[distortionStrength]}
                        onValueChange={(value) =>
                          setDistortionStrength(value[0])
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor="border" className="text-sm font-medium">
                          Border Radius
                        </label>
                        <span className="text-xs text-muted-foreground">
                          {borderRadius.toFixed(2)}
                        </span>
                      </div>
                      <Slider
                        id="border"
                        min={0}
                        max={1.5}
                        step={0.01}
                        value={[borderRadius]}
                        onValueChange={(value) => setBorderRadius(value[0])}
                      />
                    </div>
                  </div>
                </div>

                {/* Visual Effects Group */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold mb-3 text-foreground">
                    Visual Effects
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor="blur" className="text-sm font-medium">
                          Blur
                        </label>
                        <span className="text-xs text-muted-foreground">
                          {blur.toFixed(2)}px
                        </span>
                      </div>
                      <Slider
                        id="blur"
                        min={0}
                        max={5}
                        step={0.1}
                        value={[blur]}
                        onValueChange={(value) => setBlur(value[0])}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="brightness"
                          className="text-sm font-medium"
                        >
                          Brightness
                        </label>
                        <span className="text-xs text-muted-foreground">
                          {brightness.toFixed(2)}
                        </span>
                      </div>
                      <Slider
                        id="brightness"
                        min={0.5}
                        max={2.5}
                        step={0.1}
                        value={[brightness]}
                        onValueChange={(value) => setBrightness(value[0])}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Section */}
              <div className="border-t pt-4">
                <div className="rounded-md border bg-muted/50">
                  <pre className="p-4 text-xs font-mono overflow-x-auto">
                    <code className="text-foreground">{codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
    </>
  );
}
