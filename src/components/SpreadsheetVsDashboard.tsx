"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle, FileSpreadsheet, BarChart3, TrendingUp, HelpCircle, ArrowRight } from "lucide-react";
import Interactive3DCard from "./Interactive3DCard";

export default function SpreadsheetVsDashboard() {
  const [isCleaned, setIsCleaned] = useState(false);

  // Sample spreadsheet data (cluttered/messy)
  const messyData = [
    { id: "A101", desc: "Invntory_Shoes", qty: "42", price: "$ 19.99", status: "ok" },
    { id: "a102", desc: "shos (re-run)", qty: "Error#", price: "20", status: "PENDING" },
    { id: "A103", desc: "Inv_Socks_Blue", qty: "115", price: "$ 5.50", status: "no" },
    { id: "A104", desc: "Inv_Socks_red", qty: "12", price: "5.5", status: "ok" },
    { id: "", desc: "TOTAL:", qty: "169?", price: "", status: "CHECK" },
  ];

  // Clean dashboard metrics
  const cleanMetrics = [
    { label: "Total Inventory Value", value: "$1,539.50", change: "+14.2% vs last week", type: "up" },
    { label: "Data Accuracy Rating", value: "100.0%", change: "No anomalies detected", type: "success" },
    { label: "Active SKUs", value: "3", change: "Synced with DB", type: "sync" },
  ];

  return (
    <div className="w-full flex flex-col items-center py-6 font-sans">
      {/* Control Toggle */}
      <div className="mb-10 flex items-center justify-center p-1.5 rounded-full bg-slate-100 border border-slate-200">
        <button
          onClick={() => setIsCleaned(false)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
            !isCleaned
              ? "bg-brand-navy text-white shadow-sm"
              : "text-brand-muted hover:text-brand-navy"
          }`}
        >
          Chaotic Spreadsheet
        </button>
        <button
          onClick={() => setIsCleaned(true)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
            isCleaned
              ? "bg-brand-blue text-white shadow-sm"
              : "text-brand-muted hover:text-brand-navy"
          }`}
        >
          Cleaned Dashboard
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
        </button>
      </div>

      {/* Interactive Display Area */}
      <div className="w-full max-w-4xl min-h-[380px] relative flex justify-center items-center px-4">
        <AnimatePresence mode="wait">
          {!isCleaned ? (
            <motion.div
              key="spreadsheet"
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <Interactive3DCard className="w-full max-w-3xl mx-auto shadow-premium rounded-xl border border-rose-100 bg-rose-50/10 backdrop-blur-sm overflow-hidden">
                {/* Header */}
                <div className="bg-rose-500/10 border-b border-rose-100 px-6 py-4 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-rose-700">
                    <FileSpreadsheet className="w-5 h-5" />
                    <span className="font-semibold text-sm">Inventory_Q2_Final_v3_draft.xlsx (CONTAINS ERRORS)</span>
                  </div>
                  <div className="flex items-center gap-1 bg-rose-100 text-rose-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Data Corrupted
                  </div>
                </div>

                {/* Grid Spreadsheet content */}
                <div className="p-6 overflow-x-auto">
                  <table className="w-full border-collapse border border-rose-200 text-xs font-mono text-slate-700">
                    <thead>
                      <tr className="bg-rose-50/50">
                        <th className="border border-rose-200 p-2 text-left">SKU ID</th>
                        <th className="border border-rose-200 p-2 text-left">Item Desc</th>
                        <th className="border border-rose-200 p-2 text-left">Quantity</th>
                        <th className="border border-rose-200 p-2 text-left">Price</th>
                        <th className="border border-rose-200 p-2 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {messyData.map((row, index) => {
                        const hasError = row.qty.includes("Error") || !row.id || row.qty.includes("?");
                        return (
                          <tr
                            key={index}
                            className={`${
                              hasError ? "bg-rose-100/50" : index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                            }`}
                          >
                            <td className="border border-rose-200 p-2.5">
                              {row.id ? (
                                row.id
                              ) : (
                                <span className="text-rose-500 font-semibold italic bg-rose-100 px-1 rounded">[NULL]</span>
                              )}
                            </td>
                            <td className="border border-rose-200 p-2.5">{row.desc}</td>
                            <td className={`border border-rose-200 p-2.5 ${hasError && row.qty.includes("Error") ? "text-rose-600 font-bold" : ""}`}>
                              {row.qty}
                            </td>
                            <td className="border border-rose-200 p-2.5">{row.price}</td>
                            <td className="border border-rose-200 p-2.5">
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  row.status === "ok"
                                    ? "bg-green-100 text-green-700"
                                    : row.status === "PENDING"
                                    ? "bg-yellow-100 text-yellow-700 animate-pulse"
                                    : "bg-rose-100 text-rose-700"
                                }`}
                              >
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="mt-4 flex items-center justify-between text-slate-400 text-[10px] font-mono">
                    <span>* Disorganized formats, manual inputs, mismatched data types.</span>
                    <button
                      onClick={() => setIsCleaned(true)}
                      className="flex items-center gap-1 text-brand-blue font-sans font-semibold hover:underline"
                    >
                      Clean this data <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </Interactive3DCard>
            </motion.div>
          ) : (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <Interactive3DCard className="w-full max-w-3xl mx-auto shadow-premium rounded-xl border border-blue-100 bg-white overflow-hidden">
                {/* Header */}
                <div className="bg-brand-slate border-b border-slate-100 px-6 py-4 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-brand-navy">
                    <BarChart3 className="w-5 h-5 text-brand-blue" />
                    <span className="font-semibold text-sm">Caldim Data Dashboard — Inventory Systems</span>
                  </div>
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-100">
                    <CheckCircle className="w-3.5 h-3.5" />
                    System Synced
                  </div>
                </div>

                {/* Dashboard layout */}
                <div className="p-6 space-y-6">
                  {/* Top Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cleanMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex flex-col justify-between"
                      >
                        <span className="text-xs text-brand-muted font-medium mb-1">{metric.label}</span>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-xl font-bold text-brand-navy">{metric.value}</span>
                          <span
                            className={`text-[10px] font-semibold ${
                              metric.type === "up" || metric.type === "success"
                                ? "text-green-600"
                                : "text-brand-blue"
                            }`}
                          >
                            {metric.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart and Table preview */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* SVG Chart */}
                    <div className="p-4 rounded-lg border border-slate-100 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-brand-navy">Inventory Growth Trend</span>
                        <span className="text-[10px] text-green-600 flex items-center gap-0.5">
                          <TrendingUp className="w-3.5 h-3.5" />
                          +12% MoM
                        </span>
                      </div>
                      <div className="h-32 w-full flex items-end justify-between px-2 pt-4 relative">
                        {/* Chart Line Representation */}
                        <svg className="absolute inset-x-0 bottom-0 h-24 w-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                          <motion.path
                            d="M 0 45 Q 25 35 50 15 T 100 5"
                            fill="none"
                            stroke="#1e40af"
                            strokeWidth="2.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                          <motion.path
                            d="M 0 45 Q 25 35 50 15 T 100 5 L 100 50 L 0 50 Z"
                            fill="url(#chartGrad)"
                            opacity="0.1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                          />
                          <defs>
                            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#1e40af" />
                              <stop offset="100%" stopColor="#ffffff" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="text-[9px] text-brand-muted absolute left-2 top-2">Q2 Value</div>
                      </div>
                    </div>

                    {/* Data preview */}
                    <div className="p-4 rounded-lg border border-slate-100 space-y-3">
                      <span className="text-xs font-semibold text-brand-navy block">Database Log Schema</span>
                      <div className="space-y-2 text-[10px] font-mono">
                        <div className="flex justify-between items-center p-2 rounded bg-slate-50 border-l-2 border-brand-blue">
                          <span className="font-semibold text-slate-700">SKU_101 (Shoes)</span>
                          <span className="text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded">Active</span>
                        </div>
                        <div className="flex justify-between items-center p-2 rounded bg-slate-50 border-l-2 border-brand-blue">
                          <span className="font-semibold text-slate-700">SKU_102 (Shoes-V2)</span>
                          <span className="text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded">Active</span>
                        </div>
                        <div className="flex justify-between items-center p-2 rounded bg-slate-50 border-l-2 border-brand-blue">
                          <span className="font-semibold text-slate-700">SKU_103 (Socks-Blue)</span>
                          <span className="text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Interactive3DCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
