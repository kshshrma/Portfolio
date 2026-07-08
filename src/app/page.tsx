"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ActivitiesCertifications from "@/components/ActivitiesCertifications";
import Competencies from "@/components/Competencies";
import Contact from "@/components/Contact";
import TechBackground from "@/components/TechBackground";
import { LayoutGroup } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-transparent min-h-screen text-slate-50 selection:bg-[#ff2a2a]/30">
      <TechBackground />
      <LayoutGroup>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Process />
        <Projects />
        <Experience />
        <ActivitiesCertifications />
        <Competencies />
        <Contact />
        
        {/* Footer */}
        <footer className="border-t border-white/5 py-12 bg-black text-gray-500 text-sm relative z-10 overflow-hidden">
          <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h5 className="text-white font-bold text-base mb-1">Kashish Sharma</h5>
              <p className="text-gray-400 text-xs">B.Tech Computer Science & Engineering</p>
            </div>
            
            <div className="flex gap-6 items-center">
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="flex gap-4 items-center">
              <a 
                href="https://github.com/kshshrma" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                <FaGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kashish-sharma-240939322/?skipRedirect=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 text-center text-xs text-gray-600">
            <p>© {new Date().getFullYear()} Kashish Sharma. All rights reserved.</p>
            <p className="mt-1">Replica Portfolio built with React, Next.js, and Framer Motion.</p>
          </div>
        </footer>
      </LayoutGroup>
    </main>
  );
}

