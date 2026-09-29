"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/95 border-b border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        {/* Studio Identifier */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <BrandLogo size={28} variant="olive" className="shrink-0" />
          <span className="font-black text-xl tracking-tight text-ink-dark uppercase">
            Lokin Labs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9 text-xs font-mono uppercase tracking-wider font-bold text-ink-dark">
          <Link
            href="#thesis"
            className="hover:text-terra-crimson transition-colors duration-200"
          >
            Philosophy
          </Link>
          <Link
            href="#flagship"
            className="text-terra-crimson hover:text-terra-bright transition-colors duration-200 font-extrabold"
          >
            Flagship (Fey)
          </Link>
          <Link
            href="#warehouse"
            className="hover:text-terra-crimson transition-colors duration-200"
          >
            Products
          </Link>
          <Link
            href="#about-creator"
            className="hover:text-terra-crimson transition-colors duration-200"
          >
            Behind The Lab
          </Link>
        </nav>

        {/* Action Tray */}
        <div className="flex items-center gap-4">
          <a
            href="https://fey.lokinlabs.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-studio bg-ink-dark text-white hover:bg-terra-crimson text-xs sm:text-sm font-bold shadow-sm"
          >
            <span>Launch Fey</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink-dark hover:text-terra-crimson transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/[0.08] bg-white px-6 py-6 space-y-4 font-mono text-sm uppercase tracking-wider font-bold">
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
            className="block text-terra-crimson font-extrabold py-1"
          >
            § 02 / Flagship (Fey)
          </Link>
          <Link
            href="#warehouse"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-ink-dark hover:text-terra-crimson py-1"
          >
            § 03 / Products
          </Link>
          <Link
            href="#about-creator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-ink-dark hover:text-terra-crimson py-1"
          >
            § 04 / Behind The Lab
          </Link>
        </div>
      )}
    </header>
  );
}
