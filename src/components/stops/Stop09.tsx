"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowLeft, ArrowRight } from "lucide-react";

interface CaseStudy {
  id: string;
  flag: string;
  company: string;
  location: string;
  type: string;
  detail: string;
  coords: { x: number; y: number };
}

const cases: CaseStudy[] = [
  { 
    id: "sfe", 
    flag: "US", 
    company: "SFE", 
    location: "USA",
    type: "Steel Estimation Automation", 
    detail: "Migrated complex spreadsheet estimation math to a governed web platform, automating cost assessments.",
    coords: { x: 220, y: 160 }
  },
  { 
    id: "acg", 
    flag: "BH", 
    company: "ACG", 
    location: "Bahrain",
    type: "CRM & Enquiry Management", 
    detail: "Developed a central pipeline management dashboard for custom client relationships and procurement enquiries.",
    coords: { x: 570, y: 175 }
  },
  { 
    id: "tvs", 
    flag: "IN", 
    company: "TVS", 
    location: "India",
    type: "Manufacturing Transformation", 
    detail: "Digitized plant floor checklists and supplier transmittals, reducing decision latency from days to minutes.",
    coords: { x: 650, y: 220 }
  },
  { 
    id: "shangrila", 
    flag: "IN", 
    company: "Shangrila", 
    location: "India",
    type: "Process Digitization", 
    detail: "Architected customized relational databases to resolve critical resource booking and dispatch schedule locks.",
    coords: { x: 640, y: 240 }
  },
  { 
    id: "yanmar", 
    flag: "JP", 
    company: "YANMAR", 
    location: "Japan",
    type: "Warehouse Automation", 
    detail: "Complete stock visibility and automatic material dispatch workflows, eliminating manual checklist leaks.",
    coords: { x: 835, y: 128 }
  },
];

export default function Stop09() {
  const [activeId, setActiveId] = useState<string>("tvs");
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft } = carouselRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - 320 
        : scrollLeft + 320;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="stop-09" className="min-h-screen w-full relative flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden bg-brand-charcoal/75 backdrop-blur-[2px]">
      {/* Background blueprint grid lines */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      <div className="max-w-6xl w-full z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="stop-label inline-block">
              Stop 09 — Global Deployments
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-text-headline heading-stop">
              Stories From <br />
              <span className="heading-accent">Around The World</span>
            </h2>
          </div>
          
          {/* Slider controls */}
          <div className="flex gap-2">
            <button 
              onClick={() => scroll("left")}
              className="p-2 border border-brand-steel rounded hover:border-brand-orange text-brand-steel-bright hover:text-white transition-colors cursor-pointer bg-bg-panel"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-2 border border-brand-steel rounded hover:border-brand-orange text-brand-steel-bright hover:text-white transition-colors cursor-pointer bg-bg-panel"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Narrative Subtext Intro */}
        <p className="font-sans text-[1.05rem] text-text-body italic text-center max-w-2xl mx-auto">
          "From Japan to Bahrain, from automotive to steel — the transformation journey is universal."
        </p>

        {/* Technical Vector World Map */}
        <div className="w-full bg-brand-graphite/40 border border-border-subtle rounded p-6 shadow-industrial relative overflow-hidden">
          <svg className="w-full h-auto max-h-[300px]" viewBox="0 0 1000 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* North America */}
            <path d="M150,120 L200,80 L260,90 L280,120 L270,160 L250,200 L230,240 L200,260 L180,240 L160,200 Z" stroke="#26292D" strokeWidth="1" fill="#14171A" opacity="0.5" />
            {/* South America */}
            <path d="M230,280 L260,270 L280,300 L290,350 L280,400 L260,430 L220,380 L220,300 Z" stroke="#26292D" strokeWidth="1" fill="#14171A" opacity="0.5" />
            {/* Europe */}
            <path d="M440,80 L480,70 L520,80 L530,110 L510,140 L480,150 L450,140 Z" stroke="#26292D" strokeWidth="1" fill="#14171A" opacity="0.5" />
            {/* Africa */}
            <path d="M460,180 L500,170 L530,200 L540,260 L530,320 L510,360 L460,340 Z" stroke="#26292D" strokeWidth="1" fill="#14171A" opacity="0.5" />
            {/* Middle East */}
            <path d="M540,140 L580,130 L600,160 L590,190 L560,200 Z" stroke="#26292D" strokeWidth="1" fill="#14171A" opacity="0.5" />
            {/* India */}
            <path d="M620,160 L660,150 L680,180 L690,220 L680,260 L640,260 Z" stroke="#26292D" strokeWidth="1" fill="#14171A" opacity="0.7" />
            {/* China/Asia */}
            <path d="M700,120 L760,100 L800,120 L810,160 L750,200 L700,150 Z" stroke="#26292D" strokeWidth="1" fill="#14171A" opacity="0.5" />
            {/* Japan */}
            <path d="M830,140 L840,115 L845,117 L833,142 Z" stroke="#26292D" strokeWidth="1" fill="#14171A" opacity="0.7" />
            {/* Australia */}
            <path d="M770,330 L830,320 L860,340 L870,380 L810,410 L760,360 Z" stroke="#26292D" strokeWidth="1" fill="#14171A" opacity="0.5" />

            {/* Glowing Connection Dashed Arcs */}
            {cases.map((c) => (
              <line
                key={`line-${c.id}`}
                x1="650"
                y1="220" // India center point
                x2={c.coords.x}
                y2={c.coords.y}
                stroke="#FF7A1A"
                strokeWidth="0.8"
                strokeDasharray="4 6"
                opacity={activeId === c.id ? 0.8 : 0.25}
                className="transition-opacity duration-300"
              />
            ))}

            {/* Marker Nodes */}
            {cases.map((c) => {
              const isActive = activeId === c.id;
              return (
                <g 
                  key={`marker-${c.id}`} 
                  transform={`translate(${c.coords.x}, ${c.coords.y})`}
                  className="cursor-pointer group"
                  onClick={() => setActiveId(c.id)}
                >
                  <circle
                    r="8"
                    fill="#FF7A1A"
                    opacity={isActive ? 0.25 : 0}
                    className="animate-ping"
                  />
                  <circle
                    r="4.5"
                    fill={isActive ? "#FF7A1A" : "#5E646E"}
                    className="group-hover:fill-brand-orange transition-colors"
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Carousel story card deck */}
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth hide-scrollbar select-none"
          style={{ scrollbarWidth: "none" }}
        >
          {cases.map((item) => {
            const isActive = activeId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`bg-bg-panel border-t-[3px] rounded p-6 w-80 shrink-0 shadow-industrial cursor-pointer transition-all duration-300 ${
                  isActive 
                    ? "border-t-brand-orange border-x-border-subtle border-b-border-subtle ring-1 ring-brand-orange/30 translate-y-[-4px]" 
                    : "border-t-brand-steel border-x-border-subtle border-b-border-subtle hover:border-t-brand-steel-bright"
                }`}
              >
                {/* Top Row: Country Code (Mono) + Company Name (Sans) */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[10px] text-text-mono font-bold uppercase tracking-wider select-none bg-white/5 px-1.5 py-0.5 rounded-sm">
                      {item.flag}
                    </span>
                    <span className="font-sans text-xs md:text-sm font-bold text-text-headline uppercase tracking-wide">
                      {item.company}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-brand-muted uppercase">
                    {item.location}
                  </span>
                </div>
                
                {/* Category label (Mono) */}
                <span className="font-mono text-[9px] text-brand-orange uppercase block font-bold mb-2 tracking-widest">
                  {item.type}
                </span>

                <div className="w-full h-[1px] bg-border-subtle mb-3" />

                {/* Narrative Detail - (Sans) */}
                <p className="font-sans text-xs text-text-body leading-relaxed mb-4">
                  {item.detail}
                </p>

                {/* Subtle View Case Link - (Mono) */}
                <div className="font-mono text-[9.5px] text-brand-orange hover:underline uppercase tracking-widest font-semibold flex items-center gap-1 select-none">
                  <span>VIEW CASE STUDY</span>
                  <span>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
