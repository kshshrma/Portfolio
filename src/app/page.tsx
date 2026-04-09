"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import TechBackground from "@/components/TechBackground";
import { LayoutGroup } from "framer-motion";

export default function Home() {
  const [isAboutInView, setIsAboutInView] = useState(false);

  return (
    <main className="relative bg-transparent min-h-screen text-slate-50 selection:bg-purple-500/30">
      <TechBackground />
      <LayoutGroup>
        <Navbar />
        <Hero isAboutInView={isAboutInView} />
        <About setIsAboutInView={setIsAboutInView} isAboutInView={isAboutInView} />
        <Projects />
        <Experience />
        <Contact />
        
        {/* Footer */}
        <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Kashish Sharma. All rights reserved.</p>
          <p className="mt-2">Built with React, Next.js, and Framer Motion.</p>
        </footer>
      </LayoutGroup>
    </main>
  );
}
