"use client";

import { motion, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaAndroid, FaGithub, FaRobot, FaReact, FaNodeJs, FaDatabase, FaPython, FaJava } from "react-icons/fa";
import { SiCplusplus, SiGit, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface AboutProps {
  isAboutInView?: boolean;
  setIsAboutInView?: (val: boolean) => void;
}

export default function About({ isAboutInView = false, setIsAboutInView }: AboutProps) {
  const skills = [
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "HTML/CSS", icon: <div className="flex gap-1"><FaHtml5 className="text-[#E34F26]"/><FaCss3Alt className="text-[#1572B6]"/></div> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
    { name: "REST APIs", icon: <TbApi className="text-gray-300" /> },
    { name: "MERN Stack", icon: <FaDatabase className="text-pink-500" /> },
    { name: "Android App Dev", icon: <FaAndroid className="text-[#3DDC84]" /> },
    { name: "AI/ML (Basic)", icon: <FaRobot className="text-blue-400" /> },
    { name: "Git & GitHub", icon: <div className="flex gap-1"><SiGit className="text-[#F05032]"/><FaGithub className="text-white"/></div> },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  useEffect(() => {
    if (setIsAboutInView) {
      setIsAboutInView(isInView);
    }
  }, [isInView, setIsAboutInView]);

  return (
    <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-4 justify-center">
            {isAboutInView && (
              <motion.div 
                layoutId="profile-img"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8 }}
                className="w-12 h-12 md:w-14 md:h-14 !rounded-full p-0.5 glass-card relative overflow-hidden z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                <Image 
                  src="/profile_photo.png" 
                  alt="Kashish Sharma" 
                  fill
                  className="object-cover rounded-full"
                />
              </motion.div>
            )}
            <h2 className="text-4xl md:text-5xl font-bold">About <span className="text-gradient">Me</span></h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex-1 glass-card p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Who am I?</h3>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I am a passionate 2nd-year BTech Computer Science student with a strong interest in problem-solving and modern technology. While I specialize in mobile app and web development, I am actively enhancing my proficiency in Data Structures and Algorithms by consistently solving problems across varying difficulty levels.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Beyond academics, I actively participate in hackathons (including a recent Data Science competition at IIT Bhubaneswar). I thrive in fast-paced environments where I can design and build real-world intelligent systems and interactive applications from the ground up.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <h3 className="text-2xl font-bold mb-6 text-white text-center md:text-left">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [-3, 3, -3, 3, 0],
                    boxShadow: "0px 0px 20px rgba(255,255,255,0.2)"
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="text-2xl shrink-0">{skill.icon}</div>
                  <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
