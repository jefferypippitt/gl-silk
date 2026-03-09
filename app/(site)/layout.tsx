import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-svh flex-col">
      <Navbar />
      <main className="relative flex min-h-0 flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
