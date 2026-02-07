// ============================================================
// constants.ts — Single source of truth for all project data
// ============================================================

// ------ Identity ------

export const IDENTITY = {
  name: "Jaron Armiger",
  studio: "Hélianthès Studio",
  studioAccented: "Hélianthès Studio",
  headline:
    "Agentic AI for Capital Markets \u2022 Multi-Agent RAG (LangGraph, Pinecone, Neo4j) \u2022 Founder @ Helianthes Studio",
  bio: "As the founder of Hélianthès Studio, I build intelligent software that blends AI infrastructure with intentional design. My focus is on creating tools that are technically advanced, product-centric, and creatively sharp \u2014 software that doesn\u2019t just work, but resonates.",
  philosophy:
    "What sets my work apart is a distinct creative perspective. Inspired by the precision of Wes Anderson and the emotional tone of Blonde, I approach AI not just as a utility, but as a medium \u2014 for clarity, depth, and design. I bring elegance to both the interface and the infrastructure.",
} as const;

// ------ Technical Skills ------

export const SKILLS = [
  {
    category: "Agentic AI",
    details: "LangGraph, OpenAI, multi-agent architectures",
  },
  {
    category: "RAG Systems",
    details: "Pinecone, metadata chunking, prompt templating",
  },
  {
    category: "Full-Stack Development",
    details: "Next.js, FastAPI, TypeScript, Python",
  },
  {
    category: "Cloud Infrastructure",
    details: "AWS Lambda, S3, ECR, serverless workflows",
  },
] as const;

// ------ Projects (reverse chronological order) ------

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  videoUrl: string;
  imageUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: "librarian",
    title: "Librarian",
    subtitle: "Deal Intelligence Tool",
    description:
      "A deal intelligence tool designed based on the real workflow of a fund manager. It connects to a Drive folder full of investor docs \u2014 pitch decks, cap tables, legal files, spreadsheets \u2014 and turns that entire data room into something you can ask questions about in plain English.\n\nFor example, a founder or fund manager can ask: \u201CWhich portfolio companies raised a Series A in the last year?\u201D Or: \u201CWhich files contain details about IP ownership or convertible notes?\u201D It cites the original documents, shows links, and can generate a detailed memo or summary report.\n\nIt\u2019s incredibly useful for funds doing diligence, internal analysts, acquirers, or even public companies managing their corp dev pipelines.",
    tech: ["LangGraph", "Pinecone", "Neo4j", "Multi-Agent RAG"],
    videoUrl: "#",
    imageUrl: "/placeholder-librarian.jpg",
  },
  {
    id: "capconnect",
    title: "CapConnect",
    subtitle: "AI-Powered Investor Discovery",
    description:
      "An AI-powered investor discovery platform using a hybrid of semantic search and graph reasoning. It models the relationships between people, firms, co-investments, and shared affiliations using Pinecone + Neo4j, and routes requests through a multi-agent LangGraph backend. The result: precise investor matches and warm intro paths based on real-world proximity, shared networks, and thematic relevance.",
    tech: ["Pinecone", "Neo4j", "LangGraph", "Semantic Search", "Graph Reasoning"],
    videoUrl: "#",
    imageUrl: "/placeholder-capconnect.jpg",
  },
  {
    id: "prospector",
    title: "Prospector",
    subtitle: "Geo-Mapping Platform for Salespeople",
    description:
      "A geo-mapping platform built for salespeople \u2014 those modern prospectors who stake their claims not in riverbeds, but in territories drawn on digital maps. With a creative Gold Rush theme running through its veins, the platform turns cold territory into warm ground, giving every rep the tools to find what\u2019s already there, waiting beneath the surface.",
    tech: ["Next.js (typescript)", "AWS S3", "AWS Lambda", "Supabase"],
    videoUrl: "#",
    imageUrl: "/placeholder-prospector.jpg",
  },
  {
    id: "carviz",
    title: "Carviz",
    subtitle: "Chief AI Officer",
    description:
      "Led the development of computer vision systems for automated vehicle inspection. As Chief AI Officer, directed the technical vision for applying deep learning to real-world automotive assessment \u2014 turning cameras into instruments of precision.",
    tech: ["Computer Vision", "Deep Learning", "Automated Inspection"],
    videoUrl: "#",
    imageUrl: "/placeholder-carviz.jpg",
  },
];

// ------ Earlier Roles ------

export const EARLIER_ROLES = {
  summary:
    "CTO and founding engineer roles at early-stage startups, leading technical strategy, infrastructure, and AI development while mentoring junior contributors.",
} as const;

// ------ Berkeley / Origin ------

export const BERKELEY = {
  summary:
    "The arc from early conventional success to Berkeley, where the discovery of creative fields changed everything \u2014 leading to a deliberate departure, self-taught engineering, and the founding of Helianthes Studio.",
  copyTBD: true,
} as const;

// ------ Navigation ------

export const NAV_SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "librarian", label: "Librarian" },
  { id: "capconnect", label: "CapConnect" },
  { id: "prospector", label: "Prospector" },
  { id: "carviz", label: "Carviz" },
  { id: "earlier-roles", label: "Earlier Roles" },
  { id: "berkeley", label: "Berkeley" },
  { id: "contact", label: "Contact" },
] as const;

// ------ Branding Asset Paths ------

export const BRAND_ASSETS = {
  crest: "/branding/logos/coat_of_arms.png",
  crestIco: "/branding/logos/coat_of_arms.ico",
  frame: {
    topLeft: "/branding/frame/top_left.png",
    topMiddle: "/branding/frame/top_middle.png",
    topRight: "/branding/frame/top_right.png",
    bottomLeft: "/branding/frame/bottom_left.png",
    bottomMiddle: "/branding/frame/bottom_middle.png",
    bottomRight: "/branding/frame/bottom_right.png",
  },
} as const;

// ------ Design Tokens (mirrored in CSS variables) ------

export const COLORS = {
  background: "#FAF9F6",
  foreground: "#1A1A1A",
  muted: "#6B6B6B",
  border: "#E5E2DC",
  accent: {
    periwinkle: "#6C7EB7",
    green: "#5A7A5A",
    cream: "#F5F0E8",
  },
} as const;
