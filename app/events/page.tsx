"use client";

import { useState } from "react";
import Link from "next/link";

export default function EventsPage() {
  const events = [
    {
      exchange: "WEEX",
      title: "New User Event",
      description: "Limited-time signup rewards and trading bonus campaigns.",
      link: "https://www.weex.com/en/register?vipCode=chimpp",
      details: [
        "Signup rewards may be available for eligible new users.",
        "Trading bonus campaigns may apply depending on event conditions.",
        "Please check the official exchange page for full terms.",
      ],
    },
    {
      exchange: "MEXC",
      title: "Trading Fee Campaign",
      description: "Special fee discounts and event rewards for active traders.",
      link: "https://www.mexc.com/acquisition/custom-sign-up?shareCode=mexc-CHIMP",
      details: [
        "Fee discount campaigns may be available.",
        "Trading rewards may depend on volume and eligibility.",
        "Please check the official exchange page before joining.",
      ],
    },
    {
      exchange: "LBank",
      title: "Deposit Reward Event",
      description: "Deposit campaigns and futures trading reward programs.",
      link: "https://lbank.com/ref/CHIMP",
      details: [
        "Deposit reward events may be available.",
        "Futures trading reward programs may apply.",
        "Event conditions can change depending on the exchange.",
      ],
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  return (
    <main className="min-h-screen bg-[#eef3ff] text-slate-950">
      <header className="border-b bg-white px-8 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/">
            <img src="/logo.png" alt="RebateMax Logo" className="h-16 w-auto" />
          </Link>

          <Link
            href="/"
            className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-black text-white"
          >
            Back Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-8 py-20">
        <p className="text-sm font-black text-blue-600">EXCHANGE EVENTS</p>

        <h1 className="mt-3 text-5xl font-black">
          Active Exchange Campaigns
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Check current exchange events, signup campaigns, trading rewards, and
          rebate-related benefits from supported platforms.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <button
              key={event.exchange}
              type="button"
              onClick={() => setSelectedEvent(event)}
              className="rounded-[2rem] bg-white p-8 text-left shadow-xl shadow-blue-100 transition hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                Active
              </div>

              <p className="text-sm font-black text-blue-600">
                {event.exchange}
              </p>

              <h2 className="mt-3 text-2xl font-black">{event.title}</h2>

              <p className="mt-5 leading-8 text-slate-600">
                {event.description}
              </p>
            </button>
          ))}
        </div>
      </section>

      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-xl rounded-[2rem] bg-white p-8 shadow-2xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-black text-blue-600">
                EXCHANGE EVENT
              </p>

              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="text-2xl font-black text-slate-400 hover:text-slate-900"
              >
                ×
              </button>
            </div>

            <h2 className="mt-3 text-4xl font-black">
              {selectedEvent.exchange}
            </h2>

            <h3 className="mt-6 text-2xl font-black">
              {selectedEvent.title}
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              {selectedEvent.description}
            </p>

            <div className="mt-6 rounded-3xl bg-slate-100 p-6">
              <p className="font-black">Event Details</p>

              <ul className="mt-4 space-y-3 text-slate-700">
                {selectedEvent.details.map((detail: string) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
            </div>

            <a
              href={selectedEvent.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full rounded-2xl bg-blue-600 py-4 text-center font-black text-white transition hover:bg-blue-700"
            >
              Go to Exchange
            </a>
          </div>
        </div>
      )}
    </main>
  );
}