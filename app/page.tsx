"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const exchanges = [
    {
      name: "LBank",
      logo: "/logos/lbank.png",
      rebate: "30%",
      originalMaker: "0.02%",
      maker: "0.014%",
      originalTaker: "0.06%",
      taker: "0.042%",
      link: "https://lbank.com/ref/CHIMP",
    },
    {
      name: "WEEX",
      logo: "/logos/weex.png",
      rebate: "66.12%",
      originalMaker: "0.02%",
      maker: "0.0068%",
      originalTaker: "0.06%",
      taker: "0.02%",
      link: "https://www.weex.com/en/register?vipCode=chimpp",
    },
    {
      name: "MEXC",
      logo: "/logos/mexc.png",
      rebate: "50%",
      originalMaker: "0%",
      maker: "0%",
      originalTaker: "0.02%",
      taker: "0.01%",
      link: "https://www.mexc.com/acquisition/custom-sign-up?shareCode=mexc-CHIMP",
    },
    {
      name: "XT",
      logo: "/logos/xt.png",
      rebate: "65%",
      originalMaker: "0.02%",
      maker: "0.007%",
      originalTaker: "0.06%",
      taker: "0.021%",
      link: "https://www.xt.com/en/accounts/register?ref=CHIMP",
    },
    {
      name: "Gate",
      logo: "/logos/gate.png",
      rebate: "50%",
      originalMaker: "0.02%",
      maker: "0.01%",
      originalTaker: "0.05%",
      taker: "0.025%",
      link: "https://www.gate.com/share/CHIMPPPP",
    },
    {
      name: "BYDFI",
      logo: "/logos/bydfi.png",
      rebate: "30%",
      originalMaker: "0.02%",
      maker: "0.014%",
      originalTaker: "0.06%",
      taker: "0.042%",
      link: "https://partner.bydfi.com/s/CHIMP888",
    },
    {
      name: "BloFin",
      logo: "/logos/blofin.png",
      rebate: "20%",
      originalMaker: "0.02%",
      maker: "0.016%",
      originalTaker: "0.06%",
      taker: "0.048%",
      link: "https://partner.blofin.com/d/CHIMPP",
    },
  ];

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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="RebateMax Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          <nav className="hidden gap-10 text-sm font-black text-slate-700 md:flex">
            <a href="#about">About</a>
            <a href="#compare">Compare</a>
            <Link href="/events">Events</Link>
          </nav>

          <a
            href="https://t.me/Alpha_JohnK"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:bg-slate-800"
          >
            Telegram Support
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-8 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-5 inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-black text-blue-700">
            CRYPTO EXCHANGE BENEFITS PLATFORM
          </div>

          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Compare crypto exchange rebates & referral benefits.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Find the best exchange referral codes, fee discounts, cashback
            programs, and ongoing exchange campaigns in one place.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#compare"
              className="rounded-2xl bg-blue-600 px-8 py-5 text-center text-lg font-black text-white shadow-xl shadow-blue-200"
            >
              Compare Exchanges
            </a>

            <Link
  href="/events"
  className="rounded-2xl bg-white px-8 py-5 text-center text-lg font-black text-slate-900 shadow-lg"
>
  View Events
</Link>
          </div>
        </div>

        <div
          id="events"
          className="overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-blue-100"
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentEvent * 100}%)`,
              }}
            >
              {events.map((event) => (
                <button
                  key={event.exchange}
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  className="block min-w-full shrink-0 cursor-pointer px-0 text-left"
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

                  <div className="rounded-3xl bg-slate-100 p-7 transition hover:bg-slate-200">
                    <h3 className="text-2xl font-black">{event.title}</h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {event.description}
                    </p>
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
            Higher exchange fee rebates through official partnerships.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            RebateMax helps traders access exchange signup links with fee rebate
            benefits already applied.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-white/10 p-8 text-left">
              <h3 className="text-2xl font-black">What is Fee Rebate?</h3>

              <p className="mt-5 leading-8 text-slate-300">
                A fee rebate means part of your trading fees can be discounted
                or returned depending on the exchange program.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/10 p-8 text-left">
              <h3 className="text-2xl font-black">Official Partnerships</h3>

              <p className="mt-5 leading-8 text-slate-300">
                We work with exchange partner programs to provide higher rebate
                benefits for traders.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/10 p-8 text-left">
              <h3 className="text-2xl font-black">Beginner Friendly</h3>

              <p className="mt-5 leading-8 text-slate-300">
                Simply click an exchange and register through the connected
                signup page with rebate benefits applied.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="compare" className="mx-auto max-w-7xl px-8 py-24">
        <div className="mb-8">
          <p className="text-sm font-black text-blue-600">
            EXCHANGE COMPARISON
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Fee Rebate Comparison
          </h2>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Click on any exchange name below to open the signup page with rebate
            benefits already applied.
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
                      alt={`${item.name} logo`}
                      className="h-12 w-12 object-contain"
                    />
                  </span>

                  <span>{item.name}</span>
                </a>
              </div>

              <div className="font-black text-blue-600">{item.rebate}</div>

              <div className="flex flex-col font-black">
                <span className="text-sm text-slate-400 line-through">
                  {item.originalMaker}
                </span>

                <span className="mt-1 text-blue-600">{item.maker}</span>
              </div>

              <div className="flex flex-col font-black">
                <span className="text-sm text-slate-400 line-through">
                  {item.originalTaker}
                </span>

                <span className="mt-1 text-blue-600">{item.taker}</span>
              </div>
            </div>
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

      <footer className="border-t bg-white px-8 py-8 text-center text-sm font-medium text-slate-500">
        RebateMax © 2026 — Crypto Exchange Benefit Platform
      </footer>
    </main>
  );
}