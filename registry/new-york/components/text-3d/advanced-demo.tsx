"use client";

import { useState } from "react";
import { Copy, Check, RotateCcw, Plus, Trash2 } from "lucide-react";
import { Text3DComponent } from "./text-3d";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Text3DAdvancedDemo() {
  const [text, setText] = useState(`3D
Text`);
  const [size, setSize] = useState(0.8);
  const [height, setHeight] = useState(0.3);
  const [bevelSize, setBevelSize] = useState(0.02);
  const [bevelThickness, setBevelThickness] = useState(0.05);
  const [letterSpacing, setLetterSpacing] = useState(0.0);
  const [lineHeight, setLineHeight] = useState(1.0);
  const [color, setColor] = useState("#f5f5f5");
  const [rotationX, setRotationX] = useState(-0.5);
  const [rotationY, setRotationY] = useState(-0.25);
  const [rotationZ, setRotationZ] = useState(0);
  const [containerHeight, setContainerHeight] = useState(400);
  const [materialType, setMaterialType] = useState<
    | "standard"
    | "normal"
    | "basic"
    | "gradient"
    | "lambert"
    | "toon"
    | "physical"
  >("standard");
  const [gradientColors, setGradientColors] = useState<string[]>([
    "#22577a",
    "#38a3a5",
    "#57cc99",
    "#80ed99",
  ]);
  const [ambientIntensity, setAmbientIntensity] = useState(0.6);
  const [directionalIntensity, setDirectionalIntensity] = useState(0.8);
  const [copied, setCopied] = useState(false);

  // Generate code snippet with current values
  const generateCode = () => {
    const props = [];

    props.push(`  text="${text}"`);
    props.push(`  size={${size.toFixed(2)}}`);
    props.push(`  height={${height.toFixed(2)}}`);
    props.push(`  bevelSize={${bevelSize.toFixed(2)}}`);
    props.push(`  bevelThickness={${bevelThickness.toFixed(2)}}`);
    props.push(`  letterSpacing={${letterSpacing.toFixed(2)}}`);
    props.push(`  lineHeight={${lineHeight.toFixed(2)}}`);

    // Only add color if not using gradient material
    if (materialType !== "gradient") {
      props.push(`  color="${color}"`);
    } else {
      // Add gradientColors for gradient material with line breaks
      const gradientProps = gradientColors.map((c) => `"${c}"`).join(", ");
      props.push(`  gradientColors={[`);
      props.push(`    ${gradientProps}`);
      props.push(`  ]}`);
    }

    props.push(
      `  rotation={[${rotationX.toFixed(2)}, ${rotationY.toFixed(
        2
      )}, ${rotationZ.toFixed(2)}]}`
    );
    props.push(`  heightContainer={${containerHeight}}`);
    props.push(`  materialType="${materialType}"`);
    props.push(`  ambientIntensity={${ambientIntensity.toFixed(2)}}`);
    props.push(`  directionalIntensity={${directionalIntensity.toFixed(2)}}`);

    return `<Text3DComponent
${props.join("\n")}
/>`;
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
    setText(`3D
Text`);
    setSize(0.8);
    setHeight(0.3);
    setBevelSize(0.02);
    setBevelThickness(0.05);
    setLetterSpacing(0.0);
    setLineHeight(1.0);
    setColor("#f5f5f5");
    setRotationX(-0.5);
    setRotationY(-0.25);
    setRotationZ(0);
    setContainerHeight(400);
    setMaterialType("standard");
    setGradientColors(["#22577a", "#38a3a5", "#57cc99", "#80ed99"]);
    setAmbientIntensity(0.6);
    setDirectionalIntensity(0.8);
  };

  return (
    <div className="flex h-[600px] gap-4">
      {/* Left: Live 3D preview */}
      <div
        className="flex-1 relative overflow-hidden rounded-lg border-2 border-border/50 bg-muted/20 flex items-center justify-center"
      >
        <Text3DComponent
          text={text}
          size={size}
          height={height}
          bevelSize={bevelSize}
          bevelThickness={bevelThickness}
          letterSpacing={letterSpacing}
          lineHeight={lineHeight}
          color={color}
          gradientColors={gradientColors}
          rotation={[rotationX, rotationY, rotationZ]}
          heightContainer="100%"
          materialType={materialType}
          ambientIntensity={ambientIntensity}
          directionalIntensity={directionalIntensity}
        />
      </div>

      {/* Right: Controls panel */}
      <div className="w-[320px] shrink-0 rounded-lg border overflow-y-auto">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-background border-b px-4 py-3">
          <h3 className="text-sm font-semibold">Controls</h3>
          <div className="flex gap-1.5">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="gap-1.5 h-7 text-xs px-2"
            >
              <RotateCcw className="size-3" />
              Reset
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="gap-1.5 h-7 text-xs px-2"
            >
              {copied ? (
                <>
                  <Check className="size-3" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="size-3" />
                  Copy
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="p-4 space-y-5">
          {/* Text */}
          <div>
            <h4 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wider">Text</h4>
            <Textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="3D Text"
              rows={2}
              className="text-sm"
            />
          </div>

          {/* Dimensions */}
          <div className="border-t pt-4">
            <h4 className="text-xs font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Dimensions</h4>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium">Size</label>
                  <span className="text-xs text-muted-foreground">{size.toFixed(2)}</span>
                </div>
                <Slider min={0.1} max={3} step={0.05} value={[size]} onValueChange={(v) => setSize(v[0])} />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium">Height</label>
                  <span className="text-xs text-muted-foreground">{height.toFixed(2)}</span>
                </div>
                <Slider min={0} max={1} step={0.05} value={[height]} onValueChange={(v) => setHeight(v[0])} />
              </div>
            </div>
          </div>

          {/* Bevel */}
          <div className="border-t pt-4">
            <h4 className="text-xs font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Bevel</h4>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium">Bevel Size</label>
                  <span className="text-xs text-muted-foreground">{bevelSize.toFixed(2)}</span>
                </div>
                <Slider min={0} max={0.2} step={0.01} value={[bevelSize]} onValueChange={(v) => setBevelSize(v[0])} />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium">Bevel Thickness</label>
                  <span className="text-xs text-muted-foreground">{bevelThickness.toFixed(2)}</span>
                </div>
                <Slider min={0} max={0.5} step={0.01} value={[bevelThickness]} onValueChange={(v) => setBevelThickness(v[0])} />
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="border-t pt-4">
            <h4 className="text-xs font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Typography</h4>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium">Letter Spacing</label>
                  <span className="text-xs text-muted-foreground">{letterSpacing.toFixed(2)}</span>
                </div>
                <Slider min={-0.2} max={0.2} step={0.01} value={[letterSpacing]} onValueChange={(v) => setLetterSpacing(v[0])} />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium">Line Height</label>
                  <span className="text-xs text-muted-foreground">{lineHeight.toFixed(2)}</span>
                </div>
                <Slider min={0} max={2} step={0.1} value={[lineHeight]} onValueChange={(v) => setLineHeight(v[0])} />
              </div>
            </div>
          </div>

          {/* Rotation */}
          <div className="border-t pt-4">
            <h4 className="text-xs font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Rotation</h4>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium">X Axis</label>
                  <span className="text-xs text-muted-foreground">{rotationX.toFixed(2)}</span>
                </div>
                <Slider min={-2} max={2} step={0.1} value={[rotationX]} onValueChange={(v) => setRotationX(v[0])} />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium">Y Axis</label>
                  <span className="text-xs text-muted-foreground">{rotationY.toFixed(2)}</span>
                </div>
                <Slider min={-2} max={2} step={0.1} value={[rotationY]} onValueChange={(v) => setRotationY(v[0])} />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium">Z Axis</label>
                  <span className="text-xs text-muted-foreground">{rotationZ.toFixed(2)}</span>
                </div>
                <Slider min={-2} max={2} step={0.1} value={[rotationZ]} onValueChange={(v) => setRotationZ(v[0])} />
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="border-t pt-4">
            <h4 className="text-xs font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Appearance</h4>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="material" className="text-xs">Material Type</Label>
                <Select value={materialType} onValueChange={(value: any) => setMaterialType(value)}>
                  <SelectTrigger id="material" className="h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="basic">Basic</SelectItem>
                    <SelectItem value="lambert">Lambert</SelectItem>
                    <SelectItem value="toon">Toon</SelectItem>
                    <SelectItem value="physical">Physical</SelectItem>
                    <SelectItem value="gradient">Gradient</SelectItem>
                  </SelectContent>
                </Select>
                {materialType === "gradient" && (
                  <div className="flex gap-1.5">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="size-7"
                      onClick={() => {
                        if (gradientColors.length < 4) {
                          setGradientColors([...gradientColors, "#000000"]);
                        }
                      }}
                    >
                      <Plus className="size-3" />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="size-7"
                      onClick={() => {
                        if (gradientColors.length > 2) {
                          setGradientColors(gradientColors.slice(0, -1));
                        }
                      }}
                    >
                      <Trash2 className="size-3 text-red-500" />
                    </Button>
                  </div>
                )}
              </div>

              {materialType !== "gradient" && materialType !== "normal" && (
                <div className="space-y-1.5">
                  <Label htmlFor="color" className="text-xs">Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="color"
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="h-8 w-14 cursor-pointer"
                    />
                    <Input
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      placeholder="#f5f5f5"
                      className="h-8 text-xs"
                    />
                  </div>
                </div>
              )}

              {materialType === "gradient" && (
                <div className="space-y-1.5">
                  <Label className="text-xs">Gradient Colors</Label>
                  <div className="space-y-1.5">
                    {gradientColors.map((gradColor, index) => (
                      <div key={index} className="flex gap-1.5">
                        <Input
                          type="color"
                          value={gradColor}
                          onChange={(e) => {
                            const newColors = [...gradientColors];
                            newColors[index] = e.target.value;
                            setGradientColors(newColors);
                          }}
                          className="h-8 w-12 cursor-pointer"
                        />
                        <Input
                          value={gradColor}
                          onChange={(e) => {
                            const newColors = [...gradientColors];
                            newColors[index] = e.target.value;
                            setGradientColors(newColors);
                          }}
                          placeholder="#000000"
                          className="flex-1 h-8 text-xs"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Lighting */}
          <div className="border-t pt-4">
            <h4 className="text-xs font-semibold mb-3 text-muted-foreground uppercase tracking-wider">Lighting</h4>
            <div className="space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium">Ambient Light</label>
                  <span className="text-xs text-muted-foreground">{ambientIntensity.toFixed(2)}</span>
                </div>
                <Slider min={0} max={2} step={0.1} value={[ambientIntensity]} onValueChange={(v) => setAmbientIntensity(v[0])} />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium">Directional Light</label>
                  <span className="text-xs text-muted-foreground">{directionalIntensity.toFixed(2)}</span>
                </div>
                <Slider min={0} max={2} step={0.1} value={[directionalIntensity]} onValueChange={(v) => setDirectionalIntensity(v[0])} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
