"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const TwitterIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-charcoal border-t border-brand-steel/60 font-sans mt-auto text-brand-steel-bright">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="p-1.5 rounded bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                <svg className="w-7 h-7" viewBox="0 0 100 85" fill="currentColor" fillRule="evenodd">
                  {/* Left Side: C */}
                  <path d="M47,15 L10,35 L10,75 L47,75 L47,60 L25,60 L25,48 L47,36 Z" />
                  {/* Right Side: D */}
                  <path d="M53,15 L90,35 L90,75 L53,75 Z M68,36 L68,60 L75,60 L80,55 L80,43 L68,36 Z" />
                </svg>
              </div>
              <span className="font-mono font-bold text-xl tracking-wider text-white">
                CALDIM
              </span>
            </Link>
            <p className="text-xs text-brand-steel-bright leading-relaxed max-w-xs">
              Helping businesses convert chaotic Excel sheets and disorganized spreadsheets into clean, structured digital databases and interactive dashboards.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="#"
                className="p-2 rounded bg-brand-graphite border border-brand-steel/50 hover:border-brand-orange hover:text-white text-brand-steel-bright shadow-industrial transition-all duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded bg-brand-graphite border border-brand-steel/50 hover:border-brand-orange hover:text-white text-brand-steel-bright shadow-industrial transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded bg-brand-graphite border border-brand-steel/50 hover:border-brand-orange hover:text-white text-brand-steel-bright shadow-industrial transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-xs text-brand-steel-bright hover:text-brand-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-xs text-brand-steel-bright hover:text-brand-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-xs text-brand-steel-bright hover:text-brand-orange transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xs text-brand-steel-bright hover:text-brand-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-brand-steel-bright hover:text-brand-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Solutions */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Solutions
            </h3>
            <ul className="space-y-2">
              <li className="text-xs text-brand-steel-bright">
                Data Digitization
              </li>
              <li className="text-xs text-brand-steel-bright">
                Spreadsheet Cleanup
              </li>
              <li className="text-xs text-brand-steel-bright">
                Reporting & Dashboards
              </li>
              <li className="text-xs text-brand-steel-bright">
                Workflow Automation
              </li>
              <li className="text-xs text-brand-steel-bright">
                Database Migration
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-xs text-brand-steel-bright">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                <span>
                  100 Innovation Way, Suite 400<br />
                  Silicon Valley, CA 94025
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <a href="mailto:info@caldim.com" className="hover:text-brand-orange transition-colors">
                  info@caldim.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <a href="tel:+18005550199" className="hover:text-brand-orange transition-colors">
                  +1 (800) 555-0199
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-steel/60 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-brand-muted">
            &copy; {currentYear} Caldim. All rights reserved.
          </p>
          <div className="flex space-x-6 text-[10px] font-mono text-brand-muted">
            <a href="#" className="hover:text-brand-orange transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-orange transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-brand-orange transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
