import type { Metadata } from "next";
import { ArticlesSection } from "@/components/ArticlesSection";
import { SOCIAL } from "@/lib/social";

export const metadata: Metadata = {
  title: `Articles | ${SOCIAL.name}`,
  description: `Essays and thoughts on cloud infrastructure, distributed systems, and software engineering by ${SOCIAL.name}.`,
};

export default function ArticlePage() {
  return (
    <div className="w-full pb-16">
      <ArticlesSection />
    </div>
  );
}
