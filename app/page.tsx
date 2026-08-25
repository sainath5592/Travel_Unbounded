import React from "react";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import { destinations } from "@/data/destinations";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function HomePage() {
  const indiaDestinations = destinations.filter((d) => d.category === "india");
  const internationalDestinations = destinations.filter(
    (d) => d.category === "international"
  );

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured India Destinations */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
                <Compass className="w-4 h-4" />
                <span>Incredible India</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured India Destinations
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
                From backwater serenity in Kerala to Himalayan high passes in Ladakh — discover the soul of India.
              </p>
            </div>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
            >
              <span>View All India Journeys</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {indiaDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. International Destinations */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-2">
                <Compass className="w-4 h-4" />
                <span>Beyond Borders</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                International Destinations
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
                Wild safaris in Kenya, karst seascapes in Vietnam, and volcanic wonders in Iceland.
              </p>
            </div>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group"
            >
              <span>Explore All Global Trips</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Travel Unbounded */}
      <WhyChooseUs />

      {/* 5. Final CTA Section */}
      <CTASection />
    </div>
  );
}
