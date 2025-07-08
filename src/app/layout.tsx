import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SeaLive Yacht - Profesyonel Yat Taşımacılığı",
  description: "Güvenli ve profesyonel yat taşımacılığı hizmetleri. Deneyimli ekibimizle yatınızı güvenle taşıyoruz.",
  keywords: "yat taşımacılığı, yacht transport, deniz taşımacılığı, yat kargo, profesyonel yat taşıma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
