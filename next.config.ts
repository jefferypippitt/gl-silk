import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX({
  configPath: "source.config.ts",
});

const nextConfig: NextConfig = {
  // PPR is disabled due to fumadocs incompatibility
  // cacheComponents: true,
};

export default withMDX(nextConfig);
