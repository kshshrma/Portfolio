"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 w-full z-50 px-6 md:px-16 py-6 flex justify-between items-center bg-transparent"
    >
      <motion.a
        href="#home"
        whileHover={{ 
          scale: 1.02 
        }}
        transition={{ duration: 0.2 }}
        className="text-lg md:text-xl font-black text-white tracking-wider cursor-pointer select-none"
      >
        Kashish Sharma<span className="text-[#ff2a2a]">.</span>
      </motion.a>
      
      <div className="hidden md:flex gap-4 items-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            {link.name}
            <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </a>
        ))}
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:ks2012150@gmail.com?subject=Hiring Inquiry" 
          className="ml-2 border border-white/20 hover:border-white text-white px-5 py-1.5 rounded-full text-xs font-bold transition-all bg-transparent"
        >
          Hire Me
        </motion.a>
      </div>
      
      {/* Mobile Menu Icon */}
      <motion.button 
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white z-50 border border-white/10"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </motion.button>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[120%] left-6 right-6 p-4 rounded-2xl glass-card bg-black/95 backdrop-blur-xl border border-white/10 md:hidden flex flex-col gap-2 shadow-[0_0_30px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="mailto:ks2012150@gmail.com?subject=Hiring Inquiry" 
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-[#ff2a2a] hover:bg-[#ff4444] text-white text-center px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(255,42,42,0.4)]"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
