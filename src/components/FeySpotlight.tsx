"use client";

import { useState } from "react";
import { ArrowUpRight, Mic, Users, Network } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ConsoleTab = "speech" | "games" | "map";

export function FeySpotlight() {
  const [activeTab, setActiveTab] = useState<ConsoleTab>("speech");

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
            className="btn-studio bg-terra-crimson text-white hover:bg-terra-bright text-xs shadow-sm"
          >
            <span>Launch Fey</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Fey Structural Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border border-black/10 bg-canvas-surface">
        {/* Left: Story & Method Specs */}
        <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8">
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
              <div className="p-4 bg-canvas">
                <span className="font-mono text-[10px] text-ink-soft uppercase block mb-1">
                  01 / THE DRILL
                </span>
                <strong className="text-ink-dark font-bold text-sm">
                  Feynman Synthesis
                </strong>
              </div>
              <div className="p-4 bg-canvas">
                <span className="font-mono text-[10px] text-ink-soft uppercase block mb-1">
                  02 / THE GAME
                </span>
                <strong className="text-ink-dark font-bold text-sm">
                  Social Parlor Debates
                </strong>
              </div>
              <div className="p-4 bg-canvas">
                <span className="font-mono text-[10px] text-ink-soft uppercase block mb-1">
                  03 / REALTIME
                </span>
                <strong className="text-ink-dark font-bold text-sm">
                  Voice Articulation Engine
                </strong>
              </div>
              <div className="p-4 bg-canvas">
                <span className="font-mono text-[10px] text-ink-soft uppercase block mb-1">
                  04 / RETENTION
                </span>
                <strong className="text-ink-dark font-bold text-sm">
                  Synapse Graph Constellation
                </strong>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-black/10 text-xs font-mono text-ink-muted">
            <span>NEXT.JS · TAILWIND · WEBRTC · AI SPEECH</span>
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

        {/* Right: Interactive Console (Architectural Dark Viewport) */}
        <div className="lg:col-span-6 bg-olive-dark p-8 sm:p-12 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-black/10">
          <div>
            {/* Clean Monospace Tab Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 mb-6 font-mono text-xs">
              <span className="text-white/50 uppercase">INTERACTIVE CONSOLE</span>
              <div className="flex items-center gap-4 sm:gap-6">
                <button
                  onClick={() => setActiveTab("speech")}
                  className={`transition-colors flex items-center gap-1.5 ${
                    activeTab === "speech"
                      ? "text-chartreuse font-bold border-b border-chartreuse pb-0.5"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <Mic className="w-3 h-3" />
                  <span>[ 01 Articulation ]</span>
                </button>
                <button
                  onClick={() => setActiveTab("games")}
                  className={`transition-colors flex items-center gap-1.5 ${
                    activeTab === "games"
                      ? "text-chartreuse font-bold border-b border-chartreuse pb-0.5"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <Users className="w-3 h-3" />
                  <span>[ 02 Parlor Games ]</span>
                </button>
                <button
                  onClick={() => setActiveTab("map")}
                  className={`transition-colors flex items-center gap-1.5 ${
                    activeTab === "map"
                      ? "text-chartreuse font-bold border-b border-chartreuse pb-0.5"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <Network className="w-3 h-3" />
                  <span>[ 03 Constellation ]</span>
                </button>
              </div>
            </div>

            {/* Tab Contents */}
            <AnimatePresence mode="wait">
              {activeTab === "speech" && (
                <motion.div
                  key="tab-speech"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="border border-white/15 bg-black/20 p-6 space-y-6"
                >
                  <div className="flex justify-between items-start font-mono text-xs">
                    <div>
                      <span className="text-chartreuse font-semibold block">
                        DAILY SPEECH DRILL
                      </span>
                      <span className="text-white/50 text-[11px]">
                        Level 12 · 7-Day Vocal Streak 🔥
                      </span>
                    </div>
                    <span className="text-amber-300 font-bold">+150 XP</span>
                  </div>

                  <div className="p-4 bg-black/30 border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-chartreuse">
                      CHALLENGE PROMPT
                    </span>
                    <p className="text-sm font-medium text-white leading-relaxed">
                      &ldquo;Explain Gödel’s Incompleteness Theorem to an educated
                      15-year-old in under 90 seconds without jargon.&rdquo;
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 font-mono text-xs">
                    <span className="text-white/70 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      MIC READY · AUDIO STREAM ACTIVE
                    </span>
                    <a
                      href="https://fey.lokinlabs.com.ng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-chartreuse text-olive-deep font-bold hover:bg-white transition-colors"
                    >
                      Test Your Voice (90s) →
                    </a>
                  </div>
                </motion.div>
              )}

              {activeTab === "games" && (
                <motion.div
                  key="tab-games"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="border border-white/15 bg-black/20 p-6 space-y-6"
                >
                  <div className="flex justify-between items-start font-mono text-xs">
                    <div>
                      <span className="text-amber-300 font-semibold block">
                        SALON DEBATE ROOM
                      </span>
                      <span className="text-white/50 text-[11px]">
                        Round 2 of 5 · 4 Players Connected
                      </span>
                    </div>
                    <span className="text-white/70 font-mono">JURY: 00:44</span>
                  </div>

                  <div className="p-4 bg-black/30 border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300">
                      SALON MOTION
                    </span>
                    <p className="text-sm font-medium text-white leading-relaxed">
                      &ldquo;Player 3 must defend: &lsquo;Privacy is an
                      evolutionary bottleneck.&rsquo; The jury votes conviction or
                      bluff.&rdquo;
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 font-mono text-xs">
                    <span className="text-white/70">ROOM LOBBY: LIVE</span>
                    <a
                      href="https://fey.lokinlabs.com.ng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-amber-400 text-black font-bold hover:bg-white transition-colors"
                    >
                      Enter Room Lobby →
                    </a>
                  </div>
                </motion.div>
              )}

              {activeTab === "map" && (
                <motion.div
                  key="tab-map"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="border border-white/15 bg-black/20 p-6 space-y-6"
                >
                  <div className="flex justify-between items-start font-mono text-xs">
                    <div>
                      <span className="text-blue-300 font-semibold block">
                        SYNAPSE GRAPH
                      </span>
                      <span className="text-white/50 text-[11px]">
                        24 Knowledge Nodes Mastered
                      </span>
                    </div>
                    <span className="text-emerald-400 font-bold">
                      STATE: ONLINE
                    </span>
                  </div>

                  <div className="p-6 bg-black/30 border border-white/10 text-center font-mono text-xs">
                    <div className="flex justify-center items-center gap-3">
                      <span className="p-2 border border-white/20">
                        EPISTEMOLOGY
                      </span>
                      <span>⟷</span>
                      <span className="p-2 bg-terra-crimson text-white font-bold">
                        FEY CORE
                      </span>
                      <span>⟷</span>
                      <span className="p-2 border border-white/20">RHETORIC</span>
                    </div>
                    <p className="text-[11px] text-white/50 mt-4">
                      Visual memory network tracking articulate concept mastery.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 font-mono text-xs">
                    <span className="text-white/50">COGNITIVE INDEX</span>
                    <a
                      href="https://fey.lokinlabs.com.ng"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 bg-white text-black font-bold hover:bg-chartreuse transition-colors"
                    >
                      Explore Full Map →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="pt-6 text-xs text-white/50 flex justify-between items-center border-t border-white/10 font-mono">
            <span>COGNITIVE ARTICULATION PLATFORM</span>
            <a
              href="https://fey.lokinlabs.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chartreuse hover:underline"
            >
              fey.lokinlabs.com.ng ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
