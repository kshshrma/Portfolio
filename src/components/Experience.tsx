"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaCertificate } from "react-icons/fa";

interface ExperienceItem {
  icon: React.ReactNode;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      icon: <FaTrophy className="text-[#ff2a2a] text-lg" />,
      title: "Winner – Hackathon",
      organization: "IILM University",
      date: "Feb 2025",
      description: "Secured first place by architecting and developing an innovative web service prototype within a rigorous 24-hour time constraint, demonstrating strong technical execution and team coordination.",
    },
    {
      icon: <FaTrophy className="text-[#ff2a2a] text-lg" />,
      title: "Second Runner-Up – Hackathon",
      organization: "Tula's Institute",
      date: "Sept 2025",
      description: "Participated and achieved the second runner-up position, successfully integrating complex APIs and presenting a robust software MVP to the evaluation panel.",
    },
    {
      icon: <FaTrophy className="text-[#ff2a2a] text-lg" />,
      title: "Data Science Hackathon Participant",
      organization: "IIT Bhubaneswar - Pravaah'26",
      date: "2026",
      description: "Competed in an intense data science hackathon, applying classification machine learning models to solve real-world dataset problems and collaborating with fellow developers.",
    },
    {
      icon: <FaCertificate className="text-[#ff2a2a] text-lg" />,
      title: "Multiple Hackathon Participations",
      organization: "Various Regional Tech Events",
      date: "2025 - Present",
      description: "Earned several achievements across regional and national hackathons, consistently designing and launching responsive products within short 24-48 hour hack sprints.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black text-white border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-[#ff2a2a]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#ff2a2a] mb-2">05 . Milestones</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Experience & <span className="text-gradient">Achievements</span>
          </h3>
          <div className="w-12 h-1 bg-[#ff2a2a] mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline dot with icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border border-white/10 bg-black flex items-center justify-center group-hover:border-[#ff2a2a] group-hover:bg-[#ff2a2a]/10 transition-all duration-300">
                {exp.icon}
              </div>

              {/* Card Container */}
              <div className="glass-card p-6 md:p-8 border border-white/10 rounded-2xl bg-white/[0.01] group-hover:border-[#ff2a2a]/20 transition-all cursor-pointer">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h4 className="font-bold text-white text-xl group-hover:text-[#ff2a2a] transition-colors duration-300">
                      {exp.title}
                    </h4>
                    <span className="text-[#ff2a2a] text-sm font-medium">{exp.organization}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold w-fit uppercase tracking-wider">
                    {exp.date}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
