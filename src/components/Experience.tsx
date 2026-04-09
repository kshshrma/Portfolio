"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaCode } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      icon: <FaTrophy className="text-yellow-400" />,
      title: "Winner – Hackathon",
      organization: "IILM University",
      date: "Feb 2025",
      description: "Secured first place by developing an innovative project prototype within a rigorous 24-hour time constraint, showcasing excellent technical and teamwork skills."
    },
    {
      icon: <FaTrophy className="text-orange-400" />,
      title: "Second Runner-Up – Hackathon",
      organization: "Tula's Institute",
      date: "Sept 2025",
      description: "Participated and achieved the second runner-up position, successfully integrating and presenting a robust software solution."
    },
    {
      icon: <FaTrophy className="text-blue-400" />,
      title: "Data Science Hackathon Participant",
      organization: "IIT Bhubaneswar - Pravaah'26",
      date: "2026",
      description: "Competed in an intense data science hackathon, applying machine learning models to solve real-world problems and collaborating with talented developers."
    },
    {
      icon: <FaCertificate className="text-purple-400" />,
      title: "Multiple Hackathon Participations",
      organization: "Various Tech Events",
      date: "2025 - Present",
      description: "Earned several participation certificates across regional and national hackathons, continuously challenging myself to build MVPs within 24-48 hours."
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & <span className="text-gradient">Achievements</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ x: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active cursor-pointer"
            >
              {/* Icon */}
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-gray-900 glass-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              >
                {exp.icon}
              </motion.div>
              
              {/* Card */}
              <motion.div 
                whileHover={{ scale: 1.03, boxShadow: "0px 0px 30px rgba(139, 92, 246, 0.2)" }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8 rounded-2xl hover:border-blue-500/30 transition-all border border-transparent"
              >
                <div className="flex flex-col md:flex-row justify-between mb-2 gap-2">
                  <h3 className="font-bold text-xl text-white">{exp.title}</h3>
                  <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full whitespace-nowrap w-fit">{exp.date}</span>
                </div>
                <h4 className="text-purple-300 font-medium mb-4">{exp.organization}</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
