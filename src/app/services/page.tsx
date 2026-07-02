"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Database, 
  TrendingUp, 
  Zap, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  LayoutTemplate,
  Network,
  Wand2,
  Headset
} from "lucide-react";
import Interactive3DCard from "@/components/Interactive3DCard";

const services = [
  {
    icon: <Database className="w-8 h-8 text-brand-blue" />,
    title: "Data Digitization & Migration",
    desc: "Converting messy Excel sheets, paper records, or legacy databases into clean, structured, modern cloud databases.",
    details: [
      "Custom SQL / PostgreSQL Database Provisioning",
      "Zero-downtime Legacy Record Migration",
      "Paper-to-Digital Data Entry Pipelines",
      "Multi-user Access Control & Scoped Permissions",
    ],
    color: "border-blue-100 bg-blue-50/10",
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-brand-teal" />,
    title: "Custom Application Development",
    desc: "Building custom web and software applications tailored to your specific workflows (inventory, internal portals, CRM tools).",
    details: [
      "Tailored CRM and ERP replacements",
      "Internal employee management portals",
      "Inventory and logistics tracking apps",
      "Secure, scalable React/Next.js frontends",
    ],
    color: "border-teal-100 bg-teal-50/10",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-brand-cyan" />,
    title: "Dashboards & Reporting Tools",
    desc: "Turning raw database rows into visual, interactive business intelligence for executive decision-makers.",
    details: [
      "Interactive SVG graphs and statistics components",
      "Real-time operational tracking feeds",
      "CSV & PDF Auto-export features",
      "Executive reporting setups with monthly KPIs",
    ],
    color: "border-cyan-100 bg-cyan-50/10",
  },
  {
    icon: <Zap className="w-8 h-8 text-purple-600" />,
    title: "Workflow Automation",
    desc: "Automating repetitive manual processes like data entry and approvals to save time and reduce human error.",
    details: [
      "Custom Webhook & API integration scripts",
      "Automated Slack, Email, and Teams notifications",
      "Approval pipelines and scheduled triggers",
      "Salesforce, Hubspot, and ERP synchronization",
    ],
    color: "border-purple-100 bg-purple-50/10",
  },
  {
    icon: <Network className="w-8 h-8 text-rose-500" />,
    title: "Database Design & Architecture",
    desc: "Designing scalable, well-structured relational databases as the robust foundation for any digital system.",
    details: [
      "Robust Relational Schema Design (tables, foreign keys)",
      "Performance indexing for fast queries",
      "Data normalization and integrity constraints",
      "Cloud architecture setup (AWS, GCP, Vercel)",
    ],
    color: "border-rose-100 bg-rose-50/10",
  },
  {
    icon: <Wand2 className="w-8 h-8 text-amber-500" />,
    title: "Data Cleaning & Standardization",
    desc: "Fixing inconsistent, duplicate, or error-filled historical data so it becomes reliable and analysis-ready.",
    details: [
      "Duplicate entry detection & merge logic",
      "Mismatched data-type validation audits",
      "Missing values imputation models",
      "Standardization of text formatting (caps, dates, symbols)",
    ],
    color: "border-amber-100 bg-amber-50/10",
  },
  {
    icon: <Headset className="w-8 h-8 text-emerald-500" />,
    title: "Ongoing Support & Scaling",
    desc: "Maintaining and scaling the system as your business grows. We don't just build it; we ensure it evolves with you.",
    details: [
      "Dedicated SLAs and uptime monitoring",
      "Continuous feature iteration and updates",
      "Server scaling for increased traffic/data volume",
      "Team training and documentation hand-offs",
    ],
    color: "border-emerald-100 bg-emerald-50/10",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Detailed Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight">
            Our Services & Solutions
          </h1>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            From initial data audits to complete custom application deployment and ongoing support, we handle the technical complexity of B2B digital transformation.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={index === 6 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}
            >
              <Interactive3DCard
                className={`h-full border rounded-2xl p-8 sm:p-10 shadow-premium hover:shadow-premium-hover transition-all duration-300 ${service.color}`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-6">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-white shadow-sm border border-slate-100">
                        {service.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-brand-navy leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* Desc */}
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Bullet List */}
                    <ul className="space-y-3 pt-2">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs text-brand-navy font-medium">
                          <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Interactive3DCard>
            </motion.div>
          ))}
        </div>

        {/* Callout Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full bg-brand-navy text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-md relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl" />

          <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">
            Custom Architecture
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
            Have a custom application or a legacy migration project?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our engineers specialize in database translations and full-stack application builds. We can build software tailored exactly to your team's existing workflow.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <button className="px-8 py-4 rounded-xl bg-brand-blue hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer">
                Consult With An Engineer
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
