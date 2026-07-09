"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`.trim();
    const mailtoLink = `mailto:ks2012150@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(fullName)}&body=Name: ${encodeURIComponent(fullName)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AConsent: ${consent ? 'Yes' : 'No'}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black text-white border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-[#3b82f6]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-wider text-blue-500 mb-2">08 . Connection</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">
            Let's <span className="text-gradient">Connect</span>
          </h3>
          <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Contact Info (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full space-y-6"
          >
            <h4 className="font-bold text-white text-xl mb-6">Contact Channels</h4>
            
            <a 
              href="mailto:ks2012150@gmail.com" 
              className="glass-card p-6 flex items-center gap-6 hover:border-blue-500/30 bg-white/[0.01] transition-all group cursor-pointer block border border-white/10 rounded-2xl"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-500 text-xl group-hover:bg-blue-500/10 group-hover:border-blue-500 transition-all">
                <FaEnvelope />
              </div>
              <div className="overflow-hidden">
                <h5 className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Email</h5>
                <p className="text-white font-medium text-sm md:text-base truncate">ks2012150@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/kashish-sharma-240939322/?skipRedirect=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-card p-6 flex items-center gap-6 hover:border-blue-500/30 bg-white/[0.01] transition-all group cursor-pointer block border border-white/10 rounded-2xl"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-500 text-xl group-hover:bg-blue-500/10 group-hover:border-blue-500 transition-all">
                <FaLinkedin />
              </div>
              <div className="overflow-hidden">
                <h5 className="text-gray-400 text-xs uppercase tracking-wider font-semibold">LinkedIn</h5>
                <p className="text-white font-medium text-sm md:text-base truncate">kashish-sharma-240939322</p>
              </div>
            </a>

            <a 
              href="https://github.com/kshshrma" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-card p-6 flex items-center gap-6 hover:border-blue-500/30 bg-white/[0.01] transition-all group cursor-pointer block border border-white/10 rounded-2xl"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-500 text-xl group-hover:bg-blue-500/10 group-hover:border-blue-500 transition-all">
                <FaGithub />
              </div>
              <div className="overflow-hidden">
                <h5 className="text-gray-400 text-xs uppercase tracking-wider font-semibold">GitHub</h5>
                <p className="text-white font-medium text-sm md:text-base truncate">github.com/kshshrma</p>
              </div>
            </a>
          </motion.div>

          {/* Form (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full glass-card p-8 border border-white/10 rounded-3xl bg-white/[0.01]"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">First Name</label>
                  <input 
                    type="text" 
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all" 
                    placeholder="John" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Last Name</label>
                  <input 
                    type="text" 
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Your Email</label>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all" 
                  placeholder="john@example.com" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all resize-none" 
                  placeholder="Hello! I'd like to discuss an opportunity..."
                ></textarea>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 rounded border-white/10 bg-white/5 text-blue-500 accent-blue-500 focus:ring-blue-500"
                />
                <label htmlFor="consent" className="text-xs text-gray-400 leading-normal select-none">
                  I consent to sending this information to get in touch regarding professional opportunities.
                </label>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0px 4px 20px rgba(37, 99, 235, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg text-sm uppercase tracking-wider cursor-pointer"
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
