"use client";

import { useState } from "react";
import BlocksTabs from "./blocks-tabs";
import BlocksCategories from "./blocks-categories";
import { getBlockCategories } from "@/lib/registry";
import { CATEGORY_TO_GROUP } from "./blocks-constants";

export default function BlocksSection() {
    const [activeGroup, setActiveGroup] = useState("landing-page");
    const allCategories = getBlockCategories();

    // Filter categories by active group
    const filteredCategories = allCategories.filter((category) => {
        const group = CATEGORY_TO_GROUP[category.name] || "other";
        return group === activeGroup;
    });

    return (
        <>
            <BlocksTabs activeGroup={activeGroup} onGroupChange={setActiveGroup} />
            <BlocksCategories categories={filteredCategories} />
        </>
    );
}
