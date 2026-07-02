"use client";

import React from "react";

interface StopProgressItem {
  id: string;
  num: string;
  label: string;
  stage: string;
}

const progressItems: StopProgressItem[] = [
  { id: "stop-01", num: "01", label: "Industry Metaphor", stage: "MANUAL" },
  { id: "stop-02", num: "02", label: "Silos vs Control", stage: "MANUAL" },
  { id: "stop-03", num: "03", label: "Pain points", stage: "DIGITAL" },
  { id: "stop-04", num: "04", label: "AI Boardroom", stage: "DIGITAL" },
  { id: "stop-05", num: "05", label: "Chaos Thesis", stage: "CONNECTED" },
  { id: "stop-06", num: "06", label: "Highway", stage: "CONNECTED" },
  { id: "stop-07", num: "07", label: "Digital Foundation", stage: "AUTOMATED" },
  { id: "stop-08", num: "08", label: "Factory Pipeline", stage: "AUTOMATED" },
  { id: "stop-09", num: "09", label: "Global Cases", stage: "INTELLIGENT" },
  { id: "stop-10", num: "10", label: "Gallery", stage: "INTELLIGENT" },
  { id: "stop-11", num: "11", label: "Command Center", stage: "AI-POWERED ENTERPRISE" },
  { id: "stop-12", num: "12", label: "CALDIM CORE", stage: "AI-POWERED ENTERPRISE" },
];

interface ProgressRailProps {
  currentStopId: string;
}

export default function ProgressRail({ currentStopId }: ProgressRailProps) {
  const activeIndex = progressItems.findIndex((item) => item.id === currentStopId);
  const activeItem = activeIndex !== -1 ? progressItems[activeIndex] : progressItems[0];

  const handleDotClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-start gap-8 select-none pointer-events-auto">
      {/* Current Stage Telemetry Header */}
      <div className="font-mono text-[10.4px] uppercase tracking-[0.12em] text-text-mono border-b border-border-subtle pb-2 w-44">
        <span className="text-text-mono block mb-0.5 font-bold">SYSTEM STATE:</span>
        <span className="text-brand-orange font-bold text-[11.2px]">{activeItem.stage.toUpperCase()}</span>
      </div>

      {/* Progress Dots list */}
      <div className="relative flex flex-col gap-3 pl-1">
        {/* Track Line */}
        <div className="absolute left-[9px] top-1.5 bottom-1.5 w-[1px] bg-border-subtle" />
        
        {/* Active Track Progress Fill */}
        <div 
          className="absolute left-[9px] top-1.5 w-[1px] bg-brand-orange transition-all duration-300"
          style={{ 
            height: `${activeIndex !== -1 ? (activeIndex / (progressItems.length - 1)) * 96 : 0}%` 
          }}
        />

        {progressItems.map((item, idx) => {
          const isStopActive = item.id === currentStopId;
          const isPassed = idx < activeIndex;
          
          return (
            <div 
              key={item.id} 
              onClick={() => handleDotClick(item.id)}
              className="group flex items-center gap-4 cursor-pointer"
            >
              <div className="w-[18px] flex justify-center z-10">
                <div 
                  className={`rounded-full transition-all duration-300 ${
                    isStopActive 
                      ? "w-[6px] h-[6px] bg-brand-orange border border-brand-orange shadow-[0_0_8px_#FF7A1A]" 
                      : "w-[4px] h-[4px] bg-transparent border border-border-subtle group-hover:border-text-mono"
                  }`}
                />
              </div>
              <span 
                className={`font-mono text-[10.4px] uppercase tracking-wider transition-all duration-200 ${
                  isStopActive 
                    ? "text-brand-orange font-bold translate-x-1" 
                    : isPassed 
                    ? "text-text-mono opacity-100 group-hover:text-text-headline" 
                    : "text-text-mono opacity-40 group-hover:opacity-100"
                }`}
              >
                {item.num} <span className="opacity-0 group-hover:opacity-100 transition-opacity pl-1">{item.label}</span>
              </span>
            </div>
          );
        })}
      </div>

      {/* Current Stop Stats indicator */}
      <div className="font-mono text-[9px] text-brand-muted">
        Stop <span className="text-white font-bold">{activeItem.num}</span> / 12
      </div>
    </div>
  );
}
