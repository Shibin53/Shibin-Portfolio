"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Code2 } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

const socialIcons = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-500/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500
                              flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg">
                Shibin<span className="text-brand-500">.</span>
              </span>
            </div>
            <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
              Full Stack Web Developer crafting modern, scalable web applications
              from Kanyakumari, India.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[hsl(var(--muted-foreground))]
                               hover:text-brand-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center
                             hover:shadow-glow hover:border-brand-500/30 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
              {siteConfig.email}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row
                        items-center justify-between gap-4">
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            © 2026 Shibin. All rights reserved.
          </p>
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
