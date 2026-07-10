"use client";

import { motion } from "framer-motion";

interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export default function Process() {
  const steps: ProcessStep[] = [
    {
      num: "01",
      title: "Research",
      description: "Understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      num: "02",
      title: "Design",
      description: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      num: "03",
      title: "Develop",
      description: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      num: "04",
      title: "Deploy",
      description: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-black text-white border-t border-white/5">
      <div className="absolute top-[30%] left-[-10%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Left Column: Title & Subtitle */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-500 mb-2">03 . Workflow</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Here's how I <span className="text-gradient">turn ideas</span> into real-world applications
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              I follow a structured, creative, and highly technical approach to turn ideas into robust, full-stack digital products.
            </p>
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>

          {/* Right Column: Staggered Zig-Zag Cards */}
          <div className="lg:col-span-7 relative min-h-[700px] lg:min-h-[990px] space-y-12 lg:space-y-0">
            {/* SVG Connecting Curved Dashed Lines (Only visible on desktop lg screens) */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
              {/* Path 1: Research (top-right) -> Design (middle-left) */}
              <path 
                className="flow-path"
                d="M 380,100 C 380,200 50,150 50,300" 
                fill="none" 
                stroke="rgba(59, 130, 246, 0.45)"
                strokeWidth="2"
                strokeDasharray="8,6"
              />
              {/* Path 2: Design (middle-left) -> Develop (middle-right) */}
              <path 
                className="flow-path"
                d="M 170,360 C 170,460 380,410 380,560" 
                fill="none" 
                stroke="rgba(59, 130, 246, 0.45)"
                strokeWidth="2"
                strokeDasharray="8,6"
              />
              {/* Path 3: Develop (middle-right) -> Deploy (bottom-left) */}
              <path 
                className="flow-path"
                d="M 380,620 C 380,720 50,670 50,820" 
                fill="none" 
                stroke="rgba(59, 130, 246, 0.45)"
                strokeWidth="2"
                strokeDasharray="8,6"
              />
            </svg>

            {/* Step 1: Research (Top Right) */}
            <div className="lg:absolute lg:top-0 lg:right-0 w-full lg:w-[320px] z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 border border-white/10 rounded-2xl bg-white/[0.01] hover:border-blue-500/30 transition-all flex flex-col justify-between group cursor-pointer min-h-[200px]"
              >
                <div className="scan-line" />
                <div>
                  <span className="text-3xl font-black text-blue-500/20 group-hover:text-blue-500 transition-colors duration-300 select-none block mb-4">01</span>
                  <h4 className="font-bold text-white text-lg mb-2">Research</h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.</p>
                </div>
              </motion.div>
            </div>

            {/* Mobile Arrow 1-2 */}
            <div className="flex lg:hidden justify-center my-4">
              <motion.div 
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-8 h-8 rounded-full bg-black border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.4)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.div>
            </div>

            {/* Step 2: Design (Middle Left) */}
            <div className="lg:absolute lg:top-[260px] lg:left-0 w-full lg:w-[320px] z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 border border-white/10 rounded-2xl bg-white/[0.01] hover:border-blue-500/30 transition-all flex flex-col justify-between group cursor-pointer min-h-[200px]"
              >
                <div className="scan-line" />
                <div>
                  <span className="text-3xl font-black text-blue-500/20 group-hover:text-blue-500 transition-colors duration-300 select-none block mb-4">02</span>
                  <h4 className="font-bold text-white text-lg mb-2">Design</h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.</p>
                </div>
              </motion.div>
            </div>

            {/* Mobile Arrow 2-3 */}
            <div className="flex lg:hidden justify-center my-4">
              <motion.div 
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-8 h-8 rounded-full bg-black border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.4)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.div>
            </div>

            {/* Step 3: Develop (Middle Right) */}
            <div className="lg:absolute lg:top-[520px] lg:right-0 w-full lg:w-[320px] z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 border border-white/10 rounded-2xl bg-white/[0.01] hover:border-blue-500/30 transition-all flex flex-col justify-between group cursor-pointer min-h-[200px]"
              >
                <div className="scan-line" />
                <div>
                  <span className="text-3xl font-black text-blue-500/20 group-hover:text-blue-500 transition-colors duration-300 select-none block mb-4">03</span>
                  <h4 className="font-bold text-white text-lg mb-2">Develop</h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Building scalable backends and responsive frontends using modern tech stacks and best practices.</p>
                </div>
              </motion.div>
            </div>

            {/* Mobile Arrow 3-4 */}
            <div className="flex lg:hidden justify-center my-4">
              <motion.div 
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-8 h-8 rounded-full bg-black border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.4)]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 rotate-90">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.div>
            </div>

            {/* Step 4: Deploy (Bottom Left) */}
            <div className="lg:absolute lg:top-[780px] lg:left-0 w-full lg:w-[320px] z-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 border border-white/10 rounded-2xl bg-white/[0.01] hover:border-blue-500/30 transition-all flex flex-col justify-between group cursor-pointer min-h-[200px]"
              >
                <div className="scan-line" />
                <div>
                  <span className="text-3xl font-black text-blue-500/20 group-hover:text-blue-500 transition-colors duration-300 select-none block mb-4">04</span>
                  <h4 className="font-bold text-white text-lg mb-2">Deploy</h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.</p>
                </div>
              </motion.div>
            </div>

            {/* Desktop Circular Curved Connective Arrows */}
            {/* Arrow 1: Research -> Design (flows down-left) */}
            <motion.div 
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="hidden lg:flex absolute top-[180px] left-[52%] -translate-x-1/2 w-9 h-9 rounded-full bg-black border border-blue-500/30 items-center justify-center text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.5)] z-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 rotate-[135deg]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.div>

            {/* Arrow 2: Design -> Develop (flows down-right) */}
            <motion.div 
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
              className="hidden lg:flex absolute top-[445px] left-[48%] -translate-x-1/2 w-9 h-9 rounded-full bg-black border border-blue-500/30 items-center justify-center text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.5)] z-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 rotate-[45deg]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.div>

            {/* Arrow 3: Develop -> Deploy (flows down-left) */}
            <motion.div 
              animate={{ y: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.6 }}
              className="hidden lg:flex absolute top-[705px] left-[52%] -translate-x-1/2 w-9 h-9 rounded-full bg-black border border-blue-500/30 items-center justify-center text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.5)] z-20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 rotate-[135deg]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
