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
      "Lokin Labs is an independent digital product lab. We design and build web applications, AI tools, and games that are sharp to use, fast, and genuinely enjoyable.",
  },
  {
    number: "02",
    question: "How can I access the products in the catalog?",
    answer:
      "Our flagship platform, Fey, is live in public production right now. Our other engineered systems—Creed, Roost AI, Vantage, Qore SD-PIS, and Lokin Study—are currently in Partner Access and Private Beta; click 'Request Access' on any system in the catalog to schedule a walkthrough or copy our direct studio address.",
  },
  {
    number: "03",
    question: "What is the design philosophy behind Lokin Labs products?",
    answer:
      "We build at the intersection of great design and solid engineering. We don't believe in sterile tools or mindless games. Every product is built to be sharp, delightful, and immediately responsive.",
  },
  {
    number: "04",
    question: "How can we collaborate, partner, or get in touch?",
    answer:
      "Whether you are interested in design partnership, bespoke product engineering, or private system walkthroughs, we welcome direct contact at letslokin@gmail.com.",
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
      className="px-6 sm:px-12 py-28 max-w-5xl mx-auto border-t border-black/[0.08]"
    >
      <div className="mb-12">
        <span className="font-mono text-xs text-ink-muted uppercase tracking-wider block mb-2">
          § 05 / FAQ
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-ink-dark">
          Frequently Asked Questions.
        </h2>
      </div>

      <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
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
