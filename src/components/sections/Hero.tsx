"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-glow" />

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
             backgroundSize: "40px 40px",
           }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for freelance work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-[hsl(var(--muted-foreground))] mb-2"
          >
            {siteConfig.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-[hsl(var(--muted-foreground))] mb-8 max-w-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-brand-500/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-dashed border-accent-500/20"
            />

            <div className="absolute inset-8 rounded-full glass shadow-glow-purple
                            flex items-center justify-center animate-float">
              <div className="w-full h-full rounded-full bg-gradient-to-br
                              from-brand-500/20 via-accent-500/20 to-brand-600/20
                              flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 200 200" className="w-3/4 h-3/4">
                  <defs>
                    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="80" r="40" fill="url(#avatarGrad)" opacity="0.9" />
                  <ellipse cx="100" cy="170" rx="60" ry="50" fill="url(#avatarGrad)" opacity="0.7" />
                  <text x="100" y="88" textAnchor="middle" fill="white" fontSize="32" fontWeight="bold" fontFamily="system-ui">S</text>
                </svg>
              </div>
            </div>

            {["React", "Next.js", "Node.js", "TS"].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className="absolute px-3 py-1.5 rounded-lg glass text-xs font-medium shadow-glass"
                style={{
                  top: `${[5, 20, 70, 85][i]}%`,
                  left: `${[10, 85, 5, 80][i]}%`,
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-brand-500/50 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-brand-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
