import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Multi-layered Gradient Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md mb-6 animate-fade-in">
          <Compass className="w-4 h-4 text-emerald-400 animate-spin-slow" />
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-300">
            Tailor-Made Expeditions
          </span>
        </div>

        {/* Exact Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
          India's Most Trusted <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-200 bg-clip-text text-transparent">
            Experiential Travel Experts
          </span>
        </h1>

        {/* Exact Subheading */}
        <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
          Extraordinary journeys, personally crafted around the people taking them.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all shadow-lg hover:shadow-emerald-600/40 flex items-center justify-center gap-3 group"
          >
            <span>Plan Your Trip</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/destinations"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-100 font-semibold text-base border border-slate-700/80 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5 text-emerald-400" />
            <span>Explore Destinations</span>
          </Link>
        </div>

        {/* Trust Markers */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-300 text-xs sm:text-sm">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Vetted Resorts</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Local Expert Guides</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Bespoke Itineraries</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>24×7 Travel Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
