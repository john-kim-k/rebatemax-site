"use client";

import Link from "next/link";
import { useState } from "react";

export default function EventsPage() {
  const events = [
    {
      exchange: "WEEX",
      title: "New User Reward Campaign",
      description:
        "Complete signup, KYC, deposit, and trading tasks to unlock multiple reward opportunities.",
      link: "https://www.weex.com/en/register?vipCode=chimpp",
      details: [
        "Complete account verification tasks.",
        "Deposit and trading activities may unlock rewards.",
        "Higher trading milestones may qualify for larger bonuses.",
        "Rewards depend on eligibility and completion status.",
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
        "Eligible trading tasks may unlock rewards.",
        "Spot trading activity campaigns may apply.",
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
        "New user rewards available after signup.",
        "Deposit and trading volume milestones available.",
        "Invite reward campaigns may apply.",
        "Rewards depend on completed requirements.",
      ],
    },
    {
      exchange: "Gate",
      title: "Exclusive New User Event",
      description:
        "Limited-time Gate campaign with bonus rewards available through the exclusive access link.",
      link: "https://www.gate.com/campaigns/4776",
      details: [
        "Register and complete KYC tasks.",
        "Deposit and trading volume rewards available.",
        "Additional futures trading rewards may apply.",
        "Limited-time campaign event.",
      ],
    },
    {
      exchange: "XT",
      title: "Task-Based New User Rewards",
      description:
        "XT offers multiple rewards through signup, KYC, deposit, and first trading tasks.",
      link: "https://www.xt.com/en/accounts/register?ref=CHIMP",
      details: [
        "Signup and KYC reward tasks available.",
        "Deposit tasks may unlock rewards.",
        "Spot and futures trading tasks included.",
        "Reward amount depends on completed tasks.",
      ],
    },
    {
      exchange: "BloFin",
      title: "Mystery Box Reward Campaign",
      description:
        "BloFin is running a new user campaign with trading, staking, and deposit milestone rewards.",
      link: "https://partner.blofin.com/d/CHIMPP",
      details: [
        "Futures deposit reward tasks available.",
        "Copy trading tasks may unlock rewards.",
        "Staking participation tasks available.",
        "Extra milestone rewards may apply.",
      ],
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <main className="min-h-screen bg-[#eef3ff]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-5">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="RebateMax"
              className="h-20 w-auto object-contain"
            />
          </Link>

          <Link
            href="/"
            className="ml-auto inline-flex w-[80px] items-center justify-center rounded-lg bg-slate-950 py-2 text-[12px] font-black leading-tight text-white transition hover:bg-slate-800 md:w-auto md:rounded-2xl md:px-7 md:py-4 md:text-sm"
          >
            Back Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-20">
        <p className="text-sm font-black uppercase tracking-wider text-blue-600">
          Exchange Events
        </p>

        <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
          Active Exchange Campaigns
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Check current exchange events, signup campaigns, trading rewards, and
          rebate-related benefits from supported platforms.
        </p>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <button
              key={event.exchange}
              onClick={() => setSelectedEvent(event)}
              className="group rounded-[2.5rem] bg-white p-8 text-left shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="rounded-full bg-green-100 px-5 py-2 text-sm font-black text-green-700">
                  Active
                </div>

                <span className="text-sm font-black text-blue-600">
                  {event.exchange}
                </span>
              </div>

              <h2 className="text-3xl font-black text-slate-950 transition group-hover:text-blue-600">
                {event.title}
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                {event.description}
              </p>

              <div className="mt-8 inline-flex rounded-full bg-blue-100 px-5 py-3 text-sm font-black text-blue-700">
                View Event
              </div>
            </button>
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
                onClick={() => setSelectedEvent(null)}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-3xl font-black text-slate-500 hover:bg-slate-200"
              >
                ×
              </button>
            </div>

            <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-blue-600 to-slate-950 p-8 text-white">
              <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-black">
                Active Campaign
              </div>

              <h3 className="text-3xl font-black">{selectedEvent.title}</h3>

              <p className="mt-5 leading-8 text-blue-50">
                {selectedEvent.description}
              </p>
            </div>

            <div className="mt-8 rounded-[2rem] bg-slate-100 p-8">
              <p className="text-xl font-black">Event Details</p>

              <ul className="mt-5 space-y-4">
                {selectedEvent.details.map((detail: string, index: number) => (
                  <li
                    key={detail}
                    className="flex gap-4 rounded-2xl bg-white px-5 py-4 leading-7 text-slate-700"
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
              Go to Event
            </a>
          </div>
        </div>
      )}
    </main>
  );
}