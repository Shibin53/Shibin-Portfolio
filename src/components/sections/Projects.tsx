"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          title="Projects"
          subtitle="A showcase of my recent work and personal projects"
        />

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="overflow-hidden p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div
                    className={`h-48 md:h-auto min-h-[200px] bg-gradient-to-br ${project.gradient}
                                flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-20"
                         style={{
                           backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                           backgroundSize: "24px 24px",
                         }}
                    />
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="relative z-10 text-center p-8"
                    >
                      <h3 className="text-3xl font-display font-bold text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-brand-500">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary text-sm"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </motion.a>
                      <motion.a
                        href={project.liveUrl || "#"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
