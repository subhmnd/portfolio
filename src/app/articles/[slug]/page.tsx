import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from "lucide-react";
import { ARTICLES, getArticleBySlug } from "@/lib/articles";
import { SOCIAL } from "@/lib/social";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    return {
      title: `Article Not Found | ${SOCIAL.name}`,
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || SOCIAL.website;
  const canonicalUrl = `${siteUrl}/articles/${article.slug}`;
  const imageUrl = `${siteUrl}${article.image}`;

  return {
    title: `${article.title} | ${SOCIAL.name}`,
    description: article.subtitle,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.subtitle,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.subtitle,
      creator: SOCIAL.x.handle,
      images: [imageUrl],
    },
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="w-full pb-20">
      {/* Top Navigation Bar: Back Link */}
      <div className="px-4 sm:px-8 py-5 border-b border-border flex items-center justify-between">
        <Link
          href="/articles"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>All Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="px-4 sm:px-8 pt-8 sm:pt-10 pb-8 border-b border-border space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[11px] font-mono bg-muted/60 border border-border text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            {article.title}
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-foreground/80 font-normal">
            {article.subtitle}
          </p>
        </div>

        {/* Author & Publishing Details */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-border/60">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 border border-border overflow-hidden shrink-0">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">
                {article.author.name}
              </div>
              <div className="text-xs font-mono text-muted-foreground">
                {article.author.role}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Featured Banner Image */}
      <div className="w-full border-b border-border bg-muted/20">
        <div className="relative aspect-[1200/630] w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 800px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content Body */}
      <div className="px-4 sm:px-8 py-10 space-y-8 text-foreground/90 font-normal">
        {article.sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            {section.heading && (
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-4 border-t border-border/40">
                {section.heading}
              </h2>
            )}

            {section.paragraphs && (
              <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-foreground">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            )}

            {section.list && (
              <ul className="space-y-2.5 pl-1 pt-1">
                {section.list.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.principles && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {section.principles.map((principle) => (
                  <div
                    key={principle.number}
                    className="p-4 border border-border bg-muted/30 space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-muted-foreground">
                        {principle.number}
                      </span>
                      <h3 className="text-sm font-bold text-foreground">
                        {principle.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed text-foreground/80">
                      {principle.body}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Footer Callout */}
      <footer className="mx-4 sm:px-8 p-6 border border-border bg-muted/20 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-foreground">
              Nodezed is building cloud infrastructure for developers.
            </h3>
            <p className="text-xs text-muted-foreground">
              Simple where it should be. Powerful where it needs to be.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://nodezed.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono bg-foreground text-background hover:bg-foreground/90 font-medium transition-colors"
            >
              <span>Visit Nodezed</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
