"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { componentRegistry } from "./component-registry";

export const ComponentPreview: React.FC<{ name: string }> = ({ name }) => {
  const [rerunKey, setRerunKey] = useState(0);
  const Component = componentRegistry[name];

  useEffect(() => {
    const handleRerun = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (
        !customEvent.detail?.previewId ||
        customEvent.detail.previewId === name
      ) {
        setRerunKey((prev) => prev + 1);
      }
    };

    window.addEventListener("rerun-animation", handleRerun);
    return () => window.removeEventListener("rerun-animation", handleRerun);
  }, [name]);

  if (!Component) {
    return (
      <div className="flex items-center justify-center min-h-[200px] border rounded-lg">
        <div className="text-sm text-destructive">
          Component &quot;{name}&quot; not found
        </div>
      </div>
    );
  }

  return (
    <div className="not-prose">
      <div className="flex items-center justify-center min-h-[200px] border rounded-lg p-6">
        <Component key={rerunKey} />
      </div>
    </div>
  );
};
