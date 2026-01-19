"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useFlickerAnimation } from "../hooks/useFlickerAnimation";

// Variants for the Background/Lighting
const lightVariants: Variants = {
  on: {
    opacity: 1,
    filter: "brightness(1) contrast(1)",
  },
  dim: {
    opacity: 0.6,
    filter: "brightness(0.7) contrast(1.1)",
  },
  off: {
    opacity: 0.1, // Near total darkness but not 0 to keep faint shapes visible
    filter: "brightness(0.2) contrast(1.2)",
  },
};

const HeroFlicker: React.FC = () => {
  const controls = useFlickerAnimation();

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black -z-10">
      {/* 1. Base Dark Background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* 2. Film Grain Overlay (Subtle) */}
      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 3. The Flickering Light Source (Background Illumination) */}
      <motion.div
        animate={controls}
        variants={lightVariants}
        initial="on"
        className="absolute inset-0 z-[1] bg-radial-gradient from-gray-800 to-black"
        style={{
          background: "radial-gradient(circle at center, rgba(30, 40, 40, 1) 0%, rgba(0,0,0,1) 80%)",
        }}
      />

      {/* 4. Vignette (Static, on top of light) */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, transparent 30%, black 100%)",
        }}
      />
    </div>
  );
};

export default HeroFlicker;
