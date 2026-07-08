"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Helper component for floating hexagons
const Hexagon = ({ size, x, y, opacity, springX, springY, parallax }: any) => {
  // Convert cursor position to a parallax offset
  // We use useTransform to map the 0-100% window position to a relatively small pixel shift
  const [windowSize, setWindowSize] = useState({ w: 1000, h: 1000 });
  
  useEffect(() => {
    setWindowSize({ w: window.innerWidth, h: window.innerHeight });
  }, []);

  const offsetX = useTransform(springX, [0, windowSize.w], [50 * parallax, -50 * parallax]);
  const offsetY = useTransform(springY, [0, windowSize.h], [50 * parallax, -50 * parallax]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        opacity: opacity,
        x: offsetX,
        y: offsetY,
      }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="currentColor"
        className="text-[#ff2a2a]"
      >
        <polygon points="50 3 93 25 93 75 50 97 7 75 7 25" />
      </svg>
    </motion.div>
  );
};

export default function TechBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  // Floating Hexagons Data (more subtle)
  const hexagons = [
    { id: 1, size: 70, x: 10, y: 20, parallax: 0.5, opacity: 0.05 },
    { id: 2, size: 120, x: 80, y: 15, parallax: -0.4, opacity: 0.03 },
    { id: 3, size: 40, x: 75, y: 75, parallax: 0.6, opacity: 0.06 },
    { id: 4, size: 150, x: 5, y: 80, parallax: -0.3, opacity: 0.02 },
    { id: 5, size: 90, x: 45, y: 85, parallax: 0.3, opacity: 0.04 },
    { id: 6, size: 50, x: 30, y: 35, parallax: -0.5, opacity: 0.05 },
    { id: 7, size: 60, x: 90, y: 50, parallax: 0.4, opacity: 0.04 },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    mouseX.set(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
    mouseY.set(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#000000]">
      {/* Dark Ambient Grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Interactive Cursor Gradient Glow (Red) */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none will-change-transform"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(255, 42, 42, 0.07) 0%, rgba(255, 42, 42, 0.02) 45%, transparent 70%)"
        }}
      />

      {/* Floating Hexagons */}
      {hexagons.map((hex) => (
        <Hexagon key={hex.id} {...hex} springX={springX} springY={springY} />
      ))}
      
      {/* Static Atmospheric Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#ff2a2a]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#ff2a2a]/5 rounded-full blur-[130px] pointer-events-none" />
    </div>
  );
}
