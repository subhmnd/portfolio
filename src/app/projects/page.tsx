import type { Metadata } from "next";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SOCIAL } from "@/lib/social";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || SOCIAL.website;
const canonicalUrl = `${siteUrl}/projects`;

export const metadata: Metadata = {
  title: `Projects | ${SOCIAL.name}`,
  description: `Built systems, cloud platforms, and developer software engineered by ${SOCIAL.name} (${SOCIAL.handle}).`,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: `Projects | ${SOCIAL.name}`,
    description: `Built systems, cloud platforms, and developer software engineered by ${SOCIAL.name} (${SOCIAL.handle}).`,
    url: canonicalUrl,
    type: "website",
    siteName: SOCIAL.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects | ${SOCIAL.name}`,
    description: `Built systems, cloud platforms, and developer software engineered by ${SOCIAL.name} (${SOCIAL.handle}).`,
    creator: SOCIAL.x.handle,
  },
};

export default function ProjectsPage() {
  return (
    <div className="w-full pb-16">
      <ProjectsSection />
    </div>
  );
}
