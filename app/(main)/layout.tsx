import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto w-full min-h-screen flex flex-col border-l border-r">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
