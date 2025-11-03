"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Text3D } from "@react-three/drei";
import {
  Color,
  Float32BufferAttribute,
  Mesh,
  MeshStandardMaterial,
  MeshPhongMaterial,
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshToonMaterial,
  MeshPhysicalMaterial,
  DataTexture,
} from "three";
import { cn } from "@/lib/utils";

// Helper function to create a simple toon gradient map
function createToonGradientMap(): DataTexture {
  const size = 64;
  const data = new Uint8Array(4 * size * size);

  for (let i = 0; i < size; i++) {
    const stride = i * 4 * size;

    for (let j = 0; j < size; j++) {
      const stride2 = stride + j * 4;

      // Create a 3-step gradient: dark, medium, bright
      const v = j / (size - 1);
      let color;

      if (v < 0.5) {
        // Dark to medium
        color = 0.2 + (0.5 - v) * 0.6;
      } else {
        // Medium to bright
        color = 0.5 + (v - 0.5) * 1.0;
      }

      const c = Math.floor(color * 255);
      data[stride2] = c;
      data[stride2 + 1] = c;
      data[stride2 + 2] = c;
      data[stride2 + 3] = 255;
    }
  }

  const texture = new DataTexture(data, size, size);
  texture.needsUpdate = true;
  return texture;
}

interface Text3DProps {
  text?: string;
  size?: number;
  height?: number;
  bevelEnabled?: boolean;
  bevelSize?: number;
  bevelThickness?: number;
  curveSegments?: number;
  letterSpacing?: number;
  lineHeight?: number;
  color?: string;
  gradientColors?: string[];
  rotation?: [number, number, number];
  position?: [number, number, number];
  className?: string;
  width?: number | string;
  heightContainer?: number | string;
  materialType?:
    | "standard"
    | "normal"
    | "basic"
    | "gradient"
    | "lambert"
    | "toon"
    | "physical";
  ambientIntensity?: number;
  directionalIntensity?: number;
}

const Text3DComponent = React.forwardRef<HTMLDivElement, Text3DProps>(
  (
    {
      text = "3D\nText",
      size = 0.8,
      height = 0.3,
      bevelEnabled = true,
      bevelSize = 0.02,
      bevelThickness = 0.05,
      curveSegments = 32,
      letterSpacing = -0.06,
      lineHeight = 0.5,
      color,
      gradientColors,
      rotation = [-0.5, -0.25, 0],
      position = [0, 0, 0],
      className,
      width = "100%",
      heightContainer = 400,
      materialType = "standard",
      ambientIntensity = 0.6,
      directionalIntensity = 0.8,
      ...props
    },
    ref
  ) => {
    // Use Geist Regular font from public folder
    const font = "/fonts/Geist_Regular.json";

    const material = React.useMemo(() => {
      const defaultColor = color || "#f5f5f5";
      switch (materialType) {
        case "gradient":
          if (gradientColors && gradientColors.length >= 2) {
            return <GradientMaterial colors={gradientColors} />;
          }
          return <meshStandardMaterial color={defaultColor} />;
        case "standard":
          return <meshStandardMaterial color={defaultColor} />;
        case "normal":
          return <meshNormalMaterial />;
        case "basic":
          return <meshBasicMaterial color={defaultColor} />;
        case "lambert":
          return <meshLambertMaterial color={defaultColor} />;
        case "toon":
          return <ToonMaterial color={defaultColor} />;
        case "physical":
          return <PhysicalMaterial color={defaultColor} />;
        default:
          return <meshStandardMaterial color={defaultColor} />;
      }
    }, [materialType, color, gradientColors]);

    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        style={{ width, height: heightContainer }}
        {...props}
      >
        <Canvas
          orthographic
          camera={{ position: [0, 0, 100], zoom: 100 }}
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={ambientIntensity} />
          <directionalLight
            position={[10, 10, 10]}
            intensity={directionalIntensity}
          />
          <SceneContent
            text={text}
            size={size}
            height={height}
            bevelEnabled={bevelEnabled}
            bevelSize={bevelSize}
            bevelThickness={bevelThickness}
            curveSegments={curveSegments}
            letterSpacing={letterSpacing}
            lineHeight={lineHeight}
            font={font}
            material={material}
            rotation={rotation}
            position={position}
            gradientColors={gradientColors}
            materialType={materialType}
          />
        </Canvas>
      </div>
    );
  }
);

Text3DComponent.displayName = "Text3D";

interface SceneContentProps {
  text: string;
  size: number;
  height: number;
  bevelEnabled: boolean;
  bevelSize: number;
  bevelThickness: number;
  curveSegments: number;
  letterSpacing: number;
  lineHeight: number;
  font: string;
  material: React.ReactElement;
  rotation: [number, number, number];
  position: [number, number, number];
  gradientColors?: string[];
  materialType: string;
}

function SceneContent({
  text,
  size,
  height,
  bevelEnabled,
  bevelSize,
  bevelThickness,
  curveSegments,
  letterSpacing,
  lineHeight,
  font,
  material,
  rotation,
  position,
  gradientColors,
  materialType,
}: SceneContentProps) {
  // Only apply position if it's not the default [0, 0, 0]
  const shouldApplyPosition =
    position[0] !== 0 || position[1] !== 0 || position[2] !== 0;

  const textRef = React.useRef<Mesh>(null);

  React.useEffect(() => {
    if (!textRef.current || materialType !== "gradient" || !gradientColors) {
      return;
    }

    const applyGradient = () => {
      const mesh = textRef.current;
      if (!mesh) return;

      const geometry = mesh.geometry;
      if (!geometry || !geometry.attributes.position) {
        // Geometry not ready yet, try again next frame
        requestAnimationFrame(applyGradient);
        return;
      }

      const positions = geometry.attributes.position;
      const colors: number[] = [];
      const colorCount = gradientColors.length;
      const gradientColors_3 = gradientColors.map((c) => new Color(c));

      // Get bounding box to calculate min/max Y
      geometry.computeBoundingBox();
      const bbox = geometry.boundingBox;
      if (!bbox) {
        requestAnimationFrame(applyGradient);
        return;
      }

      const minY = bbox.min.y;
      const maxY = bbox.max.y;
      const rangeY = maxY - minY;

      for (let i = 0; i < positions.count; i++) {
        const y = positions.getY(i);
        const t = rangeY > 0 ? (y - minY) / rangeY : 0;
        const clampedT = Math.max(0, Math.min(1, t));

        // Calculate which color segment this vertex falls into
        if (colorCount === 2) {
          // Simple 2-color gradient
          const color = gradientColors_3[0]
            .clone()
            .lerp(gradientColors_3[1], clampedT);
          colors.push(color.r, color.g, color.b);
          continue;
        }

        // Multi-color gradient (3+ colors)
        const segmentSize = 1 / (colorCount - 1);
        let segmentIndex = Math.floor(clampedT / segmentSize);
        segmentIndex = Math.min(segmentIndex, colorCount - 2); // Cap at second-to-last segment

        const segmentStart = segmentIndex * segmentSize;
        const localT =
          segmentSize > 0 ? (clampedT - segmentStart) / segmentSize : 0;

        const color = gradientColors_3[segmentIndex]
          .clone()
          .lerp(gradientColors_3[segmentIndex + 1], localT);

        colors.push(color.r, color.g, color.b);
      }

      geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
      geometry.attributes.color.needsUpdate = true;
    };

    // Start applying gradient
    applyGradient();
  }, [text, size, height, gradientColors, materialType]);

  return (
    <Center rotation={rotation} {...(shouldApplyPosition && { position })}>
      <Text3D
        ref={textRef}
        curveSegments={curveSegments}
        bevelEnabled={bevelEnabled}
        bevelSize={bevelSize}
        bevelThickness={bevelThickness}
        height={height}
        lineHeight={lineHeight}
        letterSpacing={letterSpacing}
        size={size}
        font={font}
      >
        {text}
        {material}
      </Text3D>
    </Center>
  );
}

interface GradientMaterialProps {
  colors: string[];
}

function GradientMaterial({ colors }: GradientMaterialProps) {
  const materialRef = React.useRef<MeshStandardMaterial>(null);

  React.useEffect(() => {
    if (materialRef.current) {
      materialRef.current.vertexColors = true;
    }
  }, []);

  return (
    <meshStandardMaterial ref={materialRef} vertexColors color="#ffffff" />
  );
}

interface MaterialProps {
  color: string;
}

function ToonMaterial({ color }: MaterialProps) {
  const materialRef = React.useRef<MeshToonMaterial>(null);

  React.useEffect(() => {
    if (materialRef.current) {
      // Create and apply gradient map for toon effect
      const gradientMap = createToonGradientMap();
      materialRef.current.gradientMap = gradientMap;
      materialRef.current.needsUpdate = true;
    }
  }, []);

  return <meshToonMaterial ref={materialRef} color={color} />;
}

function PhysicalMaterial({ color }: MaterialProps) {
  return (
    <meshPhysicalMaterial
      color={color}
      metalness={0.6}
      roughness={0.3}
      clearcoat={1.0}
      clearcoatRoughness={0.1}
    />
  );
}

export { Text3DComponent };
