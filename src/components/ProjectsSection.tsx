"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROJECTS, type Project } from "@/lib/projects";

const subtleFadeVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

interface ProjectsSectionProps {
  limit?: number;
  hideHeader?: boolean;
}

export function ProjectsSection({ limit, hideHeader = false }: ProjectsSectionProps) {
  const displayedProjects = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <motion.section
      id="projects"
      variants={subtleFadeVariants}
      initial={false}
      animate="visible"
      className="px-4 sm:px-8 py-8 sm:py-9 border-b border-border space-y-6"
    >
      {/* Section Header */}
      {!hideHeader && (
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                Projects
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Featured Systems & Platforms
            </h2>
          </div>
        </div>
      )}

      {/* Projects Grid / Stack */}
      <div className="space-y-6">
        {displayedProjects.map((project) => (
          <article
            key={project.id}
            className="group border border-border bg-background hover:border-foreground/40 transition-colors p-5 sm:p-6 space-y-5"
          >
            {/* Top Row: Icon + Title & Badges + Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                {/* Project Logo Icon */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-muted/30 border border-border overflow-hidden select-none shadow-xs group-hover:border-foreground/30 transition-colors">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 56px, 64px"
                    className="object-cover"
                  />
                </div>

                {/* Title & Metadata */}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                      {project.name}
                    </h3>
                    {project.badge && (
                      <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono font-medium border border-border text-muted-foreground bg-accent/40">
                        {project.badge}
                      </span>
                    )}
                    {project.role && (
                      <span className="inline-flex items-center px-2 py-0.5 text-[11px] font-mono font-medium border border-foreground/30 text-foreground bg-foreground/5">
                        {project.role}
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Action Link Button */}
              <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                {project.githubUrl ? (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 text-xs font-medium border-border hover:bg-accent text-foreground shadow-xs group/btn"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 text-xs font-medium border-border hover:bg-accent text-foreground shadow-xs group/btn"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Visit Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-foreground/90 font-normal">
              {project.description}
            </p>

            {/* Highlights List */}
            <div className="border-t border-border/60 pt-4 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-semibold block">
                Key Architecture & Features
              </span>
              <ul className="grid grid-cols-1 gap-2 text-xs sm:text-[13px] text-muted-foreground">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-foreground shrink-0 mt-0.5" />
                    <span className="leading-snug">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-mono text-muted-foreground bg-accent/50 border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
}
