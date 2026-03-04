import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { z } from "zod";

export const docs = defineDocs({
  dir: "content/docs",
});

export const changelog = defineDocs({
  dir: "content/changelog",
  docs: {
    schema: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      date: z.union([z.string(), z.date()]).optional(),
      summary: z.string().optional(),
      items: z.array(z.string()).optional(),
    }),
  },
});

export default defineConfig();
