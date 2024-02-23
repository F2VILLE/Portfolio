import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header/header"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F2Ville",
  description: "Welcome to my Portfolio !",
  themeColor: "#3378FF",
};

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
