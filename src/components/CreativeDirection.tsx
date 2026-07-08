"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFilm, FaPlane, FaVideo, FaLightbulb } from "react-icons/fa";

interface CreativeItem {
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
}

export default function CreativeDirection() {
  const creativeData: CreativeItem[] = [
    {
      icon: <FaFilm className="text-[#ff2a2a] text-2xl" />,
      badge: "50+ Reels Created",
      title: "Cinematic Reels",
      description: "Visual stories crafted through detailed color grading, sound design, and rhythm-based pacing.",
    },
    {
      icon: <FaPlane className="text-[#ff2a2a] text-2xl" />,
      badge: "15+ Cities",
      title: "Travel Videos",
      description: "Immersive travel logs showcasing architecture, street culture, and landscape cinematography.",
    },
    {
      icon: <FaVideo className="text-[#ff2a2a] text-2xl" />,
      badge: "100k+ Views",
      title: "Educational Reels",
      description: "Fast-paced tech reels explaining developer concepts, tips, and workflow automations.",
    },
    {
      icon: <FaLightbulb className="text-[#ff2a2a] text-2xl" />,
      badge: "Personal Projects",
      title: "Creative Edits",
      description: "Experimental visual projects combining glitch art, speed ramping, and unique audio synching.",
    },
  ];

  return (
    <section id="creative" className="py-24 relative overflow-hidden bg-black text-white border-t border-white/5">
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-[#ff2a2a]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#ff2a2a] mb-2">05 . Visual Arts</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Creative <span className="text-gradient">Direction</span>
          </h3>
          <div className="w-12 h-1 bg-[#ff2a2a] mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {creativeData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 border border-white/10 rounded-2xl bg-white/[0.01] flex gap-6 items-start hover:border-[#ff2a2a]/20 transition-all cursor-pointer"
            >
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 shrink-0">
                {item.icon}
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#ff2a2a] uppercase bg-[#ff2a2a]/10 px-2.5 py-0.5 rounded-full tracking-wider border border-[#ff2a2a]/10">
                  {item.badge}
                </span>
                <h4 className="font-bold text-white text-lg">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://github.com/kshshrma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#ff2a2a] hover:bg-[#ff4444] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-[0_4px_20px_rgba(255,42,42,0.3)] hover:shadow-[0_4px_25px_rgba(255,42,42,0.5)] cursor-pointer"
          >
            <FaInstagram size={16} /> Follow My Edits on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
