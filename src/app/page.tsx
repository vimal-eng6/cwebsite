"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { 
  Database, 
  Code, 
  BarChart3, 
  GitPullRequest, 
  Table, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Activity,
  Layers,
  Search,
  MessageSquare
} from "lucide-react";
import HighwayCanvas from "@/components/HighwayCanvas";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    setLoaded(true);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    (window as any).__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      (window as any).__lenis = null;
    };
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const services = [
    {
      title: "Data Digitization & Migration",
      desc: "Migrate legacy files, paper forms, and static spreadsheets into structured relational databases.",
      icon: Database
    },
    {
      title: "Custom Application Development",
      desc: "We build secure, custom web and mobile portals tailored to your specific operational workflows.",
      icon: Code
    },
    {
      title: "Dashboards & Reporting",
      desc: "Get real-time business operations updates and KPIs through custom analytics dashboards.",
      icon: BarChart3
    },
    {
      title: "Workflow Automation",
      desc: "Eliminate manual notifications, email threads, and WhatsApp approvals with governed rule engines.",
      icon: GitPullRequest
    },
    {
      title: "Database Design",
      desc: "Optimize data relationships, resolve reservation conflicts, and build scalable schemas for growth.",
      icon: Table
    },
    {
      title: "Data Cleaning & Standardization",
      desc: "Analyze data pools, fix formatting discrepancies, and sanitize raw records for AI readiness.",
      icon: CheckCircle
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Discover",
      desc: "We audit your existing spreadsheets, operations, and pain points to map a structured data model."
    },
    {
      step: "02",
      title: "Design",
      desc: "We architect custom relational database schemas and wireframe your tailored workflows."
    },
    {
      step: "03",
      title: "Build",
      desc: "We develop the applications, migrate your data, and integrate the automation engines."
    },
    {
      step: "04",
      title: "Support",
      desc: "We train your team, ensure security protocols, and provide ongoing optimization updates."
    }
  ];

  const differentiators = [
    {
      title: "Built for Operations",
      desc: "We don't sell generic software. We build systems tailored exactly to your manufacturing, logistics, or custom business pipelines.",
      icon: Layers
    },
    {
      title: "Zero Maintenance Overhead",
      desc: "We handle the database hosting, server security, and compliance protocols, so your team can focus on production.",
      icon: Shield
    },
    {
      title: "End-to-End Delivery",
      desc: "From initial messy spreadsheet audits to complete custom database apps, we manage the entire project lifecycle.",
      icon: Activity
    }
  ];

  return (
    <div className={`w-full min-h-screen bg-white transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}>
      
      {/* 1. HERO SECTION (Dark theme background with auto-playing 3D scene) */}
      <section className="relative w-full min-h-screen bg-[#0B0D0F] text-white flex items-center justify-center overflow-hidden py-32">
        {/* Scoped 3D Highway backdrop */}
        <div className="absolute inset-0 z-0 opacity-40">
          <React.Suspense fallback={null}>
            <HighwayCanvas scrollProgress={0} autoPlay={true} />
          </React.Suspense>
        </div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#0B0D0F]/75 z-5" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            className="space-y-6"
          >
            <span className="inline-block bg-accent-orange/10 border border-accent-orange/20 text-accent-orange font-sans font-semibold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
              B2B Enterprise Data Engineering
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold uppercase tracking-tight text-white leading-[1.1] max-w-4xl">
              We Turn Business Chaos <br />
              <span className="heading-accent">Into Digital Systems That Work</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              From messy spreadsheets to custom applications — Caldim digitizes, organizes, and builds the digital tools your business needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link href="/contact">
              <button className="flex items-center gap-2 px-7 py-3.5 bg-accent-orange text-white font-sans font-semibold text-sm rounded hover:bg-accent-orange/90 transition-colors shadow-sm cursor-pointer border-0">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <button 
              onClick={() => {
                const servicesEl = document.getElementById("services");
                if (servicesEl) {
                  servicesEl.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2 px-7 py-3.5 bg-transparent border border-slate-600 text-white font-sans font-semibold text-sm rounded hover:bg-white/5 transition-colors cursor-pointer"
            >
              See Our Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION (Light Background - spreadsheet vs dashboard side-by-side) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-orange">The Spreadsheeting Trap</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight">
              The True Cost of Operational Chaos
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Relying on manual spreadsheets, fragmented files, and disconnected chat channels creates unseen leaks in your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Before: Excel Chaos */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-red bg-accent-red/5 border border-accent-red/10 px-2.5 py-1 rounded mb-4 inline-block">
                  Before: Manual spreadsheet limits
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Fragmented Data & Human Error</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Formula crashes, unverified inputs, untracked changes, and files locked during concurrent use slow down decisions.
                </p>
                <div className="relative rounded border border-slate-200 overflow-hidden bg-slate-100 flex items-center justify-center h-64 shadow-inner">
                  <img 
                    src="/messy_spreadsheet.png" 
                    alt="Messy spreadsheet data conflict example" 
                    className="object-cover w-full h-full opacity-90"
                  />
                </div>
              </div>
            </motion.div>

            {/* After: Caldim Dashboard */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-green bg-accent-green/5 border border-accent-green/10 px-2.5 py-1 rounded mb-4 inline-block">
                  After: Caldim Custom Database Portal
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Structured Application & Live Sync</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Every user has a secure, role-based login. All entries are validated, tracked, and synced in real-time.
                </p>
                <div className="relative rounded border border-slate-200 overflow-hidden bg-slate-100 flex items-center justify-center h-64 shadow-inner">
                  <img 
                    src="/clean_dashboard.png" 
                    alt="Clean unified operational dashboard portal example" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (Light Background - 6 cards grid) */}
      <section id="services" className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-orange">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight">
              Operational Database Engineering
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              We design, build, and deploy the custom systems your teams need to operate without friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((serv, idx) => {
              const Icon = serv.icon;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUpVariants}
                  className="bg-slate-50 border border-slate-200/80 rounded-lg p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-[210px] group hover:-translate-y-1"
                >
                  <div>
                    <div className="p-2.5 w-fit rounded bg-accent-orange/10 text-accent-orange mb-4 group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{serv.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{serv.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION (Light Background - 4 step horizontal process) */}
      <section id="how-it-works" className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-orange">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight">
              A Transparent Path From Audit to Launch
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              We guide you step-by-step through our structured workflow optimization cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop progress path line */}
            <div className="hidden md:block absolute left-8 right-8 top-12 h-[1px] bg-slate-200 z-0" />
            
            {steps.map((st, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm flex flex-col justify-between min-h-[220px] relative z-10"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs font-bold text-accent-orange bg-accent-orange/10 px-2.5 py-1 rounded">
                      STEP {st.step}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{st.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CALDIM SECTION (Light Background - 3 differentiators) */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-orange">Caldim Advantages</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight">
              Why Operations Leaders Trust Us
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              We deliver industrial-grade stability, dedicated execution, and systems tailored entirely to your workflow rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUpVariants}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-3 w-fit rounded bg-accent-orange/10 text-accent-orange mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{diff.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{diff.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. TRUST SECTION (Light Background - testimonials & logo placeholders) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-orange">Case Studies & Trust</span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight">
              Proven Results Across Global Pipelines
            </h2>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm flex flex-col justify-between">
              <p className="text-sm text-slate-600 italic leading-relaxed mb-6">
                "Caldim migrated our steel estimation math in less than 3 weeks. What used to take days of manual email revisions and spreadsheets now resolves automatically."
              </p>
              <div>
                <strong className="block text-sm text-slate-900">PMO Lead</strong>
                <span className="text-xs text-slate-400 font-mono">SFE Engineering, USA</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm flex flex-col justify-between">
              <p className="text-sm text-slate-600 italic leading-relaxed mb-6">
                "Complete warehouse stock visibility has eliminated our manual checklist leaks, speeded up supplier tracking, and reduced decision latency tenfold."
              </p>
              <div>
                <strong className="block text-sm text-slate-900">Operations Manager</strong>
                <span className="text-xs text-slate-400 font-mono">YANMAR, Japan</span>
              </div>
            </div>
          </div>

          {/* Logo static placeholder block */}
          <div className="pt-8 text-center space-y-6">
            <span className="font-sans text-xs uppercase tracking-widest text-slate-400 block font-semibold">
              Delivering secure database systems for:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-50">
              {["TVS", "Yanmar", "Shangrila", "SFE", "ACG"].map((logo) => (
                <span key={logo} className="font-sans font-extrabold text-base md:text-lg text-slate-700 tracking-[0.15em] hover:text-accent-orange transition-colors">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA BAND (Contrasting Dark Background) */}
      <section className="py-20 bg-[#14171A] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="blueprint-grid absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold uppercase tracking-tight text-white leading-tight">
            Ready to Systematize Your Operations?
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Request a free operational data audit to see how we can convert your messy spreadsheets into a secure custom application.
          </p>
          <Link href="/contact">
            <button className="flex items-center gap-2 px-8 py-4 bg-accent-orange text-white font-sans font-semibold text-sm rounded hover:bg-accent-orange/90 transition-colors shadow-md border-0 cursor-pointer">
              Request a Free Data Audit
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
