"use client";

import React, { useEffect } from "react";
import { CheckCircle, AlertCircle, X } from "lucide-react";

interface ToastProps {
  type: "success" | "error" | null;
  message: string | null;
  onClose: () => void;
}

export default function Toast({ type, message, onClose }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 6000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message || !type) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-slide-up">
      <div
        className={`flex items-start gap-3 p-4 rounded-xl shadow-2xl border ${
          type === "success"
            ? "bg-slate-900 text-emerald-300 border-emerald-500/40"
            : "bg-slate-900 text-rose-300 border-rose-500/40"
        }`}
      >
        {type === "success" ? (
          <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
        )}
        <div className="flex-1 pr-2">
          <h4
            className={`font-semibold text-sm ${
              type === "success" ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {type === "success" ? "Enquiry Submitted" : "Submission Error"}
          </h4>
          <p className="text-sm text-slate-200 mt-0.5 leading-relaxed">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
