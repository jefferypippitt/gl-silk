import type { Metadata } from "next";
import {
    Geist,
    Geist_Mono,
    Instrument_Serif,
    Source_Serif_4,
} from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
    variable: "--font-instrument-serif",
    subsets: ["latin"],
    weight: "400",
});

const sourceSerif4 = Source_Serif_4({
    variable: "--font-source-serif-4",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${sourceSerif4.variable} antialiased`}
      >
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
