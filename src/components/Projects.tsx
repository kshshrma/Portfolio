"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  status?: string;
}

export default function Projects() {
  const projectsData: ProjectItem[] = [
    {
      id: "01",
      title: "BharatVerse",
      description: "An enterprise-grade cultural e-commerce platform showcasing and representing Indian states, heritage, and regional crafts globally.",
      tech: ["React", "Next.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/kshshrma/Bharat.Versee",
      status: "Demo Coming Soon",
    },
    {
      id: "02",
      title: "SwachhSetu",
      description: "A smart environmental clean-up platform connecting municipal authorities with local volunteers, featuring real-time reporting, coordinate mapping, and task tracking.",
      tech: ["HTML5", "CSS3", "JavaScript", "Leaflet Maps API", "REST API"],
      github: "https://github.com/kshshrma/SwachhSetu-",
      demo: "https://github.com/kshshrma/SwachhSetu-",
    },
    {
      id: "03",
      title: "TaskScheduling",
      description: "A high-performance algorithmic scheduling dashboard visualizing OS scheduling, priority task routing, and queue execution efficiency metrics.",
      tech: ["React", "Node.js", "Java", "DSA Algorithms", "Chart.js"],
      github: "https://github.com/kshshrma/TaskSchedulingg",
    },
    {
      id: "04",
      title: "TextDetection OCR",
      description: "A Python-based computer vision tool integrating Optical Character Recognition (OCR) to gracefully detect, extract, and format text from image sheets and raw scans.",
      tech: ["Python", "OpenCV", "Tesseract OCR", "PIL", "Tkinter"],
      github: "https://github.com/kshshrma/text-detection",
    },
    {
      id: "05",
      title: "Real-Time ObjectDetection",
      description: "An intelligent AI camera integration utilizing deep learning structures to track, label, and identify physical objects in real-time video streams.",
      tech: ["Python", "OpenCV", "MobileNet SSD", "NumPy", "TensorFlow"],
      github: "https://github.com/kshshrma/Object-Detection",
    },
    {
      id: "06",
      title: "FaceDetection System",
      description: "A computer vision security interface performing biometric face tracking, landmark alignment, and local signature comparisons.",
      tech: ["Python", "OpenCV", "Haar Cascades", "Dlib", "Computer Vision"],
      github: "https://github.com/kshshrma/face-detection",
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black text-white border-t border-white/5">
      {/* Visual Ambient Elements */}
      <div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-[#ff2a2a]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-[#ff2a2a]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#ff2a2a] mb-2">04 . Portfolio Showcase</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Featured <span className="text-gradient">Projects</span>
          </h3>
          <div className="w-12 h-1 bg-[#ff2a2a] mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 border border-white/10 rounded-3xl bg-white/[0.01] hover:border-[#ff2a2a]/30 transition-all flex flex-col justify-between cursor-pointer min-h-[350px] relative overflow-hidden group"
            >
              {/* Card Corner Gradient Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff2a2a]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-3xl font-black text-white/5 select-none">{project.id}</span>
                  {project.status && (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-semibold tracking-wider uppercase">
                      {project.status}
                    </span>
                  )}
                </div>

                <h4 className="font-bold text-white text-xl mb-3 tracking-wide group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {project.title}
                </h4>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-white/5 text-gray-300 rounded border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 border-t border-white/10 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-[#ff2a2a] hover:bg-[#ff2a2a]/10 hover:text-white py-2 rounded-xl transition-all text-gray-300 font-semibold text-xs uppercase tracking-wider"
                  >
                    <FaGithub size={14} /> Source Code
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 bg-[#ff2a2a] hover:bg-[#ff4444] text-white py-2 rounded-xl transition-all font-semibold text-xs uppercase tracking-wider shadow-[0_4px_12px_rgba(255,42,42,0.2)]"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
