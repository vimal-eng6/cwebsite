"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

interface RowData {
  category: string;
  score: number;
  status: "Optimal" | "On Track" | "Attention" | "Action Required";
  target: string;
  update: string;
  owner: string;
}

const tableData: RowData[] = [
  { category: "Project Portfolio", score: 75, status: "On Track", target: "85% Target", update: "10m ago", owner: "PMO Lead" },
  { category: "Resource Utilization", score: 65, status: "Attention", target: "80% Target", update: "Real-time", owner: "HR Operations" },
  { category: "MOM Tracking", score: 80, status: "On Track", target: "75% Target", update: "5m ago", owner: "Exec Secretary" },
  { category: "Delivery Health", score: 85, status: "Optimal", target: "90% Target", update: "2m ago", owner: "QA Lead" },
  { category: "Financial Status", score: 70, status: "Attention", target: "85% Target", update: "1h ago", owner: "Finance Director" },
  { category: "Risk Management", score: 60, status: "Action Required", target: "50% Target", update: "1m ago", owner: "Risk Committee" },
];

export default function Stop11() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = tableData.filter((row) =>
    row.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusStyle = (status: RowData["status"]) => {
    switch (status) {
      case "Optimal":
        return "border border-[#60A5FA] text-[#60A5FA]"; // cool blue
      case "On Track":
        return "border border-[#22C55E] text-[#22C55E]"; // success green
      case "Attention":
        return "border border-[#FF7A1A] text-[#FF7A1A]"; // accent orange
      case "Action Required":
        return "border border-[#E5484D] text-[#E5484D] animate-pulse"; // error red
    }
  };

  const getProgressBarColor = (status: RowData["status"]) => {
    switch (status) {
      case "Optimal":
        return "bg-[#60A5FA]";
      case "On Track":
        return "bg-[#22C55E]";
      case "Attention":
        return "bg-[#FF7A1A]";
      case "Action Required":
        return "bg-[#E5484D]";
    }
  };

  return (
    <section id="stop-11" className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden bg-brand-charcoal/88 backdrop-blur-[2px]">
      {/* Background blueprint grid lines */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      {/* CSS dot pulsing keyframe */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dotPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .telem-dot-pulse {
          animation: dotPulse 2s infinite;
        }
      `}} />

      <div className="max-w-6xl w-full z-10 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="stop-label">
              Stop 11 — Command Center
            </div>
            
            {/* Status Badge: ALL SYSTEMS SYNCHRONIZED - Mono, green, hollow, blink dot */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider border border-[#22C55E] text-[#22C55E] bg-transparent rounded-sm font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] telem-dot-pulse" />
              ALL SYSTEMS SYNCHRONIZED
            </div>
          </div>

          {/* Heading - Large (4-5rem) */}
          <h2 className="uppercase tracking-tight leading-[0.95] flex flex-col heading-stop text-[clamp(2.5rem,8vw,5.5rem)]">
            <span>
              One View.
            </span>
            <span className="heading-accent" style={{ textShadow: "0 0 30px rgba(255, 122, 26, 0.18)" }}>
              Complete Visibility.
            </span>
          </h2>
          
          {/* Subheading - (Sans) max-w-560px */}
          <p className="body-copy max-w-[560px]">
            Leaders should not wait for reports. Leaders should see reality in real time.
          </p>
        </div>

        {/* Live Interactive Data Table Component - styled orange glow */}
        <div 
          className="w-full bg-bg-panel border border-border-subtle rounded overflow-hidden scanlines transition-all"
          style={{ boxShadow: "0 0 40px rgba(255,122,26,0.06)" }}
        >
          
          {/* Table Toolbar controls */}
          <div className="p-4 border-b border-border-subtle bg-bg-surface flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            
            {/* Search Input (Underline-only borderless) */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-text-mono opacity-40" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="FILTER REPORTS..."
                className="w-full pl-6 pr-4 py-1.5 border-b border-border-subtle focus:border-brand-orange bg-transparent font-mono text-xs text-text-mono placeholder-text-mono/40 focus:outline-none transition-colors rounded-none"
              />
            </div>

            {/* Sync Telemetry Status info */}
            <div className="flex items-center gap-2 font-mono text-[9px] text-text-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] telem-dot-pulse" />
              <span className="text-text-headline font-bold uppercase">LIVE FEED</span>
              <span className="text-text-mono opacity-50">| STREAM SECURED</span>
            </div>
          </div>

          {/* Table display */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-mono text-xs text-left">
              <thead>
                <tr className="border-b border-border-subtle bg-bg-surface text-text-mono uppercase text-[9px] tracking-wider">
                  <th className="p-4">Department / Report</th>
                  <th className="p-4 text-right">Score</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Target Comparison</th>
                  <th className="p-4">Last Update</th>
                  <th className="p-4">Lead Owner</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`border-b border-border-subtle transition-colors hover:bg-bg-surface/40 ${
                        idx % 2 === 0 ? "bg-bg-panel" : "bg-bg-surface"
                      }`}
                    >
                      <td className="p-4 text-text-headline font-bold">
                        <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2.5 ${
                          row.status === "Optimal" ? "bg-[#60A5FA]" : row.status === "Action Required" ? "bg-[#E5484D]" : "bg-brand-orange"
                        }`} />
                        {row.category}
                      </td>
                      
                      {/* Score column: Mono, bold, text-headline, right-aligned */}
                      <td className="p-4 font-mono font-bold text-text-headline text-right">
                        <div className="flex items-center justify-end gap-3">
                          <span className="w-8 shrink-0">{row.score}%</span>
                          {/* Miniature progress bar with bg-bg-void track and sharp borderless corners */}
                          <div className="w-24 h-1 bg-bg-void overflow-hidden shrink-0">
                            <div 
                              className={`h-full ${getProgressBarColor(row.status)}`}
                              style={{ width: `${row.score}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      
                      {/* Status Badges: hollow, 2px border-radius, IBM Plex Mono, 0.65rem uppercase */}
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded-[2px] text-[0.65rem] font-mono font-bold uppercase tracking-[0.12em] bg-transparent ${getStatusStyle(row.status)}`}>
                          {row.status}
                        </span>
                      </td>
                      
                      {/* Target comparison (Mono, 0.75rem) */}
                      <td className="p-4 text-text-mono text-[12px]">{row.target}</td>
                      {/* Last update (Mono, 0.75rem) */}
                      <td className="p-4 text-text-mono text-[12px] opacity-70">{row.update}</td>
                      {/* Lead Owner (Sans-serif font-sans, 0.85rem) */}
                      <td className="p-4 font-sans text-text-body text-[13px]">{row.owner}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-text-mono opacity-50">
                      No matching operational logs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="p-3 border-t border-border-subtle bg-bg-surface flex items-center justify-between font-mono text-[9px] text-text-mono opacity-60">
            <span>SHOWING {filteredData.length} OF {tableData.length} CRITICAL METRICS</span>
            <span>SECURE COMMAND STREAM CLIENT</span>
          </div>

        </div>

      </div>
    </section>
  );
}
