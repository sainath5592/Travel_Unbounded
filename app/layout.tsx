import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Travel Unbounded | Experiential Travel Experts",
  description:
    "Discover unforgettable journeys across India and the world with Travel Unbounded. Custom travel experiences designed around you.",
  keywords: [
    "Experiential Travel India",
    "Travel Unbounded",
    "Tailor-made itineraries",
    "Luxury Safaris Kenya",
    "Kerala Backwaters",
    "Custom travel experts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
