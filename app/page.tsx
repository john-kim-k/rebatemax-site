"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const exchanges = [
    {
      name: "LBank",
      rebate: "30%",
      originalMaker: "0.02%",
      maker: "0.014%",
      originalTaker: "0.06%",
      taker: "0.042%",
      tag: "Highest Rebate",
      link: "https://lbank.com/ref/CHIMP",
    },

    {
      name: "WEEX",
      rebate: "66.12%",
      originalMaker: "0.02%",
      maker: "0.0068%",
      originalTaker: "0.06%",
      taker: "0.02%",
      tag: "Top Cashback",
      link: "https://www.weex.com/en/register?vipCode=chimpp",
    },

    {
      name: "MEXC",
      rebate: "50%",
      originalMaker: "0%",
      maker: "0%",
      originalTaker: "0.02%",
      taker: "0.01%",
      tag: "Popular",
      link: "https://www.mexc.com/acquisition/custom-sign-up?shareCode=mexc-CHIMP",
    },

    {
      name: "XT",
      rebate: "65%",
      originalMaker: "0.02%",
      maker: "0.007%",
      originalTaker: "0.06%",
      taker: "0.021%",
      tag: "High Rebate",
      link: "https://www.xt.com/en/accounts/register?ref=CHIMP",
    },

    {
      name: "Gate",
      rebate: "50%",
      originalMaker: "0.02%",
      maker: "0.01%",
      originalTaker: "0.05%",
      taker: "0.025%",
      tag: "Major Exchange",
      link: "https://www.gate.com/share/CHIMPPPP",
    },

    {
      name: "BYDFI",
      rebate: "30%",
      originalMaker: "0.02%",
      maker: "0.014%",
      originalTaker: "0.06%",
      taker: "0.042%",
      tag: "Partner",
      link: "https://partner.bydfi.com/s/CHIMP888",
    },

    {
      name: "BloFin",
      rebate: "20%",
      originalMaker: "0.02%",
      maker: "0.016%",
      originalTaker: "0.06%",
      taker: "0.048%",
      tag: "Trending",
      link: "https://partner.blofin.com/d/CHIMPP",
    },
  ];

  const events = [
    {
      exchange: "WEEX",
      title: "New User Event",
      description:
        "Limited-time signup rewards and trading bonus campaigns.",
    },

    {
      exchange: "MEXC",
      title: "Trading Fee Campaign",
      description:
        "Special fee discounts and event rewards for active traders.",
    },

    {
      exchange: "LBank",
      title: "Deposit Reward Event",
      description:
        "Deposit campaigns and futures trading reward programs.",
    },
  ];

  const [currentEvent, setCurrentEvent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <main className="min-h-screen bg-[#eef3ff] text-slate-950">

      {/* HEADER */}

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <div className="flex items-center">

            <img
              src="/logo.png"
              alt="RebateMax Logo"
              className="h-20 w-auto object-contain"
            />

          </div>

          <nav className="hidden gap-10 text-sm font-black text-slate-700 md:flex">

            <a href="#compare">Compare</a>
            <a href="#events">Events</a>

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

      {/* HERO */}

      <section className="mx-auto grid max-w-7xl gap-12 px-8 py-24 lg:grid-cols-2 lg:items-center">

        {/* LEFT */}

        <div>

          <div className="mb-5 inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-black text-blue-700">

            CRYPTO EXCHANGE BENEFITS PLATFORM

          </div>

          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">

            Compare crypto exchange rebates & referral benefits.

          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">

            Find the best exchange referral codes, fee discounts,
            cashback programs, and ongoing exchange campaigns in one place.

          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="#compare"
              className="rounded-2xl bg-blue-600 px-8 py-5 text-center text-lg font-black text-white shadow-xl shadow-blue-200"
            >

              Compare Exchanges

            </a>

            <a
              href="#events"
              className="rounded-2xl bg-white px-8 py-5 text-center text-lg font-black text-slate-900 shadow-lg"
            >

              View Events

            </a>

          </div>

        </div>

        {/* RIGHT EVENT SLIDER */}

        <div className="overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-blue-100">

          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentEvent * 100}%)`,
            }}
          >

            {events.map((event) => (

              <div
                key={event.exchange}
                className="min-w-full"
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

                <div className="rounded-3xl bg-slate-100 p-7">

                  <h3 className="text-2xl font-black">

                    {event.title}

                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">

                    {event.description}

                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* DOTS */}

          <div className="mt-8 flex justify-center gap-3">

            {events.map((_, index) => (

              <button
                key={index}
                onClick={() => setCurrentEvent(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentEvent === index
                    ? "bg-blue-600"
                    : "bg-slate-300"
                }`}
              />

            ))}

          </div>

        </div>

      </section>

      {/* TABLE */}

      <section
        id="compare"
        className="mx-auto max-w-7xl px-8 pb-24"
      >

        <div className="mb-8">

          <p className="text-sm font-black text-blue-600">

            EXCHANGE COMPARISON

          </p>

          <h2 className="mt-2 text-4xl font-black">

            Fee Rebate Comparison

          </h2>

        </div>

        <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-blue-100">

          <div className="hidden grid-cols-5 border-b bg-slate-100 px-8 py-6 text-sm font-black text-slate-500 md:grid">

            <div>Exchange</div>
            <div>Rebate</div>
            <div>Maker</div>
            <div>Taker</div>
            <div>Tag</div>

          </div>

          {exchanges.map((item) => (

            <div
              key={item.name}
              className="grid gap-4 border-b px-8 py-7 md:grid-cols-5 md:items-center"
            >

              {/* EXCHANGE */}

              <div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-black transition hover:text-blue-600"
                >

                  {item.name}

                </a>

              </div>

              {/* REBATE */}

              <div className="font-black text-blue-600">

                {item.rebate}

              </div>

              {/* MAKER */}

              <div className="font-black">

                <span className="text-slate-400 line-through">

                  {item.originalMaker}

                </span>

                <span className="mx-2 text-slate-400">

                  →

                </span>

                <span className="text-blue-600">

                  {item.maker}

                </span>

              </div>

              {/* TAKER */}

              <div className="font-black">

                <span className="text-slate-400 line-through">

                  {item.originalTaker}

                </span>

                <span className="mx-2 text-slate-400">

                  →

                </span>

                <span className="text-blue-600">

                  {item.taker}

                </span>

              </div>

              {/* TAG */}

              <div>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-700">

                  {item.tag}

                </span>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t bg-white px-8 py-8 text-center text-sm font-medium text-slate-500">

        RebateMax © 2026 — Crypto Exchange Benefit Platform

      </footer>

    </main>
  );
}