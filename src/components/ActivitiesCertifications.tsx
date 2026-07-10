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
      icon: <FaUsers className="text-[#3b82f6]" />,
      role: "Technical Event Coordinator",
      org: "Hosted Technical Event at Sharda University (Leadership)",
      category: "EVENT MANAGEMENT",
    },
    {
      icon: <FaMicrophone className="text-[#3b82f6]" />,
      role: "Stage Host & Team Coordinator",
      org: "Technical Event, Sharda University (Public Speaking)",
      category: "COORDINATION",
    },
    {
      icon: <FaAward className="text-[#3b82f6]" />,
      role: "NCC Orientation Programme Host",
      org: "NCC Orientation Anchor - Briefed Freshers on NCC Activities and Opportunities (Leadership)",
      category: "PUBLIC SPEAKING",
    },
    {
      icon: <FaAward className="text-[#3b82f6]" />,
      role: "Company Senior",
      org: "NCC Camp - Managed responsibility of the entire company of 90 cadets (Leadership)",
      category: "CAMP LEADERSHIP",
    },
  ];

  const certifications: CertificationItem[] = [
    {
      title: "Applied Database Systems using Oracle AI Database",
      issuer: "Oracle Academy",
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      issuer: "AWS Academy",
    },
    {
      title: "Participant - INFUSION SUSTAIN-A-THON 2025",
      issuer: "IEEE Student Chapter & Sharda School of CSE, Sharda University",
    },
    {
      title: "Participant - Internal Smart India Hackathon (SIH) 2025",
      issuer: "Sharda School of CSE, Sharda University",
    },
    {
      title: "Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy (Dr. Angela Yu)",
    },
    {
      title: "Participant - PIC 2025 Hackathon",
      issuer: "Sharda University",
    },
    {
      title: "React Mastery Workshop",
      issuer: "GitHub Club, Technova at Sharda University",
    },
    {
      title: "Participant - 6th Technovation Hackathon",
      issuer: "Sharda University, Greater Noida",
    },
  ];

  return (
    <section id="activities" className="py-24 relative overflow-hidden bg-black text-white border-t border-white/5">
      {/* Decorative ambient background */}
      <div className="absolute top-[30%] left-[-10%] w-[300px] h-[300px] bg-[#3b82f6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-blue-500 mb-2">06 . Outside Code</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Activities & <span className="text-gradient">Certifications</span>
          </h3>
          <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full"></div>
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
              <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
              Leadership & Engagement
            </h4>

            <div className="space-y-4">
              {activities.map((act, index) => (
                <div 
                  key={index}
                  className="glass-card p-4 border border-white/10 rounded-xl bg-white/[0.01] flex items-center gap-4 hover:border-blue-500/20 transition-all"
                >
                  {/* Laser scan line overlay */}
                  <div className="scan-line" />
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
                    {act.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm md:text-base">{act.role}</h5>
                    <p className="text-gray-400 text-xs mt-0.5">{act.org}</p>
                    <span className="inline-block mt-2 text-[9px] font-bold tracking-wider text-blue-400 uppercase bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/10">
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
              <span className="w-1.5 h-6 bg-blue-500 rounded-full inline-block"></span>
              Certifications
            </h4>

            <div 
              style={{ overflowY: "auto" }}
              className="glass-card p-6 border border-blue-500/10 hover:border-blue-500/20 rounded-2xl bg-black/80 shadow-[0_0_20px_rgba(37,99,235,0.02)] transition-all duration-300 space-y-4 max-h-[520px] overflow-y-auto pr-3"
            >
              {/* Laser scan line overlay */}
              <div className="scan-line" />
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
