"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "BharatVerse",
    description: "E-commerce platform representing Indian states and culture globally.",
    image: "/BharatV.png",
    tech: ["Next.js", "React", "Node.js"],
    github: "https://github.com/kshshrma/Bharat.Versee"
  },
  {
    title: "SwachhSetu",
    description: "A smart initiative for a cleaner environment.",
    image: "/swac.png",
    tech: ["Web Development"],
    github: "https://github.com/kshshrma/SwachhSetu-"
  },
  {
    title: "TaskScheduling",
    description: "Efficient task scheduling and management application.",
    image: "/TaskScheduling.png",
    tech: ["Algorithms", "Scheduling"],
    github: "https://github.com/kshshrma/TaskSchedulingg"
  },
  {
    title: "TextDetection",
    description: "Detects text gracefully using modern OCR integrations.",
    image: "/TextDetection.jpg",
    tech: ["Python", "OpenCV", "OCR"],
    github: "https://github.com/kshshrma/text-detection"
  },
  {
    title: "ObjectDetection",
    description: "Detects and tracks objects in real-time.",
    image: "/ObjectDetection.jpg",
    tech: ["Python", "OpenCV", "AI"],
    github: "https://github.com/kshshrma/Object-Detection"
  },
  {
    title: "FaceDetection",
    description: "Face detection system built with computer vision techniques.",
    image: "/FaceDetection.jpg",
    tech: ["Python", "Computer Vision"],
    github: "https://github.com/kshshrma/face-detection"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] -z-10"></div>

      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Tap to engage with the built experiences</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-16">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -15 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative border-[#222223] bg-[#000] border-[10px] rounded-[3rem] h-[550px] w-[280px] shadow-[0_0_35px_rgba(139,92,246,0.15)] flex flex-col group"
            >
              {/* Dynamic Island / iPhone Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 flex items-center shadow-lg">
                <div className="w-2 h-2 rounded-full bg-[#111] border border-gray-800 ml-auto mr-3 shadow-inner"></div>
              </div>
              
              {/* Side Buttons (Volume / Power) Outline details */}
              <div className="absolute top-24 -left-[calc(10px+3px)] w-[3px] h-10 bg-[#333] rounded-l-md"></div>
              <div className="absolute top-40 -left-[calc(10px+3px)] w-[3px] h-10 bg-[#333] rounded-l-md"></div>
              <div className="absolute top-28 -right-[calc(10px+3px)] w-[3px] h-16 bg-[#333] rounded-r-md"></div>

              {/* iPhone Screen Container */}
              <div className="rounded-[2.2rem] overflow-hidden w-full h-full relative relative bg-[#0a0a0a]">
                
                {/* Background Full Cover Image */}
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/95"></div>
                
                {/* Project Details Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col h-full justify-end z-10 transition-transform duration-500">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-bold text-white tracking-wide">{project.title}</h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-1 pb-4">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-white/10 backdrop-blur-md rounded text-blue-300">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 border-t border-white/10 pt-4 mt-2 mb-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md py-2.5 rounded-xl transition-all text-white font-medium text-sm">
                        <FaGithub /> Code
                      </a>
                    </div>
                  </motion.div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
