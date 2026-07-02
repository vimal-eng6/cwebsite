"use client";

import React from "react";
import { motion } from "framer-motion";
import { HardDrive, Server, Cpu, Activity } from "lucide-react";
import ChaosCard from "../ChaosCard";

export default function Stop05() {
  const steps = [
    { 
      id: 1, 
      title: "Disconnected Systems", 
      desc: "Spreadsheets, emails, and paper logs are unstructured and opaque. AI cannot read or ingest them.", 
      icon: HardDrive, 
      color: "border-accent-red/20 text-accent-red bg-accent-red/5",
      isFlagship: false
    },
    { 
      id: 2, 
      title: "Connected Platform", 
      desc: "CALDIM aggregates silos into clean relational tables, structuring operations in a unified database.", 
      icon: Server, 
      color: "border-border-subtle text-text-headline bg-bg-panel",
      isFlagship: true // Connected Platform has A3 Wireframe-to-Solid transition
    },
    { 
      id: 3, 
      title: "AI Engine", 
      desc: "Clean, structured pipelines supply live, reliable metrics directly to our machine learning layers.", 
      icon: Cpu, 
      color: "border-border-subtle text-text-headline bg-bg-panel",
      isFlagship: true // AI Engine has A3 Wireframe-to-Solid transition
    },
    { 
      id: 4, 
      title: "Insights", 
      desc: "Real-time decision traceability, auto-approvals, and prediction models become fully operational.", 
      icon: Activity, 
      color: "border-brand-orange/40 text-text-headline bg-bg-panel shadow-[0_0_15px_rgba(255,122,26,0.1)]",
      isFlagship: false,
      isDestination: true
    },
  ];

  return (
    <section id="stop-05" className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden bg-brand-charcoal/75 backdrop-blur-[2px]">
      {/* Background blueprint lines */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="max-w-6xl w-full z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-block px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] border border-brand-steel rounded text-brand-orange bg-brand-orange/5">
            Stop 05 — The Thesis Statement
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-text-headline heading-stop">
            AI Cannot Learn <br />
            <span className="heading-accent">From Chaos</span>
          </h2>
          
          <div className="w-16 h-[2px] bg-brand-steel mx-auto" />
        </div>

        {/* Central Thesis Quote - 48px padding top/bottom */}
        <div className="py-12 text-center">
          <p className="font-sans text-[1.1rem] leading-relaxed text-text-body max-w-2xl mx-auto italic">
            "Before AI can transform an organization, the organization must transform its data."
          </p>
        </div>

        {/* 2-Column Split: Chaos Cards vs. Pipeline Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* Left Column (lg:col-span-4): Scattered 2x2 ChaosCard Cluster */}
          <div className="lg:col-span-4 relative min-h-[220px] flex items-center justify-center border border-border-subtle bg-bg-panel/40 p-6 rounded">
            <div className="absolute top-2 left-2 font-mono text-[8px] text-brand-muted uppercase">CHAOTIC ARTIFACTS CLUSTER</div>
            
            <div className="grid grid-cols-2 gap-4 relative w-full max-w-sm">
              <ChaosCard label="EXCEL_PO_LIST.XLS" type="xls" rotation={-7} className="z-10" />
              <ChaosCard label="CAD_LAYOUT_R2.DWG" type="dwg" rotation={8} className="z-10" />
              <ChaosCard label="EMAIL_STATUS.MSG" type="email" rotation={-6} className="z-10" />
              <ChaosCard label="CHAT_LOG_SUP.TXT" type="whatsapp" rotation={5} className="z-10" />
            </div>
          </div>

          {/* Right Column (lg:col-span-8): Horizontal Pipeline Flow Diagram */}
          <div className="lg:col-span-8 flex flex-col md:flex-row items-stretch justify-between gap-4 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.id}>
                  {idx > 0 && (
                    /* Technical 1px line with arrowhead connector */
                    <div className="hidden md:flex items-center justify-center text-brand-orange shrink-0 self-center">
                      <svg className="w-8 h-4 text-brand-orange" viewBox="0 0 32 16" fill="none">
                        <path d="M0,8 L28,8" stroke="currentColor" strokeWidth="1" />
                        <path d="M24,4 L28,8 L24,12" stroke="currentColor" strokeWidth="1" fill="none" />
                      </svg>
                    </div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`border border-border-subtle p-5 rounded shadow-industrial flex flex-col justify-between flex-grow relative overflow-hidden group ${
                      step.isDestination ? "bg-bg-panel border-brand-orange/30" : "bg-bg-panel"
                    }`}
                  >
                    {/* A3: Wireframe-to-Solid Transition Overlay for steps 2 & 3 */}
                    {step.isFlagship && (
                      <motion.div
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25, duration: 0.6 }}
                        className="absolute inset-0 border border-brand-orange bg-transparent pointer-events-none rounded blueprint-grid opacity-20 z-20"
                      />
                    )}

                    <div>
                      {/* Step Badge */}
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-mono text-[9px] text-text-mono font-bold uppercase tracking-wider">
                          STAGE 0{step.id}
                        </span>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          step.id === 1 ? "bg-accent-red" : step.id === 4 ? "bg-accent-green animate-pulse" : "bg-brand-orange animate-pulse"
                        }`} />
                      </div>

                      {/* Header */}
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className={`w-4 h-4 ${step.id === 1 ? "text-accent-red" : "text-brand-orange"}`} />
                        <h3 className={`font-sans text-[12px] font-bold uppercase tracking-wider text-text-headline`}>
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="font-sans text-[11px] text-text-body leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>

        </div>

        {/* Dynamic Telemetry Graphic */}
        <div className="w-full bg-brand-graphite/40 border border-border-subtle p-4 rounded flex items-center justify-center">
          <svg className="w-full max-w-2xl h-10" viewBox="0 0 600 40">
            <line x1="20" y1="20" x2="580" y2="20" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeDasharray="4 4" />
            
            <motion.circle
              cx="20"
              cy="20"
              r="3.5"
              fill="#FF7A1A"
              animate={{ cx: [20, 580] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              style={{ filter: "drop-shadow(0 0 3px #FF7A1A)" }}
            />
            
            <circle cx="20" cy="20" r="3" fill="#E5484D" />
            <circle cx="200" cy="20" r="3" fill="#FF7A1A" />
            <circle cx="400" cy="20" r="3" fill="#FFB300" />
            <circle cx="580" cy="20" r="3" fill="#22C55E" />
          </svg>
        </div>
      </div>
    </section>
  );
}
