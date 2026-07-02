"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ChaosCard from "../ChaosCard";

export default function Stop01() {
  const [isResolved, setIsResolved] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsResolved(true);
      } else {
        setIsResolved(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Chaos document tags positioned in a spiral layout around the central wordmark reveal
  const clutterItems: Array<{
    text: string;
    top: string;
    left: string;
    rotation: number;
    type: 'xls' | 'dwg' | 'email' | 'whatsapp' | 'csv' | 'pdf';
  }> = [
    { text: "PO_REVISION_3.XLS", top: "20%", left: "15%", rotation: -8, type: "xls" },
    { text: "CAD_REV5_FINAL.DWG", top: "18%", left: "72%", rotation: 6, type: "dwg" },
    { text: "STAMP: MANUAL_REJECT", top: "35%", left: "10%", rotation: -5, type: "pdf" },
    { text: "INVENTORY_COUNT_2026.CSV", top: "68%", left: "12%", rotation: 4, type: "csv" },
    { text: "[NO VISIBILITY]", top: "78%", left: "28%", rotation: -6, type: "email" },
    { text: "ERROR: DISCONNECTED", top: "75%", left: "70%", rotation: -4, type: "email" },
    { text: "EMAIL: RE: APPROVAL NEEDED", top: "58%", left: "82%", rotation: 8, type: "email" },
    { text: "WARNING: 'IS_PRODUCTION_READY?'", top: "38%", left: "80%", rotation: -7, type: "whatsapp" },
  ];

  return (
    <section id="stop-01" className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 md:px-12 py-20 overflow-hidden bg-transparent">
      {/* Dynamic logo pulse glow styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(255, 122, 26, 0.15)); }
          50% { filter: drop-shadow(0 0 25px rgba(255, 122, 26, 0.7)); }
        }
        .animate-pulse-glow {
          animation: pulseGlow 1.5s ease-out;
        }
      `}} />

      {/* Scattered ChaosCards spiral layout */}
      {clutterItems.map((item, idx) => (
        <ChaosCard
          key={idx}
          label={item.text}
          type={item.type}
          rotation={item.rotation}
          isResolved={isResolved}
          style={{
            position: "absolute",
            top: item.top,
            left: item.left,
            zIndex: 5,
          }}
        />
      ))}

      {/* Main Content Stack (QUIET rhythm: large hero typography, lots of negative space) */}
      <div className="max-w-4xl w-full text-center z-10 flex flex-col items-center gap-6">
        <div className="stop-label">
          Stop 01 — Birth of Industry
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-text-headline max-w-3xl leading-[1.05] heading-stop">
          Industry Built <br />
          <span className="heading-accent">The Modern World</span>
        </h1>

        {/* Structural Connecting Line */}
        <div className="w-[1px] h-20 bg-gradient-to-b from-brand-orange/40 via-brand-steel/50 to-transparent my-2" />

        {/* Narrative Flow (sans-serif IBM Plex Sans, body-copy) */}
        <div className="max-w-xl text-left md:text-center space-y-4 body-copy">
          <p>
            Every vehicle. Every factory. Every warehouse. Every supply chain. Industry built the modern world.
          </p>
          <p className="text-text-headline font-semibold">
            But while the physical machinery evolved, the core operational workflows did not.
          </p>
          <p className="text-[12px] opacity-75 leading-relaxed">
            Spreadsheets remained. Emails multiplied. Real-time operational visibility dissolved.
          </p>
        </div>

        {/* Massive CALDIM Reveal with 1.5s orange pulse glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isResolved ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className={`mt-12 text-6xl md:text-8xl lg:text-9xl font-mono font-extrabold tracking-[0.15em] text-white/5 select-none pointer-events-none ${
            isResolved ? "animate-pulse-glow text-brand-orange/10" : ""
          }`}
        >
          CALDIM
        </motion.div>
      </div>

      {/* Thin 1px accent-orange rule as transition marker to Stop 02 */}
      <div className="w-full max-w-5xl h-[1px] bg-brand-orange/15 mt-20" />
    </section>
  );
}
