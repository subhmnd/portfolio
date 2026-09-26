import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, FolderGit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL } from "@/lib/social";

export const metadata: Metadata = {
  title: `Projects | ${SOCIAL.name}`,
  description: `Projects, software, and systems engineered by ${SOCIAL.name} (${SOCIAL.handle}).`,
};

export default function ProjectsPage() {
  return (
    <div className="w-full px-4 sm:px-8 pt-10 sm:pt-14 pb-16 space-y-8">
      {/* Header section */}
      <div className="space-y-2 border-b border-border pb-6">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
            Showcase
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Projects
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
          Systems, experiments, and applications engineered by {SOCIAL.name}. Detailed project breakdowns and case studies are being curated here.
        </p>
      </div>

      {/* Building In Progress Card */}
      <div className="border border-border p-6 sm:p-8 space-y-4 bg-muted/20 relative overflow-hidden">
        <div className="flex items-start gap-3">
          <div className="p-2 border border-border bg-background shrink-0">
            <FolderGit2 className="w-5 h-5 text-foreground" />
          </div>
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-semibold text-foreground">
              Projects Showcase in Progress
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We are actively assembling interactive project cards, live demos, and technical architecture writeups. In the meantime, explore live codebases and open-source contributions directly on GitHub.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <Button
            asChild
            variant="outline"
            className="h-9 px-4 text-xs font-medium border-border hover:bg-accent text-foreground shadow-xs"
          >
            <a
              href={SOCIAL.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Explore GitHub Repos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="h-9 px-4 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent border border-transparent hover:border-border"
          >
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Profile</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
