import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header"
import { NextRequest, NextResponse } from "next/server";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F2Ville",
  description: "Welcome to my Portfolio !",
};

export const viewport: Viewport = {
  themeColor: "#3378FF",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
