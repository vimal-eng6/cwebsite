"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Stop04() {
  return (
    <section id="stop-04" className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden bg-transparent scanlines">
      {/* Background blueprint overlay - uses the new cross-hatch pattern */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      {/* Center ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      {/* CSS blinking text cursor keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
      `}} />

      <div className="max-w-4xl w-full text-center z-10 space-y-8 flex flex-col items-center">
        <div className="stop-label">
          Stop 04 — The Inflection Point
        </div>

        <h2 className="font-sans text-xs uppercase tracking-[0.3em] text-text-body font-semibold">
          The AI Revolution Has Arrived
        </h2>

        {/* Boardroom question slide layout (QUIET: large headline, minimal chrome) */}
        <div className="py-8 my-4 flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-text-body leading-none"
          >
            "HOW DO WE
          </motion.div>
          
          {/* Centered border rule */}
          <div className="w-[120px] h-[1px] bg-border-subtle" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-5xl sm:text-7xl md:text-8xl lg:text-9rem font-extrabold uppercase tracking-tight text-brand-orange leading-none text-shadow-glow"
          >
            USE AI?"
          </motion.div>
        </div>

        <p className="font-sans text-xs md:text-sm text-text-body max-w-[520px] mx-auto leading-relaxed text-center">
          As enterprise leadership demands digital transformation, boardrooms worldwide ask the same question. But they skip the critical prerequisite.
        </p>

        {/* Telemetry Footer in IBM Plex Mono and text-text-mono */}
        <div className="pt-8 flex justify-center items-center gap-2 font-mono text-[10px] text-text-mono select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
          <span className="tracking-widest font-semibold uppercase">
            BOARDROOM INQUIRY STREAM ACTIVE
          </span>
          <span className="text-brand-orange font-bold blinking-cursor">_</span>
        </div>
      </div>
    </section>
  );
}
