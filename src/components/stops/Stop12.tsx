"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface FeatureModule {
  badge: string;
  title: string;
  desc: string;
}

const modules: FeatureModule[] = [
  {
    badge: "PROJECT MASTER",
    title: "Vehicle Program Management",
    desc: "Unifies SUV/EV launches and plant capacity upgrades. Eliminates siloed spreadsheet trackers for a single governed repository."
  },
  {
    badge: "MILESTONE TRACKING",
    title: "Design Gate Compliance",
    desc: "Live tracker for PDP Gate Reviews (G0–G6) and DVP status. Instantly highlights schedule slippage against baselines."
  },
  {
    badge: "BUDGET INTELLIGENCE",
    title: "Program Cost Governance",
    desc: "Tracks engineering spend and Capex with AI procurement intelligence to surface vendor delays and overrun risks early."
  },
  {
    badge: "DECISION TRACEABILITY",
    title: "Meeting Governance & MOM",
    desc: "Live capture for MRM/PRM meetings. AI summarizes outcomes and tracks action items to closure."
  },
  {
    badge: "AI AGENT VIEW",
    title: "Intelligent Program Insights",
    desc: "Conversational interface for VPs: 'What programs are at risk this quarter?' No SQL required—just instant answers."
  },
  {
    badge: "PROBLEM RESOLUTION",
    title: "Escalation Management",
    desc: "Replaces WhatsApp with structured 8D/CAPA workflows for plant stoppages and supplier non-conformances."
  }
];

export default function Stop12() {
  return (
    <section id="stop-12" className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden bg-brand-charcoal/88 backdrop-blur-[2px]">
      {/* Background blueprint grid lines */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      {/* Radiant glow bottom close */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full z-10 space-y-20 flex flex-col items-center">
        
        {/* Section Header (QUIET rhythm: large title, lots of negative space) */}
        <div className="text-center space-y-6">
          <div className="stop-label inline-block">
            Stop 12 — The Flagship Vision
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-text-headline leading-[1.05] heading-stop">
            Imagine Mahindra <br />
            <span className="heading-accent">Two Years From Now</span>
          </h2>
          
          <div className="h-10" /> {/* 80px equivalent negative space gap under heading */}

          {/* Narrative description (Sans) max 640px */}
          <p className="font-sans text-[1.05rem] text-text-body max-w-[640px] mx-auto leading-relaxed">
            An industrial-grade platform engineered to unify complex vehicle programs, plant operations, and cross-functional engineering teams.
          </p>
        </div>

        {/* CALDIM CORE Badge */}
        <div className="flex justify-center w-full">
          <span className="font-mono text-[9px] text-brand-orange uppercase tracking-[0.25em] border border-brand-orange/40 px-4 py-1.5 rounded-sm font-bold bg-bg-panel/40">
            CALDIM CORE PLATFORM
          </span>
        </div>

        {/* Modules Grid (2x3 grid, no emojis, orange left borders, text-headline headers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="bg-bg-panel border border-border-subtle border-l-[3.5px] border-l-brand-orange p-5 rounded-sm shadow-industrial flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-[9px] text-brand-orange font-bold uppercase tracking-wider">
                    {mod.badge}
                  </span>
                  <span className="font-mono text-[8px] text-text-mono opacity-50">
                    MODULE 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-sans text-sm font-bold text-text-headline uppercase tracking-wide mb-2">
                  {mod.title}
                </h3>

                <p className="font-sans text-[11.5px] text-text-body leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flagship metrics bar (3 columns, vertical separators, no backgrounds, pure typography) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full border-y border-border-subtle py-8 max-w-4xl">
          <div className="p-4 text-center border-b md:border-b-0 md:border-r border-border-subtle flex flex-col justify-center">
            <span className="font-mono text-4xl md:text-5xl font-extrabold text-text-headline block mb-2">
              40–60%
            </span>
            <span className="font-sans text-[11px] text-text-body uppercase tracking-wider">
              Reduction in Reporting Effort
            </span>
          </div>
          
          <div className="p-4 text-center border-b md:border-b-0 md:border-r border-border-subtle flex flex-col justify-center">
            <span className="font-mono text-4xl md:text-5xl font-extrabold text-brand-orange block mb-2">
              ZERO
            </span>
            <span className="font-sans text-[11px] text-text-body uppercase tracking-wider">
              MOM Action Item Leakage
            </span>
          </div>
          
          <div className="p-4 text-center flex flex-col justify-center">
            <span className="font-mono text-4xl md:text-5xl font-extrabold text-text-headline block mb-2">
              REAL-TIME
            </span>
            <span className="font-sans text-[11px] text-text-body uppercase tracking-wider">
              Leadership Visibility
            </span>
          </div>
        </div>

        {/* Pinned Manifesto Close */}
        <div className="text-center pt-10 space-y-12 w-full max-w-3xl flex flex-col items-center">
          <div className="space-y-4">
            <p className="font-sans text-text-body text-[1.2rem] leading-relaxed">
              The Future Doesn't Belong To Organizations With More Software.
            </p>
            <p className="font-sans text-text-headline font-bold text-[1.5rem] md:text-[1.8rem] leading-snug">
              It Belongs To Organizations With Better Decisions.
            </p>
          </div>

          {/* CALDIM Tagline block */}
          <div className="flex flex-col items-center gap-3 pt-4 border-t border-border-subtle w-full max-w-md">
            {/* Logo */}
            <div className="p-2.5 rounded bg-brand-orange/10 text-brand-orange">
              <svg className="w-12 h-12" viewBox="0 0 100 85" fill="currentColor">
                <path d="M47,15 L10,35 L10,75 L47,75 L47,60 L25,60 L25,48 L47,36 Z" />
                <path d="M53,15 L90,35 L90,75 L53,75 Z M68,36 L68,60 L75,60 L80,55 L80,43 L68,36 Z" />
              </svg>
            </div>
            
            <span className="font-mono text-[10px] text-text-mono uppercase tracking-[0.2em] select-none text-center">
              Transforming Ideas Into Intelligent Enterprises
            </span>
          </div>

          {/* Final CTA button: solid orange, dark text, sharp corners only, no shadow */}
          <div className="pt-4">
            <button
              onClick={() => {
                const contactEl = document.getElementById("contact");
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/contact";
                }
              }}
              className="flex items-center justify-center gap-2 w-40 h-12 bg-accent-orange text-bg-void font-mono font-bold text-xs uppercase tracking-wider rounded-none hover:bg-accent-orange/90 transition-colors shadow-none border-0 cursor-pointer"
            >
              Request Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
