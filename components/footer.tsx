
export default function Footer() {
  return (
    <footer className="border-t border-border bg-background ">
      <div className="flex items-center justify-center h-16 px-6 sm:px-8 max-w-6xl mx-auto">
        <p className="text-sm text-muted-foreground">©{new Date().getFullYear()} glsilk</p>
      </div>
    </footer>
  );
}
