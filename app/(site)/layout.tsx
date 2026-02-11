import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="relative flex flex-col flex-1">{children}</main>
      <Footer />
    </div>
  );
}
