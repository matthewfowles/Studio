import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew Fowles | Web & Mobile Builds for European SMEs",
  description: "Web and mobile builds and refreshes for European SMEs. AI when it removes real admin inside a shipped product. Remote from Albania.",
  keywords: ["web development", "mobile apps", "SME", "AI integration", "workflow automation"],
  authors: [{ name: "Matthew Fowles" }],
  openGraph: {
    title: "Matthew Fowles | Web & Mobile Builds",
    description: "Web and mobile builds and refreshes for European SMEs. AI when it removes real admin inside a shipped product.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
