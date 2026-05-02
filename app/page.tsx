"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const events = [
    {
      exchange: "WEEX",
      title: "New User Reward Campaign",
      description:
        "Complete signup, KYC, deposit, and trading tasks to unlock multiple reward opportunities.",
      link: "https://www.weex.com/en/register?vipCode=chimpp",
      details: [
        "Secure your account and complete verification tasks.",
        "Deposit and futures trading tasks may unlock additional rewards.",
        "Higher deposit and trading milestones may qualify for larger bonuses.",
        "Rewards depend on eligibility and completed requirements.",
      ],
    },
    {
      exchange: "LBank",
      title: "New User Bonus Event",
      description:
        "LBank is offering rewards for new users who complete registration, KYC, and trading activities.",
      link: "https://lbank.com/ref/CHIMP",
      details: [
        "Register and complete KYC verification.",
        "Complete eligible first trading tasks.",
        "Spot trading activity may unlock additional rewards.",
        "Some rewards may be limited by availability.",
      ],
    },
    {
      exchange: "BYDFi",
      title: "Up To 8,100 USDT Rewards",
      description:
        "BYDFi is running limited-time new user rewards based on deposits and trading activity milestones.",
      link: "https://partner.bydfi.com/s/CHIMP888",
      details: [
        "New user rewards may unlock after signup.",
        "Deposit and trading volume tasks may qualify for higher rewards.",
        "Invite rewards may also be available.",
        "Reward eligibility depends on completed milestones.",
      ],
    },
    {
      exchange: "Gate",
      title: "Exclusive New User Event",
      description:
        "Limited-time Gate campaign with bonus rewards available through the exclusive access link.",
      link: "https://www.gate.com/campaigns/4678",
      details: [
        "Register and complete KYC to unlock trading bonus rewards.",
        "Deposit and trading volume tasks may qualify for payback rewards.",
        "Higher futures trading volume may unlock additional rewards.",
        "Event available for a limited period only.",
      ],
    },
    {
      exchange: "XT",
      title: "Task-Based New User Rewards",
      description:
        "XT offers multiple rewards through signup, KYC, deposit, and first trading tasks.",
      link: "https://www.xt.com/en/accounts/register?ref=CHIMP",
      details: [
        "Register and complete KYC tasks.",
        "Complete first deposit requirements.",
        "Spot and futures trading tasks may unlock extra rewards.",
        "Rewards vary depending on completed tasks.",
      ],
    },
    {
      exchange: "BloFin",
      title: "Mystery Box Reward Campaign",
      description:
        "BloFin is running a new user campaign with trading, staking, and deposit milestone rewards.",
      link: "https://partner.blofin.com/d/CHIMPP",
      details: [
        "Futures deposit and trading volume tasks available.",
        "Copy trading participation tasks may unlock rewards.",
        "Staking tasks may unlock separate Mystery Box rewards.",
        "Additional milestone rewards may be available within 14 days after signup.",
      ],
    },
  ];

  const exchanges = [
    {
      name: "LBank",
      logo: "/logos/lbank.png",
      rebate: "30%",
      originalMaker: "0.02%",
      maker: "0.014%",
      originalTaker: "0.06%",
      taker: "0.042%",
      link: "/lbank-referral-code",
    },
{
  name: "WEEX",
  logo: "/logos/weex.png",
  rebate: "66.12%",
  originalMaker: "0.02%",
  maker: "0.0068%",
  originalTaker: "0.06%",
  taker: "0.02%",
  link: "/weex-referral-code",
},
    {
      name: "MEXC",
      logo: "/logos/mexc.png",
      rebate: "50%",
      originalMaker: "0%",
      maker: "0%",
      originalTaker: "0.02%",
      taker: "0.01%",
      link: "/mexc-referral-code",
    },
    {
      name: "XT",
      logo: "/logos/xt.png",
      rebate: "65%",
      originalMaker: "0.02%",
      maker: "0.007%",
      originalTaker: "0.06%",
      taker: "0.021%",
      link: "/xt-referral-code",
    },
    {
      name: "Gate",
      logo: "/logos/gate.png",
      rebate: "50%",
      originalMaker: "0.02%",
      maker: "0.01%",
      originalTaker: "0.05%",
      taker: "0.025%",
      link: "/gate-referral-code",
    },
    {
      name: "BYDFi",
      logo: "/logos/bydfi.png",
      rebate: "30%",
      originalMaker: "0.02%",
      maker: "0.014%",
      originalTaker: "0.06%",
      taker: "0.042%",
      link: "/bydfi-referral-code",
    },
    {
      name: "BloFin",
      logo: "/logos/blofin.png",
      rebate: "20%",
      originalMaker: "0.02%",
      maker: "0.016%",
      originalTaker: "0.06%",
      taker: "0.048%",
      link: "/blofin-referral-code",
    },
  ];

  const [currentEvent, setCurrentEvent] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <main className="min-h-screen bg-[#eef3ff] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-5">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="RebateMax crypto exchange fee rebate platform logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          <nav className="hidden gap-10 text-sm font-black text-slate-700 md:flex">
            <a href="#about">About</a>
            <a href="#compare">Compare</a>
            <Link href="/events">Events</Link>
          </nav>

          <a
            href="https://t.me/Alpha_Mica"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex w-[80px] items-center justify-center rounded-lg bg-slate-950 py-2 pl-2 text-[12px] font-black leading-tight text-white transition hover:bg-slate-800 md:w-auto md:rounded-2xl md:px-7 md:py-4 md:text-sm"
          >
            Telegram Support
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-5 inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-black text-blue-700">
            CRYPTO EXCHANGE FEE REBATE PLATFORM
          </div>

          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Crypto exchange referral codes, fee rebates & self referral
            benefits.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            RebateMax helps traders compare crypto exchange referral codes,
            trading fee rebates, self referral benefits, cashback offers, and
            active exchange events in one place.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#compare"
              className="rounded-2xl bg-blue-600 px-8 py-5 text-center text-lg font-black text-white shadow-xl shadow-blue-200 transition hover:bg-blue-700"
            >
              Compare Fee Rebates
            </a>

            <Link
              href="/events"
              className="rounded-2xl bg-white px-8 py-5 text-center text-lg font-black text-slate-900 shadow-lg transition hover:bg-slate-50"
            >
              View Exchange Events
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-blue-100">
          <div className="overflow-hidden">
            <div
              className="flex w-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentEvent * 100}%)` }}
            >
              {events.map((event) => (
                <button
                  key={event.exchange}
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  className="block min-w-full max-w-full shrink-0 cursor-pointer overflow-hidden px-0 text-left"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-black text-blue-600">
                        EXCHANGE EVENT
                      </p>
                      <h2 className="mt-2 text-3xl font-black">
                        {event.exchange}
                      </h2>
                    </div>

                    <div className="rounded-full bg-green-100 px-5 py-2 text-sm font-black text-green-700">
                      Active
                    </div>
                  </div>

                  <div className="rounded-3xl bg-gradient-to-br from-slate-100 to-blue-50 p-7 transition hover:from-blue-50 hover:to-slate-100">
                    <h3 className="text-2xl font-black">{event.title}</h3>
                    <p className="mt-5 leading-8 text-slate-600">
                      {event.description}
                    </p>

                    <div className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-blue-600 shadow-sm">
                      Click to view details
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            {events.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentEvent(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentEvent === index ? "bg-blue-600" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-950 px-8 py-24 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-black text-blue-400">ABOUT REBATEMAX</p>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight md:text-5xl">
            Find official exchange referral links with trading fee rebate
            benefits.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            RebateMax provides crypto exchange referral links, self referral
            information, trading fee cashback details, and selected exchange
            event updates for traders.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white/10 p-8 text-left">
              <h3 className="text-2xl font-black">What is Fee Rebate?</h3>
              <p className="mt-5 leading-8 text-slate-300">
                A fee rebate means part of your trading fees can be discounted
                or returned depending on the exchange program and referral
                conditions.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/10 p-8 text-left">
              <h3 className="text-2xl font-black">Self Referral Benefits</h3>
              <p className="mt-5 leading-8 text-slate-300">
                Self referral and exchange rebate programs may help active
                traders reduce trading costs through cashback or fee discount
                structures.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/10 p-8 text-left">
              <h3 className="text-2xl font-black">Beginner Friendly</h3>
              <p className="mt-5 leading-8 text-slate-300">
                Click an exchange, register through the connected referral
                page, and check the applied fee rebate or event benefits before
                trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="compare" className="mx-auto max-w-7xl px-8 py-24">
        <div className="mb-8">
          <p className="text-sm font-black text-blue-600">
            EXCHANGE REBATE COMPARISON
          </p>
          <h2 className="mt-2 text-4xl font-black">
            Crypto Exchange Fee Rebate Comparison
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Compare referral code benefits, maker and taker fee discounts,
            cashback rates, and exchange rebate programs from selected crypto
            exchanges.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-blue-100">
          <div className="hidden grid-cols-4 border-b bg-slate-100 px-8 py-6 text-sm font-black text-slate-500 md:grid">
            <div>Exchange</div>
            <div>Rebate</div>
            <div>Maker</div>
            <div>Taker</div>
          </div>

          {exchanges.map((item) => (
            <div
              key={item.name}
              className="grid gap-4 border-b px-8 py-7 md:grid-cols-4 md:items-center"
            >
              <div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xl font-black transition hover:text-blue-600"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
                    <img
                      src={item.logo}
                      alt={`${item.name} referral code and fee rebate`}
                      className="h-12 w-12 object-contain"
                    />
                  </span>
                  <span>{item.name}</span>
                </a>
              </div>

              <div className="flex items-center justify-between md:block">
                <span className="text-sm font-black text-slate-500 md:hidden">
                  Rebate
                </span>

                <div className="font-black text-blue-600">{item.rebate}</div>
              </div>

              <div className="flex items-center justify-between md:block">
                <span className="text-sm font-black text-slate-500 md:hidden">
                  Maker
                </span>

                <div className="flex flex-col text-right font-black md:text-left">
                  <span className="text-sm text-slate-400 line-through">
                    {item.originalMaker}
                  </span>

                  <span className="mt-1 text-blue-600">{item.maker}</span>
                </div>
              </div>

              <div className="flex items-center justify-between md:block">
                <span className="text-sm font-black text-slate-500 md:hidden">
                  Taker
                </span>

                <div className="flex flex-col text-right font-black md:text-left">
                  <span className="text-sm text-slate-400 line-through">
                    {item.originalTaker}
                  </span>

                  <span className="mt-1 text-blue-600">{item.taker}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2.5rem] bg-white p-8 shadow-2xl sm:p-12">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black text-blue-600">
                  EXCHANGE EVENT
                </p>
                <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                  {selectedEvent.exchange}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-3xl font-black text-slate-400 transition hover:bg-slate-200 hover:text-slate-900"
              >
                ×
              </button>
            </div>

            <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-blue-600 to-slate-950 p-8 text-white">
              <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-black text-blue-100">
                Active Campaign
              </div>

              <h3 className="text-3xl font-black">{selectedEvent.title}</h3>

              <p className="mt-5 text-base leading-8 text-blue-50">
                {selectedEvent.description}
              </p>
            </div>

            <div className="mt-8 rounded-[2rem] bg-slate-100 p-8">
              <p className="text-xl font-black">Event Details</p>

              <ul className="mt-5 space-y-4 text-slate-700">
                {selectedEvent.details.map((detail: string, index: number) => (
                  <li
                    key={detail}
                    className="flex gap-4 rounded-2xl bg-white px-5 py-4 leading-7 shadow-sm"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-600">
                      {index + 1}
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={selectedEvent.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full rounded-2xl bg-blue-600 py-5 text-center text-lg font-black text-white transition hover:bg-blue-700"
            >
              Go to Event / Exchange
            </a>

            <p className="mt-5 text-center text-xs leading-6 text-slate-500">
              Rewards and eligibility may vary. Please check the official event
              page before participating.
            </p>
          </div>
        </div>
      )}

      <footer className="border-t bg-white px-8 py-8 text-center text-sm font-medium text-slate-500">
        RebateMax © 2026 — Crypto Exchange Fee Rebate & Referral Code Platform
      </footer>
    </main>
  );
}