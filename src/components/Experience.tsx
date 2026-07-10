"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaBriefcase, FaAward } from "react-icons/fa";

interface MilestoneItem {
  icon: React.ReactNode;
  title: string;
  organization: string;
  date: string;
  description: string;
}

export default function Experience() {
  const experienceItems: MilestoneItem[] = [
    {
      icon: <FaBriefcase className="text-[#3b82f6] text-lg" />,
      title: "Full Stack Web Developer Intern",
      organization: "THIRANEX",
      date: "May - July 2026",
      description: "Worked on MERN stack applications, implemented authentication and REST APIs, and collaborated using Git/GitHub on real-world development tasks.",
    }
  ];

  const achievementItems: MilestoneItem[] = [
    {
      icon: <FaTrophy className="text-[#3b82f6] text-lg" />,
      title: "Winner – Hackathon",
      organization: "IILM University",
      date: "Feb 2025",
      description: "Secured first place by architecting and developing an innovative web service prototype within a rigorous 24-hour time constraint, demonstrating strong technical execution and team coordination.",
    },
    {
      icon: <FaTrophy className="text-[#3b82f6] text-lg" />,
      title: "Second Runner-Up – Hackathon",
      organization: "Tulas University, Dehradun",
      date: "Sept 2025",
      description: "Secured the Second Runner-Up position at Hack The Future 2.0, a prestigious National-Level Hackathon.",
    },
    {
      icon: <FaAward className="text-[#3b82f6] text-lg" />,
      title: "Specially Invited Participant – Data Science Hackathon",
      organization: "IIT Bhubaneswar",
      date: "Feb 2026",
      description: "Invited to participate based on the team's victory in the previous edition, to which I contributed as a team member.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black text-white border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-[#3b82f6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-blue-500 mb-2">05 . Milestones</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Experience & <span className="text-gradient">Achievements</span>
          </h3>
          <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Work Experience */}
          <div>
            <h4 className="text-xl font-extrabold text-white mb-8 flex items-center gap-3 tracking-wide">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <FaBriefcase className="text-blue-500 text-sm" />
              </span>
              WORK EXPERIENCE
            </h4>
            
            <div className="relative border-l border-blue-500/20 ml-4 md:ml-6 space-y-12">
              {experienceItems.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8 md:pl-10 group"
                >
                  {/* Timeline dot with icon */}
                  <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border border-blue-500/20 bg-black flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300">
                    {exp.icon}
                  </div>

                  {/* Card Container */}
                  <div className="glass-card p-6 border border-white/10 rounded-2xl bg-white/[0.01] group-hover:border-blue-500/20 transition-all cursor-pointer">
                    {/* Laser scan line overlay */}
                    <div className="scan-line" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                      <div>
                        <h5 className="font-bold text-white text-lg group-hover:text-blue-500 transition-colors duration-300">
                          {exp.title}
                        </h5>
                        <span className="text-blue-500 text-sm font-medium">{exp.organization}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold w-fit uppercase tracking-wider shrink-0">
                        {exp.date}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements */}
          <div>
            <h4 className="text-xl font-extrabold text-white mb-8 flex items-center gap-3 tracking-wide">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <FaTrophy className="text-blue-500 text-sm" />
              </span>
              ACHIEVEMENTS & HACKATHONS
            </h4>
            
            <div className="relative border-l border-blue-500/20 ml-4 md:ml-6 space-y-12">
              {achievementItems.map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-8 md:pl-10 group"
                >
                  {/* Timeline dot with icon */}
                  <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border border-blue-500/20 bg-black flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300">
                    {ach.icon}
                  </div>

                  {/* Card Container */}
                  <div className="glass-card p-6 border border-white/10 rounded-2xl bg-white/[0.01] group-hover:border-blue-500/20 transition-all cursor-pointer">
                    {/* Laser scan line overlay */}
                    <div className="scan-line" />
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                      <div>
                        <h5 className="font-bold text-white text-lg group-hover:text-blue-500 transition-colors duration-300">
                          {ach.title}
                        </h5>
                        <span className="text-blue-500 text-sm font-medium">{ach.organization}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold w-fit uppercase tracking-wider shrink-0">
                        {ach.date}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
