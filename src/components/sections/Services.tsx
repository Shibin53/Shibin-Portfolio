"use client";

import { motion } from "framer-motion";
import { Globe, Layout, Server, Smartphone, Code } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  layout: Layout,
  server: Server,
  smartphone: Smartphone,
  api: Code,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Services"
          subtitle="What I can help you build"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <motion.div
                key={service.title}
                variants={item}
                className={index === services.length - 1 && services.length % 3 !== 0
                  ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <GlassCard className="h-full group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20
                                  flex items-center justify-center mb-4
                                  group-hover:shadow-glow transition-shadow duration-300">
                    <Icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
