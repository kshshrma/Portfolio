"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Decorative ambient background */}
      <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] bg-[#ff2a2a]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#ff2a2a] mb-2">01 . Biography</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            About <span className="text-gradient">Me</span>
          </h3>
          <div className="w-12 h-1 bg-[#ff2a2a] mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 space-y-6 text-gray-300 text-base md:text-lg leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700"
          >
            <p>
              Hello! My name is <strong className="text-white">Kashish Sharma</strong>, an aspiring software engineer dedicated to crafting clean, functional, and highly scalable applications.
            </p>
            <p>
              I am currently pursuing my B.Tech in Computer Science, specializing in modern web technologies, database management, and mobile app development. I enjoy tackling complex logic and improving my problem-solving abilities by consistently working through Data Structures and Algorithms.
            </p>
            <p>
              Beyond coding, I actively participate in hackathons and tech events, building and launching MVPs under tight timelines. I love collaborating with multi-functional teams to build products that solve real-world problems and offer intuitive, premium user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-80 flex flex-col gap-6"
          >
            {/* Profile Image Frame */}
            <div className="glass-card p-3 border border-white/10 rounded-2xl relative overflow-hidden group">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/5 group-hover:border-[#ff2a2a]/20 transition-all duration-300">
                <Image 
                  src="/profile_photo.png" 
                  alt="Kashish Sharma" 
                  fill
                  sizes="(max-w-768px) 100vw, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
              </div>
            </div>

            {/* Fast Facts Card */}
            <div className="glass-card p-6 border border-white/10 rounded-2xl relative overflow-hidden bg-white/[0.01]">
              <div className="space-y-4">
                <h4 className="font-bold text-white text-lg">Fast Facts</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Role</span>
                    <span className="text-white font-medium">Software Engineer</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Education</span>
                    <span className="text-white font-medium">B.Tech CSE</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-gray-400">Interests</span>
                    <span className="text-white font-medium">Web/App Dev, DSA, AI</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-gray-400">Focus</span>
                    <span className="text-[#ff2a2a] font-semibold">Scalable Architectures</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
