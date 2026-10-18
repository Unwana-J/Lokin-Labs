"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Copy, Check } from "lucide-react";

export function ClosingCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("letslokin@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="collaborate"
      className="bg-obsidian-deep text-white px-6 sm:px-12 py-24 sm:py-28 border-t border-white/10 relative overflow-hidden"
    >
      {/* Ambient studio glow */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-terra-crimson/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-xs text-terra-crimson uppercase tracking-widest font-semibold block">
            § 06 / NEXT DISPATCH
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
            Step into the arena—or build the next system with us.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Path 01: Flagship User Conversion */}
          <div className="p-8 sm:p-10 bg-white/[0.03] border border-white/10 hover:border-white/25 transition-colors flex flex-col justify-between space-y-8 rounded-[4px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-terra-crimson font-bold uppercase tracking-wider">
                  01 / FOR THINKERS &amp; SPEAKERS
                </span>
                <span className="text-emerald-400 font-semibold">
                  PUBLIC PRODUCTION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Experience Fey Live
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Take the 90-second vocal synthesis drill, map your knowledge
                constellation across 22 disciplines, or host a live multiplayer
                parlor room with friends.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://fey.lokinlabs.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-studio bg-terra-crimson text-white hover:bg-terra-bright text-xs sm:text-sm font-bold"
              >
                <span>Launch Fey Platform</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Path 02: Partner / Venture / Demo Conversion */}
          <div className="p-8 sm:p-10 bg-white/[0.03] border border-white/10 hover:border-white/25 transition-colors flex flex-col justify-between space-y-8 rounded-[4px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-neutral-400 font-bold uppercase tracking-wider">
                  02 / FOR PARTNERS, TEAMS &amp; INQUIRIES
                </span>
                <span className="text-amber-400 font-semibold">
                  DIRECT ACCESS
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Partner With Lokin Labs
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Request a private walkthrough of our AI and delivery systems
                (Creed, Roost AI, Vantage, Qore SD-PIS), or discuss a bespoke
                product engineering partnership.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="mailto:letslokin@gmail.com?subject=Lokin%20Labs%20%E2%80%94%20Partnership%20%2F%20Product%20Inquiry"
                className="btn-studio bg-white text-ink-dark hover:bg-neutral-200 text-xs sm:text-sm font-bold"
              >
                <Mail className="w-4 h-4" />
                <span>Email letslokin@gmail.com</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="btn-studio border border-white/20 text-white hover:border-white/50 bg-transparent text-xs font-mono font-bold"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied Address</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
