"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/90 backdrop-blur-md shadow-lg rounded-xl py-5 px-6 md:py-3 w-[90%] md:w-[90%] lg:w-[60%] max-w-5xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Brikt Logo"
            width={54}
            height={54}
            priority
          />
          </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-white font-medium">
          <li>
            <Link href="/design" className="hover:text-[#F83D3D]">
              Design
            </Link>
          </li>
          <li>
            <Link href="/technology" className="hover:text-[#F83D3D]">
              Technology
            </Link>
          </li>
          <li>
            <Link href="/growth" className="hover:text-[#F83D3D]">
              Growth
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#F83D3D]">
              About
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button className="bg-[#F83D3D] hover:bg-red-600 text-white rounded-2">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="mt-4 md:hidden flex flex-col text-white items-center gap-4">
          <Link href="#services" onClick={() => setMobileOpen(false)}>
            Services
          </Link>
          <Link href="#work" onClick={() => setMobileOpen(false)}>
            Work
          </Link>
          <Link href="#about" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link href="#contact" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>
          <Button
            onClick={() => setMobileOpen(false)}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl w-full"
          >
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}
