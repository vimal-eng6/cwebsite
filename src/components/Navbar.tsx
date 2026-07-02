"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/#services", hash: "#services" },
  { name: "How It Works", href: "/#how-it-works", hash: "#how-it-works" },
  { name: "About", href: "/about", hash: "" },
  { name: "Contact", href: "/contact", hash: "" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomepage = pathname === "/";
  // The header should be light-colored if scrolled OR if we are on a page other than the dark homepage hero
  const isLightHeader = isScrolled || !isHomepage;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, hash: string) => {
    if (isHomepage && hash) {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        setIsOpen(false);
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isLightHeader
          ? "bg-white/95 border-b border-slate-200/80 shadow-sm backdrop-blur-md"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo (sans-serif, clean tracking, dynamic colors) */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={() => isHomepage && window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="p-2 rounded bg-accent-orange/10 text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all duration-300">
              <svg className="w-6 h-6" viewBox="0 0 100 85" fill="currentColor" fillRule="evenodd">
                {/* Left Side: C */}
                <path d="M47,15 L10,35 L10,75 L47,75 L47,60 L25,60 L25,48 L47,36 Z" />
                {/* Right Side: D */}
                <path d="M53,15 L90,35 L90,75 L53,75 Z M68,36 L68,60 L75,60 L80,55 L80,43 L68,36 Z" />
              </svg>
            </div>
            <span className={`font-sans font-bold text-xl tracking-tight transition-colors duration-300 ${
              isLightHeader ? "text-slate-900" : "text-white"
            }`}>
              Caldim
            </span>
          </Link>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = isHomepage 
                ? false 
                : pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.hash)}
                  className={`font-sans text-sm font-semibold transition-colors duration-200 ${
                    isLightHeader
                      ? isActive
                        ? "text-accent-orange"
                        : "text-slate-600 hover:text-accent-orange"
                      : "text-slate-200 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA (rounded, professional accent, no shadow, dynamic text) */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button
                className="flex items-center gap-1.5 px-5 py-2.5 bg-accent-orange text-white font-sans font-semibold text-sm rounded hover:bg-accent-orange/90 transition-colors cursor-pointer shadow-none border-0"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded transition-colors focus:outline-none ${
                isLightHeader
                  ? "text-slate-900 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-b overflow-hidden ${
              isLightHeader 
                ? "bg-white border-slate-200" 
                : "bg-[#0B0D0F] border-slate-800"
            }`}
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.hash)}
                  className={`block py-2.5 px-3 rounded font-sans text-sm font-semibold transition-all ${
                    isLightHeader
                      ? "text-slate-700 hover:bg-slate-100 hover:text-accent-orange"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 px-3">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full flex justify-center items-center gap-2 py-3 bg-accent-orange text-white font-sans font-semibold text-sm rounded shadow-none border-0 hover:bg-accent-orange/90">
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
