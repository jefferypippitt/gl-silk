import BlocksSection from "@/components/blocks/blocks-section";

export default function BlocksPage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold tracking-tighter md:text-4xl">
          UI blocks for your next project
        </h1>

        {/* Category Tabs and Blocks Grid */}
        <div className="mt-8 mb-8">
          <BlocksSection />
        </div>
      </div>
    </main>
  );
}