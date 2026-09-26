export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  url: string;
  githubUrl?: string;
  role?: string;
  badge?: string;
  highlights: string[];
  techStack: string[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "nodezed",
    name: "Nodezed",
    tagline: "Developer Cloud Infrastructure, NVMe Servers & Global Edge Network",
    description:
      "Next-generation developer cloud platform providing high-performance cloud compute, persistent NVMe storage, and global Anycast edge networks with sub-15 second instant server provisioning.",
    image: "/Nodezed.png",
    url: "https://nodezed.com",
    role: "Founder & CEO",
    badge: "Production Platform",
    highlights: [
      "Sub-15 second instant server provisioning with dedicated resources and full root SSH control",
      "Cloud compute deployed across 12 global edge locations backed by multi-terabit fiber backbones",
      "Developer REST APIs and autonomous AI agent workflows for automated infrastructure orchestration",
      "Integrated 300+ PoP Anycast CDN, enterprise DDoS mitigation, and persistent NVMe storage",
    ],
    techStack: ["Cloud Infrastructure", "NVMe Compute", "Anycast CDN", "Networking", "REST API", "DevOps"],
    featured: true,
  },
  {
    id: "sync-disk",
    name: "Sync Disk",
    tagline: "Native macOS Real-Time External Disk Mirror & Continuous Version History",
    description:
      "A high-performance macOS utility that continuously mirrors directories to external storage in real time while maintaining complete, point-in-time recoverable version history to prevent data loss.",
    image: "/Sync-Disk.png",
    url: "https://github.com/subhmnd/Sync-Disk",
    githubUrl: "https://github.com/subhmnd/Sync-Disk",
    badge: "Open Source",
    highlights: [
      "Low-latency real-time file synchronization & backup powered by native macOS FSEvents streaming",
      "Crash-resilient Content-Addressable Storage (CAS) with SHA-256 deduplication and atomic journals",
      "Smart iCloud Drive space saver that verifies external replication before local file eviction",
      "Finder-grade modern UI with interactive breadcrumbs, 3D icon previews, and 1-click version restore",
    ],
    techStack: ["Swift", "macOS", "FSEvents", "AppKit", "CAS Storage", "System Architecture"],
    featured: true,
  },
];
