"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience, education } from "@/data/experience";

interface TimelineProps {
  items: typeof experience;
  icon: React.ElementType;
  title: string;
}

function Timeline({ items, icon: Icon, title }: TimelineProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20
                        flex items-center justify-center">
          <Icon className="w-5 h-5 text-brand-500" />
        </div>
        <h3 className="font-display text-xl font-semibold">{title}</h3>
      </div>

      <div className="relative">
        <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b
                        from-brand-500/50 via-accent-500/30 to-transparent" />

        <div className="space-y-8">
          {items.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12"
            >
              <div className="absolute left-3 top-2 w-4 h-4 rounded-full
                              bg-gradient-to-br from-brand-500 to-accent-500
                              ring-4 ring-[hsl(var(--background))]" />

              <div className="glass-card p-5 hover:shadow-glow transition-shadow duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h4 className="font-display font-semibold">{entry.title}</h4>
                  <span className="text-xs px-3 py-1 rounded-full glass text-brand-500 font-medium">
                    {entry.period}
                  </span>
                </div>
                <p className="text-sm text-accent-500 font-medium mb-2">
                  {entry.organization}
                </p>
                <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          title="Experience & Education"
          subtitle="My professional journey and academic background"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Timeline items={experience} icon={Briefcase} title="Experience" />
          <Timeline items={education} icon={GraduationCap} title="Education" />
        </div>
      </div>
    </section>
  );
}
