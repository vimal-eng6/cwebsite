"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Stop07() {
  return (
    <section id="stop-07" className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden bg-transparent">
      {/* Background blueprint grid lines */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      {/* Radiant glow behind logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      {/* A3: Wireframe to Solid Overlay Transition */}
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="absolute inset-0 border border-brand-orange bg-transparent pointer-events-none z-30 blueprint-grid opacity-25"
      />

      <div className="max-w-4xl w-full text-center z-10 space-y-10 flex flex-col items-center">
        <div className="stop-label">
          Stop 07 — Brand Statement
        </div>

        {/* Dynamic Logo Reveal (1.5s fade-in, scale 0.95->1, subtle orange glow) */}
        <div className="flex justify-center py-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="p-6 rounded bg-brand-orange/5 border border-brand-orange/15 shadow-[0_0_35px_rgba(255,122,26,0.12)] text-brand-orange relative overflow-hidden"
          >
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 85" fill="currentColor" fillRule="evenodd">
              {/* Left Side: C */}
              <path d="M47,15 L10,35 L10,75 L47,75 L47,60 L25,60 L25,48 L47,36 Z" />
              {/* Right Side: D */}
              <path d="M53,15 L90,35 L90,75 L53,75 Z M68,36 L68,60 L75,60 L80,55 L80,43 L68,36 Z" />
            </svg>
          </motion.div>
        </div>

        {/* Brand Positioning Header (QUIET rhythm: air, no cards, big typography) */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-text-headline leading-[1.05] heading-stop">
          We Build The Road <br />
          <span className="heading-accent">To AI</span>
        </h1>

        {/* The positioning statement - Narrative (Sans) */}
        <div className="max-w-xl mx-auto flex flex-col items-center leading-relaxed">
          <p className="font-sans text-xs md:text-sm text-text-body text-[1.1rem]">
            Most organizations try to jump directly to AI.
          </p>
          
          <div className="h-8" /> {/* 32px spacing gap above money line */}
          
          <p className="font-sans text-text-headline font-bold text-sm md:text-[1.25rem] text-center max-w-lg leading-snug">
            "We build the digital foundation that makes AI possible."
          </p>
        </div>

        {/* Telemetry Indicator - (Mono) */}
        <div className="pt-6 font-mono text-[9px] text-text-mono flex justify-center items-center gap-2 select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span className="font-semibold uppercase tracking-widest text-brand-orange">CALDIM FOUNDATION ENGINE STANDBY</span>
        </div>
      </div>
    </section>
  );
}
