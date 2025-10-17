"use client";

import Link from "next/link";

interface HeaderSectionProps {
  title: string;
  subtitle: string;
  summary: string;
  links?: { label: string; href: string }[];
  bgColor?: string;
  height?: string;
}

export default function HeaderSection({
  title,
  subtitle,
  summary,
  links = [],
  bgColor = "bg-white",
  height = "h-[100vh] md:h-[75vh]",
}: HeaderSectionProps) {
  return (
    <section className={`${bgColor} ${height} w-full flex flex-col justify-center px-6 relative`}>
      {/* Main content */}
      <div className="text-center max-w-4xl mx-auto flex-1 flex flex-col justify-center">
        <h1 className="text-4xl md:text-2xl font-bold text-{#1d1d1f} mb-4">{title}</h1>
        <h2 className="text-xl md:text-5xl text-gray-300 mb-4">{subtitle}</h2>
        <p className="text-gray-400 text-base md:text-lg">{summary}</p>
      </div>

      {/* Bottom links */}
      {links.length > 0 && (
        <div className="absolute bottom-4 w-full flex justify-center gap-6 flex-wrap">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-[#F83D3D] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
