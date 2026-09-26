import type { Metadata } from "next";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SOCIAL } from "@/lib/social";

export const metadata: Metadata = {
  title: `Projects | ${SOCIAL.name}`,
  description: `Built systems, cloud platforms, and developer software engineered by ${SOCIAL.name} (${SOCIAL.handle}).`,
};

export default function ProjectsPage() {
  return (
    <div className="w-full pb-16">
      <ProjectsSection />
    </div>
  );
}
