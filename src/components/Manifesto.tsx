"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Manifesto() {
  return (
    <section
      id="thesis"
      className="min-h-screen bg-olive-deep text-white flex items-center px-6 sm:px-12 py-28 relative"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <span className="font-mono text-xs text-chartreuse uppercase tracking-widest block">
          § 01 / THE THROUGH-LINE
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06]">
          Most product work focuses on one side of the equation. <br />
          <span className="text-chartreuse">We own the full loop.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 text-lg sm:text-xl font-normal leading-relaxed text-white/80 border-t border-white/10">
          <div className="space-y-4">
            <h3 className="font-mono text-sm uppercase text-chartreuse font-bold">
              01 / The Delight Layer
            </h3>
            <p>
              Software you actually look forward to opening. Whether it’s an AI
              speech challenge in Fey, an automated project RAID log in Creed, or a
              late-night parlor game, we build products that make people feel
              sharper and have genuine fun.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-mono text-sm uppercase text-chartreuse font-bold">
              02 / The Resilience Layer
            </h3>
            <p>
              Execution without excuses. The architectures, system integrations,
              and tooling that keep software running reliably at scale—backed by
              deep operational experience in environments where infrastructure is
              tested daily.
            </p>
          </div>
        </div>

        {/* Studio Philosophy Block */}
        <div className="p-6 bg-white/5 border border-white/10 rounded-sm font-mono text-xs sm:text-sm text-white/90 leading-relaxed">
          &ldquo;We thrive where building the right thing and getting it
          reliably to customers are treated as one responsibility, not
          two.&rdquo;
        </div>

        <div className="pt-2">
          <Link
            href="#flagship"
            className="btn-studio bg-chartreuse text-olive-deep hover:bg-white text-xs font-bold uppercase tracking-wider"
          >
            <span>Explore The Crown Instrument (Fey)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
