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
    <div className="w-full max-w-xl bg-white border border-slate-100 shadow-premium rounded-2xl p-6 sm:p-10 font-sans">
      <AnimatePresence mode="wait">
        {submitStatus === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex flex-col items-center text-center py-10"
          >
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-brand-navy mb-3">
              Request Submitted!
            </h3>
            <p className="text-sm text-brand-muted max-w-sm mb-8 leading-relaxed">
              Thank you for reaching out. One of our database specialists will review your spreadsheet challenges and contact you within 24 hours.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSubmitStatus("idle")}
              className="px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-brand-navy font-semibold text-sm transition-colors cursor-pointer"
            >
              Send another message
            </motion.button>
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
              <h3 className="text-xl font-bold text-brand-navy">
                Let's Digitize Your Data
              </h3>
              <p className="text-xs text-brand-muted">
                Describe your spreadsheet workflow, and we'll draft an action plan.
              </p>
            </div>

            {/* Error banner */}
            {submitStatus === "error" && (
              <div className="p-4 bg-rose-50 text-rose-800 rounded-lg text-sm flex items-start gap-2 border border-rose-100">
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
              <label htmlFor="name" className="text-xs font-semibold text-brand-navy">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 bg-slate-50/50 ${
                  errors.name
                    ? "border-rose-300 focus:ring-rose-200 focus:border-rose-400 bg-rose-50/10"
                    : "border-slate-200 focus:ring-blue-100 focus:border-brand-blue"
                }`}
                placeholder="Jane Doe"
              />
              {errors.name && (
                <span className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.name}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-brand-navy">
                Work Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 bg-slate-50/50 ${
                  errors.email
                    ? "border-rose-300 focus:ring-rose-200 focus:border-rose-400 bg-rose-50/10"
                    : "border-slate-200 focus:ring-blue-100 focus:border-brand-blue"
                }`}
                placeholder="jane@company.com"
              />
              {errors.email && (
                <span className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </span>
              )}
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="company" className="text-xs font-semibold text-brand-navy">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 bg-slate-50/50 ${
                  errors.company
                    ? "border-rose-300 focus:ring-rose-200 focus:border-rose-400 bg-rose-50/10"
                    : "border-slate-200 focus:ring-blue-100 focus:border-brand-blue"
                }`}
                placeholder="Acme Corp"
              />
              {errors.company && (
                <span className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.company}
                </span>
              )}
            </div>

            {/* Message Details */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-brand-navy">
                Describe your spreadsheets
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border text-sm transition-all focus:outline-none focus:ring-2 bg-slate-50/50 resize-y min-h-[100px] ${
                  errors.message
                    ? "border-rose-300 focus:ring-rose-200 focus:border-rose-400 bg-rose-50/10"
                    : "border-slate-200 focus:ring-blue-100 focus:border-brand-blue"
                }`}
                placeholder="We have 3 major spreadsheets for tracking client order fulfillment and inventory. They are constantly out of sync, take 5 hours a week of manual copy-pasting, and are prone to double-entry errors..."
              />
              {errors.message && (
                <span className="text-xs text-rose-500 font-medium flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </span>
              )}
            </div>

            {/* Submit button */}
            <motion.button
              whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-lg text-white font-semibold text-sm transition-all shadow-sm cursor-pointer ${
                isSubmitting ? "bg-blue-450 bg-blue-700/85 cursor-not-allowed" : "bg-brand-blue hover:bg-blue-700"
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
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
