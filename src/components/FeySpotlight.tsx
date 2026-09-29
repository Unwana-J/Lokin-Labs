"use client";

import { useState } from "react";
import { ArrowUpRight, Compass, Gamepad2, Mic, Network } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FeyTab = "dispatch" | "games" | "constellation" | "discover";

interface TabMeta {
  id: FeyTab;
  label: string;
  url: string;
  icon: typeof Mic;
  image: string;
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
    image: "/screenshots/fey-dashboard-cropped.png",
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
    image: "/screenshots/fey-games-cropped.png",
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
    image: "/screenshots/fey-constellation-cropped.png",
    alt: "Fey Knowledge Constellation cognitive graph",
    headline: "Interactive Cognitive Synapse Graph",
    description:
      "Spatial memory network that maps concepts, articulation streaks, and mastered disciplines over time.",
  },
  {
    id: "discover",
    label: "04 Topic Roulette",
    url: "https://fey.lokinlabs.com.ng/discover",
    icon: Compass,
    image: "/screenshots/fey-discover-cropped.png",
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
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[rgba(20,26,15,0.08)] gap-6">
        <div>
          <span className="font-mono text-xs text-terra-crimson font-semibold uppercase tracking-wider block mb-2">
            RELEASE 01 · CROWN PLATFORM
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-ink-dark">
            Fey — Think Deeper. Speak Better.
          </h2>
          <p className="font-mono text-xs text-ink-muted mt-1">
            A Lokin Labs Production · Live at fey.lokinlabs.com.ng
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            LIVE IN PRODUCTION
          </span>
          <a
            href="https://fey.lokinlabs.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-studio bg-terra-crimson text-white hover:bg-terra-bright text-xs shadow-sm font-bold"
          >
            <span>Launch Fey</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Fey Structural Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-black/10 bg-canvas-surface overflow-hidden">
        {/* Left: Story & Method Specs */}
        <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-canvas">
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

            {/* 4-Quadrant Architecture Grid */}
            <div className="grid grid-cols-2 gap-px bg-black/10 border border-black/10 text-xs">
              <div className="p-4 bg-canvas-surface">
                <span className="font-mono text-[10px] text-ink-soft uppercase block mb-1">
                  01 / THE DRILL
                </span>
                <strong className="text-ink-dark font-bold text-sm block">
                  Feynman Synthesis
                </strong>
                <span className="text-[11px] text-ink-muted">Timed vocal clarity drills</span>
              </div>
              <div className="p-4 bg-canvas-surface">
                <span className="font-mono text-[10px] text-ink-soft uppercase block mb-1">
                  02 / THE GAME
                </span>
                <strong className="text-ink-dark font-bold text-sm block">
                  Social Parlor Debates
                </strong>
                <span className="text-[11px] text-ink-muted">Multiplayer salon arenas</span>
              </div>
              <div className="p-4 bg-canvas-surface">
                <span className="font-mono text-[10px] text-ink-soft uppercase block mb-1">
                  03 / REALTIME
                </span>
                <strong className="text-ink-dark font-bold text-sm block">
                  Speech AI Engine
                </strong>
                <span className="text-[11px] text-ink-muted">Instant clarity scoring</span>
              </div>
              <div className="p-4 bg-canvas-surface">
                <span className="font-mono text-[10px] text-ink-soft uppercase block mb-1">
                  04 / RETENTION
                </span>
                <strong className="text-ink-dark font-bold text-sm block">
                  Synapse Constellation
                </strong>
                <span className="text-[11px] text-ink-muted">Interactive topic graphs</span>
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

        {/* Right: Actual Live Screenshots & Architectural Console */}
        <div className="lg:col-span-7 bg-olive-dark p-6 sm:p-10 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-black/10">
          <div>
            {/* Viewport Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 mb-5 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                <span className="text-white/40 text-[11px] ml-2 hidden sm:inline">
                  LIVE INTERFACE VIEWPORT
                </span>
              </div>

              {/* Viewport Tabs */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTabId === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`transition-all duration-200 flex items-center gap-1.5 text-xs font-mono ${
                        isActive
                          ? "text-chartreuse font-bold border-b-2 border-chartreuse pb-0.5"
                          : "text-white/60 hover:text-white pb-0.5"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actual Live Screenshot Frame */}
            <div className="relative border border-white/15 bg-black/40 rounded-sm overflow-hidden shadow-2xl">
              {/* Browser Address Bar */}
              <div className="px-4 py-2 bg-black/50 border-b border-white/10 flex items-center justify-between font-mono text-[11px] text-white/50">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-emerald-400 font-bold">HTTPS</span>
                  <span className="text-white/80">{activeTab.url}</span>
                </div>
                <a
                  href={activeTab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-chartreuse hover:underline text-[10px] uppercase font-bold shrink-0 ml-2 inline-flex items-center gap-1"
                >
                  <span>Open Live</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Live Captured Screenshot Image */}
              <div className="relative aspect-[1200/813] w-full overflow-hidden bg-[#FAF7F0] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full h-full"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeTab.image}
                      alt={activeTab.alt}
                      className="w-full h-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Caption Overlay */}
              <div className="p-4 bg-black/80 border-t border-white/10 space-y-1">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-chartreuse font-bold">
                    {activeTab.headline}
                  </span>
                  <span className="text-white/40 text-[10px]">REAL LIVE VIEW</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  {activeTab.description}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-5 text-xs text-white/50 flex justify-between items-center border-t border-white/10 font-mono">
            <span>COGNITIVE ARTICULATION PLATFORM</span>
            <a
              href="https://fey.lokinlabs.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chartreuse hover:underline inline-flex items-center gap-1 font-semibold"
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
