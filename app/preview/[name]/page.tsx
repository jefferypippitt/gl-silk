"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useParams } from "next/navigation";
import { componentRegistry } from "@/components/mdx/component-registry";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function PreviewPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const blockName = params.name as string;

    const [rerunKey, setRerunKey] = useState(0);
    const Component = componentRegistry[blockName];

    // Listen for rerun events
    useEffect(() => {
        const handleRerun = (event: Event) => {
            const customEvent = event as CustomEvent;
            if (
                !customEvent.detail?.previewId ||
                customEvent.detail.previewId === blockName
            ) {
                setRerunKey((prev) => prev + 1);
            }
        };

        window.addEventListener("rerun-animation", handleRerun);
        return () => window.removeEventListener("rerun-animation", handleRerun);
    }, [blockName]);

    // Add scrollbar class to html/body
    useEffect(() => {
        document.documentElement.classList.add("preview-scrollbar");
        document.body.classList.add("preview-scrollbar");
        return () => {
            document.documentElement.classList.remove("preview-scrollbar");
            document.body.classList.remove("preview-scrollbar");
        };
    }, []);

    if (!Component) {
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
        <ScrollArea className="h-screen w-full bg-background">
            <div className="min-h-full">
                <Component key={rerunKey} />
            </div>
        </ScrollArea>
    );
}
