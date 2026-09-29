"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS, ProductItem } from "@/data/products";

type FilterCategory = "all" | "flagship" | "ai-tools" | "delivery" | "learning";

export function ProductLedger() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeFilter === "all") return true;
    return product.categories.includes(activeFilter);
  });

  return (
    <section
      id="warehouse"
      className="min-h-screen px-6 sm:px-12 py-28 max-w-7xl mx-auto border-t border-[rgba(20,26,15,0.08)]"
    >
      {/* Products Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-3 font-mono text-xs text-ink-muted uppercase tracking-wider mb-3">
          <span>PORTFOLIO</span>
          <span className="text-ink-soft">·</span>
          <span>6 LIVE RELEASES</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-ink-dark">
          Products.
        </h2>
        <p className="text-lg text-ink-muted mt-3">
          A catalog of live web apps, AI tools, and games engineered by Lokin Labs.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-8 mb-8 border-b border-[rgba(20,26,15,0.08)]">
        <button
          onClick={() => setActiveFilter("all")}
          className={`filter-tab pb-3 font-mono text-xs tracking-wider transition-all duration-200 relative ${
            activeFilter === "all"
              ? "text-ink-dark font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-ink-dark"
              : "text-ink-muted hover:text-ink-dark"
          }`}
        >
          ALL (6)
        </button>
        <button
          onClick={() => setActiveFilter("flagship")}
          className={`filter-tab pb-3 font-mono text-xs tracking-wider transition-all duration-200 relative ${
            activeFilter === "flagship"
              ? "text-ink-dark font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-ink-dark"
              : "text-ink-muted hover:text-ink-dark"
          }`}
        >
          FLAGSHIP (1)
        </button>
        <button
          onClick={() => setActiveFilter("ai-tools")}
          className={`filter-tab pb-3 font-mono text-xs tracking-wider transition-all duration-200 relative ${
            activeFilter === "ai-tools"
              ? "text-ink-dark font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-ink-dark"
              : "text-ink-muted hover:text-ink-dark"
          }`}
        >
          AI TOOLS (3)
        </button>
        <button
          onClick={() => setActiveFilter("delivery")}
          className={`filter-tab pb-3 font-mono text-xs tracking-wider transition-all duration-200 relative ${
            activeFilter === "delivery"
              ? "text-ink-dark font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-ink-dark"
              : "text-ink-muted hover:text-ink-dark"
          }`}
        >
          DELIVERY (2)
        </button>
        <button
          onClick={() => setActiveFilter("learning")}
          className={`filter-tab pb-3 font-mono text-xs tracking-wider transition-all duration-200 relative ${
            activeFilter === "learning"
              ? "text-ink-dark font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-ink-dark"
              : "text-ink-muted hover:text-ink-dark"
          }`}
        >
          GAMES &amp; TOOLS (2)
        </button>
      </div>

      {/* Products Table */}
      <div className="border-t border-[rgba(20,26,15,0.08)] divide-y divide-[rgba(20,26,15,0.08)]">
        {/* Table Header (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-12 py-3 font-mono text-[11px] text-ink-soft uppercase tracking-wider">
          <div className="col-span-1">#</div>
          <div className="col-span-5">PRODUCT &amp; OVERVIEW</div>
          <div className="col-span-3">TECH STACK</div>
          <div className="col-span-2">STATUS</div>
          <div className="col-span-1 text-right">LINK</div>
        </div>

        {/* Product Rows */}
        {filteredProducts.map((product: ProductItem) => (
          <div
            key={product.id}
            className="product-row py-8 px-4 -mx-4 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group"
          >
            {/* Code */}
            <div
              className={`md:col-span-1 font-mono text-sm font-bold ${
                product.isFlagship ? "text-terra-crimson" : "text-ink-dark"
              }`}
            >
              {product.code}
            </div>

            {/* Product & Thesis */}
            <div className="md:col-span-5 space-y-1.5">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-ink-dark tracking-tight">
                  {product.name}
                </h3>
                <span
                  className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                    product.isFlagship
                      ? "bg-terra-light text-terra-crimson border-terra-crimson/25"
                      : "bg-canvas-subtle text-ink-dark border-black/[0.08]"
                  }`}
                >
                  {product.badge}
                </span>
              </div>
              <p className="text-sm font-medium text-ink-dark">
                {product.thesis}
              </p>
              <p className="text-xs text-ink-muted leading-relaxed max-w-lg">
                {product.description}
              </p>
            </div>

            {/* Tech Stack & Domain */}
            <div className="md:col-span-3 font-mono text-xs text-ink-muted">
              <div>{product.techStack}</div>
              <div className="text-ink-soft mt-1">{product.domain}</div>
            </div>

            {/* Status */}
            <div className="md:col-span-2 font-mono text-xs text-emerald-800 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>{product.status}</span>
            </div>

            {/* Action */}
            <div className="md:col-span-1 md:text-right pt-2 md:pt-0">
              <a
                href={product.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 font-mono text-xs font-bold transition-colors ${
                  product.isFlagship
                    ? "text-terra-crimson hover:underline"
                    : "text-ink-dark hover:underline"
                }`}
              >
                <span>Launch</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
