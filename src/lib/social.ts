export interface SocialPlatform {
  name: string;
  username: string;
  handle: string;
  url: string;
  title: string;
}

export const SOCIAL = {
  name: "Subh Mondal",
  firstName: "Subh",
  username: "subhmnd",
  handle: "@subhmnd",
  title: "Founder & CEO at Nodezed",
  bio: "Founder & CEO at Nodezed, enabling developers and businesses to deploy scalable cloud infrastructure in a single click.",
  shortBio: "Hi I am Subh! Founder & CEO at Nodezed.",
  domain: "subhmondal.com",
  website: "https://subhmondal.com",
  company: {
    name: "Nodezed",
    url: "https://nodezed.com",
    role: "Founder & CEO",
  },
  x: {
    name: "X",
    username: "subhmnd",
    handle: "@subhmnd",
    url: "https://x.com/subhmnd",
    title: "X Profile (@subhmnd)",
  },
  github: {
    name: "GitHub",
    username: "subhmnd",
    handle: "@subhmnd",
    url: "https://github.com/subhmnd",
    title: "GitHub (@subhmnd)",
  },
  instagram: {
    name: "Instagram",
    username: "subhmnd",
    handle: "@subhmnd",
    url: "https://instagram.com/subhmnd",
    title: "Instagram (@subhmnd)",
  },
  linkedin: {
    name: "LinkedIn",
    username: "subhm",
    handle: "@subhm",
    url: "https://linkedin.com/in/subhm",
    title: "LinkedIn (@subhm)",
  },
} as const;

export type SocialKey = "x" | "github" | "instagram" | "linkedin";
