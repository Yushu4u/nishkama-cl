"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { homeFaqs } from "@/data/faqs";
import { Button } from "./Button";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(homeFaqs[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="border-b border-slate-200/80 bg-slate-50/70 py-16 md:py-24"
    >
      <div className="shell">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Header & Context */}
          <div className="lg:max-w-md lg:sticky lg:top-28">
            <span className="badge-pill">COMMON QUESTIONS</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Everything you need to know about working with NCL.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Have questions about how independent QA fits into modern engineering sprints, how we handle confidential IP, or how fast we onboard? Here are direct answers.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#EFF6FF] border border-[#BFDBFE] flex items-center justify-center text-[#2F7CEF]">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Have a unique stack or question?</h3>
                  <p className="text-xs text-slate-500">We respond to engineering inquiries within 12 hours.</p>
                </div>
              </div>
              <div className="mt-5">
                <Button href="/contact" variant="outline" size="sm" className="w-full" withArrow>
                  Ask our QA team directly
                </Button>
              </div>
            </div>
          </div>

          {/* Accordion List */}
          <div className="flex-1 max-w-2xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white p-2 sm:p-4 shadow-sm">
            {homeFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="flex w-full items-start justify-between gap-4 py-5 px-3 sm:px-4 text-left font-bold text-slate-900 hover:text-[#2F7CEF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F7CEF] rounded-lg"
                  >
                    <span className="text-base sm:text-lg leading-snug flex items-center gap-3">
                      <HelpCircle className="h-4 w-4 text-[#2F7CEF] shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </span>
                    <span className="mt-1 shrink-0 rounded-full bg-slate-100 p-1 text-slate-600 transition-transform duration-200">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#2F7CEF]" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-3 sm:px-4 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-slate-600 animate-in fade-in-50 duration-150 pl-10"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
