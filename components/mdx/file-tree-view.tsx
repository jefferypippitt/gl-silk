"use client";

import * as React from "react";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { ChevronRight, ChevronDown, FileCode, Folder, FolderOpen, ImageIcon, Download } from "lucide-react";
import { SiTypescript, SiCss3, SiJson, SiJavascript, SiMarkdown, SiReact } from "react-icons/si";
import { cn } from "@/lib/utils";

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

interface FileTreeNode {
  name: string;
  path: string;
  type: 'file' | 'folder';
  children?: FileTreeNode[];
  content?: string;
  sourcePath?: string;
  isAsset?: boolean;
  assetUrl?: string;
}

function getLang(path: string): string {
  const ext = path.split(".").pop()?.toLowerCase();
  if (ext === "css") return "css";
  if (ext === "tsx" || ext === "ts") return "tsx";
  if (ext === "jsx" || ext === "js") return "jsx";
  if (ext === "json") return "json";
  if (ext === "md" || ext === "mdx") return "markdown";
  return "tsx";
}

function getFileIcon(path: string): React.ReactNode {
  const ext = path.split(".").pop()?.toLowerCase();
  const iconClass = "h-4 w-4 shrink-0";
  
  switch (ext) {
    case "tsx":
      return <SiReact className={`${iconClass} text-[#61DAFB]`} />;
    case "ts":
      return <SiTypescript className={`${iconClass} text-[#3178C6]`} />;
    case "jsx":
      return <SiReact className={`${iconClass} text-[#61DAFB]`} />;
    case "js":
      return <SiJavascript className={`${iconClass} text-[#F7DF1E]`} />;
    case "css":
      return <SiCss3 className={`${iconClass} text-purple-500`} />;
    case "json":
      return <SiJson className={`${iconClass} text-[#000000]`} />;
    case "md":
    case "mdx":
      return <SiMarkdown className={`${iconClass} text-[#000000]`} />;
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "webp":
    case "svg":
    case "ico":
      return <ImageIcon className={`${iconClass} text-emerald-500`} />;
    default:
      return <FileCode className={`${iconClass} text-slate-400`} />;
  }
}

function insertPath(
  root: FileTreeNode[],
  fullPath: string,
  leaf: Omit<FileTreeNode, 'name' | 'path' | 'type' | 'children'>
) {
  const parts = fullPath.split('/').filter(Boolean);
  let currentLevel = root;
  let currentPath = '';

  parts.forEach((part, index) => {
    currentPath = currentPath ? `${currentPath}/${part}` : part;
    const isLast = index === parts.length - 1;
    const existingNode = currentLevel.find(node => node.name === part);

    if (existingNode) {
      if (!isLast && existingNode.children) {
        currentLevel = existingNode.children;
      }
    } else {
      const newNode: FileTreeNode = {
        name: part,
        path: currentPath,
        type: isLast ? 'file' : 'folder',
        ...(isLast ? leaf : { children: [] })
      };
      currentLevel.push(newNode);
      if (!isLast && newNode.children) {
        currentLevel = newNode.children;
      }
    }
  });
}

function buildFileTree(files: RegistryFile[], assets?: RegistryAsset[]): FileTreeNode[] {
  const root: FileTreeNode[] = [];

  const validFiles = files.filter((file): file is RegistryFile & { target: string } =>
    typeof file.target === 'string' && file.target.length > 0
  );

  validFiles.forEach((file) => {
    insertPath(root, file.target, { content: file.content, sourcePath: file.path });
  });

  if (assets) {
    assets.forEach((asset) => {
      insertPath(root, asset.path, { isAsset: true, assetUrl: asset.url });
    });
  }

  return root;
}

interface SelectedItem {
  path: string;
  content?: string;
  isAsset?: boolean;
  assetUrl?: string;
}

interface FileTreeItemProps {
  node: FileTreeNode;
  selectedPath: string | null;
  onSelect: (item: SelectedItem) => void;
  level?: number;
}

function FileTreeItem({ node, selectedPath, onSelect, level = 0 }: FileTreeItemProps) {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const isSelected = selectedPath === node.path;
  const isFolder = node.type === 'folder';
  
  const handleClick = () => {
    if (isFolder) {
      setIsExpanded(!isExpanded);
    } else if (node.isAsset) {
      onSelect({ path: node.path, isAsset: true, assetUrl: node.assetUrl });
    } else if (node.content) {
      onSelect({ path: node.path, content: node.content });
    }
  };
  
  return (
    <div>
      <button
        onClick={handleClick}
        className={cn(
          "w-full flex items-center gap-1.5 px-2 py-1.5 text-sm transition-colors text-left",
          isSelected 
            ? "bg-muted text-foreground" 
            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
        )}
        style={{ paddingLeft: `${level * 12 + 8}px` }}
      >
        {isFolder ? (
          <>
            {isExpanded ? (
              <ChevronDown className="h-3.5 w-3.5 shrink-0" />
            ) : (
              <ChevronRight className="h-3.5 w-3.5 shrink-0" />
            )}
            {isExpanded ? (
              <FolderOpen className="h-4 w-4 shrink-0 text-blue-500" />
            ) : (
              <Folder className="h-4 w-4 shrink-0 text-blue-500" />
            )}
          </>
        ) : (
          <>
            <span className="w-3.5 shrink-0" />
            {getFileIcon(node.name)}
          </>
        )}
        {(() => {
          const lastDotIndex = node.name.lastIndexOf('.');
          const hasExtension = lastDotIndex > 0;
          const baseName = hasExtension ? node.name.slice(0, lastDotIndex) : node.name;
          const extension = hasExtension ? node.name.slice(lastDotIndex) : '';
          return (
            <span className="truncate text-xs">
              {baseName}
              {extension && (
                <span>{extension}</span>
              )}
            </span>
          );
        })()}
      </button>
      
      {isFolder && isExpanded && node.children && (
        <div>
          {node.children.map((child) => (
            <FileTreeItem
              key={child.path}
              node={child}
              selectedPath={selectedPath}
              onSelect={onSelect}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function AssetPreview({ name, url }: { name: string; url: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full p-8 text-center">
      <div className="rounded-lg border bg-muted/40 p-4">
        <ImageIcon className="h-10 w-10 text-muted-foreground" />
      </div>
      <div className="space-y-1.5">
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground max-w-xs">
          This image asset is loaded from a remote URL. Replace it with your own file.
        </p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-xs hover:bg-muted transition-colors"
      >
        <Download className="h-3.5 w-3.5" />
        Download
      </a>
    </div>
  );
}

export const FileTreeView: React.FC<{ files: RegistryFile[]; assets?: RegistryAsset[] }> = ({ files, assets }) => {
  const tree = React.useMemo(() => buildFileTree(files, assets), [files, assets]);
  const [selected, setSelected] = React.useState<SelectedItem | null>(null);

  React.useEffect(() => {
    const firstValidFile = files.find(f => (f.target || f.path) && f.content);
    if (firstValidFile) {
      const displayPath = firstValidFile.target || firstValidFile.path;
      if (displayPath && firstValidFile.content) {
        setSelected({ path: displayPath, content: firstValidFile.content });
      }
    }
  }, [files]);

  const handleSelect = (item: SelectedItem) => {
    setSelected(item);
  };

  return (
    <div className="flex h-full w-full">
      {/* File Tree Sidebar */}
      <div className="w-52 shrink-0 border-r bg-muted/30 flex flex-col">
        <div className="p-2 border-b shrink-0">
          <span className="text-xs font-medium text-muted-foreground">Files</span>
        </div>
        <div className="flex-1 overflow-y-auto">
          {tree.map((node) => (
            <FileTreeItem
              key={node.path}
              node={node}
              selectedPath={selected?.path ?? null}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>

      {/* Content viewer */}
      <div className="flex-1 flex flex-col overflow-hidden bg-background min-w-0">
        {selected?.isAsset && selected.assetUrl ? (
          <AssetPreview name={selected.path.split('/').pop() ?? ''} url={selected.assetUrl} />
        ) : selected?.content ? (
          <div className="flex-1 relative min-h-0 overflow-y-auto overflow-x-hidden file-tree-code-container">
            <div className="grid min-h-full">
              <DynamicCodeBlock
                lang={getLang(selected.path)}
                code={selected.content}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
