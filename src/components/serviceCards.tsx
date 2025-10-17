"use client";

import React from "react";

export default function ServiceCards() {
  const services = [
    {
      title: "Design",
      subtitle: "Crafting Experiences That Inspire",
      videoSrc: "/videos/design.mp4", // Place video in /public/videos/
      link: "/design",
    },
    {
      title: "Growth",
      subtitle: "Engineering Digital Success",
      videoSrc: "/videos/growth.mp4",
      link: "/technology",
    },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <a
            href={service.link}
            key={service.title}
            className="relative group aspect-square overflow-hidden"
          >
            {/* Background video */}
            <video
              src={service.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0  group-hover:bg-black/50 transition-colors duration-500"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-normal items-start text-left text-{#dfdfdf} px-6">
              <h2 className="text-3xl md:text-4xl font-semibold mb-2">
                {service.title}
              </h2>
              <p className="text-lg opacity-90">{service.subtitle}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
