"use client";

import { useState } from "react";

interface Service {
  id: string;
  title: string;
  description: string;
}

interface ServiceSelectorProps {
  services: Service[];
}

export default function ServiceSelector({ services }: ServiceSelectorProps) {
  const [selectedId, setSelectedId] = useState(services[0].id);

  const selectedService = services.find((s) => s.id === selectedId);

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto md:flex md:gap-12">
        {/* Left: Service list */}
        <div className="md:w-1/3 flex flex-wrap md:flex-col gap-3 mb-8 md:mb-0">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedId(service.id)}
              className={`px-4 py-2 rounded-full border ${
                selectedId === service.id
                  ? "bg-[#F83D3D] text-white border-[#F83D3D]"
                  : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-[#F83D3D] hover:text-white transition"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Right: Selected content */}
        <div className="md:w-2/3">
          {selectedService && (
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedService.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {selectedService.description}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
