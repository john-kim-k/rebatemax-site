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
  title:
    "RebateMax | Crypto Exchange Referral Codes, Fee Rebates & Self Referral",

  description:
    "Find crypto exchange referral codes, self referral opportunities, trading fee rebates, cashback offers, and exchange event updates in one place.",

  keywords: [
    "crypto referral codes",
    "crypto exchange referral",
    "self referral crypto",
    "crypto self referral",
    "exchange rebates",
    "trading fee rebates",
    "trading cashback",
    "crypto exchange discounts",
    "futures fee rebates",
    "MEXC referral code",
    "Bitget rebate",
    "LBank referral",
    "WEEX referral",
    "exchange events",
  ],

  openGraph: {
    title:
      "RebateMax | Crypto Exchange Referral Codes & Fee Rebates",

    description:
      "Compare crypto exchange referral codes, self referral opportunities, fee rebates, cashback offers, and exchange event updates.",

    url: "https://rebatemax.net",

    siteName: "RebateMax",

    type: "website",
  },

robots: {
  index: true,
  follow: true,
},

verification: {
  google: "_d-1SAhWt1AIFcI_bqF-T8Cw8ZG4WSi3qPP3fLAvqb0",
},
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