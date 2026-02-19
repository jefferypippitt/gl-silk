"use client";

import * as React from "react";
import { FileTreeView } from "./file-tree-view";

interface RegistryFile {
  path?: string;
  target?: string;
  type: string;
  content?: string;
}

interface RegistryAsset {
  path: string;
  url: string;
}

export const ComponentSource: React.FC<{ name: string }> = ({ name }) => {
  const [files, setFiles] = React.useState<RegistryFile[]>([]);
  const [assets, setAssets] = React.useState<RegistryAsset[]>([]);
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
            (file.type === "registry:component" || file.type === "registry:page") && file.content
        ).map((file: RegistryFile) => ({
          path: file.path,
          target: file.target,
          type: file.type,
          content: file.content
        }));
        setFiles(componentFiles);

        if (data.meta?.assets) {
          setAssets(data.meta.assets as RegistryAsset[]);
        }
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
      <div className="flex h-full w-full">
        <div className="w-52 border-r bg-muted/30 p-4">
          <div className="h-4 w-20 rounded bg-muted animate-pulse mb-4" />
          <div className="space-y-2">
            <div className="h-3 w-3/4 rounded bg-muted animate-pulse" />
            <div className="h-3 w-1/2 rounded bg-muted animate-pulse ml-4" />
            <div className="h-3 w-2/3 rounded bg-muted animate-pulse ml-4" />
            <div className="h-3 w-1/2 rounded bg-muted animate-pulse" />
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="h-4 w-full rounded bg-muted animate-pulse mb-2" />
          <div className="h-4 w-5/6 rounded bg-muted animate-pulse mb-2" />
          <div className="h-4 w-4/5 rounded bg-muted animate-pulse mb-2" />
          <div className="h-4 w-full rounded bg-muted animate-pulse" />
        </div>
      </div>
    );
  }

  if (files.length === 0) {
    return null;
  }

  return (
    <div className="h-full">
      <FileTreeView files={files} assets={assets} />
    </div>
  );
};
