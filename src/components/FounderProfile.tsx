"use client";

import { Mail, MapPin } from "lucide-react";

export function FounderProfile() {
  return (
    <section
      id="about-creator"
      className="min-h-screen px-6 sm:px-12 py-28 max-w-5xl mx-auto flex flex-col justify-center border-t border-black/[0.08]"
    >
      <div className="space-y-8 border-l-2 border-ink-dark pl-8 sm:pl-12">
        <span className="font-mono text-xs text-terra-crimson font-semibold uppercase tracking-wider block">
          [ BEHIND THE LAB ]
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-dark leading-tight">
          &ldquo;We get an idea—something that could make software sharper, faster, or deeply fun—and we don’t let it go until it’s live.&rdquo;
        </h2>

        <div className="space-y-6 text-base sm:text-lg text-ink-muted leading-relaxed">
          <p>
            Lokin Labs was born out of an obsession with the complete loop of creation:
            spotting something that could make a workflow sharper, a team less dependent
            on heroics, or a digital experience genuinely unforgettable—and refusing to
            let it sit in a conceptual graveyard.
          </p>
          <p>
            Most digital tools are built in silos: designers hand off static mockups,
            engineers build to ticket specifications, and the initial creative spark gets
            diluted along the way. Lokin Labs operates differently. We treat taste, systems
            architecture, and software engineering as one continuous, uncompromising craft.
          </p>
          <p>
            Whether it’s a timed vocal debate parlor, an AI meeting intelligence co-pilot,
            or an automated bookkeeping parser, we build software that people actually look
            forward to opening and love returning to every day.
          </p>
          <p className="font-semibold text-ink-dark text-lg sm:text-xl">
            Software should make you feel sharper, not drained. That is the Lokin standard.
          </p>
        </div>

        {/* Studio Leadership & Inquiries */}
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-ink-dark border-t border-black/[0.08] pt-8">
          <div>
            <span className="block text-ink-soft uppercase text-[10px] mb-1">
              FOUNDER &amp; BUILDER
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
              Lagos, Nigeria · Global
            </span>
          </div>
          <div>
            <span className="block text-ink-soft uppercase text-[10px] mb-1">
              DIRECT INQUIRIES
            </span>
            <a
              href="mailto:letslokin@gmail.com"
              className="text-terra-crimson underline font-medium hover:text-terra-bright flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              letslokin@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
