"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#FAF7F0]/90 border-b border-[rgba(20,26,15,0.08)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        {/* Studio Identifier */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <span className="w-3 h-3 bg-olive-deep transition-transform duration-300 group-hover:rotate-45" />
          <span className="font-extrabold text-lg tracking-tight text-ink-dark uppercase">
            Lokin Labs
          </span>
          <span className="text-xs text-ink-soft font-mono hidden sm:inline">
            / THE FULL LOOP
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-ink-muted">
          <Link
            href="#thesis"
            className="hover:text-ink-dark transition-colors duration-200"
          >
            Philosophy
          </Link>
          <Link
            href="#flagship"
            className="hover:text-terra-crimson transition-colors duration-200 font-medium"
          >
            Flagship (Fey)
          </Link>
          <Link
            href="#warehouse"
            className="hover:text-ink-dark transition-colors duration-200"
          >
            Products &amp; Ledger
          </Link>
          <Link
            href="#about-creator"
            className="hover:text-ink-dark transition-colors duration-200"
          >
            Behind The Lab
          </Link>
        </nav>

        {/* Action Tray */}
        <div className="flex items-center gap-5">
          <span className="hidden sm:inline-flex items-center gap-2 font-mono text-xs text-ink-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            6 SYSTEMS LIVE
          </span>
          <a
            href="https://fey.lokinlabs.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-studio bg-olive-deep text-white hover:bg-terra-crimson text-xs sm:text-sm shadow-sm"
          >
            <span>Launch Fey</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink-dark hover:text-terra-crimson transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(20,26,15,0.08)] bg-canvas px-6 py-6 space-y-4 font-mono text-xs uppercase tracking-wider">
          <Link
            href="#thesis"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-ink-dark hover:text-terra-crimson py-1"
          >
            § 01 / Philosophy
          </Link>
          <Link
            href="#flagship"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-terra-crimson font-bold py-1"
          >
            § 02 / Flagship (Fey)
          </Link>
          <Link
            href="#warehouse"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-ink-dark hover:text-terra-crimson py-1"
          >
            § 03 / Products &amp; Ledger
          </Link>
          <Link
            href="#about-creator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-ink-dark hover:text-terra-crimson py-1"
          >
            § 04 / Behind The Lab
          </Link>
          <div className="pt-2 border-t border-[rgba(20,26,15,0.08)] text-[11px] text-ink-soft">
            STATUS: 6 PRODUCTION RUNTIMES ACTIVE
          </div>
        </div>
      )}
    </header>
  );
}
