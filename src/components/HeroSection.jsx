// src/components/HeroSection.jsx
import React from "react";
import MainBanner from "../assets/main-banner.jpg"

const HeroSection = ({ title, subtitle}) => {
  return (
    <section className="min-h-[70vh] relative text-white overflow-hidden h-96">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={MainBanner}
          alt={`${title} background`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex items-center h-full px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg mt-4 text-white/80 text-center">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
