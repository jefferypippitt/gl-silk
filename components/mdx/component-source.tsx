"use client";

import * as React from "react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

interface RegistryFile {
  type: string;
  content?: string;
}

export const ComponentSource: React.FC<{ name: string }> = ({ name }) => {
  const [content, setContent] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`/r/${name}.json`);
        if (!response.ok) {
          console.error(`Failed to load registry item: ${name}`);
          setContent(null);
          return;
        }
        const data = await response.json();
        const componentFile = data.files.find(
          (file: RegistryFile) => file.type === "registry:component"
        );
        setContent(componentFile?.content || null);
      } catch (error) {
        console.error(`Error loading component source for ${name}:`, error);
        setContent(null);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [name]);

  if (loading) {
    return (
      <div className="text-sm text-muted-foreground">Loading source...</div>
    );
  }

  if (!content) {
    return null;
  }

  return <DynamicCodeBlock lang="tsx" code={content} />;
};
