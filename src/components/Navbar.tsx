"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services", hash: "#services" },
  { name: "How It Works", href: "/how-it-works", hash: "#how-it-works" },
  { name: "About", href: "/about", hash: "#about" },
  { name: "Contact", href: "/contact", hash: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, hash: string) => {
    if (pathname === "/" && hash) {
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
        isScrolled
          ? "bg-bg-void border-b border-border-subtle shadow-industrial"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="p-2 rounded bg-brand-orange/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-355">
              <svg className="w-6 h-6" viewBox="0 0 100 85" fill="currentColor" fillRule="evenodd">
                {/* Left Side: C */}
                <path d="M47,15 L10,35 L10,75 L47,75 L47,60 L25,60 L25,48 L47,36 Z" />
                {/* Right Side: D */}
                <path d="M53,15 L90,35 L90,75 L53,75 Z M68,36 L68,60 L75,60 L80,55 L80,43 L68,36 Z" />
              </svg>
            </div>
            <span className="font-mono font-bold text-xl tracking-[0.1em] text-white">
              CALDIM
            </span>
          </Link>

          {/* Desktop Navigation links (sans-serif, upper, letter tracking) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.hash)}
                  className={`font-sans text-[0.85rem] uppercase tracking-[0.08em] transition-colors duration-200 hover:text-text-headline ${
                    isActive ? "text-text-headline" : "text-text-body"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA (solid accent-orange fill, dark text, sharp corners, no shadow) */}
          <div className="hidden md:block">
            <Link href="/contact">
              <button
                className="flex items-center gap-2 px-5 py-2.5 bg-accent-orange text-bg-void font-mono font-bold text-xs uppercase tracking-wider rounded-[2px] hover:bg-accent-orange/90 shadow-none border-0 transition-colors cursor-pointer"
              >
                Request Demo
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-white hover:bg-brand-steel/50 transition-colors focus:outline-none"
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
            className="md:hidden border-b border-border-subtle bg-bg-void overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.hash)}
                    className={`block py-2.5 px-3 font-sans text-sm uppercase tracking-[0.08em] hover:text-text-headline transition-all ${
                      isActive ? "text-text-headline bg-brand-orange/10" : "text-text-body"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-2 px-3">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full flex justify-center items-center gap-2 py-3 bg-accent-orange text-bg-void font-mono font-bold text-sm uppercase tracking-wider rounded-[2px] shadow-none border-0 hover:bg-accent-orange/90">
                    Request Demo
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
