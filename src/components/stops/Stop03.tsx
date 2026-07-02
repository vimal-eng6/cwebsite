"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function Stop03() {
  const painPoints = [
    { title: "Delayed Decisions", example: '"PO sitting in inbox for 3 days. No one knew."' },
    { title: "Scattered Information", example: '"Latest CAD revision sent over WhatsApp."' },
    { title: "No Accountability", example: '"No audit trail. No approval timestamp."' },
    { title: "Human Errors", example: '"INVENTORY_COUNT_2026.CSV had 47 formula errors."' },
    { title: "Lost Productivity", example: '"6 hours/week per manager on status update emails."' },
    { title: "Missed Approvals", example: '"Shipment delayed 11 days. Approval was in a cc\'d email."' },
  ];

  return (
    <section id="stop-03" className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden bg-brand-charcoal/75 backdrop-blur-[2px]">
      {/* Structural layout grid lines */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="max-w-4xl w-full z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] border border-brand-steel rounded text-brand-orange bg-brand-orange/5">
            Stop 03 — Operational Assessment
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-text-headline leading-tight">
            The Biggest Problem Is Not Technology, <br />
            <span className="heading-accent">It's Visibility</span>
          </h2>
          
          <div className="w-16 h-[2px] bg-brand-steel mx-auto" />
        </div>

        {/* Technical 2-Column Diagnostic Checklist (A3: Staggered entry) */}
        <div className="w-full border-t border-border-subtle divide-y divide-border-subtle pt-4">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-2 sm:gap-6"
            >
              {/* Left & Center: Red X + Monospace Pain Label */}
              <div className="flex items-center gap-4 shrink-0">
                <span className="font-mono text-accent-red font-bold text-sm select-none">✕</span>
                <span className="font-mono text-text-headline text-[0.95rem] font-bold uppercase tracking-wider">
                  {point.title}
                </span>
              </div>
              
              {/* Right Column: Sans-serif italic example */}
              <div className="sm:text-right">
                <span className="font-sans text-[0.85rem] text-text-body italic">
                  {point.example}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom summary readout */}
        <div className="w-full bg-bg-panel border border-border-subtle p-4 rounded flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-text-mono">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-brand-orange" />
            <span>WARNING: System visibility score evaluates below target threshold.</span>
          </div>
          <span className="text-brand-orange font-bold uppercase tracking-wider">
            [Action Plan Required]
          </span>
        </div>
      </div>
    </section>
  );
}
