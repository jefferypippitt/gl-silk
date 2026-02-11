"use client";

import * as React from "react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";

interface RegistryFile {
  path?: string;
  type: string;
  content?: string;
}

function getLang(path: string): string {
  const ext = path.split(".").pop()?.toLowerCase();
  if (ext === "css") return "css";
  if (ext === "tsx" || ext === "ts") return "tsx";
  if (ext === "jsx" || ext === "js") return "jsx";
  return "tsx";
}

function getFileName(path: string): string {
  return path.split("/").pop() || path;
}

export const ComponentSource: React.FC<{ name: string }> = ({ name }) => {
  const [files, setFiles] = React.useState<RegistryFile[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch(`/r/${name}.json`);
        if (!response.ok) {
          console.error(`Failed to load registry item: ${name}`);
          setFiles([]);
          return;
        }
        const data = await response.json();
        const componentFiles = data.files.filter(
          (file: RegistryFile) =>
            file.type === "registry:component" && file.content
        );
        setFiles(componentFiles);
      } catch (error) {
        console.error(`Error loading component source for ${name}:`, error);
        setFiles([]);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [name]);

  if (loading) {
    return (
      <div className="flex flex-col gap-2 p-4">
        <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
        <div className="h-4 w-1/2 rounded bg-muted animate-pulse" />
        <div className="h-4 w-5/6 rounded bg-muted animate-pulse" />
        <div className="h-4 w-2/3 rounded bg-muted animate-pulse" />
        <div className="h-4 w-4/5 rounded bg-muted animate-pulse" />
        <div className="h-4 w-1/3 rounded bg-muted animate-pulse" />
        <div className="h-4 w-3/5 rounded bg-muted animate-pulse" />
        <div className="h-4 w-2/4 rounded bg-muted animate-pulse" />
      </div>
    );
  }

  if (files.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {files.map((file, index) => (
        <div key={file.path || index}>
          {files.length > 1 && file.path && (
            <div className="flex items-center gap-2 border-b border-border/40 bg-muted/30 px-4 py-1.5">
              <span className="text-xs font-mono text-muted-foreground">
                {getFileName(file.path)}
              </span>
            </div>
          )}
          <DynamicCodeBlock
            lang={getLang(file.path || `${name}.tsx`)}
            code={file.content!}
          />
        </div>
      ))}
    </div>
  );
};
