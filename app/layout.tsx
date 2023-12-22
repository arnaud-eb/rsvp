import "./globals.css";
import type { Metadata } from "next";

import SmoothScrolling from "@/components/SmoothScrolling";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justine et Arnaud",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className="flex items-center justify-center h-screen w-screen m-0 text-black bg-white"> */}
      <body>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
      {/* <body className="bg-yellow-200 bg-gradient-radial from-yellow-600 from-10% via-transparent via-11% bg-[length:20px_20px] bg-repeat overflow-hidden">{children}</body> */}
    </html>
  );
}
