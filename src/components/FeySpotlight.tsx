"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight, Compass, Gamepad2, Mic, Network } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import feyDashboard from "../../public/screenshots/fey-dashboard-cropped.png";
import feyGames from "../../public/screenshots/fey-games-cropped.png";
import feyConstellation from "../../public/screenshots/fey-constellation-cropped.png";
import feyDiscover from "../../public/screenshots/fey-discover-cropped.png";

type FeyTab = "dispatch" | "games" | "constellation" | "discover";

interface TabMeta {
  id: FeyTab;
  label: string;
  url: string;
  icon: typeof Mic;
  image: StaticImageData;
  alt: string;
  headline: string;
  description: string;
}

const TABS: TabMeta[] = [
  {
    id: "dispatch",
    label: "01 Daily Dispatch",
    url: "https://fey.lokinlabs.com.ng/",
    icon: Mic,
    image: feyDashboard,
    alt: "Fey Live Daily Dispatch and 90-second speech challenge interface",
    headline: "Daily Synthesis & 90-Second Vocal Drill",
    description:
      "Active research drill: breakdown complex systems (e.g. BitTorrent P2P swarming) under pressure without jargon.",
  },
  {
    id: "games",
    label: "02 Parlor Games",
    url: "https://fey.lokinlabs.com.ng/games",
    icon: Gamepad2,
    image: feyGames,
    alt: "Fey Parlor Games: Online Articulate, Naija Trivia, and The Podium",
    headline: "Multiplayer Parlor Debates & Salons",
    description:
      "Real-time social arena featuring Online Articulate, Nigerian history/culture trivia, and The Podium impromptu hot-takes.",
  },
  {
    id: "constellation",
    label: "03 Constellation",
    url: "https://fey.lokinlabs.com.ng/constellation",
    icon: Network,
    image: feyConstellation,
    alt: "Fey Knowledge Constellation cognitive graph",
    headline: "Interactive Knowledge Graph",
    description:
      "Visual topic map tracking your articulation drills, consistency streaks, and mastered concepts.",
  },
  {
    id: "discover",
    label: "04 Topic Roulette",
    url: "https://fey.lokinlabs.com.ng/discover",
    icon: Compass,
    image: feyDiscover,
    alt: "Fey Topic Roulette across 22 disciplines",
    headline: "Discipline Roulette & Exploration",
    description:
      "Spin and explore deep topics across 22 categorized domains with custom research timers from 5 to 30 minutes.",
  },
];

export function FeySpotlight() {
  const [activeTabId, setActiveTabId] = useState<FeyTab>("dispatch");
  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  return (
    <section
      id="flagship"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-12 py-28 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[rgba(0,0,0,0.08)] gap-6">
        <div>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-terra-light border border-terra-crimson/20 text-xs font-mono font-bold text-terra-crimson mb-3">
            <span>FLAGSHIP · VOCAL ARTICULATION PLATFORM</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-ink-dark">
            Fey — Think Deeper. Speak Better.
          </h2>
          <p className="font-mono text-xs text-ink-muted mt-1">
            A Lokin Labs Production · Live at fey.lokinlabs.com.ng
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-emerald-700 font-semibold">
            LIVE IN PRODUCTION
          </span>
          <a
            href="https://fey.lokinlabs.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-studio bg-ink-dark text-white hover:bg-terra-crimson text-xs shadow-sm font-bold"
          >
            <span>Launch Fey</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Fey Structural Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-black/10 bg-canvas overflow-hidden shadow-sm">
        {/* Left: Story & Method Specs */}
        <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-canvas border-b lg:border-b-0 lg:border-r border-black/10">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ink-dark leading-snug">
              Most learning is passive. Fey turns your brain on. Practice explaining
              complex ideas under pressure—out loud.
            </h3>

            <p className="text-base text-ink-muted leading-relaxed">
              Reading articles and nodding along creates the illusion of understanding.
              Fey turns critical thinking into a high-stakes verbal workout: research a
              concept, articulate it aloud in 90 seconds without jargon, and challenge
              friends in live multiplayer parlor debate rooms.
            </p>

            {/* 3-Step Tactile Process Pipeline */}
            <div className="space-y-2 pt-2">
              <span className="font-mono text-[11px] text-ink-soft uppercase tracking-wider block">
                THE 3-STEP VOCAL PIPELINE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-3.5 bg-canvas-surface border border-black/[0.08] rounded-md space-y-1">
                  <span className="font-mono text-terra-crimson font-bold text-xs block">
                    01. CONCEPT
                  </span>
                  <strong className="text-ink-dark font-bold block text-xs">
                    Curate / Spin
                  </strong>
                  <span className="text-[11px] text-ink-muted leading-tight block">
                    Pick a topic across 22 disciplines
                  </span>
                </div>
                <div className="p-3.5 bg-canvas-surface border border-black/[0.08] rounded-md space-y-1">
                  <span className="font-mono text-brand-blue font-bold text-xs block">
                    02. DRILL
                  </span>
                  <strong className="text-ink-dark font-bold block text-xs">
                    90s Aloud
                  </strong>
                  <span className="text-[11px] text-ink-muted leading-tight block">
                    Explain under timed pressure without jargon
                  </span>
                </div>
                <div className="p-3.5 bg-canvas-surface border border-black/[0.08] rounded-md space-y-1">
                  <span className="font-mono text-emerald-700 font-bold text-xs block">
                    03. SCORE
                  </span>
                  <strong className="text-ink-dark font-bold block text-xs">
                    Speech AI
                  </strong>
                  <span className="text-[11px] text-ink-muted leading-tight block">
                    Clarity scoring, filler words &amp; topic graph
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-black/10 text-xs font-mono text-ink-muted">
            <span>NEXT.JS · WEBRTC · SPEECH AI</span>
            <a
              href="https://fey.lokinlabs.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terra-crimson font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>ENTER FEY PLATFORM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right: Clean Studio Gallery Showcase with atmospheric ambient lighting */}
        <div className="lg:col-span-7 bg-obsidian-deep p-6 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle ambient atmospheric lighting */}
          <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-terra-crimson/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-brand-blue/15 blur-3xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {/* Minimalist Studio Tab Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                LIVE PRODUCTION INTERFACE
              </span>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTabId === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`transition-all duration-200 flex items-center gap-1.5 text-xs font-mono pb-1 relative ${
                        isActive
                          ? "text-white font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white"
                          : "text-white/50 hover:text-white/90"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Clean Screenshot Display (Unframed, Pristine Studio Presentation) */}
            <div className="overflow-hidden border border-white/15 bg-white shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-full h-auto block"
                >
                  <Image
                    src={activeTab.image}
                    alt={activeTab.alt}
                    priority
                    placeholder="blur"
                    className="w-full h-auto block object-cover"
                    sizes="(max-width: 1024px) 100vw, 650px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Minimalist Info Caption */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
              <div>
                <strong className="text-white font-bold block text-sm">
                  {activeTab.headline}
                </strong>
                <span className="text-white/60 text-xs">
                  {activeTab.description}
                </span>
              </div>
              <a
                href={activeTab.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-white hover:text-terra-bright underline inline-flex items-center gap-1 font-bold pt-1 sm:pt-0"
              >
                <span>Launch View</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="pt-6 mt-6 text-xs text-white/50 flex justify-between items-center border-t border-white/10 font-mono">
            <span>VOCAL ARTICULATION PLATFORM</span>
            <a
              href="https://fey.lokinlabs.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <span>fey.lokinlabs.com.ng</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
