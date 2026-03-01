import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function FeatureCard({
  title,
  description,
  visual,
  wide,
}: {
  title: string;
  description: string;
  visual: string;
  wide?: boolean;
}) {
  return (
    <Card
      className={cn(
        "fsv2-card fsv2-animate pt-0",
        wide && "md:col-span-2"
      )}
    >
      <div
        className={cn(
          "fsv2-visual mb-6",
          `fsv2-visual-${visual}`
        )}
        aria-hidden="true"
      >
        {visual === "bolt" && (
          <>
            <span className="fsv2-bolt-glow" />
            <span className="fsv2-bolt" />
          </>
        )}
        {visual === "lock" && (
          <div className="fsv2-lock">
            <span className="fsv2-lock-shackle" />
            <span className="fsv2-lock-body">
              <span className="fsv2-lock-keyhole" />
            </span>
          </div>
        )}
        {visual === "radial" && (
          <div className="fsv2-wave-container">
            <span className="fsv2-wave-glow" />
            <span className="fsv2-wave fsv2-wave-a" />
            <span className="fsv2-wave fsv2-wave-b" />
            <span className="fsv2-wave fsv2-wave-c" />
          </div>
        )}
        {visual === "globe" && (
          <>
            <span className="fsv2-globe fsv2-globe-outer" />
            <span className="fsv2-globe fsv2-globe-m1" />
            <span className="fsv2-globe fsv2-globe-m2" />
            <span className="fsv2-globe-eq" />
            <span className="fsv2-globe-dot" />
          </>
        )}
        {visual === "server" && (
          <div className="fsv2-server">
            <div className="fsv2-server-unit">
              <span className="fsv2-server-light" />
              <span className="fsv2-server-light" />
              <span className="fsv2-server-light" />
              <span className="fsv2-server-line" />
            </div>
            <div className="fsv2-server-unit">
              <span className="fsv2-server-light" />
              <span className="fsv2-server-light" />
              <span className="fsv2-server-light" />
              <span className="fsv2-server-line" />
            </div>
            <div className="fsv2-server-unit">
              <span className="fsv2-server-light" />
              <span className="fsv2-server-light" />
              <span className="fsv2-server-light" />
              <span className="fsv2-server-line" />
            </div>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
