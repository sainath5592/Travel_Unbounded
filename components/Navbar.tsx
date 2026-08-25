"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Menu, X, Compass as LogoIcon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-lg py-3 border-b border-slate-800"
          : "bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md group-hover:bg-emerald-500 transition-colors">
              <LogoIcon className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white block leading-none">
                TRAVEL <span className="text-emerald-400">UNBOUNDED</span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase block mt-0.5">
                Experiential Travel Experts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-emerald-400 font-semibold"
                      : "text-slate-200 hover:text-emerald-400"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-emerald-600/30 flex items-center gap-2"
            >
              <span>Plan Your Trip</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-emerald-400" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-slate-800 text-emerald-400"
                      : "text-slate-200 hover:bg-slate-800/50 hover:text-emerald-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-center block text-base shadow-md"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
