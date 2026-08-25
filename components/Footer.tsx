import React from "react";
import Link from "next/link";
import { Compass, MapPin, Mail, Phone, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                TRAVEL <span className="text-emerald-400">UNBOUNDED</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              India's Most Trusted Experiential Travel Experts. Extraordinary journeys, personally crafted around the people taking them.
            </p>
            {/* Social Icons Placeholders */}
            <div className="flex items-center gap-3 pt-2">
              <span className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors cursor-pointer" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </span>
              <span className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors cursor-pointer" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </span>
              <span className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors cursor-pointer" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </span>
              <span className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors cursor-pointer" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="hover:text-emerald-400 transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 transition-colors">
                  Plan Your Trip
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Global Offices */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wider uppercase">
              Office Locations
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Bengaluru (HQ)</strong>
                  <span>HAL 2nd Stage, Indiranagar, Bengaluru</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Kochi Office</strong>
                  <span>S Janatha Road, Palavivatton, Kochi</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block">Nairobi Office</strong>
                  <span>Muthithi Road, Nairobi, Kenya</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information Placeholders */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-white tracking-wider uppercase">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>info@travelunbounded.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91 (080) 4123-8900</span>
              </div>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 border border-emerald-500/40 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Travel Unbounded. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Experiential Travel India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
