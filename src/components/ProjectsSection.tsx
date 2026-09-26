"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

// Apple-grade Quint/Expo ease-out for ultra-silky, zero-jerk deceleration
const smoothEase = [0.19, 1, 0.22, 1] as const;

// Parent container coordinates the downward cascading stagger
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.06,
    },
  },
};

// Top-to-bottom slide reveal with pronounced optical blur dissolve
const cascadeDownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -22, // Enters from top moving downwards
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

export function ProjectsSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ willChange: "transform, opacity, filter", transform: "translateZ(0)" }}
      className="w-full"
    >
      {/* 1. Section Header: Cascades down with blur-to-focus */}
      <motion.div
        variants={cascadeDownVariants}
        style={{ willChange: "transform, opacity, filter", transform: "translateZ(0)" }}
        className="px-4 sm:px-8 pt-8 sm:pt-10 pb-7 border-b border-border space-y-2"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
            Projects
          </span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Built Systems & Platforms
        </h1>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
          Production cloud infrastructure and native software engineered by Subh Mondal.
        </p>
      </motion.div>

      {/* 2. Projects List: Cascades down sequentially with GPU-accelerated blur */}
      <motion.div variants={containerVariants} className="divide-y divide-border">
        {PROJECTS.map((project) => (
          <motion.article
            key={project.id}
            variants={cascadeDownVariants}
            style={{ willChange: "transform, opacity, filter", transform: "translateZ(0)" }}
            whileHover={{
              y: -2,
              transition: { duration: 0.28, ease: smoothEase },
            }}
            className="px-4 sm:px-8 py-7 sm:py-8 space-y-4 hover:bg-accent/15 transition-colors duration-200 group relative"
          >
            {/* Top Row: Icon + Title & Tagline + Action Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                {/* Logo icon with smooth spring hover */}
                <motion.div
                  whileHover={{ scale: 1.07 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-muted/40 border border-border overflow-hidden select-none shadow-xs group-hover:border-foreground/40 transition-colors"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 48px, 56px"
                    className="object-cover"
                  />
                </motion.div>

                {/* Title, Role & Tagline */}
                <div className="space-y-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/title inline-flex items-center gap-1.5 text-lg sm:text-xl font-bold text-foreground tracking-tight"
                    >
                      <span className="group-hover/title:underline decoration-foreground/40 underline-offset-4">
                        {project.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/title:text-foreground group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all duration-200" />
                    </a>
                    {project.role && (
                      <span className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono border border-border text-muted-foreground bg-accent/40 uppercase tracking-wide">
                        {project.role}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-[13px] font-medium text-muted-foreground">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Action Button with spring physics */}
              <div className="shrink-0">
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono border border-border hover:border-foreground/80 bg-background hover:bg-accent text-foreground shadow-xs group/btn transition-colors"
                >
                  {project.githubUrl ? (
                    <Github className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:rotate-6" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  )}
                  <span>{project.actionLabel}</span>
                </motion.a>
              </div>
            </div>

            {/* Description Narrative */}
            <p className="text-sm leading-relaxed text-foreground/90 font-normal">
              {project.description}
            </p>

            {/* Specs / Key Metrics Row with micro-spring interaction */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {project.specs.map((spec) => (
                <motion.span
                  key={spec}
                  whileHover={{ y: -1, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="inline-flex items-center text-[11px] font-mono px-2 py-0.5 bg-accent/40 text-foreground/85 border border-border/80 select-none cursor-default hover:border-foreground/40 hover:bg-accent transition-colors"
                >
                  {spec}
                </motion.span>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className="text-[11px] font-mono text-muted-foreground mr-1 select-none">Stack:</span>
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono text-muted-foreground bg-muted/30 px-1.5 py-0.5 border border-border/60 hover:text-foreground hover:border-border transition-colors cursor-default select-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}
