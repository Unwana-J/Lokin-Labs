"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between px-6 sm:px-12 pt-32 pb-14 max-w-7xl mx-auto"
    >
      <div className="max-w-5xl space-y-8 my-auto">
        {/* Studio Identification Rule */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 font-mono text-xs text-ink-muted uppercase tracking-wider"
        >
          <span className="text-terra-crimson font-bold">[ LK-FOUNDRY ]</span>
          <span className="text-ink-soft">—</span>
          <span>A DIGITAL PRODUCT LAB &amp; CREATIVE ENGINE</span>
        </motion.div>

        {/* Main Headline in Collective Studio Voice */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-ink-dark leading-[1.02]"
        >
          We get an idea and <br />
          we don’t let it go <br />
          <span className="text-terra-crimson underline decoration-chartreuse decoration-wavy decoration-2">
            until it’s live
          </span>
          .
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl text-ink-muted font-normal max-w-3xl leading-relaxed"
        >
          Lokin Labs is an independent digital product lab. We build software that&apos;s
          sharp to use, impossible to put down, and deeply enjoyable—from vocal
          articulation platforms to AI meeting intelligence and financial parsers.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 flex flex-wrap items-center gap-4"
        >
          <a
            href="https://fey.lokinlabs.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-studio bg-terra-crimson text-white hover:bg-terra-bright text-sm shadow-sm"
          >
            <span>Experience Fey (Flagship)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#warehouse"
            className="btn-studio border border-black/20 text-ink-dark hover:border-black/60 bg-transparent text-sm"
          >
            <span>Explore The 6 Products</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Architectural Telemetry Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-[rgba(20,26,15,0.08)] font-mono text-xs"
      >
        <div>
          <span className="block text-ink-soft uppercase text-[10px] mb-1">
            FOUNDRY DNA
          </span>
          <span className="text-ink-dark font-bold">
            ENTERPRISE RIGOR · CONSUMER PLAY
          </span>
        </div>
        <div>
          <span className="block text-ink-soft uppercase text-[10px] mb-1">
            FLAGSHIP RELEASE
          </span>
          <span className="text-ink-dark font-bold">
            FEY · ARTICULATION PLATFORM
          </span>
        </div>
        <div>
          <span className="block text-ink-soft uppercase text-[10px] mb-1">
            STUDIO LOCATION
          </span>
          <span className="text-ink-dark font-bold">
            LAGOS, NIGERIA · GLOBAL
          </span>
        </div>
        <div>
          <span className="block text-ink-soft uppercase text-[10px] mb-1">
            CATALOG STATUS
          </span>
          <span className="text-emerald-700 font-bold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            6 LIVE PRODUCTION RUNTIMES
          </span>
        </div>
      </motion.div>
    </section>
  );
}
