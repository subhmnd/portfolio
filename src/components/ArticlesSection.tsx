"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { ARTICLES } from "@/lib/articles";

const smoothEase = [0.19, 1, 0.22, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.04,
    },
  },
};

const cascadeDownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -18,
    filter: "blur(12px)",
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

export function ArticlesSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      {/* Section Header */}
      <motion.div
        variants={cascadeDownVariants}
        className="px-4 sm:px-8 pt-8 sm:pt-10 pb-7 border-b border-border space-y-2"
      >
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Articles & Writings
        </h1>
        <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
          Essays and perspectives on developer-first cloud infrastructure, distributed systems, and software engineering.
        </p>
      </motion.div>

      {/* Articles List with Horizontal Left-Image / Right-Text Layout */}
      <motion.div variants={containerVariants} className="w-full">
        {ARTICLES.map((article) => (
          <motion.article
            key={article.slug}
            variants={cascadeDownVariants}
            className="px-4 sm:px-8 py-7 sm:py-8 border-b border-border hover:bg-accent/10 transition-colors duration-200 group relative"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
              
              {/* Left Side: Image Thumbnail */}
              <Link
                href={`/articles/${article.slug}`}
                className="block relative w-full sm:w-[260px] md:w-[280px] aspect-[16/10] shrink-0 overflow-hidden border border-border bg-muted/40 shadow-xs group-hover:border-foreground/40 transition-colors select-none"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 280px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              {/* Right Side: Relative Metadata, Narrative & Action Button */}
              <div className="flex-1 space-y-3 min-w-0">
                {/* Meta Row: Date, Read Time & Category Tag */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  {article.tags[0] && (
                    <>
                      <span>•</span>
                      <span className="px-1.5 py-0.5 text-[11px] bg-muted/60 border border-border text-foreground">
                        {article.tags[0]}
                      </span>
                    </>
                  )}
                </div>

                {/* Article Title */}
                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground leading-snug">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1.5 hover:underline decoration-foreground/40 underline-offset-4 group/title"
                  >
                    <span>{article.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover/title:text-foreground group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all duration-200 shrink-0" />
                  </Link>
                </h2>

                {/* Subtitle / Excerpt */}
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal line-clamp-2">
                  {article.subtitle}
                </p>

                {/* Readable Article Button */}
                <div className="pt-1">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono border border-border hover:border-foreground/80 bg-background hover:bg-accent text-foreground shadow-xs transition-colors group/btn font-medium"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover/btn:text-foreground group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200" />
                  </Link>
                </div>
              </div>

            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}
