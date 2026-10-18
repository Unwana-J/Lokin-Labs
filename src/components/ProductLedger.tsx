"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Check, Copy, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, ProductItem } from "@/data/products";

type FilterCategory = "all" | "flagship" | "ai-tools" | "delivery" | "learning";

export function ProductLedger() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(
    null
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeFilter === "all") return true;
    return product.categories.includes(activeFilter);
  });

  const handleCopyEmail = (id: string) => {
    navigator.clipboard.writeText("letslokin@gmail.com");
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section
      id="warehouse"
      className="px-6 sm:px-12 py-28 max-w-7xl mx-auto border-t border-black/[0.08]"
    >
      {/* Products Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-3 font-mono text-xs text-ink-muted uppercase tracking-wider mb-3">
          <span>§ 03 / PORTFOLIO</span>
          <span className="text-ink-soft">·</span>
          <span>1 PUBLIC PLATFORM · 5 PARTNER &amp; BETA SYSTEMS</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-ink-dark">
          Engineered Systems.
        </h2>
        <p className="text-lg text-ink-muted mt-3">
          A catalog of production web applications, AI systems, and multiplayer
          experiences architected by Lokin Labs.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-8 mb-8 border-b border-black/[0.08]">
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
          AI SYSTEMS (3)
        </button>
        <button
          onClick={() => setActiveFilter("delivery")}
          className={`filter-tab pb-3 font-mono text-xs tracking-wider transition-all duration-200 relative ${
            activeFilter === "delivery"
              ? "text-ink-dark font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-ink-dark"
              : "text-ink-muted hover:text-ink-dark"
          }`}
        >
          DELIVERY &amp; OPS (3)
        </button>
        <button
          onClick={() => setActiveFilter("learning")}
          className={`filter-tab pb-3 font-mono text-xs tracking-wider transition-all duration-200 relative ${
            activeFilter === "learning"
              ? "text-ink-dark font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-ink-dark"
              : "text-ink-muted hover:text-ink-dark"
          }`}
        >
          LEARNING &amp; PLAY (2)
        </button>
      </div>

      {/* Products Table */}
      <div className="border-t border-black/[0.08] divide-y divide-black/[0.08]">
        {/* Table Header (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-12 py-3 font-mono text-[11px] text-ink-soft uppercase tracking-wider">
          <div className="col-span-1">#</div>
          <div className="col-span-4">PRODUCT &amp; THESIS</div>
          <div className="col-span-3">ARCHITECTURE</div>
          <div className="col-span-2">DEPLOYMENT</div>
          <div className="col-span-2 text-right">ACCESS</div>
        </div>

        {/* Product Rows */}
        {filteredProducts.map((product: ProductItem) => {
          const isPartnerAccess =
            product.statusType === "inactive" ||
            product.statusType === "partner-access";

          return (
            <div
              key={product.id}
              className="product-row py-8 px-4 -mx-4 rounded-[4px] grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group"
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
              <div className="md:col-span-4 space-y-1.5">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold tracking-tight text-ink-dark">
                    {product.name}
                  </h3>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-[2px] border ${
                      product.isFlagship
                        ? "bg-terra-light text-terra-crimson border-terra-crimson/25"
                        : "bg-canvas-subtle text-ink-muted border-black/[0.08]"
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
              <div className="md:col-span-2 font-mono text-xs font-semibold">
                {product.isFlagship ? (
                  <span className="inline-flex items-center gap-2 text-emerald-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    <span>{product.status}</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 text-ink-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-soft" />
                    <span>{product.status}</span>
                  </span>
                )}
              </div>

              {/* Action */}
              <div className="md:col-span-2 md:text-right pt-2 md:pt-0">
                {isPartnerAccess ? (
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold px-3 py-1.5 rounded-[2px] border border-black/15 text-ink-dark hover:border-terra-crimson hover:text-terra-crimson hover:bg-terra-crimson/[0.04] transition-colors whitespace-nowrap"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Request Demo / Details</span>
                  </button>
                ) : (
                  <a
                    href={product.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold text-terra-crimson hover:underline transition-colors"
                  >
                    <span>Launch Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Partner / Demo Access Drawer Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-deep/75 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-canvas border border-black/15 shadow-2xl p-6 sm:p-8 space-y-6 relative"
            >
              <div className="flex items-start justify-between gap-4 border-b border-black/10 pb-4">
                <div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-terra-crimson block">
                    {selectedProduct.code} · {selectedProduct.status}
                  </span>
                  <h3 className="text-2xl font-extrabold text-ink-dark mt-1">
                    Request Access: {selectedProduct.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="p-1.5 text-ink-muted hover:text-ink-dark transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-sm text-ink-muted leading-relaxed">
                <p className="font-medium text-ink-dark">
                  {selectedProduct.thesis}
                </p>
                <p>{selectedProduct.description}</p>
                <div className="p-3.5 bg-canvas-surface border border-black/[0.08] font-mono text-xs space-y-1">
                  <div className="text-ink-soft uppercase text-[10px]">
                    SYSTEM ARCHITECTURE
                  </div>
                  <div className="text-ink-dark font-semibold">
                    {selectedProduct.techStack}
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft block">
                  DIRECT LAB DISPATCH (LETSLOKIN@GMAIL.COM)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`mailto:letslokin@gmail.com?subject=${encodeURIComponent(
                      `Partner Access / Walkthrough Request: ${selectedProduct.name} (${selectedProduct.code})`
                    )}&body=${encodeURIComponent(
                      `Hi Unwana & Lokin Labs,\n\nI'd love to request a live walkthrough or partner access for ${selectedProduct.name} (${selectedProduct.code}).\n\nContext / Organization:\n`
                    )}`}
                    className="btn-studio bg-terra-crimson text-white hover:bg-terra-bright text-xs font-bold w-full"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Email Client</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyEmail(selectedProduct.id)}
                    className="btn-studio border border-black/20 text-ink-dark hover:border-black/60 bg-white text-xs font-mono font-bold w-full"
                  >
                    {copiedId === selectedProduct.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-700" />
                        <span className="text-emerald-700">
                          Copied letslokin@gmail.com
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Studio Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
