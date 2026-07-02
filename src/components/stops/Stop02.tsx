"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, FileSpreadsheet, Lock, RefreshCw, Layers } from "lucide-react";

export default function Stop02() {
  const [isDigital, setIsDigital] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  const logs = [
    { type: "AUTO-APPROVED", text: "Procurement PO-2026-09 approved by system rules", time: "1s ago" },
    { type: "SYNCED", text: "Engineering CAD Rev-5 synchronized with Plant Production", time: "12s ago" },
    { type: "ACTIVE", text: "Operations real-time telematics active; 0 delays detected", time: "24s ago" },
    { type: "RESOLVED", text: "Warehouse inventory discrepancy corrected automatically", time: "45s ago" },
    { type: "VERIFIED", text: "Design Gate G3 milestone verified by compliance engine", time: "1m ago" },
  ];

  const [visibleLogs, setVisibleLogs] = useState<typeof logs>([]);

  // Trigger A3 WireframeToSolid flash on tab switch
  useEffect(() => {
    if (isDigital) {
      setShowFlash(true);
      const timer = setTimeout(() => setShowFlash(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isDigital]);

  // Live streaming log entries sliding in from bottom every 2.5s on loop
  useEffect(() => {
    if (!isDigital) {
      setVisibleLogs([]);
      return;
    }
    // Initialize with first 3 logs
    setVisibleLogs(logs.slice(0, 3));

    const interval = setInterval(() => {
      setVisibleLogs((prev) => {
        if (prev.length === 0) return logs.slice(0, 3);
        const lastItem = prev[prev.length - 1];
        const nextIndex = logs.findIndex((l) => l.text === lastItem.text) + 1;
        const nextLog = logs[nextIndex % logs.length];
        return [...prev.slice(1), nextLog];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isDigital]);

  return (
    <section id="stop-02" className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden bg-brand-charcoal/75 backdrop-blur-[2px] border-y border-border-subtle">
      {/* Dynamic pulse warning animation styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulseBorder {
          0%, 100% { border-color: rgba(229, 72, 77, 0.4); box-shadow: 0 0 4px rgba(229, 72, 77, 0.1); }
          50% { border-color: rgba(229, 72, 77, 0.95); box-shadow: 0 0 16px rgba(229, 72, 77, 0.4); }
        }
        .animate-red-console {
          animation: pulseBorder 2s infinite ease-in-out;
        }
      `}} />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Control Panel */}
        <div className="lg:col-span-5 flex flex-col items-start gap-6 z-10">
          <div className="stop-label">
            Stop 02 — Compare Systems
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-text-headline leading-[1.1] heading-stop">
            While Machines Evolved, <br />
            <span className="heading-accent">Processes Didn't</span>
          </h2>

          <p className="body-copy">
            Organizations invest millions in automated machinery, yet run critical pipelines on fragile spreadsheets, manual stamps, and silent delays.
          </p>

          {/* Interactive Toggle Control */}
          <div className="w-full bg-bg-panel border border-border-subtle p-4 rounded mt-4">
            <span className="block font-mono text-[10px] text-brand-muted uppercase tracking-wider mb-3">
              SYSTEM CONTROL CONSOLE:
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setIsDigital(false)}
                className={`flex-1 py-2.5 px-3 rounded font-mono text-[10px] uppercase tracking-wider border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  !isDigital
                    ? "border-[#E5484D] bg-[#E5484D]/5 text-[#E5484D] animate-red-console font-bold"
                    : "border-transparent text-text-mono opacity-30 hover:opacity-100"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${!isDigital ? "bg-[#E5484D] animate-pulse" : "bg-brand-muted"}`} />
                Legacy (Chaos)
              </button>
              <button
                onClick={() => setIsDigital(true)}
                className={`flex-1 py-2.5 px-3 rounded font-mono text-[10px] uppercase tracking-wider border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isDigital
                    ? "border-[#FF7A1A] bg-[#FF7A1A]/5 text-[#FF7A1A] font-bold shadow-[0_0_12px_rgba(255,122,26,0.2)]"
                    : "border-transparent text-text-mono opacity-30 hover:opacity-100"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isDigital ? "bg-brand-orange animate-ping" : "bg-brand-muted"}`} />
                CALDIM Hub
              </button>
            </div>
            <span className="block font-mono text-[9px] text-brand-muted mt-2">
              * Click tabs to switch operational model and trigger transformation.
            </span>
          </div>
        </div>

        {/* Right Column: Visual Transformation Stage */}
        <div className="lg:col-span-7 w-full flex items-center justify-center min-h-[420px] z-10 relative">
          
          {/* Wireframe-to-Solid Overlay Transition Flash */}
          <AnimatePresence>
            {showFlash && (
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 border-2 border-brand-orange bg-transparent pointer-events-none z-30 blueprint-grid opacity-30 rounded"
              />
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {!isDigital ? (
              <motion.div
                key="legacy"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full bg-bg-panel border border-[#E5484D]/30 rounded p-6 shadow-industrial relative max-w-xl overflow-hidden"
              >
                {/* Red warning border banner */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E5484D]/60" />
                
                {/* Header title bar: bg-surface, accent-red left border 3px */}
                <div className="bg-bg-surface border-l-[3px] border-l-[#E5484D] p-3 px-4 flex justify-between items-center border-b border-border-subtle mb-4">
                  <div className="flex items-center gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-[#E5484D]" />
                    <span className="font-mono text-xs text-text-headline font-bold">
                      PO_MASTER_Q2_FINAL_v4_draft.xlsx
                    </span>
                  </div>
                  {/* DATA CONFLICT badge: hollow border, accent-red, IBM Plex Mono */}
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#E5484D] bg-transparent font-mono text-[8px] uppercase tracking-wider text-[#E5484D] font-bold">
                    <AlertCircle className="w-3 h-3" /> Data Conflict
                  </div>
                </div>

                {/* Legacy Spreadsheet Table (Tighter padding, right-aligned, colors) */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse font-mono text-[10px] text-text-mono">
                    <thead>
                      <tr className="border-b border-border-subtle text-text-headline text-left bg-bg-surface/50">
                        <th className="p-1.5">PO ID</th>
                        <th className="p-1.5">Item Description</th>
                        <th className="p-1.5 text-right">Quantity</th>
                        <th className="p-1.5 text-right">Price</th>
                        <th className="p-1.5">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border-subtle/50 bg-bg-panel">
                        <td className="p-1.5 font-bold text-text-headline">#88432</td>
                        <td className="p-1.5 text-text-body">SUV_Axle_Front_Assembly</td>
                        <td className="p-1.5 text-right text-[#E5484D] font-bold">Error #REF!</td>
                        <td className="p-1.5 text-right">$14,500.00</td>
                        <td className="p-1.5"><span className="text-brand-orange font-bold">PENDING</span></td>
                      </tr>
                      <tr className="border-b border-border-subtle/50 bg-bg-surface">
                        <td className="p-1.5 text-[#E5484D] font-bold">[NULL]</td>
                        <td className="p-1.5 text-text-body font-semibold">EV_Motor_Shaft_Rev2</td>
                        <td className="p-1.5 text-right">120</td>
                        <td className="p-1.5 text-right">$8,200.00</td>
                        <td className="p-1.5"><span className="text-[#E5484D] font-bold">CONFLICT</span></td>
                      </tr>
                      <tr className="border-b border-border-subtle/50 bg-bg-panel">
                        <td className="p-1.5 font-bold text-text-headline">#88434</td>
                        <td className="p-1.5 text-text-body">Gearbox_Housing_Cast_V3</td>
                        <td className="p-1.5 text-right">45</td>
                        <td className="p-1.5 text-right">Pending Quote</td>
                        <td className="p-1.5"><span className="text-text-mono opacity-60">UNREAD</span></td>
                      </tr>
                      <tr className="bg-bg-surface">
                        <td className="p-1.5 font-bold text-text-headline">TOTAL:</td>
                        <td className="p-1.5 text-text-body">Summary formula error</td>
                        <td className="p-1.5 text-right text-[#E5484D] font-bold">#VALUE?</td>
                        <td className="p-1.5 text-right font-bold">$22,700.00?</td>
                        <td className="p-1.5"><span className="text-[#E5484D] font-bold">CHECK</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 pt-3 border-t border-border-subtle flex justify-between items-center text-[10px] font-sans text-text-body italic">
                  <span>* Manual calculations, WhatsApp follow-ups, static data silos.</span>
                  <button 
                    onClick={() => setIsDigital(true)} 
                    className="text-brand-orange font-mono text-[10px] tracking-wider font-bold uppercase hover:underline cursor-pointer flex items-center gap-1"
                  >
                    DEPLOY CONTROL HUB &rarr;
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="digital"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="w-full bg-bg-panel border border-border-subtle rounded shadow-industrial max-w-xl overflow-hidden scanlines relative"
              >
                {/* Browser header */}
                <div className="bg-bg-surface border-b border-border-subtle px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white/10" />
                      <span className="w-2 h-2 rounded-full bg-white/10" />
                      <span className="w-2 h-2 rounded-full bg-white/10" />
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-bg-void border border-border-subtle text-white/40 text-[10px] font-mono select-none w-56 md:w-72">
                      <Lock className="w-2.5 h-2.5 text-brand-orange" />
                      <span className="truncate">portal.caldim.ai/dashboard</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                    <span className="font-mono text-[8px] uppercase tracking-wider text-brand-orange font-bold">
                      Live Hub
                    </span>
                  </div>
                </div>

                {/* Dashboard Panel */}
                <div className="p-4 space-y-4">
                  {/* Headline metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-bg-void border border-border-subtle p-3 rounded flex flex-col justify-between">
                      <span className="font-mono text-[8px] text-brand-muted uppercase tracking-wider">
                        PROCESS AUTOMATION
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono text-2xl md:text-3xl font-extrabold text-text-headline">
                          99.8%
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                      </div>
                    </div>
                    <div className="bg-bg-void border border-border-subtle p-3 rounded flex flex-col justify-between">
                      <span className="font-mono text-[8px] text-brand-muted uppercase tracking-wider">
                        DECISION LATENCY
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-mono text-2xl md:text-3xl font-extrabold text-text-headline">
                          &lt; 2m
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                      </div>
                    </div>
                  </div>

                  {/* Realtime Stream Panel */}
                  <div className="bg-bg-void border border-border-subtle p-3 rounded space-y-2">
                    <div className="flex items-center justify-between border-b border-border-subtle pb-2 mb-2">
                      <span className="font-mono text-[9px] font-bold text-text-headline uppercase tracking-wider flex items-center gap-1.5">
                        <Layers className="w-3 h-3 text-brand-orange" /> Control Stream Log
                      </span>
                      <RefreshCw className="w-2.5 h-2.5 text-brand-muted animate-spin" />
                    </div>

                    {/* Live streaming activity log list */}
                    <div className="h-28 overflow-hidden relative">
                      <div className="space-y-2 font-mono text-[10px] text-text-mono">
                        <AnimatePresence initial={false}>
                          {visibleLogs.map((log) => (
                            <motion.div
                              key={log.text}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -15 }}
                              transition={{ duration: 0.4 }}
                              className="flex items-start justify-between p-1.5 rounded bg-bg-surface/50 border-l border-brand-orange/40"
                            >
                              <div className="flex gap-2">
                                <span className={`text-[8px] px-1 py-0.5 rounded font-bold shrink-0 ${
                                  log.type === "AUTO-APPROVED" 
                                    ? "bg-brand-orange/20 text-brand-orange" 
                                    : "bg-[#22C55E]/20 text-[#22C55E]"
                                }`}>
                                  {log.type}
                                </span>
                                <span className="text-text-headline font-semibold truncate max-w-[200px] sm:max-w-xs">{log.text}</span>
                              </div>
                              <span className="text-brand-muted text-[8px] self-center shrink-0">{log.time}</span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-surface border-t border-border-subtle px-4 py-2 flex items-center justify-between font-mono text-[8px] text-brand-muted">
                  <span>SYSTEM STATUS: ENCRYPTED PORTAL SECURE</span>
                  <span>v1.08.32</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
