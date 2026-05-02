import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crypto Self Referral Guide | RebateMax",

  description:
    "Learn how crypto self referral systems, fee rebates, cashback programs, and exchange referral structures may work on different crypto exchanges.",

  keywords: [
    "crypto self referral",
    "self referral crypto",
    "crypto fee rebate",
    "exchange cashback",
    "crypto referral rebate",
    "trading fee cashback",
  ],
};

export default function SelfReferralCryptoPage() {
  return (
    <main className="min-h-screen bg-[#eef3ff] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/">
            <img
              src="/logo.png"
              alt="RebateMax logo"
              className="h-16 w-auto object-contain"
            />
          </Link>

          <Link
            href="/"
            className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white"
          >
            Back Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
        <p className="text-sm font-black text-blue-600">
          CRYPTO SELF REFERRAL
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          What is Crypto Self Referral?
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Crypto self referral is a term often used to describe referral-related
          fee rebate structures, cashback systems, or partner-based trading fee
          benefits connected to crypto exchange referral programs.
        </p>

        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-2xl shadow-blue-100">
          <h2 className="text-3xl font-black">
            How do crypto fee rebates work?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Some crypto exchanges offer trading fee rebate systems through
            referral partnerships. Depending on the exchange and campaign,
            eligible users may receive partial trading fee discounts, cashback
            rewards, or event-based benefits.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Fee rebate percentages and referral benefits may vary depending on
            exchange policies, user region, trading activity, and promotional
            campaigns.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="text-3xl font-black">
            Why do traders search for self referral programs?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Many traders look for ways to reduce trading costs through exchange
            fee rebate systems, referral cashback structures, and trading fee
            discounts.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black">
            Compare crypto exchange rebate programs
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            RebateMax helps users compare crypto exchange referral codes,
            trading fee rebate programs, cashback offers, and exchange event
            opportunities in one place.
          </p>
        </section>
      </section>
    </main>
  );
}