"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

// Apple-grade Quint/Expo ease-out for ultra-silky downward reveal
const smoothEase = [0.19, 1, 0.22, 1] as const;

// Parent container coordinates the downward cascading stagger
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.04,
    },
  },
};

// Top-to-bottom slide reveal with optical blur dissolve
const cascadeDownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20,
    filter: "blur(14px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
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
      className="w-full"
    >
      {/* Section Header (without the small 'Projects' tag above) */}
      <motion.div
        variants={cascadeDownVariants}
        className="px-4 sm:px-8 pt-8 sm:pt-10 pb-7 border-b border-border space-y-2"
      >
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Built Systems & Platforms
        </h1>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
          Production cloud infrastructure and native software engineered by Subh Mondal.
        </p>
      </motion.div>

      {/* Projects List with Smart Bottom Border on every item */}
      <motion.div variants={containerVariants} className="w-full">
        {PROJECTS.map((project) => (
          <motion.article
            key={project.id}
            variants={cascadeDownVariants}
            className="px-4 sm:px-8 py-7 sm:py-8 border-b border-border space-y-3.5 hover:bg-accent/15 transition-colors duration-200 group relative"
          >
            {/* Top Row: Icon + Title & Tagline + Action Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                {/* Logo icon (static, no hover transform) */}
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-muted/40 border border-border overflow-hidden select-none shadow-xs group-hover:border-foreground/40 transition-colors">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 48px, 56px"
                    className="object-cover"
                  />
                </div>

                {/* Title & Tagline */}
                <div className="space-y-0.5">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/title inline-flex items-center gap-1.5 text-lg sm:text-xl font-bold text-foreground tracking-tight"
                  >
                    <span className="group-hover/title:underline decoration-foreground/40 underline-offset-4">
                      {project.name}
                    </span>
                    {/* ONLY arrow translates on hover */}
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/title:text-foreground group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all duration-200" />
                  </a>
                  <p className="text-xs sm:text-[13px] font-medium text-muted-foreground">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Action Button (no scale or y-transform, only arrow moves) */}
              <div className="shrink-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono border border-border hover:border-foreground/80 bg-background hover:bg-accent text-foreground shadow-xs group/btn transition-colors"
                >
                  {project.githubUrl ? (
                    <Github className="w-3.5 h-3.5 text-muted-foreground group-hover/btn:text-foreground transition-colors" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover/btn:text-foreground group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200" />
                  )}
                  <span>{project.actionLabel}</span>
                  {project.githubUrl && (
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover/btn:text-foreground group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200" />
                  )}
                </a>
              </div>
            </div>

            {/* Description Narrative */}
            <p className="text-sm leading-relaxed text-foreground/90 font-normal">
              {project.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}
