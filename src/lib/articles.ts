export interface ArticleAuthor {
  name: string;
  role: string;
  handle: string;
  avatar: string;
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  summary: string;
  author: ArticleAuthor;
  sections: {
    heading?: string;
    paragraphs?: string[];
    list?: string[];
    principles?: { number: string; title: string; body: string }[];
  }[];
}

export const ARTICLES: Article[] = [
  {
    slug: "why-we-are-building-nodezed",
    title: "Why We are Building Nodezed",
    subtitle:
      "A simpler, more transparent way to deploy and manage cloud infrastructure.",
    date: "Sep 27, 2026",
    readTime: "4 min read",
    image: "/articles/nodezed-building.png",
    tags: ["Cloud Infrastructure", "Nodezed", "DevOps", "Developer Experience"],
    summary:
      "A simpler, transparent way to deploy and manage cloud infrastructure. Nodezed brings compute, storage, databases, and edge networking to developers.",
    author: {
      name: "Subh Mondal",
      role: "Founder & CEO at Nodezed",
      handle: "@subhmnd",
      avatar: "/me.png",
    },
    sections: [
      {
        paragraphs: [
          "Cloud infrastructure is more powerful than it has ever been. You can create a server in seconds. Store terabytes of data. Deploy applications around the world. Put a CDN in front of them. Automate deployments. Run databases, containers, queues, and almost anything else you can imagine.",
          "But there is a problem: cloud infrastructure has become unnecessarily complicated.",
          "For developers, shipping software should be the hard part. The infrastructure shouldn't be.",
        ],
      },
      {
        heading: "The cloud should help developers build, not slow them down",
        paragraphs: [
          "When you want to launch a new application, you shouldn't have to become an expert in dozens of cloud products before writing your first line of production code.",
          "You shouldn't have to navigate hundreds of configuration options just to deploy a server.",
          "You shouldn't need to understand a provider's entire billing system to estimate what your application will cost.",
          "And you shouldn't have to sacrifice control simply because you want a simpler developer experience.",
          "Some platforms make infrastructure incredibly easy, but hide the underlying environment. Others give you complete control, but expect you to manage everything yourself.",
          "We believe there should be a better middle ground: simple enough for developers, powerful enough for production. That's why we're building Nodezed.",
        ],
      },
      {
        heading: "Introducing Nodezed",
        paragraphs: [
          "Nodezed is a developer-first cloud infrastructure platform designed to make deploying and scaling software simple.",
          "Instead of forcing developers to piece together infrastructure across multiple dashboards and providers, Nodezed brings the essential building blocks together through a unified experience:",
        ],
        list: [
          "High-performance NVMe Compute & Bare Servers",
          "Encrypted S3-compatible Object Storage",
          "Global Anycast DNS & Edge Network",
          "Low-latency Content Delivery Network (CDN)",
          "Production Managed Databases & Automated Caching",
          "Infrastructure-as-Code & Declarative APIs",
        ],
      },
      {
        paragraphs: [
          "The goal isn't to hide infrastructure. The goal is to make infrastructure understandable.",
          "You should be able to provision what you need, configure it the way you want, deploy your software, and continue building.",
        ],
      },
      {
        heading: "Your infrastructure should be yours",
        paragraphs: [
          "We don't believe simplicity should require giving up control.",
          "Developers should be able to understand where their software runs and what it runs on. They should be able to access their servers. They should be able to use familiar technologies. They should be able to SSH into a machine when they need to. They should be able to run Docker, databases, reverse proxies, background workers, or whatever their application requires.",
          "And they shouldn't have to completely redesign their infrastructure if they eventually decide to leave a platform. Your infrastructure should remain your infrastructure.",
          "Nodezed is being designed around that principle. We want to provide the convenience of a modern developer platform without turning your infrastructure into a black box.",
        ],
      },
      {
        heading: "Developer experience is infrastructure",
        paragraphs: [
          "Developer experience is often treated as a layer on top of infrastructure. We think that's backwards.",
          "The API matters. The dashboard matters. The CLI matters. The documentation matters. The provisioning experience matters. The error messages matter. The billing experience matters. The time between clicking 'Create' and having usable infrastructure matters.",
          "All of these things determine how developers experience the cloud. A technically excellent infrastructure system with a terrible developer experience is still a terrible product to use. So we're treating developer experience as part of the infrastructure itself.",
        ],
      },
      {
        heading: "Infrastructure should be predictable",
        paragraphs: [
          "Cloud pricing can be difficult to understand. Compute may be simple. Then networking isn't. Storage may look inexpensive. Then requests, transfers, backups, snapshots, or additional services change the calculation.",
          "For large organizations, dedicated cloud-finance teams can deal with this complexity. For an individual developer or small startup, it can become a serious distraction.",
          "We want Nodezed to move toward a simpler model: understand what you're running, and understand what it costs. Infrastructure should not feel like a financial puzzle.",
        ],
      },
      {
        heading: "Standards over lock-in",
        paragraphs: [
          "The best infrastructure technologies are often the ones that don't belong to a single company: Linux, SSH, PostgreSQL, Containers, S3-compatible storage, DNS, HTTP, WireGuard, Git.",
          "These technologies became powerful because developers could use them across environments. We believe cloud platforms should embrace that philosophy.",
          "Nodezed should make infrastructure easier to operate without making the underlying technology disappear. If you know how to work with Linux, you should feel at home. If you know Docker, you should be able to use Docker. If you use PostgreSQL, you should be able to continue using PostgreSQL. If you use S3-compatible APIs, your applications shouldn't need to be rewritten just because your infrastructure changes.",
          "We want to reduce lock-in, not create more of it.",
        ],
      },
      {
        heading: "One platform, many possibilities",
        paragraphs: [
          "Modern applications rarely depend on a single piece of infrastructure. A typical application might need compute to run the application, storage for files and assets, a database for application data, DNS for domains, CDN infrastructure for global delivery, background workers for asynchronous tasks, monitoring for reliability, backups for recovery, and automation for deployments.",
          "Developers shouldn't have to think of these as completely disconnected systems. They are all parts of the same application.",
          "Nodezed is being built around that reality. The long-term vision is a unified infrastructure layer where developers can manage these resources from one place while retaining control over the underlying infrastructure.",
        ],
      },
      {
        heading: "Built for developers, startups, and growing teams",
        paragraphs: [
          "We aren't trying to build infrastructure only for large enterprises. There are millions of developers building products with small teams, limited budgets, and ambitious ideas.",
          "A developer launching their first SaaS should have access to serious infrastructure. A startup shouldn't need a dedicated infrastructure team on day one. An agency shouldn't need a different workflow for every client. A growing engineering team shouldn't have to completely rebuild its infrastructure every time it scales.",
          "The cloud should meet developers where they are: start small, build quickly, scale when necessary, and keep control throughout the journey.",
        ],
      },
      {
        heading: "The principles behind Nodezed",
        paragraphs: [
          "Nodezed is still being built, but our principles are already clear:",
        ],
        principles: [
          {
            number: "01",
            title: "Make infrastructure understandable",
            body: "Complex systems can exist behind the scenes. The developer experience shouldn't be unnecessarily complex.",
          },
          {
            number: "02",
            title: "Give developers control",
            body: "Abstraction is useful. Removing control isn't.",
          },
          {
            number: "03",
            title: "Build for everyone",
            body: "Not every developer has a large team, an enormous budget, or years of cloud experience. Infrastructure should work for the developer starting today as well as the company scaling tomorrow.",
          },
          {
            number: "04",
            title: "Prefer open standards",
            body: "Developers should be able to use technologies they already know and move between environments without rewriting their entire stack.",
          },
          {
            number: "05",
            title: "Make the boring things disappear",
            body: "Provisioning, configuration, networking, deployment, monitoring, and backups. These things are important, but developers shouldn't spend their entire day managing them.",
          },
          {
            number: "06",
            title: "Sweat the details",
            body: "Fast interfaces. Clear errors. Good documentation. Predictable APIs. Simple workflows. Thoughtful defaults. Small details compound into great developer experiences.",
          },
        ],
      },
      {
        heading: "We're still early",
        paragraphs: [
          "Nodezed isn't finished. There are still difficult infrastructure problems to solve. There are systems to build, APIs to design, providers to integrate, security boundaries to harden, automation to improve, and a lot of mistakes for us to make and learn from.",
          "That's part of building infrastructure.",
          "We're starting with a simple idea: cloud infrastructure can be much easier to use without becoming less powerful. We're going to build toward that idea one piece at a time.",
        ],
      },
      {
        heading: "The future we're building",
        paragraphs: [
          "We don't want Nodezed to become another complicated cloud dashboard. We don't want developers to need a certification before they can deploy an application. We don't want simplicity to mean giving up control. And we don't want infrastructure to become something developers have to fear.",
          "We want the opposite.",
          "We want developers to open Nodezed, create the infrastructure they need, deploy their software, and get back to building. Because the best infrastructure is often the infrastructure you don't have to think about.",
          "Nodezed is building cloud infrastructure for developers. Simple where it should be. Powerful where it needs to be. Open enough to remain yours. And designed from the beginning around the people who actually build software.",
          "We're just getting started.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
