import Link from "next/link";
import { notFound } from "next/navigation";

const eventData: Record<
  string,
  {
    exchange: string;
    title: string;
    description: string;
    details: string[];
  }
> = {
  weex: {
    exchange: "WEEX",
    title: "New User Event",
    description: "Limited-time signup rewards and trading bonus campaigns.",
    details: [
      "Signup campaign for eligible new users.",
      "Trading bonus or reward programs may be available.",
      "Check the official event page for detailed terms.",
    ],
  },
  mexc: {
    exchange: "MEXC",
    title: "Trading Fee Campaign",
    description: "Special fee discounts and event rewards for active traders.",
    details: [
      "Fee discount and trading-related campaigns may be available.",
      "Rewards depend on exchange event conditions.",
      "Always check official terms before participating.",
    ],
  },
  lbank: {
    exchange: "LBank",
    title: "Deposit Reward Event",
    description: "Deposit campaigns and futures trading reward programs.",
    details: [
      "Deposit and trading volume campaigns may be available.",
      "Reward conditions may differ by user eligibility.",
      "Confirm all event rules on the official exchange page.",
    ],
  },
};

export default function EventDetailPage({
  params,
}: {
  params: { exchange: string };
}) {
  const event = eventData[params.exchange];

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#eef3ff] text-slate-950">
      <header className="border-b bg-white px-8 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/">
            <img src="/logo.png" alt="RebateMax Logo" className="h-16 w-auto" />
          </Link>

          <Link
            href="/events"
            className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-black text-white"
          >
            Back Events
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-8 py-20">
        <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl shadow-blue-100">
          <div className="mb-6 inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-black text-green-700">
            Active Event
          </div>

          <p className="text-sm font-black text-blue-600">{event.exchange}</p>

          <h1 className="mt-4 text-5xl font-black">{event.title}</h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {event.description}
          </p>

          <div className="mt-10 rounded-3xl bg-slate-100 p-8">
            <h2 className="text-2xl font-black">Event Details</h2>

            <ul className="mt-6 space-y-4 text-slate-700">
              {event.details.map((detail) => (
                <li key={detail} className="font-semibold">
                  • {detail}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sm leading-7 text-slate-500">
            Event availability, rewards, and conditions may change depending on
            the exchange. Please check the official exchange event page before
            joining.
          </p>
        </div>
      </section>
    </main>
  );
}