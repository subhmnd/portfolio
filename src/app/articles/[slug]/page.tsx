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
    title: `${article.title} — ${SOCIAL.name}`,
    description: article.subtitle,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${article.title} — ${SOCIAL.name}`,
      description: article.subtitle,
      url: canonicalUrl,
      type: "article",
      publishedTime: "2026-09-27T00:00:00Z",
      authors: [SOCIAL.name],
      tags: article.tags,
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
      title: `${article.title} — ${SOCIAL.name}`,
      description: article.subtitle,
      creator: SOCIAL.x.handle,
      site: SOCIAL.x.handle,
      images: [imageUrl],
    },
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || SOCIAL.website;
  const canonicalUrl = `${siteUrl}/articles/${article.slug}`;
  const imageUrl = `${siteUrl}${article.image}`;

  // Structured Data (JSON-LD) for Google Search Console
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.subtitle,
    image: [imageUrl],
    datePublished: "2026-09-27T00:00:00Z",
    dateModified: "2026-09-27T00:00:00Z",
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: SOCIAL.name,
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      {/* Schema.org Structured Data for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="w-full pb-20">
        {/* Top Back Navigation Bar */}
        <div className="px-4 sm:px-8 py-4 sm:py-5 border-b border-border flex items-center justify-between">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Articles</span>
          </Link>
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            Essay
          </span>
        </div>

        {/* Editorial Article Header */}
        <header className="px-4 sm:px-8 pt-8 sm:pt-10 pb-4 sm:pb-5 border-b border-border space-y-4">
          {/* Category Tag */}
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span>Cloud Infrastructure</span>
            <span>•</span>
            <span>Nodezed</span>
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

          {/* Author Byline (Top and bottom gaps equal: pt-4 sm:pt-5 and pb-4 sm:pb-5 on header) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 sm:pt-5 border-t border-border/60">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 border border-border overflow-hidden shrink-0 select-none">
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
          </div>
        </header>

        {/* Framed Featured Hero Image */}
        <div className="px-4 sm:px-8 py-6 sm:py-8 border-b border-border bg-muted/15">
          <div className="relative aspect-[1200/630] w-full overflow-hidden border border-border shadow-xs select-none">
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

        {/* Editorial Story Body */}
        <div className="px-4 sm:px-8 py-10 space-y-8 text-foreground font-normal">
          {article.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pt-6 pb-2 border-b border-border/40">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs && (
                <div className="space-y-4 text-[15px] sm:text-base leading-[1.8] text-foreground">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              )}

              {section.list && (
                <ul className="space-y-2.5 pl-2 pt-2 border-l-2 border-foreground/20">
                  {section.list.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-sm sm:text-base text-foreground/90 pl-3 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.principles && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
                  {section.principles.map((principle) => (
                    <div
                      key={principle.number}
                      className="p-4 border border-border bg-muted/20 space-y-2"
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

        {/* End-of-Article Author & Platform Callout */}
        <footer className="mx-4 sm:mx-8 p-6 sm:p-7 border border-border bg-muted/20 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-foreground">
                Nodezed is building developer-first cloud infrastructure.
              </h3>
              <p className="text-xs text-muted-foreground">
                Engineered for speed, transparency, and total control.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="https://nodezed.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono bg-foreground text-background hover:bg-foreground/90 font-medium shadow-xs transition-colors"
              >
                <span>Visit Nodezed</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}
