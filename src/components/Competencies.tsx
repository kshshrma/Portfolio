"use client";

import { motion } from "framer-motion";

interface CompetencyItem {
  id: string;
  title: string;
  description: string;
}

export default function Competencies() {
  const competencies: CompetencyItem[] = [
    {
      id: "01",
      title: "Leadership",
      description: "Steering project execution, aligning objectives, and empowering teammates to deliver high-quality code.",
    },
    {
      id: "02",
      title: "Public Speaking",
      description: "Conveying technical frameworks, project architectures, and slides with absolute clarity to stakeholders.",
    },
    {
      id: "03",
      title: "Team Collaboration",
      description: "Integrating ideas across multidisciplinary teams, utilizing git branch reviews, and coordinating product features.",
    },
    {
      id: "04",
      title: "Communication",
      description: "Bridging the gap between engineering specifications and functional user design requirements.",
    },
    {
      id: "05",
      title: "Problem Solving",
      description: "Deconstructing challenging architectural issues into clean, incremental milestones.",
    },
    {
      id: "06",
      title: "Adaptability",
      description: "Pivoting stack choices and refactoring architectures in fast-paced hackathons and sprint settings.",
    },
    {
      id: "07",
      title: "Creativity",
      description: "Blending software logic with visual components to engineer delightful and responsive user interfaces.",
    },
    {
      id: "08",
      title: "Time Management",
      description: "Deploying high-quality software MVPs within restrictive 24-48 hour hackathon sprint constraints.",
    },
  ];

  return (
    <section id="competencies" className="py-24 relative overflow-hidden bg-black text-white border-t border-white/5">
      <div className="absolute top-[50%] right-[-10%] w-[300px] h-[300px] bg-[#3b82f6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-blue-500 mb-2">07 . Soft Skills</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Core <span className="text-gradient">Competencies</span>
          </h3>
          <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((comp, idx) => (
            <motion.div
              key={comp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 border border-white/10 rounded-2xl bg-white/[0.01] hover:border-blue-500/20 transition-all flex flex-col justify-between cursor-pointer min-h-[180px] group"
            >
              {/* Laser scan line overlay */}
              <div className="scan-line" />
              <div>
                <span className="text-xs font-black text-blue-500 select-none block mb-3 opacity-60 group-hover:opacity-100 transition-opacity">
                  {comp.id} //
                </span>
                <h4 className="font-bold text-white text-base mb-2">{comp.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{comp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
