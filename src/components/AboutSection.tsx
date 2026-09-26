"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL } from "@/lib/social";

const smoothEase = [0.19, 1, 0.22, 1] as const;

const subtleFadeVariants = {
  hidden: { 
    opacity: 0, 
    y: 12,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
    transitionEnd: {
      filter: "none",
      transform: "none",
    },
  },
};

export function AboutSection() {
  const [animationDone, setAnimationDone] = useState(false);

  return (
    <motion.section
      id="about"
      variants={subtleFadeVariants}
      initial="hidden"
      animate="visible"
      onAnimationComplete={() => setAnimationDone(true)}
      style={animationDone ? { filter: "none", transform: "none" } : undefined}
      className="px-4 sm:px-8 py-8 sm:py-9 border-b border-border space-y-4"
    >
      {/* Clean Minimalist Section Title */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
          About
        </span>
      </div>

      {/* Clean Readable Narrative */}
      <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-foreground font-normal">
        <p>
          Hi, I&apos;m <span className="font-semibold text-foreground">{SOCIAL.name}</span>. My software engineering journey began back in 2021 driven by a passion for building scalable web systems. Over the years, I coded and deployed numerous applications and tools. While many of those early experiments never blew up, each build was an invaluable masterclass that refined my technical craft and engineering discipline.
        </p>

        <p>
          Today, all my energy and focus are poured into building{" "}
          <a
            href="https://nodezed.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground underline underline-offset-4 decoration-foreground/40 hover:decoration-foreground inline-flex items-center gap-0.5"
          >
            Nodezed
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          . We are solving a bottleneck every builder encounters: deploying cloud infrastructure shouldn&apos;t require wrestling with complex DevOps configurations. Nodezed enables developers and businesses to launch and manage scalable cloud systems in a single click.
        </p>

        <p>
          I have always had a deliberate obsession with monochrome. Black and white strips away decorative visual noise, forcing the interface to stand on the raw strength of its structure, spacing, and typography—which is why I chose it over colors.
        </p>
      </div>
    </motion.section>
  );
}
