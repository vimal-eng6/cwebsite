"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileSearch, ClipboardCheck, ArrowRight, HelpCircle, LayoutTemplate, Database } from "lucide-react";
import Interactive3DCard from "@/components/Interactive3DCard";

const steps = [
  {
    icon: <FileSearch className="w-8 h-8 text-brand-orange" />,
    number: "01",
    title: "Discover & Audit",
    desc: "We analyze your current manual workflows, legacy systems, and data bottlenecks. Our engineering team inspects your business processes to identify where custom software and structured data can save time and reduce errors.",
    timeframe: "Timeline: Days 1–3",
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-brand-orange" />,
    number: "02",
    title: "Design & Architect",
    desc: "We architect a robust relational database schema and wireframe the custom application. You review the proposed user interfaces, automation logic, and data structures before any code is written.",
    timeframe: "Timeline: Days 4–10",
  },
  {
    icon: <Database className="w-8 h-8 text-brand-orange" />,
    number: "03",
    title: "Build & Migrate",
    desc: "We develop the custom web applications and write the migration scripts to move your historical data (from Excel, paper, or old software) into the new secure cloud database. Everything is thoroughly tested.",
    timeframe: "Timeline: Weeks 2–6",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-brand-orange" />,
    number: "04",
    title: "Deploy & Support",
    desc: "We launch the application, train your team, and provide ongoing scalability support. We ensure the software continues to evolve as your business grows and data volumes increase.",
    timeframe: "Timeline: Ongoing",
  },
];

const faqs = [
  {
    q: "Will we experience operational downtime during the transition?",
    a: "No. Your operations continue running on your legacy systems while we build and stage the new application. We perform a final data sync and switch-over outside of your office hours, ensuring zero operational disruption.",
  },
  {
    q: "Do you build mobile apps or web apps?",
    a: "We primarily build responsive web applications (Next.js/React) that work flawlessly on desktop and mobile browsers. This ensures maximum accessibility for your internal teams without the overhead of app store approvals.",
  },
  {
    q: "Is our business data secure and backed up daily?",
    a: "Absolutely. Caldim deploys databases featuring automated nightly backups, 256-bit encryption at rest, and scoped user permissions. Your data remains fully owned by you, locked behind secure SSL certificates.",
  },
  {
    q: "What if our business process changes in the future?",
    a: "Because we build custom software, it can adapt to you. Our ongoing support agreements cover feature iterations, schema updates, and new workflow automations as your business requirements evolve.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-transparent min-h-screen py-24 sm:py-32 font-sans text-text-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span className="text-[10px] font-mono text-brand-orange uppercase tracking-[0.2em] border border-brand-orange/20 bg-brand-orange/5 px-3 py-1 rounded-sm font-bold">
            Our Proven Process
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-headline leading-tight heading-stop">
            How It Works
          </h1>
          <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-xl mx-auto">
            A step-by-step walk-through of how Caldim audits, structures, and automates your business data pipelines from start to finish.
          </p>
        </div>

        {/* Detailed steps list */}
        <div className="space-y-8 lg:space-y-12 mb-24 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <Interactive3DCard
                className="bg-bg-panel border border-border-subtle hover:border-brand-orange/40 p-8 rounded-sm shadow-industrial transition-all duration-350"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                  <div className="flex gap-4 sm:gap-6 items-start">
                    {/* Step number badge */}
                    <div className="text-2xl font-bold text-brand-orange font-mono tracking-tighter shrink-0 mt-1">
                      {step.number}
                    </div>

                    {/* Step Icon */}
                    <div className="p-3 rounded-sm bg-bg-void border border-border-subtle text-brand-orange shrink-0">
                      {step.icon}
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold text-text-headline leading-tight font-sans">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-body leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Timeframe badge */}
                  <div className="shrink-0 pl-10 md:pl-0">
                    <span className="inline-block text-xs font-semibold font-mono text-brand-orange bg-brand-orange/5 border border-brand-orange/20 px-3 py-1 rounded-sm">
                      {step.timeframe}
                    </span>
                  </div>
                </div>
              </Interactive3DCard>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="border-t border-border-subtle pt-20 max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-xs font-semibold font-mono text-brand-orange uppercase tracking-wider">
              Frequently Asked Questions
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-headline font-sans">
              Common Questions About Development
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-2 p-6 rounded-sm border border-border-subtle bg-bg-panel shadow-industrial">
                <h4 className="text-sm font-bold text-text-headline font-sans flex gap-2 items-start">
                  <HelpCircle className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-text-body leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Card */}
        <div className="mt-24 text-center space-y-6">
          <h3 className="text-lg font-bold text-text-headline">
            Ready to digitize your workflow?
          </h3>
          <Link href="/contact">
            <button className="px-6 py-3 bg-accent-orange hover:bg-accent-orange/90 text-bg-void font-mono font-bold text-xs uppercase tracking-wider rounded-none transition-colors inline-flex items-center gap-2 cursor-pointer shadow-none border-0">
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
