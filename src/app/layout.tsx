import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const notoSansThai = Noto_Sans_Thai({ subsets: ["thai", "latin"] });

export const metadata: Metadata = {
  title: "WealthTech Academy - Online Learning Platform",
  description: "อัปสกิลการทำงานของคุณกับคอร์สเรียนออนไลน์ที่ดีที่สุด",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.className} min-h-screen bg-white flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
