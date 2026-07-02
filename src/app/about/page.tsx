"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Shield, Target, Compass, Database, ArrowRight, LayoutTemplate } from "lucide-react";

const values = [
  {
    icon: <Shield className="w-6 h-6 text-brand-blue" />,
    title: "Data Integrity First",
    desc: "We believe in architectural precision. We ensure that your custom applications and databases feature strict validation, secure roles, and robust structures.",
  },
  {
    icon: <Target className="w-6 h-6 text-brand-teal" />,
    title: "Operational Simplicity",
    desc: "Software shouldn't complicate your workflow. We design user-friendly frontend interfaces so your team can work efficiently without technical friction.",
  },
  {
    icon: <Compass className="w-6 h-6 text-brand-cyan" />,
    title: "Secure Scalability",
    desc: "Your digital systems must expand with your business. We engineer scalable architectures that remain blazingly fast whether handling 100 or 1,000,000 users.",
  },
];

const team = [
  {
    name: "Thomas Caldwell",
    role: "Co-Founder & Lead Architect",
    bio: "Former enterprise systems architect with 12+ years of software engineering experience. Specializes in building highly scalable, secure Next.js and PostgreSQL applications.",
    initials: "TC",
  },
  {
    name: "Dmitry Reznov",
    role: "Co-Founder & Systems Engineer",
    bio: "Specialist in data translation algorithms and API workflow automations. Focuses on zero-downtime legacy migrations and performance optimization.",
    initials: "DR",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Our Mission
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight">
            About Caldim
          </h1>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            We are a dedicated team of software engineers and data architects helping businesses break free from disorganized systems and legacy limitations.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Solving the Digital Chaos Crisis
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              Caldim was founded when we saw growing businesses running critical operations on a patchwork of disconnected systems: scattered Excel sheets, legacy on-premise software, manual paper logs, and disjointed SaaS tools. This chaos cost them time, money, and accuracy.
            </p>
            <p className="text-sm text-brand-muted leading-relaxed">
              We realized companies didn't need generic out-of-the-box software that forced them to change how they work. They needed tailored digital systems—clean databases, custom applications, and automated workflows—built specifically for their unique processes. Today, Caldim acts as a dedicated engineering partner for firms ready to scale.
            </p>
          </div>
          <div>
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-slate-100 shadow-premium group">
              <Image 
                src="/team_collaboration.png" 
                alt="Caldim Engineering Team" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="border-t border-slate-100 py-20 max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-xs font-semibold text-brand-teal uppercase tracking-wider">
              Core Principles
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              The Values That Drive Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-slate-50 bg-slate-50/30 space-y-4">
                <div className="p-2.5 rounded-lg bg-white inline-block shadow-sm border border-slate-100">
                  {val.icon}
                </div>
                <h4 className="font-bold text-brand-navy text-base">{val.title}</h4>
                <p className="text-xs text-brand-muted leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="border-t border-slate-100 pt-20 max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
              The Engineers
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Meet the founders of Caldim
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
                  {member.initials}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-brand-navy text-base">{member.name}</h4>
                  <span className="text-xs text-brand-blue font-semibold block">{member.role}</span>
                  <p className="text-xs text-brand-muted leading-relaxed pt-1">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center space-y-4">
          <h3 className="text-lg font-bold text-brand-navy">
            Want to learn how we can digitize your operations?
          </h3>
          <Link href="/contact">
            <button className="px-6 py-3 rounded-lg bg-brand-blue hover:bg-blue-700 text-white font-semibold text-sm transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm">
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
