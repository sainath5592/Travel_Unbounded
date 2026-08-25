"use client";

import React, { useState, useMemo } from "react";
import { Destination } from "@/types";
import DestinationCard from "./DestinationCard";
import { Search, Filter, Compass } from "lucide-react";

interface DestinationGridProps {
  destinations: Destination[];
  initialCategory?: "all" | "india" | "international";
  showFilters?: boolean;
}

export default function DestinationGrid({
  destinations,
  initialCategory = "all",
  showFilters = true,
}: DestinationGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "india" | "international">(
    initialCategory
  );
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      // Category Filter
      const matchesCategory =
        selectedCategory === "all" || dest.category === selectedCategory;

      // Search Query Filter (name or country)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        dest.name.toLowerCase().includes(q) ||
        dest.country.toLowerCase().includes(q) ||
        dest.description.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [destinations, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search & Category Filter Controls */}
      {showFilters && (
        <div className="bg-slate-900/80 p-4 sm:p-6 rounded-2xl border border-slate-800 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === "all"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              All Destinations ({destinations.length})
            </button>
            <button
              onClick={() => setSelectedCategory("india")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === "india"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              India ({destinations.filter((d) => d.category === "india").length})
            </button>
            <button
              onClick={() => setSelectedCategory("international")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === "international"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              International ({destinations.filter((d) => d.category === "international").length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destination or country..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-slate-100 text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}

      {/* Grid Container */}
      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center my-8">
          <Compass className="w-12 h-12 text-slate-600 mx-auto mb-4 animate-bounce" />
          <h3 className="text-xl font-bold text-white mb-2">No Destinations Found</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
            We couldn't find any destinations matching "{searchQuery}". Try searching for another destination or reset filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-500 transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
