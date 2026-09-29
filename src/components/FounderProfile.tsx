"use client";

import { Mail, ShieldCheck } from "lucide-react";

export function FounderProfile() {
  return (
    <section
      id="about-creator"
      className="min-h-screen px-6 sm:px-12 py-28 max-w-5xl mx-auto flex flex-col justify-center border-t border-[rgba(20,26,15,0.08)]"
    >
      <div className="space-y-8 border-l-2 border-ink-dark pl-8 sm:pl-12">
        <span className="font-mono text-xs text-terra-crimson font-semibold uppercase tracking-wider block">
          [ FOUNDRY LEADERSHIP ]
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-dark leading-tight">
          &ldquo;Building the right thing and getting it reliably to customers are treated as one responsibility, not two.&rdquo;
        </h2>

        <div className="space-y-6 text-base sm:text-lg text-ink-muted leading-relaxed">
          <p>
            Lokin Labs is led by an obsession: spotting something that could
            make a product sharper, a delivery process faster, or a team less
            dependent on heroics—and refusing to let it go until it’s live.
          </p>
          <p>
            That execution DNA comes directly from our team lead’s background
            leading technical product delivery and implementation management
            across <strong className="text-ink-dark font-semibold">400+ financial institutions</strong>,
            spanning mobile banking, payments infrastructure,
            Banking-as-a-Service (BaaS), and core banking integrations across
            African and global markets.
          </p>
          <p>
            Most product roles focus on one side of the equation. We cover
            both: customer-facing experiences that spark genuine adoption and
            trust, and the ruthless implementation frameworks and AI tooling
            that make delivery dependable.
          </p>
          <p className="font-semibold text-ink-dark text-lg sm:text-xl">
            Enterprise taught us how to build things that never break. Lokin Labs
            is where we build things people never want to leave.
          </p>
        </div>

        {/* Leadership Badges */}
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-ink-dark border-t border-[rgba(20,26,15,0.08)] pt-8">
          <div>
            <span className="block text-ink-soft uppercase text-[10px] mb-1">
              TEAM LEAD &amp; FOUNDER
            </span>
            <strong className="text-sm font-bold text-ink-dark">
              Unwana John-King
            </strong>
          </div>
          <div>
            <span className="block text-ink-soft uppercase text-[10px] mb-1">
              DELIVERY HERITAGE
            </span>
            <span className="text-xs font-medium text-ink-dark flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              400+ FIs &amp; Core Banking Integrations
            </span>
          </div>
          <div>
            <span className="block text-ink-soft uppercase text-[10px] mb-1">
              STUDIO INQUIRIES
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
