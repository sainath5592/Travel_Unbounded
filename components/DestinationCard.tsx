import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/types";
import { MapPin, ArrowRight } from "lucide-react";

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-IN").format(destination.price);

  return (
    <div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-emerald-950/20 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-950">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
            {destination.category === "india" ? "India" : "International"}
          </span>
        </div>

        {/* Country Label */}
        <div className="absolute bottom-3 left-4 z-10 flex items-center gap-1.5 text-xs text-slate-300 font-medium">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>{destination.country}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            {destination.name}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
            {destination.description}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between mt-auto">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium block">
              Starting from
            </span>
            <span className="text-lg font-bold text-emerald-400">
              ₹{formattedPrice}
            </span>
          </div>

          <Link
            href={`/contact?destination=${encodeURIComponent(destination.name)}`}
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-1.5 group-hover:translate-x-0.5"
          >
            <span>Enquire</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
