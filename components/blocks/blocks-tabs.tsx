"use client";

import { Button } from "@/components/ui/button";
import { CATEGORY_GROUPS } from "./blocks-constants";

interface BlocksTabsProps {
    activeGroup: string;
    onGroupChange: (group: string) => void;
}

export default function BlocksTabs({ activeGroup, onGroupChange }: BlocksTabsProps) {
    return (
        <nav className="mb-8 flex gap-2">
            {CATEGORY_GROUPS.map((group) => (
                <Button
                    key={group.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => onGroupChange(group.id)}
                    className={activeGroup === group.id ? "bg-accent" : ""}
                >
                    {group.label}
                </Button>
            ))}
        </nav>
    );
}
