import type { Metadata } from "next";
import { ArticlesSection } from "@/components/ArticlesSection";
import { SOCIAL } from "@/lib/social";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || SOCIAL.website;

export const metadata: Metadata = {
  title: `Articles | ${SOCIAL.name}`,
  description: `Essays and thoughts on cloud infrastructure, distributed systems, and software engineering by ${SOCIAL.name}.`,
  alternates: {
    canonical: `${siteUrl}/articles`,
  },
};

export default function ArticlePage() {
  return (
    <div className="w-full pb-16">
      <ArticlesSection />
    </div>
  );
}
