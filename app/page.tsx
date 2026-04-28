export default function Home() {
  const exchanges = [
    {
      rank: "01",
      name: "LBank",
      rebate: "65%",
      discount: "16%",
      maker: "0.007%",
      taker: "0.0175%",
      tag: "Highest Rebate",
    },

    {
      rank: "02",
      name: "Bitget",
      rebate: "54%",
      discount: "50%",
      maker: "0.0092%",
      taker: "0.0184%",
      tag: "Top Exchange",
    },

    {
      rank: "03",
      name: "MEXC",
      rebate: "50%",
      discount: "Up to 50%",
      maker: "Updating",
      taker: "Updating",
      tag: "Popular",
    },
  ];

  return (
    <main className="min-h-screen bg-[#eef3ff] text-slate-950">
      {/* HEADER */}

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          {/* LOGO */}

          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="RebateMax Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* MENU */}

          <nav className="hidden gap-10 text-sm font-black text-slate-700 md:flex">
            <a href="#compare">Compare</a>
            <a href="#events">Events</a>
            <a href="#faq">FAQ</a>
          </nav>

          {/* BUTTON */}

          <button className="rounded-2xl bg-slate-950 px-7 py-4 text-sm font-black text-white transition hover:bg-slate-800">
            Join Telegram
          </button>
        </div>
      </header>

      {/* HERO */}

      <section className="mx-auto grid max-w-7xl gap-12 px-8 py-24 lg:grid-cols-2 lg:items-center">

        <div>
          <div className="mb-5 inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-black text-blue-700">
            CRYPTO EXCHANGE BENEFITS PLATFORM
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Compare crypto exchange rebates & referral benefits.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Find the best exchange referral codes, trading fee discounts,
            rebate programs, and ongoing exchange events in one place.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-2xl bg-blue-600 px-8 py-5 text-lg font-black text-white shadow-xl shadow-blue-200">
              Compare Exchanges
            </button>

            <button className="rounded-2xl bg-white px-8 py-5 text-lg font-black text-slate-900 shadow-lg">
              View Events
            </button>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            * Exchange fees and event rewards may change depending on official exchange policies.
          </p>
        </div>

        {/* RIGHT CARD */}

        <div className="rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-blue-100">

          <div className="mb-8 flex items-center justify-between">

            <div>
              <p className="text-sm font-bold text-slate-400">
                Featured Exchange
              </p>

              <h2 className="text-3xl font-black">
                LBank
              </h2>
            </div>

            <div className="rounded-full bg-green-100 px-5 py-2 text-sm font-black text-green-700">
              Active
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-3xl bg-slate-100 p-6">
              <p className="text-sm font-bold text-slate-500">
                Payback Rate
              </p>

              <p className="mt-3 text-5xl font-black text-blue-600">
                65%
              </p>
            </div>

            <div className="rounded-3xl bg-slate-100 p-6">
              <p className="text-sm font-bold text-slate-500">
                Trading Discount
              </p>

              <p className="mt-3 text-5xl font-black text-blue-600">
                16%
              </p>
            </div>

            <div className="rounded-3xl bg-blue-600 p-6 text-white">

              <p className="text-sm font-bold text-blue-100">
                Maker Fee
              </p>

              <p className="mt-3 text-4xl font-black">
                0.007%
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-6 text-white">

              <p className="text-sm font-bold text-slate-300">
                Taker Fee
              </p>

              <p className="mt-3 text-4xl font-black">
                0.0175%
              </p>
            </div>
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

          <div className="hidden grid-cols-6 border-b bg-slate-100 px-8 py-6 text-sm font-black text-slate-500 md:grid">

            <div>Exchange</div>
            <div>Rebate</div>
            <div>Discount</div>
            <div>Maker</div>
            <div>Taker</div>
            <div>Tag</div>
          </div>

          {exchanges.map((item) => (

            <div
              key={item.name}
              className="grid gap-4 border-b px-8 py-7 md:grid-cols-6 md:items-center"
            >

              <div>
                <p className="text-xl font-black">
                  {item.name}
                </p>

                <p className="text-sm font-bold text-blue-600">
                  #{item.rank}
                </p>
              </div>

              <div className="font-black text-blue-600">
                {item.rebate}
              </div>

              <div className="font-black">
                {item.discount}
              </div>

              <div className="font-black">
                {item.maker}
              </div>

              <div className="font-black">
                {item.taker}
              </div>

              <div>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-700">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}

      <section
        id="events"
        className="bg-slate-950 py-24 text-white"
      >

        <div className="mx-auto max-w-7xl px-8">

          <p className="text-sm font-black text-blue-400">
            EXCHANGE EVENTS
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Ongoing Campaigns
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {[
              [
                "New User Rewards",
                "Signup and KYC reward campaigns.",
              ],

              [
                "Deposit Campaigns",
                "Deposit and trading volume events.",
              ],

              [
                "Fee Rebate Events",
                "Trading fee rebate promotions.",
              ],
            ].map(([title, desc]) => (

              <div
                key={title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
              >

                <div className="mb-6 h-14 w-14 rounded-2xl bg-blue-600" />

                <h3 className="text-2xl font-black">
                  {title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t bg-white px-8 py-8 text-center text-sm font-medium text-slate-500">

        RebateMax © 2026 — Crypto Exchange Benefit Platform

      </footer>
    </main>
  );
}