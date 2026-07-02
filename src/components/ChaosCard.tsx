"use client";

import React from "react";

interface ChaosCardProps {
  label: string;
  type?: 'xls' | 'dwg' | 'email' | 'whatsapp' | 'csv' | 'pdf';
  rotation?: number; // rotation in degrees
  isResolved?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function ChaosCard({ 
  label, 
  type, 
  rotation = 0, 
  isResolved = false, 
  className = "", 
  style = {} 
}: ChaosCardProps) {
  
  // Resolve file type from type prop or fall back to analyzing the label string
  const getFileType = (): string => {
    if (type) return type;
    const lower = label.toLowerCase();
    if (lower.endsWith(".xls")) return "xls";
    if (lower.endsWith(".csv")) return "csv";
    if (lower.endsWith(".dwg") || lower.includes("cad")) return "dwg";
    if (lower.includes("email") || lower.includes("re:")) return "email";
    if (lower.includes("whatsapp")) return "whatsapp";
    if (lower.endsWith(".pdf")) return "pdf";
    return "default";
  };

  const fileType = getFileType();

  // Get accent color for top-left border based on spec
  const getBorderColorClass = (ft: string) => {
    switch (ft) {
      case "xls":
      case "csv":
        return "border-[#1D6F42]"; // Excel green
      case "dwg":
        return "border-[#2563EB]"; // CAD blue
      case "email":
        return "border-[#E5484D]"; // Email red
      case "whatsapp":
        return "border-[#25D366]"; // WhatsApp green
      case "pdf":
        return "border-[#DC2626]"; // PDF red
      default:
        return "border-brand-steel";
    }
  };

  const borderColorClass = getBorderColorClass(fileType);

  // Combine inline styles for rotation and custom properties
  const combinedStyle: React.CSSProperties = {
    ...style,
    transform: isResolved 
      ? `scale(0) rotate(720deg) translate(-50%, -50%)`
      : `${style.transform || ""} rotate(${rotation}deg)`,
  };

  return (
    <div
      className={`font-mono text-[11px] text-text-mono bg-bg-panel border border-border-subtle shadow-[0_8px_32px_rgba(0,0,0,0.5),0_2px_8px_rgba(0,0,0,0.3)] p-2.5 px-3.5 relative select-none pointer-events-none transition-all duration-[400ms] ease-in ${
        isResolved ? "opacity-0 scale-0 pointer-events-none" : "opacity-95"
      } ${className}`}
      style={combinedStyle}
    >
      {/* Top-left corner: 3px solid accent color (border-left + border-top) */}
      <div className={`absolute top-0 left-0 w-3.5 h-3.5 border-l-[3.5px] border-t-[3.5px] ${borderColorClass}`} />

      {/* Label Content */}
      <span className="tracking-wide select-none">{label}</span>
    </div>
  );
}
