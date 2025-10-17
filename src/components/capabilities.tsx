"use client";

import { FaCode, FaMobileAlt, FaSearch } from "react-icons/fa";

export default function Capabilities() {
  const items = [
    {
      icon: <FaCode className="w-8 h-8 text-[#F83D3D]" />,
      title: "Web Development",
      desc: "High-performing websites and platforms built with modern frameworks like Next.js and React.",
    },
    {
      icon: <FaMobileAlt className="w-8 h-8 text-[#F83D3D]" />,
      title: "App Development",
      desc: "iOS, Android, and cross-platform apps designed for seamless UX and performance.",
    },
    {
      icon: <FaSearch className="w-8 h-8 text-[#F83D3D]" />,
      title: "Web Audits & Optimization",
      desc: "Performance, SEO, accessibility, and UX reviews to strengthen your digital presence.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Our Capabilities
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6"
            >
              {/* Icon */}
              <div className="mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mt-2 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
