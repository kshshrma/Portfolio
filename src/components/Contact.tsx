"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:ks2012150@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's <span className="text-gradient">Connect</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-lg mx-auto">
            Looking for opportunities in software/app development and AI. Feel free to reach out to me!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <motion.a 
              href="mailto:ks2012150@gmail.com" 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.03, x: 5 }}
              whileTap={{ scale: 0.97 }}
              className="glass-card p-6 flex items-center gap-6 hover:border-blue-500/50 transition-colors group cursor-pointer block"
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-2xl group-hover:rotate-12 transition-transform">
                <FaEnvelope />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-gray-400 text-sm">Email Me</h3>
                <p className="text-white font-medium md:text-lg text-sm truncate w-full">ks2012150@gmail.com</p>
              </div>
            </motion.a>
            
            <motion.a 
              href="https://www.linkedin.com/in/kashish-sharma-240939322/?skipRedirect=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.03, x: 5 }}
              whileTap={{ scale: 0.97 }}
              className="glass-card p-6 flex items-center gap-6 hover:border-purple-500/50 transition-colors group cursor-pointer block"
            >
              <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 text-2xl group-hover:rotate-12 transition-transform">
                <FaLinkedin />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-gray-400 text-sm">LinkedIn</h3>
                <p className="text-white font-medium md:text-lg text-sm truncate w-full">linkedin.com/in/kashish-sharma-240939322/</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://github.com/kshshrma" 
              target="_blank" 
              rel="noopener noreferrer" 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.03, x: 5 }}
              whileTap={{ scale: 0.97 }}
              className="glass-card p-6 flex items-center gap-6 hover:border-white/50 transition-colors group cursor-pointer block"
            >
              <div className="w-14 h-14 bg-gray-500/20 rounded-full flex items-center justify-center text-gray-400 text-2xl group-hover:rotate-12 transition-transform">
                <FaGithub />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-gray-400 text-sm">GitHub</h3>
                <p className="text-white font-medium md:text-lg text-sm truncate w-full">github.com/kshshrma</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 glass-card p-8"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <label className="text-sm text-gray-400 font-medium">Your Email</label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 font-medium">Message</label>
                <textarea 
                  rows={5} 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" 
                  placeholder="Hello! I'd like to discuss..."
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0px 0px 25px rgba(139,92,246,0.6)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
