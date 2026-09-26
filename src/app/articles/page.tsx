import type { Metadata } from "next";
import { ArticlesSection } from "@/components/ArticlesSection";
import { SOCIAL } from "@/lib/social";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || SOCIAL.website;
const canonicalUrl = `${siteUrl}/articles`;

export const metadata: Metadata = {
  title: `Articles | ${SOCIAL.name}`,
  description: `Essays and thoughts on cloud infrastructure, distributed systems, and software engineering by ${SOCIAL.name}.`,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: `Articles | ${SOCIAL.name}`,
    description: `Essays and thoughts on cloud infrastructure, distributed systems, and software engineering by ${SOCIAL.name}.`,
    url: canonicalUrl,
    type: "website",
    siteName: SOCIAL.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `Articles | ${SOCIAL.name}`,
    description: `Essays and thoughts on cloud infrastructure, distributed systems, and software engineering by ${SOCIAL.name}.`,
    creator: SOCIAL.x.handle,
  },
};

export default function ArticlesPage() {
  return (
    <div className="w-full pb-16">
      <ArticlesSection />
    </div>
  );
}
