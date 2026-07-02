"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Stop08() {
  const stages = [
    {
      id: "input",
      label: "INPUT",
      title: "Manual Processes",
      desc: "Raw, unstructured, error-prone data.",
      isCap: true,
      borderColor: "border-l-accent-red"
    },
    {
      id: "digitize",
      label: "DIGITIZE",
      title: "Excel → Applications",
      desc: "Migrating scattered cell sheets into structured databases.",
      isCap: false,
      borderColor: "border-l-brand-orange"
    },
    {
      id: "connect",
      label: "CONNECT",
      title: "Departments → One Platform",
      desc: "Synchronizing operations under a single source of truth.",
      isCap: false,
      borderColor: "border-l-brand-orange"
    },
    {
      id: "automate",
      label: "AUTOMATE",
      title: "Tasks → Workflows",
      desc: "Removing human bottlenecks with automated rules engines.",
      isCap: false,
      borderColor: "border-l-brand-orange"
    },
    {
      id: "intelligence",
      label: "ENABLE INTELLIGENCE",
      title: "Data → Insights",
      desc: "Fueling machine learning layers with clean telemetry.",
      isCap: false,
      borderColor: "border-l-brand-orange"
    },
    {
      id: "output",
      label: "OUTPUT",
      title: "Digital Enterprise",
      desc: "Governed, optimized, predictive systems.",
      isCap: true,
      borderColor: "border-l-accent-green"
    }
  ];

  return (
    <section id="stop-08" className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden bg-brand-charcoal/75 backdrop-blur-[2px] border-y border-border-subtle">
      {/* Background blueprint grid lines */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="max-w-3xl w-full z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] border border-brand-steel rounded text-brand-orange bg-brand-orange/5">
            Stop 08 — Core Engine
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-text-headline heading-stop">
            The Transformation <br />
            <span className="heading-accent">Factory</span>
          </h2>
          
          <div className="w-16 h-[2px] bg-brand-steel mx-auto" />
        </div>

        {/* Flowchart Container */}
        <div className="flex flex-col items-center w-full max-w-xl mx-auto">
          {stages.map((stage, idx) => (
            <React.Fragment key={stage.id}>
              {idx > 0 && (
                /* Centered vertical chevron arrow between stages */
                <div className="py-2 text-brand-orange/70 flex items-center justify-center shrink-0">
                  <ArrowDown className="w-4 h-6" />
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`w-full bg-bg-panel border border-border-subtle border-l-[3.5px] ${stage.borderColor} rounded-sm shadow-industrial relative overflow-hidden flex flex-col justify-center ${
                  stage.isCap ? "p-6 min-h-[90px]" : "p-5 min-h-[75px]"
                }`}
              >
                {/* A3: Wireframe to Solid Overlay Transition for every card */}
                <motion.div
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="absolute inset-0 border border-brand-orange bg-transparent pointer-events-none rounded blueprint-grid opacity-20 z-20"
                />

                <div className="flex justify-between items-start">
                  <div className="flex flex-col items-start gap-1">
                    {/* Stage Label - Telemetry (Mono) */}
                    <span className="font-mono text-[10px] text-brand-orange font-bold uppercase tracking-widest">
                      {stage.label}
                    </span>
                    {/* Stage Description / Title - Narrative (Sans) */}
                    <h3 className="font-sans text-sm md:text-base font-bold text-text-headline uppercase tracking-wide">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Telemetry Status Indicator */}
                  <span className="font-mono text-[8px] text-text-mono opacity-50 uppercase tracking-widest select-none">
                    {stage.isCap ? "[GATE_CAP]" : "STABLE"}
                  </span>
                </div>

                {/* Narrative Detail - (Sans) */}
                <p className="font-sans text-[11px] text-text-body mt-2 leading-relaxed">
                  {stage.desc}
                </p>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
