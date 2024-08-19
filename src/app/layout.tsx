import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Self Dev Planner",
  description: "All in one self development planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="grow p-7">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
