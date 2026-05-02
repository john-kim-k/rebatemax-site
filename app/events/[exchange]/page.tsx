import Link from "next/link";
import { notFound } from "next/navigation";

const eventData: Record<
  string,
  {
    exchange: string;
    title: string;
    badge: string;
    description: string;
    eventLink?: string;
    details: string[];
  }
> = {
  weex: {
    exchange: "WEEX",
    title: "Unlock Welcome Rewards",
    badge: "New User Event",
    description:
      "WEEX is running a new user reward event where eligible users can complete signup, KYC, deposit, and trading tasks to unlock rewards.",
    details: [
      "Register a new WEEX account.",
      "Complete KYC verification.",
      "Deposit and complete eligible trading tasks.",
      "Rewards depend on completed requirements and event eligibility.",
    ],
  },

  lbank: {
    exchange: "LBank",
    title: "New User Exclusive Rewards",
    badge: "New User Event",
    description:
      "LBank is offering rewards for new users who complete basic account tasks such as registration, KYC, and first trading activity.",
    details: [
      "Sign up and complete KYC verification.",
      "Complete eligible first trade requirements.",
      "Some rewards may be limited by availability or first-come conditions.",
      "Check the official event page before participating.",
    ],
  },

  bydfi: {
    exchange: "BYDFi",
    title: "New User Rewards",
    badge: "Reward Center",
    description:
      "BYDFi is offering new user rewards with bonus tasks based on registration, deposits, trading activity, and event milestones.",
    details: [
      "New users may unlock basic signup rewards.",
      "Additional rewards are available through deposit and trading volume tasks.",
      "Limited-time tasks may offer higher reward opportunities.",
      "Rewards depend on each user’s eligibility and completed milestones.",
    ],
  },

  gate: {
    exchange: "Gate",
    title: "Exclusive New User Event",
    badge: "Exclusive Event",
    description:
      "Gate is running a limited-time new user campaign with additional rewards available through the event access link.",
    eventLink: "https://www.gate.com/campaigns/4678",
    details: [
      "Event Period: Apr 27, 2026 15:00 UTC → May 6, 2026 15:00 UTC.",
      "Register and complete KYC to receive a 15 USDT trading bonus.",
      "Deposit 1,000+ USDT and trade 5,000+ USDT volume to become eligible for reward payback.",
      "Reach 50,000+ USDT futures trading volume to unlock additional trading rewards.",
    ],
  },

  xt: {
    exchange: "XT",
    title: "New User Rewards",
    badge: "Task Rewards",
    description:
      "XT is offering new user rewards through simple onboarding tasks such as registration, KYC, first deposit, and first trades.",
    details: [
      "Register to unlock 5–88 USDT reward opportunities.",
      "Complete KYC to unlock 5–200 USDT reward opportunities.",
      "Make a first deposit of 20 USDT or more.",
      "Complete first spot and futures trading tasks to unlock additional rewards.",
    ],
  },

  blofin: {
    exchange: "BloFin",
    title: "New User Campaign",
    badge: "Mystery Box Rewards",
    description:
      "BloFin is running a new user campaign with multiple reward tasks and additional milestone rewards for eligible users.",
    details: [
      "First Futures Deposit ≥ 50 USDT.",
      "Futures Trading Volume ≥ 3,000 USDT.",
      "Copy Trading Volume ≥ 1,000 USDT.",
      "Staking participation task may unlock a separate Mystery Box reward.",
      "Deposit Blast-Off event may offer additional milestone rewards within 14 days after signup.",
    ],
  },
};

export default function EventPage({
  params,
}: {
  params: { exchange: string };
}) {
  const event = eventData[params.exchange];

  if (!event) {
    notFound();
  }

  const buttonLink = event.eventLink ?? `/go/${params.exchange}`;

  return (
    <main className="min-h-screen bg-[#070A12] px-4 py-10 text-white">
      <div className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">
        <section className="w-full max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-b from-[#151A2E] to-[#0B0F1D] p-6 shadow-2xl shadow-black/40 sm:p-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
                {event.exchange}
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                {event.title}
              </h1>
            </div>

            <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
              {event.badge}
            </span>
          </div>

          <p className="mb-8 text-base leading-7 text-gray-300 sm:text-lg">
            {event.description}
          </p>

          <div className="mb-8 rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
            <h2 className="mb-4 text-lg font-semibold text-white">
              Event Details
            </h2>

            <ul className="space-y-3">
              {event.details.map((detail, index) => (
                <li
                  key={index}
                  className="flex gap-3 rounded-2xl bg-white/[0.03] p-4 text-sm leading-6 text-gray-200 sm:text-base"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-300">
                    {index + 1}
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={buttonLink}
              target={event.eventLink ? "_blank" : undefined}
              className="flex-1 rounded-2xl bg-blue-500 px-6 py-4 text-center text-base font-bold text-white transition hover:bg-blue-400"
            >
              View Event
            </Link>

            <Link
              href="/"
              className="flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-center text-base font-semibold text-gray-200 transition hover:bg-white/[0.08]"
            >
              Back to Home
            </Link>
          </div>

          <p className="mt-6 text-center text-xs leading-5 text-gray-500">
            Rewards and eligibility may vary. Always check the official event
            page before participating.
          </p>
        </section>
      </div>
    </main>
  );
}