"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Layers, Cpu } from "lucide-react";

export function Manifesto() {
  return (
    <section
      id="thesis"
      className="min-h-screen bg-obsidian-deep text-white flex items-center px-6 sm:px-12 py-28 relative overflow-hidden"
    >
      {/* Ambient background atmosphere */}
      <div className="absolute top-0 right-0 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full bg-terra-crimson/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full bg-brand-blue/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-14 relative z-10 w-full">
        {/* Section Header */}
        <div className="space-y-4">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block">
            § 01 / LAB PRINCIPLES
          </span>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white max-w-5xl">
            Most software is built to be discussed.{" "}
            <span className="text-terra-crimson">
              We build software to be felt.
            </span>
          </h2>
        </div>

        {/* 3 Tactile Lab Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 01 */}
          <div className="group relative p-7 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-neutral-500 group-hover:text-terra-crimson transition-colors">
                  01 / CRAFT
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-terra-crimson">
                  <Layers className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Tactile Depth
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Software should have weight, friction, and rhythm. We treat
                interaction design like acoustic instrument crafting—every
                transition, keystroke, and visual state has deliberate purpose.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
              Zero Generic Templates
            </div>
          </div>

          {/* Card 02 */}
          <div className="group relative p-7 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-neutral-500 group-hover:text-terra-crimson transition-colors">
                  02 / DELIVERY
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-terra-crimson">
                  <Cpu className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Autonomous Velocity
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                From intuition to production URL with zero committee drag. We
                operate on a singular rule: an idea doesn&apos;t count until
                someone can click a link, type a prompt, and feel it work live.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
              Ship Over Spec
            </div>
          </div>

          {/* Card 03 */}
          <div className="group relative p-7 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-neutral-400">
                <span className="font-mono text-xs uppercase tracking-wider font-semibold text-neutral-500 group-hover:text-terra-crimson transition-colors">
                  03 / INTELLECT
                </span>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-terra-crimson">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                High Intellect, High Play
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Enterprise tools don&apos;t have to be sterile, and playful apps
                don&apos;t have to be mindless. We merge deep technical rigor
                with unhinged curiosity across every product we build.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
              Serious Fun
            </div>
          </div>
        </div>

        {/* Section Footer / Callout */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3 font-mono text-xs text-neutral-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="uppercase tracking-wider">
              Independent Lab · Abuja, Nigeria · Global
            </span>
          </div>

          <Link
            href="#flagship"
            className="btn-studio bg-white text-ink-dark hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider self-start sm:self-auto"
          >
            <span>Explore Flagship (Fey)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
