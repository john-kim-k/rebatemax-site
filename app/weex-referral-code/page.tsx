import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WEEX Referral Code & Fee Rebate | RebateMax",

  description:
    "Access the WEEX referral code through RebateMax to explore trading fee rebate benefits, cashback opportunities, and exchange reward campaigns.",

  keywords: [
    "WEEX referral code",
    "WEEX rebate",
    "WEEX cashback",
    "WEEX trading fee discount",
    "crypto exchange referral code",
  ],
};

export default function WeexReferralCodePage() {
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
        <p className="text-sm font-black text-blue-600">WEEX REFERRAL CODE</p>

        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
          WEEX Referral Code with Trading Fee Rebate Benefits
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          RebateMax provides access to a WEEX referral link that may include
          trading fee rebates, cashback-style benefits, and exchange reward
          opportunities for eligible users.
        </p>

        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-2xl shadow-blue-100">
          <h2 className="text-3xl font-black">WEEX Fee Rebate Details</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-blue-50 p-6">
              <p className="text-sm font-black text-slate-500">Rebate</p>
              <p className="mt-2 text-3xl font-black text-blue-600">
                66.12%
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <p className="text-sm font-black text-slate-500">Maker Fee</p>
              <p className="mt-2 text-3xl font-black text-blue-600">
                0.0068%
              </p>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <p className="text-sm font-black text-slate-500">Taker Fee</p>
              <p className="mt-2 text-3xl font-black text-blue-600">
                0.02%
              </p>
            </div>
          </div>

          <a
            href="https://www.weex.com/en/register?vipCode=chimpp"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block rounded-2xl bg-blue-600 px-8 py-5 text-center text-lg font-black text-white transition hover:bg-blue-700"
          >
            Open WEEX Referral Link
          </a>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Fee rebates, cashback benefits, and exchange campaigns may vary
            depending on region, account eligibility, and exchange policies.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="text-3xl font-black">
            What is a WEEX referral code?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A WEEX referral code connects a new account to a partner referral
            program. Depending on current exchange campaigns, eligible users may
            receive trading fee discounts or rebate-related benefits.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black">
            Why compare exchange rebate programs?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Different exchanges may offer different trading fee rebate rates,
            cashback structures, and referral rewards. RebateMax helps traders
            compare available exchange benefits in one place.
          </p>
        </section>
      </section>
    </main>
  );
}