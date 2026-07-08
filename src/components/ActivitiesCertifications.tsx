"use client";

import { motion } from "framer-motion";
import { FaUsers, FaAward, FaExternalLinkAlt, FaGraduationCap, FaMicrophone, FaServer } from "react-icons/fa";

interface ActivityItem {
  icon: React.ReactNode;
  role: string;
  org: string;
  category: string;
}

interface CertificationItem {
  title: string;
  issuer: string;
}

export default function ActivitiesCertifications() {
  const activities: ActivityItem[] = [
    {
      icon: <FaUsers className="text-[#ff2a2a]" />,
      role: "Social Media Coordinator",
      org: "IEEE Madhya Pradesh Section (Volunteer)",
      category: "Media Coordinator",
    },
    {
      icon: <FaAward className="text-[#ff2a2a]" />,
      role: "Team Coordinator",
      org: "Go-Kart International Racing 2K25 (Leadership)",
      category: "Management",
    },
    {
      icon: <FaGraduationCap className="text-[#ff2a2a]" />,
      role: "Bootcamp Graduate",
      org: "5-Day MOE IDE Bootcamp, IIT Roorkee (Innovation)",
      category: "Innovation",
    },
    {
      icon: <FaAward className="text-[#ff2a2a]" />,
      role: "Hackathon Organizer",
      org: "Hosted INFORIA Tech Summit (Co-Curricular)",
      category: "Coordination",
    },
    {
      icon: <FaMicrophone className="text-[#ff2a2a]" />,
      role: "Stage Anchor & Coordinator",
      org: "Event Management - INFORIA 2K25 (Public Speaking)",
      category: "Public Speaking",
    },
  ];

  const certifications: CertificationItem[] = [
    { title: "Oracle Cloud Infrastructure 2025 Associate", issuer: "Oracle" },
    { title: "Programming in Java (Score: 94%)", issuer: "NPTEL" },
    { title: "C Programming & Assembly Language", issuer: "NPTEL" },
    { title: "Technology Job Simulation", issuer: "Deloitte" },
    { title: "Career Edge – IT Primer", issuer: "TCS iON" },
    { title: "Fundamentals of BI & Analytics", issuer: "Lumenore" },
  ];

  return (
    <section id="activities" className="py-24 relative overflow-hidden bg-black text-white border-t border-white/5">
      {/* Decorative ambient background */}
      <div className="absolute top-[30%] left-[-10%] w-[300px] h-[300px] bg-[#ff2a2a]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#ff2a2a] mb-2">06 . Outside Code</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Activities & <span className="text-gradient">Certifications</span>
          </h3>
          <div className="w-12 h-1 bg-[#ff2a2a] mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h4 className="font-bold text-white text-xl mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#ff2a2a] rounded-full inline-block"></span>
              Leadership & Engagement
            </h4>

            <div className="space-y-4">
              {activities.map((act, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 border border-white/10 rounded-xl bg-white/[0.01] flex items-center gap-4 hover:border-[#ff2a2a]/20 transition-all"
                >
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                    {act.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm md:text-base">{act.role}</h5>
                    <p className="text-gray-400 text-xs mt-0.5">{act.org}</p>
                    <span className="inline-block mt-2 text-[9px] font-bold tracking-wider text-[#ff2a2a] uppercase bg-[#ff2a2a]/10 px-2 py-0.5 rounded border border-[#ff2a2a]/10">
                      {act.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 lg:pl-6"
          >
            <h4 className="font-bold text-white text-xl mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#ff2a2a] rounded-full inline-block"></span>
              Certifications
            </h4>

            <div className="glass-card p-6 border border-white/10 rounded-2xl bg-white/[0.01] space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
                >
                  <div>
                    <h5 className="font-bold text-white text-sm md:text-base leading-tight">{cert.title}</h5>
                    <span className="text-gray-400 text-xs mt-1 block">{cert.issuer}</span>
                  </div>
                  <FaServer className="text-white/20 text-sm shrink-0 ml-4" />
                </div>
              ))}
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <a
                href="https://drive.google.com/file/d/1ObdGWtVSx8SsfR4AcbCySSd9LFXcAs9f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-[#ff2a2a] hover:bg-[#ff2a2a]/10 text-white font-bold py-3.5 rounded-xl transition-all text-sm tracking-wide shadow-lg"
              >
                <FaExternalLinkAlt size={12} /> View All Certificates
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
