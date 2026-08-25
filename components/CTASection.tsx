import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden border-t border-b border-slate-800">
      {/* Background Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
          Your Next Great Story Starts Here
        </h2>

        <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Tell us where you want to go, and our travel experts will help create a journey worth remembering.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all shadow-xl hover:shadow-emerald-600/30 group"
        >
          <span>Plan Your Trip</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
