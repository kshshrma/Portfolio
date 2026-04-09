"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-50 glass-card bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 md:py-4 flex justify-between items-center rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]"
    >
      <motion.a
        href="#home"
        whileHover={{ 
          rotate: [-5, 5, -5, 5, 0], 
          scale: 1.1 
        }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-black text-white tracking-widest cursor-pointer select-none"
      >
        K.S<span className="text-blue-500">.</span>
      </motion.a>
      
      <div className="hidden md:flex gap-2 items-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/10 group"
          >
            {link.name}
          </a>
        ))}
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact" 
          className="ml-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
        >
          Hire Me
        </motion.a>
      </div>
      
      {/* Mobile Menu Icon */}
      <motion.button 
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white z-50"
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
            className="absolute top-[120%] left-0 right-0 p-4 rounded-2xl glass-card bg-black/90 backdrop-blur-xl border border-white/10 md:hidden flex flex-col gap-2 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-blue-600 hover:bg-blue-500 text-white text-center px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
