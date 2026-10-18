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
        {/* Architectural Studio Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-ink-muted"
        >
          <span className="h-2 w-2 bg-terra-crimson inline-block" />
          <span>INDEPENDENT DIGITAL PRODUCT LAB · ABUJA &amp; GLOBAL</span>
        </motion.div>

        {/* Main Headline in Collective Studio Voice */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-ink-dark leading-[1.02]"
        >
          Software built with obsession. <br />
          <span className="text-terra-crimson">Impossible to put down.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl text-ink-muted font-normal max-w-3xl leading-relaxed"
        >
          Lokin Labs is an independent digital product lab. We forge software that&apos;s
          sharp to use, tactile to the touch, and deeply enjoyable—from vocal
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
            <span>Explore Product Catalog (6)</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Architectural Telemetry Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-black/[0.08] font-mono text-xs"
      >
        <div>
          <span className="block text-ink-soft uppercase text-[10px] mb-1">
            FLAGSHIP PLATFORM (LK-01)
          </span>
          <span className="text-ink-dark font-bold">
            FEY · 22 DISCIPLINES &amp; 90S DRILLS
          </span>
        </div>
        <div>
          <span className="block text-ink-soft uppercase text-[10px] mb-1">
            MULTIPLAYER ARENA
          </span>
          <span className="text-ink-dark font-bold">
            3 LIVE PARLOR &amp; DEBATE MODES
          </span>
        </div>
        <div>
          <span className="block text-ink-soft uppercase text-[10px] mb-1">
            PROPRIETARY PORTFOLIO
          </span>
          <span className="text-emerald-700 font-bold">
            6 ENGINEERED SYSTEMS · 1 PUBLIC
          </span>
        </div>
        <div>
          <span className="block text-ink-soft uppercase text-[10px] mb-1">
            STUDIO MANDATE
          </span>
          <span className="text-ink-dark font-bold">
            DESIGN, AI SYSTEMS &amp; VENTURE LAB
          </span>
        </div>
      </motion.div>
    </section>
  );
}
