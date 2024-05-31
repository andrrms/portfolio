import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientRootLayoutWrapper from "@/components/ClientRootLayoutWrapper";
import "./globals.css";
import TopNavbar from "@/components/TopNavbar";

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
      <html lang="pt-BR">
        <body className={`${inter.className} bg-custom-blue-50 pt-4`}>
          {/* <TopNavbar /> */}
          {children}
        </body>
      </html>
    </ClientRootLayoutWrapper>
  );
}
