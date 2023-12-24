import "./globals.css";
import type { Metadata } from "next";
import { Catamaran, Palanquin_Dark } from "next/font/google";

import SmoothScrolling from "@/components/SmoothScrolling";

const catamaran = Catamaran({
  subsets: ["latin"],
  variable: "--font-catamaran",
  display: "swap",
});
const palanquin_dark = Palanquin_Dark({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-palanquin-dark",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Justine et Arnaud",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${catamaran.variable} ${palanquin_dark.variable}`}
    >
      <body className="relative bg-primary-400">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
