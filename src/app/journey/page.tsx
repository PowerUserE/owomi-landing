"use client";

import Link from "next/link";
import { AnimatedUnderline } from "@/components/ui/animated-underline";
import { GLSLHills } from "@/components/ui/glsl-hills";

export default function JourneyPage() {
  return (
    <main className="relative flex h-screen items-center justify-center overflow-hidden bg-white">

      {/* GLSL Hills background */}
      <div className="absolute inset-0 z-0 opacity-[0.35]">
        <GLSLHills speed={0.2} />
      </div>

      {/* Content layer */}
      <div className="relative z-10 flex w-full h-full flex-col text-[#11647B]">

        {/* ─── Header ─── */}
        <header className="flex items-center justify-between px-8 py-8 lg:px-16" style={{ fontFamily: "var(--font-heading)" }}>
          <Link href="/" className="flex items-center gap-3">
            <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V22M12 2L19 19M12 2L5 19M2 12H22M2 12L19 5M2 12L19 19M5 5L19 19M19 5L5 19" stroke="#11647B" strokeLinecap="round" strokeWidth="2" />
            </svg>
            <span className="text-2xl font-extrabold tracking-tight text-[#11647B]" style={{ fontFamily: "var(--font-heading)" }}>
              OWOMI
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-[#ff5941]">
            <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14">
              <line x1="19" x2="5" y1="12" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <AnimatedUnderline><span>Back home</span></AnimatedUnderline>
          </Link>
        </header>

        {/* ─── Story ─── */}
        <div className="flex flex-grow items-center justify-center px-8 lg:px-16">
          <div className="max-w-3xl">
            <h1
              className="mb-10 text-5xl font-semibold leading-[1.15] tracking-tight text-[#ff5941] md:mb-14 md:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Story
            </h1>

            <div
              className="space-y-6 text-lg leading-[1.6] text-[#666] md:space-y-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p>
                Cross-border banking in West Africa is broken. Moving money across the region
                means navigating predatory exchange rates, opaque fees, and transfers that can
                take days. For a continent whose economies are increasingly intertwined, this
                friction is not just inconvenient. It is a barrier to progress.
              </p>

              <p>
                OWOMI uses stablecoin rails to power multi-currency accounts that let you hold,
                send, and receive money across borders in seconds. By settling on-chain, we
                bypass the correspondent banking system entirely, delivering high-yield
                savings, near-zero transfer fees, and withdrawals that hit your local bank
                instantly.
              </p>

              <p>
                We believe the next generation of African commerce will be built on open,
                programmable money. Fast enough for real-time trade, cheap enough for
                everyday use, and accessible to anyone with a phone. Not a crypto experiment,
                but a real bank account powered by better technology.
              </p>
            </div>
          </div>
        </div>

        {/* ─── Footer ─── */}
        <footer
          className="flex flex-wrap items-center justify-between px-8 py-8 lg:px-16 text-xs text-[#ff5941]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <div className="mb-4 lg:mb-0">
            2026 - OWOMI. All rights reserved.
          </div>
          <div className="mb-4 flex gap-6 lg:mb-0">
            <a href="#"><AnimatedUnderline><span>Privacy</span></AnimatedUnderline></a>
            <span className="opacity-40">&middot;</span>
            <a href="#"><AnimatedUnderline><span>Contact us</span></AnimatedUnderline></a>
            <span className="opacity-40">&middot;</span>
            <a href="#"><AnimatedUnderline><span>Terms of use</span></AnimatedUnderline></a>
          </div>
        </footer>
      </div>
    </main>
  );
}
