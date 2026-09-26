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

      {/* Articles List */}
      <motion.div variants={containerVariants} className="w-full">
        {ARTICLES.map((article) => (
          <motion.article
            key={article.slug}
            variants={cascadeDownVariants}
            className="px-4 sm:px-8 py-8 sm:py-9 border-b border-border space-y-5 hover:bg-accent/10 transition-colors duration-200 group relative"
          >
            {/* Meta Row: Date, Read Time, Tags */}
            <div className="flex flex-wrap items-center justify-between gap-2.5">
              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5">
                {article.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[11px] font-mono bg-muted/50 border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Image Banner */}
            <Link
              href={`/articles/${article.slug}`}
              className="block relative aspect-[1200/630] w-full overflow-hidden border border-border bg-muted/40 shadow-xs group-hover:border-foreground/40 transition-colors"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 800px) 100vw, 800px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </Link>

            {/* Title & Subtitle */}
            <div className="space-y-2">
              <Link
                href={`/articles/${article.slug}`}
                className="group/link inline-flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-foreground hover:underline decoration-foreground/40 underline-offset-4"
              >
                <span>{article.title}</span>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover/link:text-foreground group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200" />
              </Link>
              <p className="text-sm sm:text-base leading-relaxed text-foreground/80 font-normal">
                {article.subtitle}
              </p>
            </div>

            {/* Summary */}
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-normal">
              {article.summary}
            </p>

            {/* Action Bar (Clean: No Twitter links) */}
            <div className="flex items-center gap-3 pt-1">
              <Link
                href={`/articles/${article.slug}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono border border-border hover:border-foreground/80 bg-background hover:bg-accent text-foreground shadow-xs transition-colors group/btn"
              >
                <span>Read Full Article</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground group-hover/btn:text-foreground group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200" />
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.div>
  );
}
