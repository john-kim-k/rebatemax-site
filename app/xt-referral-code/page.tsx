import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "XT Referral Code & Fee Rebate | RebateMax",

  description:
    "Use the XT referral code through RebateMax to explore trading fee rebate benefits, cashback opportunities, and exchange reward campaigns.",

  keywords: [
    "XT referral code",
    "XT fee rebate",
    "XT cashback",
    "XT trading fee discount",
    "crypto exchange referral code",
    "crypto fee rebate",
  ],
};

export default function XTReferralCodePage() {
  return (
    <main className="min-h-screen bg-[#eef3ff] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/">
            <img
              src="/logo.png"
              alt="RebateMax crypto exchange fee rebate platform logo"
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
        <p className="text-sm font-black text-blue-600">XT REFERRAL CODE</p>

        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          XT Referral Code with Trading Fee Rebate Benefits
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          RebateMax provides access to an XT referral link that may include
          trading fee rebate benefits, cashback-style rewards, and exchange
          event opportunities for eligible users.
        </p>

        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-2xl shadow-blue-100">
          <h2 className="text-3xl font-black">XT Fee Rebate Details</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-blue-50 p-6">
              <p className="text-sm font-black text-slate-500">Rebate</p>
              <p className="mt-2 text-3xl font-black text-blue-600">65%</p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <p className="text-sm font-black text-slate-500">Maker Fee</p>
              <p className="mt-2 text-3xl font-black text-blue-600">0.007%</p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <p className="text-sm font-black text-slate-500">Taker Fee</p>
              <p className="mt-2 text-3xl font-black text-blue-600">0.021%</p>
            </div>
          </div>

          <a
            href="https://www.xt.com/en/accounts/register?ref=CHIMP"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block rounded-2xl bg-blue-600 px-8 py-5 text-center text-lg font-black text-white transition hover:bg-blue-700"
          >
            Open XT Referral Link
          </a>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Fee rebate rates, cashback availability, and reward campaigns may
            vary depending on XT terms, region, eligibility, and account status.
            Always check the official exchange page before registering or
            trading.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="text-3xl font-black">What is an XT referral code?</h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            An XT referral code is a signup link or code connected to a partner
            program. Depending on the current exchange campaign, eligible users
            may access trading fee discounts, fee rebates, cashback benefits, or
            new user event rewards.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black">
            Why use RebateMax for exchange fee rebates?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            RebateMax helps traders compare crypto exchange referral codes, self
            referral opportunities, trading fee rebate programs, cashback
            offers, and exchange events in one place.
          </p>
        </section>
      </section>
    </main>
  );
}