"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPlay, FaStop, FaDownload } from "react-icons/fa";

interface HeroProps {
  isAboutInView?: boolean;
}

export default function Hero({ isAboutInView = false }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => {
        console.error("Video play failed:", err);
      });
    }
  };

  const stopPlayback = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 md:pt-32 pb-8 bg-black">
      
      {/* Background Video Layer (Wide Full Screen, aligned to top/right-top so head is never cropped) */}
      <div className="absolute inset-0 z-0 select-none">
        <video
          ref={videoRef}
          src="/avatar_background_video.mp4#t=0.001"
          playsInline
          preload="auto"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full object-cover object-top md:object-right-top select-none pointer-events-none"
        />
        {/* Dark Vignette Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent z-1 pointer-events-none" />
      </div>

      {/* Floating Vertical Social Bar (Very Left Margin) */}
      <div className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        <a 
          href="https://github.com/kshshrma" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 hover:border-white flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
          title="GitHub"
        >
          <FaGithub size={18} />
        </a>
        <a 
          href="https://www.linkedin.com/in/kashish-sharma-240939322/?skipRedirect=true" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 hover:border-white flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
          title="LinkedIn"
        >
          <FaLinkedin size={18} />
        </a>
        <a 
          href="mailto:ks2012150@gmail.com" 
          className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 hover:border-white flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
          title="Email"
        >
          <FaEnvelope size={18} />
        </a>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto z-10 flex flex-col md:flex-row items-center gap-8 justify-between h-full max-w-6xl relative pl-16 md:pl-24 pr-6">
        
        {/* Left Column: Text Content and standard buttons */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col space-y-4 text-left max-w-xl z-10"
        >
          <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 font-semibold text-xs w-fit uppercase tracking-wider">
            Available for Opportunities
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-[54px] font-black leading-tight tracking-tight text-white">
            Hi, I'm <br />
            <span className="text-white">Kashish Sharma,</span>
            <span className="block mt-1 text-2xl md:text-4xl lg:text-[46px] font-black leading-none text-white/90">
              Full Stack <span className="text-transparent [-webkit-text-stroke:1.5px_#38bdf8]">& Software Developer</span>
            </span>
          </h1>
          
          <p className="text-neutral-300 leading-relaxed text-xs md:text-sm font-medium max-w-lg">
            I build fast, scalable applications using React, Next.js, MERN Stack, and Python. 
            Computer science student passionate about building scalable apps.
          </p>

          {/* CTA Buttons Block */}
          <div className="flex flex-wrap gap-3 pt-2">
            <motion.a 
              whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              href="#projects" 
              className="bg-white hover:bg-neutral-100 text-black px-5 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all"
            >
              View My Work
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              href="mailto:ks2012150@gmail.com" 
              className="border-2 border-white/20 px-5 py-2.5 rounded-full font-bold text-xs md:text-sm text-white bg-transparent transition-all"
            >
              Contact Me
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              href="/kashishSharma.pdf" 
              download
              className="border-2 border-white/20 px-5 py-2.5 rounded-full font-bold text-xs md:text-sm text-white bg-transparent transition-all flex items-center gap-1.5"
            >
              <FaDownload size={10} /> Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Empty space for background visualization and Play Reel button */}
        <div className="flex-1 w-full h-[200px] md:h-[400px] mt-8 md:mt-0 relative flex items-center justify-center pointer-events-none">
          {!isPlaying && (
            <div className="flex flex-col items-center gap-3 select-none pointer-events-none">
              <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)" }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-blue-500 bg-blue-500/10 flex items-center justify-center text-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] cursor-pointer z-10 pointer-events-auto"
                title="Play Reel"
              >
                <FaPlay size={22} className="translate-x-[2px] text-white" />
              </motion.button>

              {/* PLAY REEL text below the button */}
              <span className="text-[10px] md:text-[12px] text-white font-extrabold tracking-widest uppercase z-10 pointer-events-none drop-shadow-md">
                PLAY REEL
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Floating Stop Button (visible only when playing) */}
      <AnimatePresence>
        {isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={stopPlayback}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-2 bg-black/80 hover:bg-blue-600 text-white border border-white/10 px-5 py-2.5 rounded-full font-bold text-xs shadow-lg transition-all backdrop-blur-md whitespace-nowrap"
          >
            <FaStop size={10} /> Stop Reel
          </motion.button>
        )}
      </AnimatePresence>

    </section>
  );
}
