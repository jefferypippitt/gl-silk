"use client";

import * as React from "react";
import { componentRegistry } from "./component-registry";

export const ComponentPreview: React.FC<{ name: string }> = ({ name }) => {
  const Component = componentRegistry[name];

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
      <div className="relative flex items-center justify-center min-h-[200px] border rounded-lg p-6">
        <Component />
      </div>
    </div>
  );
};
