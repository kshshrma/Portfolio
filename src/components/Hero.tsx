"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

interface HeroProps {
  isAboutInView?: boolean;
}

export default function Hero({ isAboutInView = false }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 md:pt-40 pb-10 px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto z-10 flex flex-col items-center gap-8 justify-center h-full">
        <div className="h-48 md:h-64 flex items-center justify-center">
          {!isAboutInView && (
            <motion.div 
              layoutId="profile-img"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="w-48 h-48 md:w-64 md:h-64 !rounded-full p-2 glass-card relative overflow-hidden z-20 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            >
              <Image 
                src="/profile_photo.png" 
                alt="Kashish Sharma" 
                fill
                priority
                className="object-cover rounded-full"
              />
            </motion.div>
          )}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center text-center space-y-6 max-w-3xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium text-sm"
          >
            Full Stack Developer | Database Manager | DSA & Problem Solving
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <br className="md:hidden" />
            <span className="text-gradient">Kashish Sharma</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 font-medium h-12">
            I build{" "}
            <TypeAnimation
              sequence={[
                "Scalable Apps",
                2000,
                "AI Solutions",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="font-bold text-white"
              repeat={Infinity}
            />
          </div>
          
          <p className="text-gray-400 max-w-2xl leading-relaxed text-base md:text-lg mx-auto">
            A BTech Computer Science student specializing in crafting 
            forward-thinking web sites, and solving real life problems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center gap-2"
            >
              View Projects
              <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" 
              download 
              className="glass-card border border-white/20 hover:border-purple-400/50 px-8 py-3.5 rounded-full font-semibold transition-all text-white flex items-center gap-2"
            >
              <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
