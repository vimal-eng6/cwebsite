"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Compass, ArrowRight } from "lucide-react";

const values = [
  {
    icon: <Shield className="w-6 h-6 text-brand-orange" />,
    title: "Data Integrity First",
    desc: "We believe in architectural precision. We ensure that your custom applications and databases feature strict validation, secure roles, and robust structures.",
  },
  {
    icon: <Target className="w-6 h-6 text-brand-orange" />,
    title: "Operational Simplicity",
    desc: "Software shouldn't complicate your workflow. We design user-friendly frontend interfaces so your team can work efficiently without technical friction.",
  },
  {
    icon: <Compass className="w-6 h-6 text-brand-orange" />,
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
    <div className="bg-transparent min-h-screen py-24 sm:py-32 font-sans text-text-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span className="text-[10px] font-mono text-brand-orange uppercase tracking-[0.2em] border border-brand-orange/20 bg-brand-orange/5 px-3 py-1 rounded-sm font-bold">
            Our Mission
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-headline leading-tight heading-stop">
            About Caldim
          </h1>
          <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-xl mx-auto">
            We are a dedicated team of software engineers and data architects helping businesses break free from disorganized systems and legacy limitations.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 max-w-5xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-headline tracking-tight font-sans">
              Solving the Digital Chaos Crisis
            </h2>
            <p className="text-sm text-text-body leading-relaxed">
              Caldim was founded when we saw growing businesses running critical operations on a patchwork of disconnected systems: scattered Excel sheets, legacy on-premise software, manual paper logs, and disjointed SaaS tools. This chaos cost them time, money, and accuracy.
            </p>
            <p className="text-sm text-text-body leading-relaxed">
              We realized companies didn't need generic out-of-the-box software that forced them to change how they work. They needed tailored digital systems—clean databases, custom applications, and automated workflows—built specifically for their unique processes. Today, Caldim acts as a dedicated engineering partner for firms ready to scale.
            </p>
          </div>
          <div>
            <div className="relative w-full aspect-square rounded-sm overflow-hidden border border-border-subtle shadow-industrial group">
              <Image 
                src="/team_collaboration.png" 
                alt="Caldim Engineering Team" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" 
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="border-t border-border-subtle py-20 max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-xs font-semibold font-mono text-brand-orange uppercase tracking-wider">
              Core Principles
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-headline font-sans">
              The Values That Drive Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="p-6 rounded-sm border border-border-subtle bg-bg-panel space-y-4 shadow-industrial">
                <div className="p-2.5 rounded-sm bg-bg-void inline-block border border-border-subtle text-brand-orange">
                  {val.icon}
                </div>
                <h4 className="font-bold text-text-headline text-base font-sans">{val.title}</h4>
                <p className="text-xs text-text-body leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="border-t border-border-subtle pt-20 max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-xs font-semibold font-mono text-brand-orange uppercase tracking-wider">
              The Engineers
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-headline font-sans">
              Meet the founders of Caldim
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            {team.map((member, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-bg-panel p-6 rounded-sm border border-border-subtle shadow-industrial">
                <div className="w-12 h-12 rounded-sm bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center font-bold text-lg shrink-0 shadow-none font-mono">
                  {member.initials}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-text-headline text-base font-sans">{member.name}</h4>
                  <span className="text-xs text-brand-orange font-mono font-semibold block">{member.role}</span>
                  <p className="text-xs text-text-body leading-relaxed pt-1">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-24 text-center space-y-6">
          <h3 className="text-lg font-bold text-text-headline">
            Want to learn how we can digitize your operations?
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
