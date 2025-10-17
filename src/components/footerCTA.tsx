"use client";

import Link from "next/link";

export default function FooterCTA() {
  return (
    <section className="bg-gradient-to-r from-[#111] to-[#1a1a1a] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Let’s Build Something Extraordinary Together
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Whether it’s design, technology, or growth — Brikt is your partner in creating 
          impactful digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <Link
            href="/contact"
            className="px-8 py-3 rounded-full bg-[#F83D3D] text-white font-semibold shadow-lg hover:bg-[#e23737] transition"
          >
            Start a Project
          </Link>
          <Link
            href="/casestudies"
            className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 font-semibold hover:border-white hover:text-white transition"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
