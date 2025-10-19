import { getRegistryItems } from "@/lib/registry";
import { DynamicComponentLoader } from "@/components/registry/dynamic-component-loader";

export default function BlocksPage() {
  const components = getRegistryItems();

  return (
    <div className="flex flex-col px-4 py-8 gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Registry Components
        </h1>
        <p className="text-muted-foreground">
          Explore and download reusable components from our custom registry.
        </p>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {components.map((item) => (
          <DynamicComponentLoader key={item.name} item={item} />
        ))}
      </main>
    </div>
  );
}
