import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import OfficeLocations from "@/components/OfficeLocations";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import { Compass, HeartHandshake, ShieldCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Travel Unbounded",
  description:
    "Learn about Travel Unbounded. Born from a belief that the best journeys are built around the people taking them. Offices in Bengaluru, Kochi, and Nairobi.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Our Journey & Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Crafting Extraordinary Experiences
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            We are India's trusted experiential travel specialists, connecting curious travelers with authentic cultures and untouched wilderness.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
          {/* Story Text Box */}
          <div className="p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              <Award className="w-4 h-4" />
              <span>Our Story</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              Built Around The People Taking Them
            </h2>

            {/* Exact 3 Paragraphs from Assignment */}
            <div className="space-y-4 text-slate-300 text-base leading-relaxed font-light">
              <p>
                Travel Unbounded was born from a simple belief — that the best journeys aren't sold from a catalogue. They're built around the people taking them.
              </p>
              <p>
                Headquartered in Bangalore with offices in Kerala and Nairobi, we design trips that blend comfort, culture, and raw nature. Every destination, resort, and activity we recommend has been personally experienced by our team.
              </p>
              <p>
                From spotting the Big Five at dawn in the Masai Mara to cruising Ha Long Bay at sunset — we go where real stories are written, and we bring you along.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="text-2xl font-bold text-emerald-400 block">100%</span>
                <span className="text-xs text-slate-400">Vetted Resorts</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-emerald-400 block">3</span>
                <span className="text-xs text-slate-400">Global Hubs</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-emerald-400 block">24×7</span>
                <span className="text-xs text-slate-400">Dedicated Support</span>
              </div>
            </div>
          </div>

          {/* Story Image */}
          <div className="relative min-h-[350px] lg:min-h-full bg-slate-950">
            <Image
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
              alt="Travel Unbounded Experiential Journeys"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <OfficeLocations />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
