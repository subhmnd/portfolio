export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  role?: string;
  description: string;
  image: string;
  url: string;
  actionLabel: string;
  githubUrl?: string;
  specs: string[];
  techStack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "nodezed",
    name: "Nodezed",
    tagline: "Developer Cloud Infrastructure & NVMe Servers",
    category: "Cloud Platform",
    role: "Founder & CEO",
    description:
      "Next-generation cloud compute and global edge infrastructure engineered for developers and autonomous workflows. Enables builders to deploy high-performance NVMe cloud servers, Anycast edge networking, and container environments in under 15 seconds.",
    image: "/Nodezed.png",
    url: "https://nodezed.com",
    actionLabel: "Visit nodezed.com",
    specs: ["15s Provisioning", "12 Global Locations", "Anycast Edge CDN", "Full Root SSH"],
    techStack: ["Cloud Infrastructure", "NVMe Compute", "Anycast CDN", "REST API", "DevOps"],
  },
  {
    id: "sync-disk",
    name: "Sync Disk",
    tagline: "Real-Time macOS External Disk Mirror & Backup",
    category: "macOS System Tool",
    description:
      "A lightweight, high-performance macOS menu bar utility that continuously mirrors local directories to external storage in real time to prevent data loss. Built with native FSEvents streaming, crash-resilient Content-Addressable Storage (CAS) with SHA-256 deduplication, and safe iCloud Drive space eviction.",
    image: "/Sync-Disk.png",
    url: "https://github.com/subhmnd/Sync-Disk",
    actionLabel: "View on GitHub",
    githubUrl: "https://github.com/subhmnd/Sync-Disk",
    specs: ["Real-Time FSEvents", "SHA-256 CAS Engine", "iCloud Eviction", "Point-in-Time Restore"],
    techStack: ["Swift", "macOS Sonoma/Sequoia", "FSEvents", "AppKit", "System Architecture"],
  },
];
