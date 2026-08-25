"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { destinations } from "@/data/destinations";
import Toast from "./Toast";
import {
  User,
  Phone,
  Mail,
  Calendar,
  Users,
  Building,
  Baby,
  MapPin,
  Send,
  Loader2,
} from "lucide-react";

export default function BookingForm() {
  const searchParams = useSearchParams();
  const initialDestination = searchParams.get("destination") || destinations[0].name;

  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+91",
    contactNumber: "",
    email: "",
    destination: initialDestination,
    travelDate: "",
    numberOfPeople: 2,
    hotelCategory: "Deluxe",
    numberOfChildren: 0,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  // Update selected destination if URL searchParam changes
  useEffect(() => {
    const destFromUrl = searchParams.get("destination");
    if (destFromUrl) {
      const matched = destinations.find(
        (d) => d.name.toLowerCase() === destFromUrl.toLowerCase()
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, destination: matched.name }));
      }
    }
  }, [searchParams]);

  // Minimum date for travel date picker (Tomorrow)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  const countryCodes = [
    { code: "+91", label: "India (+91)" },
    { code: "+1", label: "USA/Canada (+1)" },
    { code: "+44", label: "UK (+44)" },
    { code: "+61", label: "Australia (+61)" },
    { code: "+971", label: "UAE (+971)" },
    { code: "+65", label: "Singapore (+65)" },
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else {
      const cleanPhone = formData.contactNumber.replace(/\D/g, "");
      if (cleanPhone.length < 6 || cleanPhone.length > 15) {
        newErrors.contactNumber = "Please enter a valid phone number (6-15 digits)";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.travelDate) {
      newErrors.travelDate = "Date of travel is required";
    } else {
      const selected = new Date(formData.travelDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.travelDate = "Travel date must be in the future";
      }
    }

    if (!formData.numberOfPeople || formData.numberOfPeople < 1) {
      newErrors.numberOfPeople = "Minimum 1 person required";
    }

    if (formData.numberOfChildren < 0) {
      newErrors.numberOfChildren = "Number of children cannot be negative";
    }

    if (!formData.destination) {
      newErrors.destination = "Please select a destination";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setToast({
        type: "error",
        message: "Please correct the highlighted errors before submitting.",
      });
      return;
    }

    setIsSubmitting(true);
    setToast({ type: null, message: null });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setToast({
          type: "success",
          message: data.message || "Thank you! Our travel expert will contact you within 24 hours.",
        });

        // Reset Form
        setFormData({
          fullName: "",
          countryCode: "+91",
          contactNumber: "",
          email: "",
          destination: destinations[0].name,
          travelDate: "",
          numberOfPeople: 2,
          hotelCategory: "Deluxe",
          numberOfChildren: 0,
        });
        setErrors({});
      } else {
        setToast({
          type: "error",
          message: data.message || "Failed to submit enquiry. Please try again.",
        });
      }
    } catch (err: any) {
      console.error("Form submit error:", err);
      setToast({
        type: "error",
        message: "Network error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toast
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ type: null, message: null })}
      />

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6"
        noValidate
      >
        <div className="border-b border-slate-800 pb-4 mb-2">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Plan Your Custom Journey
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Fill in your preferences and our experiential travel specialists will craft a bespoke itinerary.
          </p>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full Name *</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="e.g. Rahul Sharma"
              className={`w-full px-4 py-3 bg-slate-950 border rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors ${
                errors.fullName ? "border-rose-500" : "border-slate-800"
              }`}
            />
            {errors.fullName && (
              <p className="text-rose-400 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>Email Address *</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="e.g. rahul@example.com"
              className={`w-full px-4 py-3 bg-slate-950 border rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors ${
                errors.email ? "border-rose-500" : "border-slate-800"
              }`}
            />
            {errors.email && (
              <p className="text-rose-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Contact Number + Country Code Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Contact Number *</span>
            </label>
            <div className="flex gap-2">
              <select
                value={formData.countryCode}
                onChange={(e) =>
                  setFormData({ ...formData, countryCode: e.target.value })
                }
                className="w-32 px-3 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
              >
                {countryCodes.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                required
                value={formData.contactNumber}
                onChange={(e) =>
                  setFormData({ ...formData, contactNumber: e.target.value })
                }
                placeholder="9876543210"
                className={`flex-1 px-4 py-3 bg-slate-950 border rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors ${
                  errors.contactNumber ? "border-rose-500" : "border-slate-800"
                }`}
              />
            </div>
            {errors.contactNumber && (
              <p className="text-rose-400 text-xs mt-1">
                {errors.contactNumber}
              </p>
            )}
          </div>

          {/* Destination Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Destination *</span>
            </label>
            <select
              value={formData.destination}
              onChange={(e) =>
                setFormData({ ...formData, destination: e.target.value })
              }
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
            >
              <optgroup label="India Destinations">
                {destinations
                  .filter((d) => d.category === "india")
                  .map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} ({d.country})
                    </option>
                  ))}
              </optgroup>
              <optgroup label="International Destinations">
                {destinations
                  .filter((d) => d.category === "international")
                  .map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} ({d.country})
                    </option>
                  ))}
              </optgroup>
            </select>
          </div>

          {/* Date of Travel */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Date of Travel *</span>
            </label>
            <input
              type="date"
              required
              min={getMinDate()}
              value={formData.travelDate}
              onChange={(e) =>
                setFormData({ ...formData, travelDate: e.target.value })
              }
              className={`w-full px-4 py-3 bg-slate-950 border rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors [color-scheme:dark] ${
                errors.travelDate ? "border-rose-500" : "border-slate-800"
              }`}
            />
            {errors.travelDate && (
              <p className="text-rose-400 text-xs mt-1">{errors.travelDate}</p>
            )}
          </div>

          {/* Hotel Category */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-emerald-400" />
              <span>Hotel Category *</span>
            </label>
            <select
              value={formData.hotelCategory}
              onChange={(e) =>
                setFormData({ ...formData, hotelCategory: e.target.value })
              }
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500"
            >
              <option value="Standard">Standard Comfort</option>
              <option value="Deluxe">Deluxe Premium</option>
              <option value="Luxury">Luxury Heritage & Resorts</option>
            </select>
          </div>

          {/* Number of People */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>Number of People *</span>
            </label>
            <input
              type="number"
              min="1"
              required
              value={formData.numberOfPeople}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  numberOfPeople: parseInt(e.target.value) || 1,
                })
              }
              className={`w-full px-4 py-3 bg-slate-950 border rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors ${
                errors.numberOfPeople ? "border-rose-500" : "border-slate-800"
              }`}
            />
            {errors.numberOfPeople && (
              <p className="text-rose-400 text-xs mt-1">
                {errors.numberOfPeople}
              </p>
            )}
          </div>

          {/* Number of Children */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Baby className="w-3.5 h-3.5 text-emerald-400" />
              <span>Number of Children (Optional)</span>
            </label>
            <input
              type="number"
              min="0"
              value={formData.numberOfChildren}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  numberOfChildren: Math.max(0, parseInt(e.target.value) || 0),
                })
              }
              className={`w-full px-4 py-3 bg-slate-950 border rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors ${
                errors.numberOfChildren ? "border-rose-500" : "border-slate-800"
              }`}
            />
            {errors.numberOfChildren && (
              <p className="text-rose-400 text-xs mt-1">
                {errors.numberOfChildren}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-xl font-semibold text-base text-white transition-all shadow-lg flex items-center justify-center gap-3 ${
              isSubmitting
                ? "bg-slate-800 text-slate-400 cursor-not-allowed border border-slate-700"
                : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30"
            }`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-emerald-400" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Enquiry</span>
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
