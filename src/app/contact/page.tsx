"use client";

import React from "react";
import { Mail, Phone, MapPin, Shield } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-transparent min-h-screen py-24 sm:py-32 font-sans text-text-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-[10px] font-mono text-brand-orange uppercase tracking-[0.2em] border border-brand-orange/20 bg-brand-orange/5 px-3 py-1 rounded-sm font-bold">
            Connect With Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-headline leading-tight heading-stop">
            Contact Caldim
          </h1>
          <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-xl mx-auto">
            Ready to digitize your operations? Send us a message or schedule a free consultation to discuss custom applications, databases, or workflow automations.
          </p>
        </div>

        {/* Contact page layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-text-headline font-sans">Office Locations</h2>
              <p className="text-sm text-text-body leading-relaxed">
                Our database architects are based in California, providing support and consultations across multiple timezones.
              </p>
            </div>

            {/* List details */}
            <div className="space-y-6 text-sm text-text-body">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-bg-void border border-border-subtle text-brand-orange shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-text-headline font-sans">Caldim Headquarters</h4>
                  <span className="text-xs text-text-body leading-relaxed block mt-1">
                    100 Innovation Way, Suite 400<br />
                    Silicon Valley, CA 94025
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-bg-void border border-border-subtle text-brand-orange shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-text-headline font-sans">Email Address</h4>
                  <a href="mailto:info@caldim.com" className="text-xs text-text-body hover:text-brand-orange transition-colors block mt-1 underline">
                    info@caldim.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-sm bg-bg-void border border-border-subtle text-brand-orange shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-text-headline font-sans">Phone Line</h4>
                  <a href="tel:+18005550199" className="text-xs text-text-body hover:text-brand-orange transition-colors block mt-1 underline">
                    +1 (800) 555-0199 (Mon–Fri, 9am–5pm PST)
                  </a>
                </div>
              </div>
            </div>

            {/* Shield and integrity statement */}
            <div className="p-6 rounded-sm border border-border-subtle bg-bg-panel shadow-industrial flex gap-4">
              <div className="p-2 rounded-sm bg-bg-void border border-border-subtle shrink-0 text-brand-orange mt-0.5">
                <Shield className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-xs text-text-headline font-sans">NDAs & Privacy Contracts</h4>
                <p className="text-[11px] text-text-body leading-relaxed">
                  We respect corporate privacy. We sign Non-Disclosure Agreements (NDAs) before reviewing any client workflows, operational records, or legacy systems.
                </p>
              </div>
            </div>
          </div>

          {/* Stateful contact form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

      </div>
    </div>
  );
}
