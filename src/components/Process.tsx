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
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#ff2a2a]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#ff2a2a] mb-2">03 . Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            My <span className="text-gradient">Process</span>
          </h3>
          <div className="w-12 h-1 bg-[#ff2a2a] mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 border border-white/10 rounded-2xl bg-white/[0.01] hover:border-[#ff2a2a]/30 transition-all flex flex-col justify-between group cursor-pointer min-h-[220px]"
            >
              <div>
                <span className="text-4xl font-black text-[#ff2a2a]/20 group-hover:text-[#ff2a2a] transition-colors duration-300 select-none block mb-4">
                  {step.num}
                </span>
                <h4 className="font-bold text-white text-lg mb-2">{step.title}</h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
