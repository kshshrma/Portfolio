"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 w-full z-50 px-6 md:px-16 transition-all duration-500 flex justify-between items-center border-b ${
        isOpen
          ? "py-4 bg-black/95 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
          : isScrolled 
            ? "py-4 bg-black/20 backdrop-blur-md border-white/5 shadow-lg shadow-black/10" 
            : "py-6 bg-transparent border-transparent shadow-none"
      }`}
    >
      <motion.a
        href="#home"
        whileHover={{ 
          scale: 1.02 
        }}
        transition={{ duration: 0.2 }}
        className="text-lg md:text-xl font-black text-white tracking-wider cursor-pointer select-none"
      >
        Kashish Sharma<span className="text-blue-500">.</span>
      </motion.a>
      
      <div className={`hidden md:flex gap-4 items-center transition-all duration-500 border rounded-full ${
        isScrolled 
          ? "px-4 py-1.5 bg-white/[0.01] backdrop-blur-md border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.4)]" 
          : "px-4 py-1.5 bg-transparent border-transparent shadow-none"
      }`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
          >
            {link.name}
            <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
          </a>
        ))}
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          href="mailto:ks2012150@gmail.com?subject=Hiring Inquiry" 
          className="ml-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.3)] border border-blue-400/20"
        >
          Hire Me
        </motion.a>
      </div>
      
      {/* Mobile Menu Icon */}
      <motion.button 
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white z-50 border border-white/10 relative gap-[5px] focus:outline-none"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 7 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-5 h-[2px] bg-white rounded-full"
        />
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
            scale: isOpen ? 0.5 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-5 h-[2px] bg-white rounded-full"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -7 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-5 h-[2px] bg-white rounded-full"
        />
      </motion.button>
      
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute top-[120%] left-6 right-6 z-40 md:hidden">
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-2xl glass-card bg-black/95 backdrop-blur-xl border border-white/10 flex flex-col gap-2 shadow-[0_0_30px_rgba(0,0,0,0.9)] overflow-hidden"
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
                className="mt-2 bg-blue-600 hover:bg-blue-500 text-white text-center px-6 py-3 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
              >
                Hire Me
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
