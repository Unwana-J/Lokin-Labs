"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  number: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    number: "01",
    question: "What is Lokin Labs?",
    answer:
      "Lokin Labs is an independent digital product lab and creative software foundry. We conceive, design, and engineer sharp, high-craft web applications, AI co-pilots, cognitive parlor games, and strategic delivery systems that users genuinely enjoy using.",
  },
  {
    number: "02",
    question: "Are all the products in the Ledger actually live?",
    answer:
      "Yes. Every system indexed in the Lokin Labs Ledger—from Fey to Creed, Roost AI, Vantage, Qore, and Lokin Study—is a live, fully deployed production runtime accessible right now with real workflows and AI integrations.",
  },
  {
    number: "03",
    question:
      "What is the relationship between the 400+ financial institutions and Lokin Labs?",
    answer:
      "The 400+ financial institutions track record belongs directly to the leadership DNA of our team lead, Unwana John-King, who directed technical product delivery and implementation management across mobile banking, payments infrastructure, and BaaS. That battle-tested enterprise rigor is what ensures Lokin Labs products are as resilient under the hood as they are playful on the surface.",
  },
  {
    number: "04",
    question: "How can we collaborate, partner, or get in touch?",
    answer:
      "Whether you are interested in design partnership, enterprise licensing, or exploratory discussions, we welcome direct contact at letslokin@gmail.com.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="px-6 sm:px-12 py-28 max-w-5xl mx-auto border-t border-[rgba(20,26,15,0.08)]"
    >
      <div className="mb-12">
        <span className="font-mono text-xs text-ink-muted uppercase tracking-wider block mb-2">
          [ LAB NOTES &amp; FAQ ]
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-dark">
          Frequently Asked Questions.
        </h2>
      </div>

      <div className="divide-y divide-[rgba(20,26,15,0.08)] border-y border-[rgba(20,26,15,0.08)]">
        {FAQS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={item.number} className="py-6">
              <button
                onClick={() => toggleItem(idx)}
                className="w-full text-left flex items-start justify-between gap-4 group"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-ink-soft pt-1 font-bold">
                    {item.number}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-ink-dark group-hover:text-terra-crimson transition-colors">
                    {item.question}
                  </span>
                </div>
                <div
                  className={`p-1.5 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-terra-crimson" : "text-ink-soft"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 pl-8 sm:pl-12 text-base text-ink-muted leading-relaxed max-w-3xl">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
