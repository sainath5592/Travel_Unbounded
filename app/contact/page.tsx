import React, { Suspense } from "react";
import { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import OfficeLocations from "@/components/OfficeLocations";
import { Compass, ShieldCheck, PhoneCall, Clock, Sparkles, Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Plan Your Trip | Booking Enquiry | Travel Unbounded",
  description:
    "Start planning your extraordinary experiential journey with Travel Unbounded. Custom travel itineraries, expert local guides, and 24x7 support.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Start Your Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Plan Your Unbounded Adventure
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Share your travel dreams with us. Our expert travel specialists will get in touch within 24 hours to craft your personalized trip.
          </p>
        </div>

        {/* Main Grid: Form + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
            <Suspense
              fallback={
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center text-slate-400 flex items-center justify-center gap-3">
                  <Loader2 className="w-6 h-6 animate-spin text-emerald-400" />
                  <span>Loading Booking Form...</span>
                </div>
              }
            >
              <BookingForm />
            </Suspense>
          </div>

          {/* Right Column: Perks & Support Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">What Happens Next?</h4>
                  <p className="text-xs text-slate-400">3 simple steps to your dream trip</p>
                </div>
              </div>

              <ol className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-white block">Dedicated Specialist Assigned</strong>
                    <span className="text-slate-400 text-xs">
                      A travel expert matching your destination will review your details.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-white block">Personal Consultation</strong>
                    <span className="text-slate-400 text-xs">
                      We contact you within 24 hours to fine-tune your itinerary preferences.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-white block">Custom Proposal Delivered</strong>
                    <span className="text-slate-400 text-xs">
                      Receive a comprehensive day-by-day plan with transparent pricing.
                    </span>
                  </div>
                </li>
              </ol>

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Average Response Time: &lt; 24 Hours</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No Spam Guarantee & Confidential Info</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <OfficeLocations />
    </div>
  );
}
