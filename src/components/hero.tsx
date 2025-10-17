"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ReactTyped } from "react-typed";

export default function Hero() {
  // Optional: Subtle zoom-out effect when scrolling
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1.1, 1]); // zooms out slightly

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "env(safe-area-inset-top)" }} // ✅ extends into notch area
    >
      {/* Background Image with Motion Zoom */}
      <motion.div
        style={{ scale }}
        className="fixed inset-0 -z-10"
      >
        <Image
          src="/hero-bg-3.jpg" // ✅ Image in /public folder
          alt="Brikt Background"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 -z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-2xl md:text-5xl font-semibold text-white mb-4 leading-tight">
          Your Partner In{" "}
          <span className="text-[#F83D3D]">
            <ReactTyped
              strings={["Design", "Technology", "Growth"]}
              typeSpeed={80}
              backSpeed={50}
              backDelay={1500}
              loop
            />
          </span>
        </h1>

        <p className="text-base md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Building bold digital experiences with design, strategy, and tech.
        </p>
      </motion.div>
    </section>
  );
}
