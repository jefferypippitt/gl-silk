import type { Metadata } from "next";
import Container from "@/components/container";
import BlocksCategories from "@/components/blocks/blocks-categories";
import { getBlockCategories } from "@/lib/registry";

export const metadata: Metadata = {
  title: "Blocks",
  description: "UI blocks for your next project.",
};

export default function BlocksPage() {
  const allCategories = getBlockCategories();

  return (
    <Container className="py-8 md:py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tighter md:text-4xl">
          UI blocks for your next project
        </h1>
      </div>

      <div className="mt-8 mb-8">
        <BlocksCategories categories={allCategories} />
      </div>
    </Container>
  );
}
