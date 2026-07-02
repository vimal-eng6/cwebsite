"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.company.trim()) newErrors.company = "Company name is required.";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Please enter a short message about your project.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl bg-bg-panel border border-border-subtle shadow-industrial rounded-sm p-6 sm:p-10 font-sans relative overflow-hidden">
      {/* Decorative top border highlight */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent-orange" />

      <AnimatePresence mode="wait">
        {submitStatus === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center text-center py-10"
          >
            <div className="w-16 h-16 bg-[#22C55E]/10 text-accent-green rounded-full flex items-center justify-center mb-6 border border-[#22C55E]/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-text-headline mb-3">
              Request Submitted!
            </h3>
            <p className="text-sm text-text-body max-w-sm mb-8 leading-relaxed">
              Thank you for reaching out. One of our database specialists will review your spreadsheet challenges and contact you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitStatus("idle")}
              className="px-6 py-3 rounded-none bg-bg-surface hover:bg-border-subtle text-text-headline font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
          >
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-text-headline">
                Let's Digitize Your Data
              </h3>
              <p className="text-xs text-text-body">
                Describe your spreadsheet workflow, and we'll draft an action plan.
              </p>
            </div>

            {/* Error banner */}
            {submitStatus === "error" && (
              <div className="p-4 bg-accent-red/10 text-accent-red rounded-sm text-sm flex items-start gap-2 border border-accent-red/25">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <span>
                  An error occurred while sending your request. Please try again or email us directly at{" "}
                  <a href="mailto:info@caldim.com" className="font-semibold underline">
                    info@caldim.com
                  </a>
                  .
                </span>
              </div>
            )}

            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-text-headline">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-sm border text-sm transition-all focus:outline-none bg-bg-void ${
                  errors.name
                    ? "border-accent-red text-accent-red"
                    : "border-border-subtle text-text-headline focus:border-accent-orange"
                }`}
                placeholder="Jane Doe"
              />
              {errors.name && (
                <span className="text-xs text-accent-red font-medium flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-text-headline">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-sm border text-sm transition-all focus:outline-none bg-bg-void ${
                  errors.email
                    ? "border-accent-red text-accent-red"
                    : "border-border-subtle text-text-headline focus:border-accent-orange"
                }`}
                placeholder="jane@company.com"
              />
              {errors.email && (
                <span className="text-xs text-accent-red font-medium flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </span>
              )}
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="text-xs font-semibold text-text-headline">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-sm border text-sm transition-all focus:outline-none bg-bg-void ${
                  errors.company
                    ? "border-accent-red text-accent-red"
                    : "border-border-subtle text-text-headline focus:border-accent-orange"
                }`}
                placeholder="Acme Corp"
              />
              {errors.company && (
                <span className="text-xs text-accent-red font-medium flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.company}
                </span>
              )}
            </div>

            {/* Message Details */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-text-headline">
                Describe your spreadsheets
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                rows={4}
                className={`w-full px-4 py-3 rounded-sm border text-sm transition-all focus:outline-none bg-bg-void resize-y min-h-[100px] ${
                  errors.message
                    ? "border-accent-red text-accent-red"
                    : "border-border-subtle text-text-headline focus:border-accent-orange"
                }`}
                placeholder="Describe your current spreadsheet challenges and manual operational bottlenecks..."
              />
              {errors.message && (
                <span className="text-xs text-accent-red font-medium flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit button: sharp corners, solid accent-orange, dark text */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-none text-bg-void font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-none border-0 cursor-pointer ${
                isSubmitting ? "bg-accent-orange/70 cursor-not-allowed" : "bg-accent-orange hover:bg-accent-orange/90"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting Request...
                </>
              ) : (
                <>
                  Submit Request
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
