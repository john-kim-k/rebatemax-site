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
  title: "RebateMax | Crypto Exchange Referral Codes & Fee Rebates",

  description:
    "Compare crypto exchange referral codes, fee rebates, trading discounts, and exchange events in one place.",

  keywords: [
    "crypto referral codes",
    "exchange rebates",
    "crypto exchange discounts",
    "trading fee rebates",
    "MEXC referral",
    "Bitget rebate",
    "LBank referral",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
