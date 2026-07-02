"use client";

import React, { useEffect, useState } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

// Import custom stops
import Stop01 from "@/components/stops/Stop01";
import Stop02 from "@/components/stops/Stop02";
import Stop03 from "@/components/stops/Stop03";
import Stop04 from "@/components/stops/Stop04";
import Stop05 from "@/components/stops/Stop05";
import Stop06 from "@/components/stops/Stop06";
import Stop07 from "@/components/stops/Stop07";
import Stop08 from "@/components/stops/Stop08";
import Stop09 from "@/components/stops/Stop09";
import Stop10 from "@/components/stops/Stop10";
import Stop11 from "@/components/stops/Stop11";
import Stop12 from "@/components/stops/Stop12";

// Import layout components
import HighwayCanvas from "@/components/HighwayCanvas";
import ProgressRail from "@/components/ProgressRail";

/* ─── PRELOADER ─── */
function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 15 + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
      setProgress(Math.round(current));
    }, 70);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-brand-charcoal flex flex-col items-center justify-center gap-6 scanlines"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />
      <span className="font-mono text-xs text-brand-orange uppercase tracking-[0.3em] font-bold">
        CALDIM TRANSFORMATION PORTAL
      </span>
      <div className="w-48 h-[2px] bg-brand-steel rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-brand-orange shadow-[0_0_8px_#FF6B00]"
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut", duration: 0.15 }}
        />
      </div>
      <span className="font-mono text-2xl font-extrabold text-white tabular-nums">
        {progress}%
      </span>
      <span className="font-mono text-[8px] text-brand-muted uppercase">
        INITIALIZING CORE TELEMETRY...
      </span>
    </motion.div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [currentStopId, setCurrentStopId] = useState("stop-01");
  const [scrollPercent, setScrollPercent] = useState(0);

  const { scrollYProgress } = useScroll();

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (!loaded) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    (window as any).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Track scroll Y progress for camera movement
    const unsubscribeScroll = scrollYProgress.on("change", (latest) => {
      setScrollPercent(latest);
    });

    // Observer to track which Stop section is currently intersecting viewport
    const sections = document.querySelectorAll("section[id^='stop-']");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentStopId(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-20% 0px -20% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      lenis.destroy();
      (window as any).__lenis = null;
      unsubscribeScroll();
      observer.disconnect();
    };
  }, [loaded, scrollYProgress]);

  return (
    <>
      <AnimatePresence>
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      <div className={`relative min-h-screen ${loaded ? "" : "invisible"}`}>
        
        {/* Connective 3D Highway backdrop */}
        <React.Suspense fallback={
          <div className="absolute inset-0 bg-brand-charcoal -z-20 flex items-center justify-center font-mono text-xs text-brand-muted">
            LOADING 3D SCENE...
          </div>
        }>
          <HighwayCanvas scrollProgress={scrollPercent} />
        </React.Suspense>

        {/* Sticky vertical progress rail navigation */}
        <ProgressRail currentStopId={currentStopId} />

        {/* 12 Consecutive Journey Stops */}
        <main className="relative z-10 w-full">
          <Stop01 />
          <Stop02 />
          <Stop03 />
          <Stop04 />
          <Stop05 />
          <Stop06 />
          <Stop07 />
          <Stop08 />
          <Stop09 />
          <Stop10 />
          <Stop11 />
          <Stop12 />
        </main>
      </div>
    </>
  );
}
