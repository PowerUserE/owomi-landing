"use client";

import { motion, AnimatePresence, LayoutGroup, useMotionValue, useMotionTemplate, useAnimationFrame } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";
import { AnimatedUnderline } from "@/components/ui/animated-underline";
import { TextRotate } from "@/components/ui/text-rotate";
import { GLSLHills } from "@/components/ui/glsl-hills";

const GridPattern = ({ offsetX, offsetY }: { offsetX: ReturnType<typeof useMotionValue<number>>; offsetY: ReturnType<typeof useMotionValue<number>> }) => (
  <svg className="w-full h-full">
    <defs>
      <motion.pattern
        id="grid-pattern"
        width="80"
        height="80"
        patternUnits="userSpaceOnUse"
        x={offsetX}
        y={offsetY}
      >
        <path
          d="M 80 0 L 0 0 0 80"
          fill="none"
          stroke="#11647B"
          strokeWidth="1"
        />
      </motion.pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>
);

/* eslint-disable @next/next/no-img-element */

export function OwomiHero() {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.15) % 80);
    gridOffsetY.set((gridOffsetY.get() + 0.15) % 80);
  });

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // still show confirmation — we don't want to block the UX
    }
    setSubmitted(true);
  };

  return (
    <div className="relative flex w-full h-full flex-col overflow-hidden border-0" onMouseMove={handleMouseMove}>

      {/* White background */}
      <div className="absolute inset-0 bg-white" />

      {/* GLSL Hills background */}
      <div className="absolute inset-0 z-[0] opacity-[0.35]">
        <GLSLHills speed={0.2} />
      </div>

      {/* Infinite grid – faint base layer */}
      <div className="absolute inset-0 z-[1] opacity-[0.04]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>

      {/* Infinite grid – mouse reveal layer */}
      <motion.div
        className="absolute inset-0 z-[1] opacity-[0.15]"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>

      {/* Bottom fade gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-[30%] bg-gradient-to-t from-black/10 to-transparent" />

      {/* Content layer */}
      <div className="relative z-10 flex h-full flex-col text-[#11647B]">

        {/* ─── Header ─── */}
        <header className="flex items-center justify-between px-8 py-8 lg:px-16" style={{ fontFamily: "var(--font-heading)" }}>
          <div className="flex items-center gap-3">
            <svg fill="none" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2V22M12 2L19 19M12 2L5 19M2 12H22M2 12L19 5M2 12L19 19M5 5L19 19M19 5L5 19" stroke="#11647B" strokeLinecap="round" strokeWidth="2" />
            </svg>
            <span className="text-2xl font-extrabold tracking-tight text-[#11647B]" style={{ fontFamily: "var(--font-heading)" }}>
              OWOMI
            </span>
          </div>
          <Link href="/journey" className="flex items-center gap-2 text-sm text-[#ff5941]">
            <AnimatedUnderline>
              <span>Follow the journey</span>
            </AnimatedUnderline>
            <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="14">
              <line x1="7" x2="17" y1="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </header>

        {/* ─── Hero Grid ─── */}
        <div className="grid flex-grow grid-cols-1 items-center gap-8 px-8 py-8 lg:grid-cols-[1.1fr_1fr] lg:px-16 lg:py-0">

          {/* Left content */}
          <section className="flex flex-col justify-center">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <LayoutGroup>
                <h1
                  className="text-5xl font-semibold leading-[1.15] tracking-tight text-[#11647B] md:text-6xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <span><span className="text-[#ff5941]">US Dollars</span> without borders.</span>
                  <br />
                  <motion.span className="flex flex-nowrap items-baseline" layout>
                    <motion.span
                      layout
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    >
                      Built to{" "}&nbsp;
                    </motion.span>
                    <TextRotate
                      texts={[
                        "earn.",
                        "send.",
                        "hold.",
                        "grow.",
                        "settle.",
                        "move.",
                      ]}
                      mainClassName="text-white px-2 md:px-3 bg-[#ff5941] overflow-hidden py-0.5 md:py-1 justify-center"
                      staggerFrom="last"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2500}
                    />
                  </motion.span>
                </h1>
              </LayoutGroup>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 max-w-lg text-lg leading-relaxed text-[#666]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Receive, hold, and spend in dollars from anywhere &mdash; no US address required. Multi-currency accounts, instant cross-border transfers, and up to 7% yield on your savings.
            </motion.p>

            {/* CTA – 3-state: button → form → success */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-sm font-medium text-[#11647B]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    You&apos;re on the waitlist! We&apos;ll be in touch.
                  </motion.p>
                ) : showForm ? (
                  <motion.form
                    key="form"
                    initial={{ width: 160, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    onSubmit={handleSubmit}
                    className="flex max-w-md overflow-hidden border border-black/15 bg-black/5 backdrop-blur-[20px]"
                    onAnimationComplete={() => inputRef.current?.focus()}
                  >
                    <input
                      ref={inputRef}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 bg-transparent px-5 py-3 text-sm text-[#121414] placeholder:text-[#999] focus:outline-none"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                    <button
                      type="submit"
                      className="group flex items-center gap-2 bg-[#11647B] px-5 py-2 m-1 text-sm font-semibold text-[#ffffff] transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(17,100,123,0.3)]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <span className="hidden sm:inline">Sign up</span>
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.button
                    key="button"
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setShowForm(true)}
                    className="group relative flex items-center gap-1 overflow-hidden border-[1.5px] border-[#11647B]/40 bg-transparent px-8 py-3 text-sm font-semibold text-[#11647B] cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-white active:scale-[0.95]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <ArrowRight className="absolute w-4 h-4 left-[-25%] stroke-[#11647B] fill-none z-[9] group-hover:left-4 group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                    <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
                      Join waitlist
                    </span>
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#11647B] rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]" />
                    <ArrowRight className="absolute w-4 h-4 right-4 stroke-[#11647B] fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* Right – Phone Mockup */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden items-center justify-center lg:flex"
          >
            <img
              src="/phone-mockup.png"
              alt="OWOMI app preview"
              className="w-auto max-h-[80vh] object-contain drop-shadow-[0_0_40px_rgba(17,100,123,0.08)] absolute bottom-0 translate-y-[65%] scale-[1.18] origin-bottom"
            />
          </motion.section>
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
    </div>
  );
}
