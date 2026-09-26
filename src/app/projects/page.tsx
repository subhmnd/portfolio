import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SOCIAL } from "@/lib/social";

export const metadata: Metadata = {
  title: `Projects | ${SOCIAL.name}`,
  description: `Featured cloud platforms and native systems engineered by ${SOCIAL.name} (${SOCIAL.handle}).`,
};

export default function ProjectsPage() {
  return (
    <div className="w-full pb-16">
      {/* Header section with Return Button */}
      <div className="px-4 sm:px-8 pt-8 sm:pt-12 pb-6 border-b border-border space-y-4">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="h-8 px-3 text-xs font-mono uppercase tracking-wider border-border hover:bg-accent text-foreground shadow-xs"
        >
          <Link href="/" className="inline-flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </Button>
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
            Showcase
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Projects & Systems
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
            A curated collection of developer cloud platforms, native macOS utilities, and systems engineered by {SOCIAL.name}.
          </p>
        </div>
      </div>

      {/* Projects Showcase */}
      <ProjectsSection hideHeader />
    </div>
  );
}
