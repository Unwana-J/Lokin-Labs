"use client";

import Link from "next/link";
import { ArrowRight, Code2, Sparkles, Zap } from "lucide-react";

export function Manifesto() {
  return (
    <section
      id="thesis"
      className="min-h-screen bg-obsidian-deep text-white flex items-center px-6 sm:px-12 py-28 relative"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block">
          § 01 / LAB PRINCIPLES
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06]">
          We don’t do concept decks or idle Figma files. <br />
          <span className="text-white underline decoration-terra-crimson decoration-4 underline-offset-8">
            If an idea is good, we build it until it’s alive.
          </span>
        </h2>

        {/* 3 Lab Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 text-neutral-300 border-t border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-sm uppercase text-white font-bold">
              <Code2 className="w-4 h-4 text-terra-crimson" />
              <span>01 / Shipped Over Stored</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-400">
              Most software ideas die in steering committee meetings or Figma
              graveyards. We operate on a singular rule: an idea doesn’t count
              until someone can click a link, type a prompt, or play a round in
              production.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-sm uppercase text-white font-bold">
              <Sparkles className="w-4 h-4 text-terra-crimson" />
              <span>02 / High Intellect, High Play</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-400">
              Enterprise tools don’t have to be sterile, and games don’t have to
              be mindless. We build software that feels tactile and genuinely
              enjoyable—from high-stakes vocal debates to AI meeting intelligence
              and automated bookkeeping.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-sm uppercase text-white font-bold">
              <Zap className="w-4 h-4 text-terra-crimson" />
              <span>03 / Velocity Without Chaos</span>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-neutral-400">
              Shipping at lab velocity shouldn’t require heroics or fragile
              hacks. We build with resilient architectures and battle-tested
              systems so experimental software runs with enterprise-grade
              stability from day one.
            </p>
          </div>
        </div>

        {/* Studio Philosophy Block */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-sm font-mono text-xs sm:text-sm text-neutral-200 leading-relaxed">
          &ldquo;The lab exists for one reason: to turn obsessive curiosity into
          software that is sharp to use, impossible to put down, and alive in the
          real world.&rdquo;
        </div>

        <div className="pt-2">
          <Link
            href="#flagship"
            className="btn-studio bg-white text-ink-dark hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider"
          >
            <span>Explore The Flagship (Fey)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
