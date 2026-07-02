"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProductItem {
  name: string;
  bottleneck: string;
  solution: string;
  badge: string;
  status: string;
}

const products: ProductItem[] = [
  { 
    name: "CAL MISC", 
    bottleneck: "estimation became a bottleneck", 
    solution: "Automates complex engineering quantity estimations, mapping blueprint material calculations directly to pricing matrices.",
    badge: "ESTIMATION",
    status: "DEPLOYED · ACTIVE"
  },
  { 
    name: "CAL BUY", 
    bottleneck: "procurement became slow", 
    solution: "Consolidates supplier requisition queues with automated purchase order rules, removing signature inboxes.",
    badge: "PROCUREMENT",
    status: "ACTIVE · SYNCHRONIZED"
  },
  { 
    name: "CAL TRACK", 
    bottleneck: "workforce visibility was missing", 
    solution: "Logs timesheets, site attendance, and work progress on a unified telemetry hub with real-time audit logs.",
    badge: "WORKFORCE",
    status: "ACTIVE · SECURE"
  },
  { 
    name: "Asset Management", 
    bottleneck: "assets became invisible", 
    solution: "Maintains absolute operational history of heavy plant tooling, site equipment locations, and dispatch queues.",
    badge: "ASSETS",
    status: "ENTERPRISE READY"
  },
  { 
    name: "CAL RIMS", 
    bottleneck: "recruitment became difficult", 
    solution: "Maintains structured candidate testing pipelines, onboarding transmittals, and payroll integration schedules.",
    badge: "HR OPS",
    status: "ACTIVE · OPTIMIZED"
  },
  { 
    name: "Steel Transmittal", 
    bottleneck: "document control became critical", 
    solution: "Tracks blueprint design gates, client review stamps, and supplier transmittal history to ensure zero leakage.",
    badge: "DOC CONTROL",
    status: "ENTERPRISE READY"
  },
  { 
    name: "Warehouse Mgmt", 
    bottleneck: "inventory visibility became essential", 
    solution: "Digitizes material receipts, stock balances, and dispatch logs on a synced ledger to prevent mismatches.",
    badge: "INVENTORY",
    status: "ACTIVE · LEDGER"
  },
];

export default function Stop10() {
  return (
    <section id="stop-10" className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden bg-brand-charcoal/75 backdrop-blur-[2px]">
      {/* Background blueprint grid lines */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="max-w-6xl w-full z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="stop-label inline-block">
            Stop 10 — Product Portfolio
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-text-headline heading-stop">
            The Innovation <br />
            <span className="heading-accent">Gallery</span>
          </h2>
          
          <div className="w-16 h-[2px] bg-brand-steel mx-auto" />
          
          <p className="font-sans text-xs md:text-sm text-text-body max-w-xl mx-auto">
            Every product in the CALDIM ecosystem exists because a real operational bottleneck demanded a solution.
          </p>
        </div>

        {/* Technical Product Grid (Featured first card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className={`bg-bg-panel border border-border-subtle rounded p-6 shadow-industrial flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:border-brand-orange/40 ${
                idx === 0 
                  ? "md:col-span-2 md:row-span-1 border-brand-orange/30 shadow-[0_0_20px_rgba(255,122,26,0.06)] bg-[#14171A]/90" 
                  : ""
              }`}
            >
              {/* Corner industrial label - Telemetry (Mono) */}
              <div className="absolute top-2 right-2 flex items-center gap-1 font-mono text-[8px] text-text-mono">
                <span>{product.badge}</span>
                <ArrowUpRight className="w-2.5 h-2.5 text-brand-orange/40 group-hover:text-brand-orange transition-colors" />
              </div>

              <div>
                {/* Heading (Sans) */}
                <h3 className="font-sans text-sm md:text-base font-bold text-text-headline uppercase tracking-wide mb-2">
                  {product.name}
                  {idx === 0 && <span className="text-[9px] font-mono text-brand-orange ml-2 font-bold select-none">[FLAGSHIP]</span>}
                </h3>
                
                {/* Bottleneck statement (Italic Sans-serif Quote) */}
                <div className="bg-accent-red/5 border-l-2 border-accent-red px-3 py-2 mb-4">
                  <span className="font-mono text-[8.5px] text-accent-red font-bold block uppercase tracking-wide">
                    BOTTLENECK STATE:
                  </span>
                  <span className="font-sans text-[11px] text-text-headline italic leading-snug">
                    "{product.bottleneck}"
                  </span>
                </div>

                <div className="w-full h-[1px] bg-border-subtle mb-3" />

                {/* Solution (Sans) */}
                <p className="font-sans text-xs text-text-body leading-relaxed">
                  {product.solution}
                </p>
              </div>

              {/* Status bar - Telemetry (Mono) */}
              <div className="mt-6 pt-3 border-t border-border-subtle flex items-center justify-between font-mono text-[8px] text-text-mono">
                <span className="font-bold uppercase tracking-wider">{product.status}</span>
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-amber opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-amber"></span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
