"use client";

import StackingCards from "@/components/ui/stacking-card";
import { BeyaHero } from "@/components/beya-hero";

const features = [
  {
    title: "Multi-Currency Accounts",
    description:
      "Hold and manage USD, NGN, GHS, and more in one account. Switch between currencies instantly at real market rates, with no hidden fees or unfavorable spreads eating into your balance.",
    link: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=500&auto=format&fit=crop",
    color: "#F8A383",
  },
  {
    title: "Built on Stablecoin Rails",
    description:
      "Powered by USDC and USDT infrastructure for instant, low-cost settlement. We bypass legacy correspondent banking entirely — your money moves at the speed of the internet, not the speed of bureaucracy.",
    link: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&auto=format&fit=crop",
    color: "#E8D5C4",
  },
  {
    title: "High-Yield Savings",
    description:
      "Earn competitive returns on your deposits. Your money works for you around the clock with full transparency and instant access — no lock-ups, no surprises.",
    link: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&auto=format&fit=crop",
    color: "#F2D0BA",
  },
  {
    title: "Instant Cross-Border Transfers",
    description:
      "Send money across borders in seconds, not days. Whether it's Lagos to London or Accra to New York, BEYA makes international payments as simple as a local transfer.",
    link: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&auto=format&fit=crop",
    color: "#D4936D",
  },
];

export function BeyaLanding() {
  return (
    <StackingCards projects={features}>
      <BeyaHero />
    </StackingCards>
  );
}
