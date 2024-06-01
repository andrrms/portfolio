import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientRootLayoutWrapper from "@/components/ClientRootLayoutWrapper";
import TopNavbar from "@/components/TopNavbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "André Silveira",
  description: "Portfolio de André Silveira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientRootLayoutWrapper>
      <Analytics />
      <SpeedInsights />
      <html lang="pt-BR">
        <body className={`${inter.className} bg-custom-blue-50 pt-4`}>
          {/* <TopNavbar /> */}
          {children}
        </body>
      </html>
    </ClientRootLayoutWrapper>
  );
}
