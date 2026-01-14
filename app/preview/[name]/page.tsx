"use client";

import { ComponentPreview, ViewMode } from "@/components/mdx/component-preview";
import { useSearchParams, useParams } from "next/navigation";
import { componentRegistry } from "@/components/mdx/component-registry";

export default function PreviewPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const blockName = params.name as string;

    // Default to desktop view for clean preview
    const viewMode = (searchParams.get("view") as ViewMode) || "desktop";

    // Check if component exists
    const componentExists = componentRegistry[blockName];

    if (!componentExists) {
        return (
            <div className="min-h-screen w-full bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Component not found</h1>
                    <p className="text-muted-foreground">
                        The component &quot;{blockName}&quot; does not exist.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-background">
            <div className="w-full max-w-full h-full flex items-center justify-center">
                <ComponentPreview name={blockName} viewMode={viewMode} />
            </div>
        </div>
    );
}
