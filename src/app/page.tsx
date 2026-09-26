import { ProfileHeader } from "@/components/ProfileHeader";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { getGithubContributions } from "@/lib/github";
import { SOCIAL } from "@/lib/social";

export const revalidate = 3600; // Revalidate live GitHub activity hourly

export default async function Home() {
  const contributions = await getGithubContributions(SOCIAL.github.username);

  return (
    <div className="w-full">
      <ProfileHeader initialContributions={contributions} />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
}
