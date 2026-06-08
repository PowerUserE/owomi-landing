"use client";

import Link from "next/link";
import { AnimatedUnderline } from "@/components/ui/animated-underline";

export default function JourneyPage() {
  return (
    <main className="flex h-screen items-center justify-center overflow-hidden bg-[#0C0F0F]">
      <div className="relative flex w-full h-full flex-col overflow-hidden border-2 border-[#11647B]/15">

        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="/video_2.mp4"
        />

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

        {/* Dark overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[#121414]/75" />

        {/* Content layer */}
        <div className="relative z-10 flex h-full flex-col text-[#E2E2E2]">

          {/* ─── Header ─── */}
          <header className="flex items-center justify-between px-10 py-8" style={{ fontFamily: "var(--font-heading)" }}>
            <div>
              <svg fill="none" height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V22M12 2L19 19M12 2L5 19M2 12H22M2 12L19 5M2 12L19 19M5 5L19 19M19 5L5 19" stroke="#E2E2E2" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
            <Link href="/" className="flex items-center gap-2 text-sm text-[#C8C8AB]">
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
                className="mb-10 text-[32px] font-semibold leading-[1.2] tracking-[-0.02em] md:mb-14 md:text-[48px]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Story
              </h1>

              <div
                className="space-y-6 text-[16px] leading-[1.6] text-[#C8C8AB] md:space-y-8 md:text-[18px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <p>
                  Cross-border banking in West Africa is broken. Moving money across the region
                  means navigating predatory exchange rates, opaque fees, and transfers that can
                  take days. For a continent whose economies are increasingly intertwined, this
                  friction is not just inconvenient &mdash; it is a barrier to progress.
                </p>

                <p>
                  OWOMI uses stablecoin rails to power multi-currency accounts that let you hold,
                  send, and receive money across borders in seconds. By settling on-chain, we
                  bypass the correspondent banking system entirely &mdash; delivering high-yield
                  savings, near-zero transfer fees, and withdrawals that hit your local bank
                  instantly.
                </p>

                <p>
                  We believe the next generation of African commerce will be built on open,
                  programmable money &mdash; fast enough for real-time trade, cheap enough for
                  everyday use, and accessible to anyone with a phone. Not a crypto experiment,
                  but a real bank account powered by better technology.
                </p>
              </div>
            </div>
          </div>

          {/* ─── Footer ─── */}
          <footer
            className="flex flex-wrap items-center justify-between border-t border-[#333535] px-10 py-8 text-xs text-[#929277]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <div className="mb-4 lg:mb-0">
              2025 - OWOMI. All rights reserved.
            </div>
            <div className="mb-4 flex gap-8 lg:mb-0">
              <a href="#"><AnimatedUnderline><span>Terms of use</span></AnimatedUnderline></a>
              <a href="#"><AnimatedUnderline><span>Privacy Policy</span></AnimatedUnderline></a>
              <a href="#"><AnimatedUnderline><span>Contact us</span></AnimatedUnderline></a>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
