"use client";

import { useState } from "react";
import { Mail, MapPin, Copy, Check } from "lucide-react";

export function FounderProfile() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("letslokin@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="about-creator"
      className="px-6 sm:px-12 py-28 max-w-5xl mx-auto flex flex-col justify-center border-t border-black/[0.08]"
    >
      <div className="space-y-8 border-l-2 border-ink-dark pl-8 sm:pl-12">
        <span className="font-mono text-xs text-terra-crimson font-semibold uppercase tracking-wider block">
          § 04 / BEHIND THE LAB
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-dark leading-tight">
          &ldquo;We get an idea—something that could make software sharper,
          faster, or deeply fun—and we don’t let it go until it’s live.&rdquo;
        </h2>

        <div className="space-y-6 text-base sm:text-lg text-ink-muted leading-relaxed">
          <p>
            Lokin Labs was founded on a simple drive: spotting something that
            could make software sharper, workflows faster, or a digital
            experience genuinely memorable—and refusing to let it sit in a
            conceptual graveyard.
          </p>
          <p>
            Most digital tools are built in silos: designers hand off static
            mockups, engineers build to ticket specifications, and the initial
            creative spark gets diluted along the way. Lokin Labs operates
            differently. We treat taste, systems architecture, and software
            engineering as one continuous, uncompromising craft.
          </p>
          <p>
            Whether it’s a timed vocal debate parlor, an AI meeting intelligence
            co-pilot, or an automated bookkeeping parser, we build software that
            people actually look forward to opening and love returning to every
            day.
          </p>
          <p className="font-semibold text-ink-dark text-lg sm:text-xl">
            Software should make you feel sharper, not drained. That is the
            Lokin standard.
          </p>
        </div>

        {/* Studio Leadership & Inquiries */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-ink-dark border-t border-black/[0.08] pt-8">
          <div>
            <span className="block text-ink-soft uppercase text-[10px] mb-1">
              FOUNDER &amp; PRINCIPAL ARCHITECT
            </span>
            <strong className="text-sm font-bold text-ink-dark">
              Unwana John-King
            </strong>
          </div>
          <div>
            <span className="block text-ink-soft uppercase text-[10px] mb-1">
              STUDIO BASE
            </span>
            <span className="text-xs font-medium text-ink-dark flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-terra-crimson" />
              Abuja, Nigeria · Global
            </span>
          </div>
          <div>
            <span className="block text-ink-soft uppercase text-[10px] mb-1">
              DIRECT INQUIRIES
            </span>
            <div className="flex items-center gap-3">
              <a
                href="mailto:letslokin@gmail.com"
                className="text-terra-crimson underline font-medium hover:text-terra-bright inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                letslokin@gmail.com
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="p-1 rounded-[2px] border border-black/10 hover:border-black/30 text-ink-muted hover:text-ink-dark transition-colors"
                title="Copy email address"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="w-3 h-3 text-emerald-700" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
