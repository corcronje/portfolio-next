import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import ScrollProgress from "@/components/ScrollProgress";
config.autoAddCss = false;

const exo = Exo_2({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fullstack Developer | Cor Cronje",
  description: "Build, ship and scale fast.",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <ScrollProgress />
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
