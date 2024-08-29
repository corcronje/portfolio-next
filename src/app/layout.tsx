import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fullstack Developer | Cor Cronje",
  description: "Build, ship and scale fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <main className="">
          {children}
        </main>
        <footer className="border-t border-slate-300 dark:border-slate-800 py-10 mt-5">
          <p className="text-center text-sm">
            Copyright © 2024 cronje.dev
          </p>
        </footer>
      </body>
    </html>
  );
}
