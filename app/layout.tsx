import type { Metadata } from "next";
import { Instrument_Serif, Noto_Serif_Display } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
    GeistPixelSquare,
    GeistPixelGrid,
    GeistPixelCircle,
    GeistPixelTriangle,
    GeistPixelLine,
} from "geist/font/pixel";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
    variable: "--font-instrument-serif",
    subsets: ["latin"],
    weight: "400",
});

const notoSerifDisplay = Noto_Serif_Display({
    variable: "--font-noto-serif-display",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "glsilk",
  description: "A component library for building web applications.",
  icons: {
    icon: [
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} ${GeistPixelGrid.variable} ${GeistPixelCircle.variable} ${GeistPixelTriangle.variable} ${GeistPixelLine.variable} ${instrumentSerif.variable} ${notoSerifDisplay.variable}`}
    >
      <body className="antialiased">
        <RootProvider
          theme={{
            enabled: true,
            defaultTheme: "system",
            storageKey: "theme",
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
