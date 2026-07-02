"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navigation } from "lucide-react";

const milestones = [
  { id: "01", name: "MANUAL" },
  { id: "02", name: "DIGITAL" },
  { id: "03", name: "CONNECTED" },
  { id: "04", name: "AUTOMATED" },
  { id: "05", name: "INTELLIGENT" },
  { id: "06", name: "AI-POWERED ENTERPRISE" },
];

export default function Stop06() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = (window as any).__lenis?.scroll ?? window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
      setScrollProgress(progress);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map scroll progress (0 to 1) to one of the 6 stages
  const activeIdx = Math.min(5, Math.floor(scrollProgress * 6));

  return (
    <section id="stop-06" className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden bg-transparent">
      {/* Background technical layout grid lines */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      {/* Center glowing vector lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      {/* A3: Wireframe to Solid Overlay Transition */}
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="absolute inset-0 border border-brand-orange bg-transparent pointer-events-none z-30 blueprint-grid opacity-25"
      />

      <div className="max-w-5xl w-full z-10 space-y-20 flex flex-col items-center">
        {/* Section Header (QUIET rhythm: maximum negative space, big hero typography) */}
        <div className="text-center space-y-4">
          <div className="stop-label inline-block">
            Stop 06 — Journey Mile-markers
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight text-text-headline leading-none heading-stop">
            The Transformation <br />
            <span className="heading-accent">Highway</span>
          </h1>
        </div>

        {/* Mile-markers Horizontal Timeline Layout */}
        <div className="w-full relative py-8 px-4 border border-border-subtle bg-bg-panel/40 rounded shadow-industrial max-w-4xl">
          {/* Base Connection Track Line */}
          <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[1px] bg-border-subtle z-0" />

          {/* Active Track Highlight Fill */}
          <div
            className="absolute left-8 top-1/2 -translate-y-1/2 h-[1.5px] bg-brand-orange transition-all duration-300 z-0"
            style={{
              width: `${(activeIdx / (milestones.length - 1)) * 88}%`
            }}
          />

          <div className="flex justify-between items-center relative z-10">
            {milestones.map((milestone, idx) => {
              const isActive = idx === activeIdx;
              const isPassed = idx < activeIdx;

              return (
                <div
                  key={milestone.id}
                  className="flex flex-col items-center gap-4 cursor-pointer group"
                  onClick={() => {
                    const el = document.getElementById(`stop-0${idx + 1}`);
                    if (el) {
                      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top: offsetTop, behavior: "smooth" });
                    }
                  }}
                >
                  {/* Pin Dot: 6px active with glow, 4px passed/solid orange, border-subtle future */}
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-bg-void border border-border-subtle group-hover:border-text-mono transition-colors">
                    <div
                      className={`rounded-full transition-all duration-300 ${isActive
                          ? "w-2 h-2 bg-brand-orange shadow-[0_0_10px_#FF7A1A]"
                          : isPassed
                            ? "w-1.5 h-1.5 bg-brand-orange"
                            : "w-1 h-1 bg-transparent border border-border-subtle"
                        }`}
                    />
                  </div>

                  {/* Stage Name (IBM Plex Mono uppercase, active underline glow) */}
                  <span
                    className={`font-mono text-[9px] md:text-[10px] uppercase tracking-wider text-center max-w-[100px] transition-all duration-300 ${isActive
                        ? "text-brand-orange font-bold underline decoration-brand-orange decoration-2 underline-offset-4"
                        : isPassed
                          ? "text-text-mono font-medium"
                          : "text-text-mono opacity-40 group-hover:opacity-100"
                      }`}
                  >
                    {milestone.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Telemetry status indicator */}
        <div className="w-full max-w-4xl bg-bg-panel border border-border-subtle p-3 rounded flex items-center justify-between font-mono text-[9px] text-text-mono select-none">
          <div className="flex items-center gap-2">
            <Navigation className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
            <span>TRANSFORMATION GPS: NAVIGATING TRANSFORMATION ROUTE</span>
          </div>
          <span className="font-semibold uppercase tracking-widest text-brand-orange">ROUTE FIXED</span>
        </div>
      </div>
    </section>
  );
}
