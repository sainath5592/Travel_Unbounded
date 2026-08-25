import React from "react";
import { Metadata } from "next";
import DestinationGrid from "@/components/DestinationGrid";
import { destinations } from "@/data/destinations";
import CTASection from "@/components/CTASection";
import { Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore Destinations | Travel Unbounded",
  description:
    "Explore handpicked experiential travel destinations across India and international marvels. Tailor-made itineraries for discerning travelers.",
};

export default function DestinationsPage() {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-slate-950">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Curated Journeys</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Explore Handpicked Destinations
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Whether you dream of misty tea gardens in Kerala or thrilling wildlife tracking in Masai Mara, every itinerary is personally vetted and designed around your travel style.
          </p>
        </div>
      </section>

      {/* Interactive Destination Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <DestinationGrid destinations={destinations} showFilters={true} />
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
