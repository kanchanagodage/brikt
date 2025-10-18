"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.webm"
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-bg-3.jpg" // fallback image
      />
      <div className="relative h-screen w-full flex items-center justify-center">
        {/* <Image
          src="/hero-bg-3.jpg" // Put your image inside /public/
          alt="Brikt Background"
          fill
          priority
          className="object-cover fixed inset-0 -z-10"
        /> */}

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/20 -z-0" />

        {/* Content */}
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Your Partner In{" "}
            <ReactTyped
              strings={["Design", "Technology", "Growth"]}
              typeSpeed={80}
              backSpeed={50}
              backDelay={1500}
              loop
            />
          </h1>

          <p className="text-base md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Building bold digital experiences with design, strategy, and tech.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
