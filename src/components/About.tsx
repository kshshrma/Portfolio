"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate mouse position relative to center of card
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    // Rotate max 15 degrees
    const rX = -(mouseY / height) * 20;
    const rY = (mouseX / width) * 20;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white py-12 md:py-16">
      {/* Decorative ambient background */}
      <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[250px] h-[250px] bg-blue-900/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Cyberpunk grid overlay for the whole section */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-blue-500 mb-2">01 . Biography</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            About <span className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">Me</span>
          </h3>
          <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 space-y-6 text-gray-300 text-base md:text-lg leading-relaxed"
          >
            <p>
              Hello! My name is <strong className="text-white">Kashish Sharma</strong>, a full stack developer and a computer science student passionate about building clean, functional, and highly scalable applications.
            </p>
            <p>
              I specialize in modern web technologies including React, Next.js, MERN Stack, and Python. I enjoy tackling complex backend challenges, structuring databases, and designing intuitive user interfaces that offer premium user experiences.
            </p>
            <p>
              Beyond coding, I am constantly learning new frameworks, working on data structures and algorithms, and collaborating with developers to bring high-performance applications to life. Welcome to my portfolio!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-80 flex flex-col items-center"
          >
            {/* Hanging ID Card Container */}
            <div className="relative h-[435px] w-full flex flex-col items-center justify-end overflow-visible select-none">
              
              {/* Lanyard Strap / Cord */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[50px] bg-gradient-to-b from-neutral-900 via-blue-900 to-neutral-700 shadow-inner z-0" />
              
              {/* Strap Metal Clip */}
              <div className="absolute top-[45px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-neutral-600 bg-neutral-800 z-10 shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neutral-950" />
              </div>
              <div className="absolute top-[61px] left-1/2 -translate-x-1/2 w-4 h-6 bg-gradient-to-r from-neutral-600 to-neutral-800 border border-neutral-500 rounded-b shadow z-10" />

              {/* ID Card with 3D Tilt & Sway Animation */}
              <div className="w-full flex justify-center [perspective:1000px]">
                <motion.div
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  animate={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    rotateZ: rotateX === 0 && rotateY === 0 ? [-1.5, 1.5, -1.5] : 0,
                    y: rotateX === 0 && rotateY === 0 ? [-3, 3, -3] : 0,
                  }}
                  style={{ 
                    transformOrigin: "top center",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden"
                  }}
                  transition={rotateX === 0 && rotateY === 0 ? {
                    rotateZ: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                    y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                  } : {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="w-80 h-[370px] glass-card border border-blue-500/20 bg-black/90 p-5 rounded-2xl flex flex-col justify-between relative shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-colors duration-300 backdrop-blur-xl"
                >
                  {/* Holographic matrix-like backdrop in card */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_4px] opacity-25 pointer-events-none" />

                  {/* ID Photo Frame */}
                  <div className="relative w-full h-[185px] rounded-xl overflow-hidden border border-blue-500/30 bg-black/80 flex items-center justify-center p-1 group z-10 shadow-inner">
                    {/* Corner accents */}
                    <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-blue-400" />
                    <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-blue-400" />
                    <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-blue-400" />
                    <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-blue-400" />
                    
                    {/* Scanline laser animation overlay */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80 animate-[scan_3s_linear_infinite] pointer-events-none" />

                    <div className="relative w-full h-full rounded-lg overflow-hidden bg-neutral-900 flex items-center justify-center" style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                      <Image 
                        src="/avatar.jpg" 
                        alt="Kashish Sharma" 
                        fill
                        sizes="(max-width: 768px) 300px, 600px"
                        quality={95}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ 
                          objectPosition: 'center 10%',
                          transform: 'translateZ(0)',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden'
                        }}
                        priority
                      />
                    </div>
                  </div>

                  {/* Tech Specs Block - Fast Facts */}
                  <div className="mt-3 flex flex-col gap-1.5 relative z-10">
                    <div className="space-y-1 font-mono text-[13.5px] text-left">
                      <div className="flex justify-between border-b border-blue-500/15 pb-0.5">
                        <span className="text-gray-300 uppercase tracking-widest text-[9.5px]">Role</span>
                        <span className="text-white font-bold">SOFTWARE ENGINEER</span>
                      </div>
                      <div className="flex justify-between border-b border-blue-500/15 pb-0.5">
                        <span className="text-gray-300 uppercase tracking-widest text-[9.5px]">Edu</span>
                        <span className="text-white font-bold">B.TECH CSE</span>
                      </div>
                      <div className="flex justify-between border-b border-blue-500/15 pb-0.5">
                        <span className="text-gray-300 uppercase tracking-widest text-[9.5px]">Skills</span>
                        <span className="text-white font-bold">WEB/APP, DSA, AI</span>
                      </div>
                      <div className="flex justify-between pb-0.5">
                        <span className="text-gray-300 uppercase tracking-widest text-[9.5px]">Focus</span>
                        <span className="text-blue-300 font-bold">SCALABLE ARCH.</span>
                      </div>
                    </div>
                  </div>

                  {/* Barcode & EMV Chip Block */}
                  <div className="mt-3 flex items-center justify-between border-t border-blue-500/20 pt-2 relative z-10">
                    {/* Chip Icon */}
                    <div className="w-8 h-6 rounded bg-gradient-to-br from-yellow-600 via-yellow-400 to-yellow-700 border border-yellow-500 flex flex-wrap p-0.5 opacity-90 shadow-inner">
                      <div className="w-1/2 h-1/2 border-r border-b border-yellow-700/50" />
                      <div className="w-1/2 h-1/2 border-b border-yellow-700/50" />
                      <div className="w-1/2 h-1/2 border-r border-yellow-700/50" />
                      <div className="w-1/2 h-1/2" />
                    </div>

                    {/* Barcode representation */}
                    <div className="flex items-center gap-[1.5px] h-6 overflow-hidden max-w-[120px]">
                      <div className="w-1 h-full bg-blue-500/60" />
                      <div className="w-[2px] h-full bg-blue-500/60" />
                      <div className="w-3 h-full bg-blue-500/60" />
                      <div className="w-[1px] h-full bg-blue-500/60" />
                      <div className="w-2 h-full bg-blue-500/60" />
                      <div className="w-[3px] h-full bg-blue-500/60" />
                      <div className="w-1 h-full bg-blue-500/60" />
                      <div className="w-[1px] h-full bg-blue-500/60" />
                      <div className="w-2 h-full bg-blue-500/60" />
                      <div className="w-[2px] h-full bg-blue-500/60" />
                      <div className="w-1.5 h-full bg-blue-500/60" />
                    </div>
                  </div>

                </motion.div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
