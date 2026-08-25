import React from "react";
import { CheckCircle2, UserCheck, Compass, Headphones } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Personally Vetted Experiences",
      description: "Every destination, resort, and experience is carefully selected.",
      icon: CheckCircle2,
    },
    {
      title: "Expert Local Guides",
      description: "Travel with knowledgeable guides who know the destination deeply.",
      icon: UserCheck,
    },
    {
      title: "Custom Itineraries",
      description: "Every journey is designed around the traveller's interests.",
      icon: Compass,
    },
    {
      title: "24×7 Travel Support",
      description: "Reliable support before, during, and after the journey.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 block mb-2">
            The Travel Unbounded Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Travel Unbounded
          </h2>
          <p className="text-slate-400 text-base mt-3">
            We don't sell generic tour packages. We design unforgettable, high-touch journeys tailored around you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-emerald-500/40 transition-all duration-300 shadow-lg group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
