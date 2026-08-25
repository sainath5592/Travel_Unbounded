import React from "react";
import { MapPin, Building2, Globe2 } from "lucide-react";

export default function OfficeLocations() {
  const offices = [
    {
      title: "Bengaluru — Headquarters",
      address: [
        "541, 7th Main Rd",
        "HAL 2nd Stage",
        "Indiranagar, Bengaluru – 560008",
        "India",
      ],
      icon: Building2,
      badge: "Headquarters",
    },
    {
      title: "Kochi — Kerala Office",
      address: [
        "LR Towers, S Janatha Road",
        "Palavivatton, Kochi – 682025",
        "India",
      ],
      icon: MapPin,
      badge: "Regional Office",
    },
    {
      title: "Nairobi — Kenya Office",
      address: [
        "Westpark Towers, Muthithi Road",
        "Nairobi, P.O. Box 6950",
        "Postal Code 00100",
        "Kenya",
      ],
      icon: Globe2,
      badge: "East Africa Hub",
    },
  ];

  return (
    <section className="py-16 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 block mb-2">
            Global Presence
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Our Offices
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Headquartered in Bengaluru with regional hubs on the ground in Kochi and Nairobi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, idx) => {
            const Icon = office.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-300 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                      {office.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {office.title}
                  </h3>

                  <address className="not-italic text-slate-300 text-sm leading-relaxed space-y-1">
                    {office.address.map((line, lIdx) => (
                      <p key={lIdx}>{line}</p>
                    ))}
                  </address>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
