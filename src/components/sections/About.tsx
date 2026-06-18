"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { skills } from "@/data/skills";
import { siteConfig } from "@/data/site";

const categoryColors: Record<string, string> = {
  frontend: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  backend: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  database: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  tools: "from-orange-500/20 to-amber-500/20 border-orange-500/30",
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <GlassCard className="h-full">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500
                              flex items-center justify-center mb-6 shadow-glow">
                <span className="text-4xl font-bold text-white font-display">S</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">
                {siteConfig.name}
              </h3>
              <p className="text-brand-500 font-medium mb-4">{siteConfig.title}</p>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                {siteConfig.about}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                {siteConfig.location}
              </div>
            </GlassCard>
          </motion.div>

          <div className="lg:col-span-3">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-xl font-semibold mb-6"
            >
              Skills & Technologies
            </motion.h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {skills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <div
                    className={`glass-card p-4 text-center border bg-gradient-to-br
                                ${categoryColors[skill.category]}
                                hover:scale-105 transition-transform duration-300`}
                  >
                    <p className="font-medium text-sm">{skill.name}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
