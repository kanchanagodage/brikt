"use client";

import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#111] to-[#1a1a1a] text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-10">
        
        {/* Left: Logo & About */}
        <div className="md:col-span-2">
          <Image
            src="/logo.svg"
            alt="Brikt Logo"
            width={140}
            height={50}
            className="mb-4"
          />
          <p className="text-sm text-gray-400">
            Brikt is your partner in Design, Technology, and Growth — building 
            brands and digital experiences that make an impact.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-[#F83D3D] transition-colors">About</Link></li>
            <li><Link href="/casestudies" className="hover:text-[#F83D3D] transition-colors">Case Studies</Link></li>
            <li><Link href="/process" className="hover:text-[#F83D3D] transition-colors">Process</Link></li>
          </ul>
        </div>

        {/* Design */}
        <div>
          <h3 className="text-white font-semibold mb-4">Design</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#branding" className="hover:text-[#F83D3D] transition-colors">Branding</Link></li>
            <li><Link href="#uiux" className="hover:text-[#F83D3D] transition-colors">UI/UX</Link></li>
            <li><Link href="#webdesign" className="hover:text-[#F83D3D] transition-colors">Web Design</Link></li>
          </ul>
        </div>

        {/* Technology */}
        <div>
          <h3 className="text-white font-semibold mb-4">Technology</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#webdev" className="hover:text-[#F83D3D] transition-colors">Web Development</Link></li>
            <li><Link href="#appdev" className="hover:text-[#F83D3D] transition-colors">App Development</Link></li>
            <li><Link href="#webaudit" className="hover:text-[#F83D3D] transition-colors">Web Audit</Link></li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <h3 className="text-white font-semibold mb-4">Learn</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/reviews" className="hover:text-[#F83D3D] transition-colors">Reviews</Link></li>
            <li><Link href="/faqs" className="hover:text-[#F83D3D] transition-colors">FAQs</Link></li>
            <li><Link href="/careers" className="hover:text-[#F83D3D] transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-white font-semibold mb-4">Locations</h3>
          <ul className="space-y-2 text-sm">
            <li>London, United Kingdom</li>
            <li>Colombo, Sri Lanka</li>
            <li>Tokyo, Japan</li>
          </ul>
        </div>
      </div>

      {/* Bottom: Socials + CTA */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-700 pt-6">
        {/* Socials */}
        <div className="flex gap-4 text-xl">
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter className="hover:text-[#F83D3D] transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin className="hover:text-[#F83D3D] transition-colors" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <FaInstagram className="hover:text-[#F83D3D] transition-colors" />
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="bg-[#F83D3D] text-white px-5 py-2 rounded-lg shadow-md hover:bg-[#d12f2f] transition"
        >
          Let’s Talk
        </Link>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Brikt. All rights reserved.
      </div>
    </footer>
  );
}
