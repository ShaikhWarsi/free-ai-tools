import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "llm-api",
    name: "LLM API Providers",
    slug: "llm-api-providers",
    description: "Free and low-cost API providers for GPT, Claude, Gemini, and open-source models",
    icon: "Zap",
    color: "#3B82F6",
    toolCount: 20,
    featured: true,
  },
  {
    id: "ide",
    name: "AI-Powered IDEs",
    slug: "ai-ides",
    description: "Full-featured development environments with built-in AI coding assistance",
    icon: "Code2",
    color: "#8B5CF6",
    toolCount: 12,
    featured: true,
  },
  {
    id: "cli",
    name: "CLI Coding Tools",
    slug: "cli-tools",
    description: "Command-line tools for AI-assisted coding in your terminal",
    icon: "Terminal",
    color: "#10B981",
    toolCount: 15,
    featured: true,
  },
  {
    id: "local-model",
    name: "Local Models",
    slug: "local-models",
    description: "Run open-weight frontier models locally for unlimited offline coding",
    icon: "Cpu",
    color: "#F59E0B",
    toolCount: 8,
    featured: true,
  },
  {
    id: "rag",
    name: "RAG Stack Tools",
    slug: "rag-tools",
    description: "Retrieval-Augmented Generation tools for document Q&A systems",
    icon: "Search",
    color: "#F43F5E",
    toolCount: 12,
    featured: true,
  },
  {
    id: "agent",
    name: "Agent Frameworks",
    slug: "agent-frameworks",
    description: "Frameworks for building autonomous AI agents and workflows",
    icon: "Bot",
    color: "#6366F1",
    toolCount: 10,
    featured: true,
  },
  {
    id: "speech",
    name: "Speech APIs",
    slug: "speech-apis",
    description: "Speech-to-text and text-to-speech models and APIs",
    icon: "Mic",
    color: "#06B6D4",
    toolCount: 8,
    featured: false,
  },
  {
    id: "image",
    name: "Image Models",
    slug: "image-models",
    description: "Image generation models and APIs including FLUX, DALL-E, Stable Diffusion",
    icon: "Image",
    color: "#EC4899",
    toolCount: 10,
    featured: false,
  },
  {
    id: "video",
    name: "Video APIs",
    slug: "video-apis",
    description: "Text-to-video and image-to-video generation APIs",
    icon: "Video",
    color: "#8B5CF6",
    toolCount: 8,
    featured: false,
  },
  {
    id: "vector-db",
    name: "Vector Databases",
    slug: "vector-databases",
    description: "Production-ready vector storage for embeddings and semantic search",
    icon: "Database",
    color: "#14B8A6",
    toolCount: 10,
    featured: true,
  },
  {
    id: "hosting",
    name: "AI Hosting & GPU",
    slug: "hosting-gpu",
    description: "Serverless GPU providers and model hosting platforms",
    icon: "Server",
    color: "#F97316",
    toolCount: 8,
    featured: false,
  },
  {
    id: "evaluation",
    name: "Evaluation Tools",
    slug: "evaluation-tools",
    description: "Tools for benchmarking and evaluating AI models and applications",
    icon: "BarChart3",
    color: "#64748B",
    toolCount: 6,
    featured: false,
  },
  {
    id: "embedding",
    name: "Embedding APIs",
    slug: "embedding-apis",
    description: "Text embedding APIs essential for RAG and semantic search",
    icon: "Layers",
    color: "#10B981",
    toolCount: 6,
    featured: false,
  },
  {
    id: "automation",
    name: "Agentic Platforms",
    slug: "automation",
    description: "No-code and low-code platforms for building AI workflows",
    icon: "Workflow",
    color: "#0EA5E9",
    toolCount: 7,
    featured: false,
  },
  {
    id: "browser",
    name: "Browser Automation",
    slug: "browser-automation",
    description: "Tools for AI agents to control browsers and web scraping",
    icon: "Globe",
    color: "#D946EF",
    toolCount: 7,
    featured: false,
  },
  {
    id: "chat-platform",
    name: "AI Chat Platforms",
    slug: "chat-platforms",
    description: "General-purpose chat interfaces with free tiers",
    icon: "MessageSquare",
    color: "#84CC16",
    toolCount: 5,
    featured: false,
  },
];

export const featuredCategories = categories.filter((c) => c.featured);

export function getCategoryBySlug(slug: string): Category | undefined {
  // Handle slug aliases for common requested routes
  const aliases: Record<string, string> = {
    "ides": "ai-ides",
    "llm-apis": "llm-api-providers",
    "rag": "rag-tools",
    "agents": "agent-frameworks",
    "speech": "speech-apis",
    "image": "image-models",
    "video": "video-apis",
    "hosting": "hosting-gpu",
    "evaluation": "evaluation-tools",
    "embedding": "embedding-apis",
  };
  const normalizedSlug = aliases[slug] || slug;
  return categories.find((c) => c.slug === normalizedSlug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

// Helper to get simplified URL path for a category
export function getCategoryUrl(slug: string): string {
  const aliases: Record<string, string> = {
    "ai-ides": "ides",
    "llm-api-providers": "llm-apis",
    "rag-tools": "rag",
    "agent-frameworks": "agents",
    "speech-apis": "speech",
    "image-models": "image",
    "video-apis": "video",
    "hosting-gpu": "hosting",
    "evaluation-tools": "evaluation",
    "embedding-apis": "embedding",
    "browser-automation": "browser",
    "chat-platforms": "chat",
  };
  return `/categories/${aliases[slug] || slug}`;
}
