"use client";

import { motion } from "framer-motion";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        { name: "C", level: 82 },
        { name: "C++", level: 88 },
        { name: "Java", level: 85 },
        { name: "Python", level: 75 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
      ],
    },
    {
      title: "Full Stack & Web",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3 / Tailwind", level: 92 },
        { name: "Node.js / Express", level: 85 },
      ],
    },
    {
      title: "Backend & API",
      skills: [
        { name: "Spring Boot", level: 80 },
        { name: "FastAPI", level: 75 },
        { name: "REST API Integration", level: 88 },
        { name: "API Testing (Postman)", level: 85 },
        { name: "GraphQL", level: 70 },
        { name: "Socket.io", level: 78 },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 80 },
        { name: "Supabase", level: 82 },
      ],
    },
    {
      title: "Tools & Automation",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 88 },
      ],
    },
    {
      title: "CS Concepts",
      skills: [
        { name: "Data Structures", level: 88 },
        { name: "Algorithms", level: 85 },
        { name: "DBMS", level: 86 },
        { name: "OOP", level: 90 },
      ],
    },
    {
      title: "Cloud, Deployment & DevOps",
      skills: [
        { name: "Vercel", level: 85 },
        { name: "Render", level: 80 },
        { name: "Environment Variables / .env", level: 85 },
        { name: "Deployment & Hosting", level: 82 },
        { name: "CI/CD Basics", level: 70 },
      ],
    },
    {
      title: "Authentication & Security",
      skills: [
        { name: "JWT Authentication", level: 88 },
        { name: "Supabase Auth", level: 85 },
        { name: "bcrypt Password Hashing", level: 82 },
        { name: "Role-Based Access Control", level: 78 },
        { name: "API Security Basics", level: 75 },
      ],
    },
    {
      title: "AI Integration",
      skills: [
        { name: "Groq API", level: 85 },
        { name: "Gemini API", level: 80 },
        { name: "Chatbot Integration", level: 88 },
        { name: "Prompt Engineering", level: 82 },
        { name: "NLP Basics", level: 75 },
      ],
    },
    {
      title: "Mobile & UI/UX",
      skills: [
        { name: "Responsive Design", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Mobile-First Design", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black text-white border-t border-white/5">
      {/* Dynamic Background Glow */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-blue-500 mb-2">02 . Core Stack</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Technical <span className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h3>
          <div className="w-12 h-1 bg-blue-600 mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-card p-6 border border-blue-500/10 hover:border-blue-500/30 rounded-2xl bg-black/80 shadow-[0_0_20px_rgba(37,99,235,0.02)] hover:shadow-[0_0_25px_rgba(37,99,235,0.08)] transition-all duration-300"
            >
              <h4 className="font-bold text-white text-lg mb-6 border-b border-blue-500/20 pb-2 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse"></span>
              </h4>
              
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-blue-500/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
