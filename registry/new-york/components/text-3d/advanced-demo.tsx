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
    <div className="space-y-6">
      {/* Top: Demo container - Full width */}
      <div
        className="w-full relative overflow-hidden rounded-lg border-2 border-border/50 bg-muted/20 flex items-center justify-center"
        style={{ height: `${containerHeight}px` }}
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
          heightContainer={containerHeight}
          materialType={materialType}
          ambientIntensity={ambientIntensity}
          directionalIntensity={directionalIntensity}
        />
      </div>

      {/* Bottom: Combined controls panel */}
      <div className="rounded-lg border p-4">
        {/* Top: Action buttons */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Controls</h3>
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

        {/* Controls in 4-column grid */}
        <div className="grid grid-cols-4 gap-6">
          {/* Column 1: Text & Size */}
          <div className="space-y-6">
            {/* Text Group */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-foreground">
                Text
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="text">Content</Label>
                  <Textarea
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="3D Text"
                    rows={2}
                  />
                </div>
              </div>
            </div>

            {/* Size & Dimensions Group */}
            <div className="border-t pt-4">
              <h4 className="text-sm font-semibold mb-3 text-foreground">
                Dimensions
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="size" className="text-sm font-medium">
                      Size
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {size.toFixed(2)}
                    </span>
                  </div>
                  <Slider
                    id="size"
                    min={0.1}
                    max={3}
                    step={0.05}
                    value={[size]}
                    onValueChange={(value) => setSize(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="height" className="text-sm font-medium">
                      Height
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {height.toFixed(2)}
                    </span>
                  </div>
                  <Slider
                    id="height"
                    min={0}
                    max={1}
                    step={0.05}
                    value={[height]}
                    onValueChange={(value) => setHeight(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="container" className="text-sm font-medium">
                      Container Height
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {containerHeight}px
                    </span>
                  </div>
                  <Slider
                    id="container"
                    min={200}
                    max={800}
                    step={50}
                    value={[containerHeight]}
                    onValueChange={(value) => setContainerHeight(value[0])}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Bevel & Typography */}
          <div className="space-y-6">
            {/* Bevel Group */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-foreground">
                Bevel
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="bevel-size" className="text-sm font-medium">
                      Bevel Size
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {bevelSize.toFixed(2)}
                    </span>
                  </div>
                  <Slider
                    id="bevel-size"
                    min={0}
                    max={0.2}
                    step={0.01}
                    value={[bevelSize]}
                    onValueChange={(value) => setBevelSize(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="bevel-thickness"
                      className="text-sm font-medium"
                    >
                      Bevel Thickness
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {bevelThickness.toFixed(2)}
                    </span>
                  </div>
                  <Slider
                    id="bevel-thickness"
                    min={0}
                    max={0.5}
                    step={0.01}
                    value={[bevelThickness]}
                    onValueChange={(value) => setBevelThickness(value[0])}
                  />
                </div>
              </div>
            </div>

            {/* Typography Group */}
            <div className="border-t pt-4">
              <h4 className="text-sm font-semibold mb-3 text-foreground">
                Typography
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="letter-spacing"
                      className="text-sm font-medium"
                    >
                      Letter Spacing
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {letterSpacing.toFixed(2)}
                    </span>
                  </div>
                  <Slider
                    id="letter-spacing"
                    min={-0.2}
                    max={0.2}
                    step={0.01}
                    value={[letterSpacing]}
                    onValueChange={(value) => setLetterSpacing(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="line-height"
                      className="text-sm font-medium"
                    >
                      Line Height
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {lineHeight.toFixed(2)}
                    </span>
                  </div>
                  <Slider
                    id="line-height"
                    min={0}
                    max={2}
                    step={0.1}
                    value={[lineHeight]}
                    onValueChange={(value) => setLineHeight(value[0])}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Rotation */}
          <div className="space-y-6">
            {/* Rotation Group */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-foreground">
                Rotation
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="rot-x" className="text-sm font-medium">
                      X Axis
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {rotationX.toFixed(2)}
                    </span>
                  </div>
                  <Slider
                    id="rot-x"
                    min={-2}
                    max={2}
                    step={0.1}
                    value={[rotationX]}
                    onValueChange={(value) => setRotationX(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="rot-y" className="text-sm font-medium">
                      Y Axis
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {rotationY.toFixed(2)}
                    </span>
                  </div>
                  <Slider
                    id="rot-y"
                    min={-2}
                    max={2}
                    step={0.1}
                    value={[rotationY]}
                    onValueChange={(value) => setRotationY(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="rot-z" className="text-sm font-medium">
                      Z Axis
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {rotationZ.toFixed(2)}
                    </span>
                  </div>
                  <Slider
                    id="rot-z"
                    min={-2}
                    max={2}
                    step={0.1}
                    value={[rotationZ]}
                    onValueChange={(value) => setRotationZ(value[0])}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Appearance */}
          <div className="space-y-6">
            {/* Appearance Group */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-foreground">
                Appearance
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="material">Material Type</Label>
                  <Select
                    value={materialType}
                    onValueChange={(value: any) => setMaterialType(value)}
                  >
                    <SelectTrigger id="material">
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
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          if (gradientColors.length < 4) {
                            setGradientColors([...gradientColors, "#000000"]);
                          }
                        }}
                      >
                        <Plus className="size-4" />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          if (gradientColors.length > 2) {
                            setGradientColors(gradientColors.slice(0, -1));
                          }
                        }}
                      >
                        <Trash2 className="size-4 text-red-500" />
                      </Button>
                    </div>
                  )}
                </div>

                {materialType !== "gradient" && materialType !== "normal" && (
                  <div className="space-y-2">
                    <Label htmlFor="color">Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="color"
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="h-10 w-20 cursor-pointer"
                      />
                      <Input
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="#f5f5f5"
                      />
                    </div>
                  </div>
                )}

                {materialType === "gradient" && (
                  <div className="space-y-2">
                    <Label>Gradient Colors</Label>
                    <div className="space-y-2">
                      {gradientColors.map((gradColor, index) => (
                        <div key={index} className="flex gap-2">
                          <Input
                            type="color"
                            value={gradColor}
                            onChange={(e) => {
                              const newColors = [...gradientColors];
                              newColors[index] = e.target.value;
                              setGradientColors(newColors);
                            }}
                            className="h-10 w-16 cursor-pointer"
                          />
                          <Input
                            value={gradColor}
                            onChange={(e) => {
                              const newColors = [...gradientColors];
                              newColors[index] = e.target.value;
                              setGradientColors(newColors);
                            }}
                            placeholder="#000000"
                            className="flex-1"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Lighting Group */}
            <div className="border-t pt-4">
              <h4 className="text-sm font-semibold mb-3 text-foreground">
                Lighting
              </h4>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="ambient-intensity"
                      className="text-sm font-medium"
                    >
                      Ambient Light
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {ambientIntensity.toFixed(2)}
                    </span>
                  </div>
                  <Slider
                    id="ambient-intensity"
                    min={0}
                    max={2}
                    step={0.1}
                    value={[ambientIntensity]}
                    onValueChange={(value) => setAmbientIntensity(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="directional-intensity"
                      className="text-sm font-medium"
                    >
                      Directional Light
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {directionalIntensity.toFixed(2)}
                    </span>
                  </div>
                  <Slider
                    id="directional-intensity"
                    min={0}
                    max={2}
                    step={0.1}
                    value={[directionalIntensity]}
                    onValueChange={(value) => setDirectionalIntensity(value[0])}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
