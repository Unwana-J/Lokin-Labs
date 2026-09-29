"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-obsidian-deep text-white px-6 sm:px-12 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <BrandLogo size={22} color="white" />
            <span className="font-bold text-lg text-white uppercase tracking-tight">
              Lokin Labs
            </span>
          </div>
          <p className="text-xs text-white/50 font-mono">
            © 2026 Lokin Labs. All rights reserved. Abuja, Nigeria · Global.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-8 text-xs font-mono uppercase text-white/60">
          <a
            href="https://fey.lokinlabs.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Fey Platform ↗
          </a>
          <a
            href="mailto:letslokin@gmail.com"
            className="hover:text-white transition-colors"
          >
            letslokin@gmail.com
          </a>
          <Link
            href="#warehouse"
            className="hover:text-white transition-colors"
          >
            Products
          </Link>
          <Link
            href="#thesis"
            className="hover:text-white transition-colors"
          >
            Philosophy
          </Link>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-white transition-colors text-white/40"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
