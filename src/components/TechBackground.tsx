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
        className="text-[#98618f]"
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

  // Floating Hexagons Data
  const hexagons = [
    { id: 1, size: 90, x: 15, y: 25, parallax: 0.8, opacity: 0.15 },
    { id: 2, size: 140, x: 75, y: 15, parallax: -0.6, opacity: 0.1 },
    { id: 3, size: 50, x: 80, y: 70, parallax: 0.9, opacity: 0.2 },
    { id: 4, size: 180, x: 10, y: 75, parallax: -0.5, opacity: 0.08 },
    { id: 5, size: 100, x: 50, y: 85, parallax: 0.4, opacity: 0.15 },
    { id: 6, size: 60, x: 35, y: 40, parallax: -0.8, opacity: 0.2 },
    { id: 7, size: 70, x: 90, y: 40, parallax: 0.5, opacity: 0.15 },
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
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-gradient-to-br from-[#2f1837] via-[#211126] to-[#120815]">
      
      {/* Interactive Cursor Gradient Glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none will-change-transform"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(144, 76, 142, 0.15) 0%, rgba(100, 48, 102, 0.1) 40%, transparent 70%)"
        }}
      />

      {/* Floating Hexagons */}
      {hexagons.map((hex) => (
        <Hexagon key={hex.id} {...hex} springX={springX} springY={springY} />
      ))}
      
      {/* Static Atmospheric Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#4a2249]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-[#321734]/30 rounded-full blur-[150px] pointer-events-none" />
    </div>
  );
}
