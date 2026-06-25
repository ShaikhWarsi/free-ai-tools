import { Stack } from "@/types";

export const stacks: Stack[] = [
  {
    id: "fully-free",
    name: "Zero-Cost Dev Stack",
    description: "Complete AI-powered development without spending a dime. All tools have generous free tiers, no credit card required.",
    useCase: "Students, hobbyists, bootstrapped founders, and anyone avoiding subscriptions",
    cost: "$0/month",
    layers: [
      { name: "IDE", tool: "Cursor Hobby / Qoder", toolId: "cursor", reason: "Limited completions + GPT-5.5-Instant chat, no credit card" },
      { name: "API", tool: "OpenRouter + Groq", toolId: "openrouter", reason: "50 req/day OpenRouter + 14.4K req/day Groq combo" },
      { name: "CLI", tool: "Gemini CLI / OpenCode Zen", toolId: "gemini-cli", reason: "1,500 req/day Gemini 3 Flash or OpenCode Zen free models" },
      { name: "Local Models", tool: "Ollama + Qwen3.6-Plus", toolId: "ollama", reason: "Unlimited offline coding with top open models" },
      { name: "Embeddings", tool: "Jina AI", toolId: "jina-embeddings", reason: "1M tokens/day free for RAG and semantic search" },
      { name: "Vector DB", tool: "ChromaDB / LanceDB", toolId: "chromadb", reason: "Free, open-source, runs locally" },
    ],
    tags: ["free", "no-credit-card", "beginner-friendly", "unlimited-local"],
    featured: true,
  },
  {
    id: "fastest",
    name: "Speed Demon Stack",
    description: "Blazing fast inference for real-time applications. Sub-100ms responses at every layer.",
    useCase: "Live coding assistants, chatbots, real-time analysis, trading bots",
    cost: "$0-20/month",
    layers: [
      { name: "Inference", tool: "Groq / Cerebras", toolId: "groq", reason: "2,000 tokens/sec (Cerebras), 50ms latency" },
      { name: "Coding", tool: "Qwen3.6-Plus via Groq", toolId: "groq", reason: "1,000 req/day at 71.2% SWE-bench" },
      { name: "Agent", tool: "OpenCode Zen", toolId: "opencode", reason: "Big Pickle (72.0%), MiniMax M2.5 (80.2%)" },
      { name: "Caching", tool: "DeepSeek V4", toolId: "deepseek-coder-v4", reason: "90% cache discount on repeated prompts" },
      { name: "Edge Deploy", tool: "Cloudflare Workers AI", toolId: "cloudflare-workers-ai", reason: "Run models at the edge, 10K neurons/day free" },
    ],
    tags: ["fast", "low-latency", "real-time", "production"],
    featured: true,
  },
  {
    id: "cheapest-pro",
    name: "Pro on a Budget",
    description: "Professional-grade AI tools for under $10/month. Smart provider mixing for maximum value.",
    useCase: "Freelancers, indie developers, small teams wanting quality without $200/mo bills",
    cost: "~$10/month",
    layers: [
      { name: "IDE", tool: "Trae Pro", toolId: "trae", reason: "$10/mo for $20 basic usage + bonus + SOLO mode" },
      { name: "CLI", tool: "OpenCode Go / MiMo Lite", toolId: "opencode", reason: "Go $10/mo or Xiaomi MiMo Lite $6/mo (~120 tasks)" },
      { name: "API", tool: "OpenRouter", toolId: "openrouter", reason: "$10 credits last months with smart model routing" },
      { name: "CLI", tool: "Gemini CLI", toolId: "gemini-cli", reason: "v0.37.1 with Gemini 3 Flash, 1,500 req/day free" },
      { name: "Fallback", tool: "Ollama", toolId: "ollama", reason: "Free local models for when API quotas run out" },
    ],
    tags: ["cheap", "pro-grade", "budget-friendly", "value"],
    featured: true,
  },
  {
    id: "local-privacy",
    name: "Privacy-First Stack",
    description: "100% offline AI development. No data ever leaves your machine - perfect for sensitive code and IP protection.",
    useCase: "Enterprise codebases, healthcare apps, legal tech, finance, proprietary software",
    cost: "$0/month (hardware only)",
    layers: [
      { name: "Models", tool: "Ollama + Llama 3.3 / Qwen3-Coder", toolId: "ollama", reason: "Run Llama 3.3, Qwen3-Coder locally - zero data transmission" },
      { name: "IDE", tool: "Continue.dev + VS Code", toolId: "continue", reason: "BYO local models, no cloud required" },
      { name: "CLI", tool: "Aider + local Ollama", toolId: "aider", reason: "Git-integrated, works with local models" },
      { name: "Chat UI", tool: "Open WebUI", toolId: "open-webui", reason: "Self-hosted ChatGPT alternative, runs entirely local" },
      { name: "Vector DB", tool: "ChromaDB / LanceDB", toolId: "chromadb", reason: "Local embeddings storage, no cloud dependency" },
      { name: "Speech", tool: "Whisper (local)", toolId: "whisper-local", reason: "Local transcription, no API calls, completely offline" },
    ],
    tags: ["privacy", "offline", "secure", "enterprise-ready", "hipaa-friendly"],
    featured: true,
  },
  {
    id: "agentic",
    name: "Autonomous Agent Stack",
    description: "Build self-running AI workflows that handle complex tasks end-to-end with memory and tool use.",
    useCase: "Automated code review, documentation updates, testing pipelines, research agents",
    cost: "$0-30/month",
    layers: [
      { name: "Orchestration", tool: "n8n / Gumloop", toolId: "n8n", reason: "Visual workflow builder, self-host for free" },
      { name: "Reasoning", tool: "DeepSeek R1 / DeepSeek V4", toolId: "deepseek-coder-v4", reason: "Complex decision making, cheap API" },
      { name: "Execution", tool: "Qwen3.6-Plus", toolId: "qwen-code", reason: "Strong coding model at 71.2% SWE-bench" },
      { name: "Memory", tool: "ChromaDB / Supabase Vector", toolId: "chromadb", reason: "Long-term agent memory and context storage" },
      { name: "Embeddings", tool: "Jina AI", toolId: "jina-embeddings", reason: "1M tokens/day free, powers semantic memory" },
      { name: "Monitoring", tool: "LangSmith", toolId: "langsmith", reason: "Trace agent steps and evaluate quality" },
    ],
    tags: ["agents", "automation", "workflows", "self-hosted"],
    featured: true,
  },
  {
    id: "rag",
    name: "Knowledge Base Stack",
    description: "Production-ready document Q&A system. Upload documents, ask questions, get cited answers.",
    useCase: "Internal wikis, legal document analysis, customer support, research assistants, exam prep",
    cost: "$0-50/month",
    layers: [
      { name: "Framework", tool: "LlamaIndex / LangChain", toolId: "llamaindex", reason: "RAG orchestration, ingestion to query end-to-end" },
      { name: "Vector DB", tool: "ChromaDB / Weaviate / Supabase", toolId: "chromadb", reason: "Document storage and retrieval" },
      { name: "Embeddings", tool: "E5-Mistral-7B (best accuracy)", toolId: "bge-embeddings", reason: "Best open-source embeddings for retrieval accuracy" },
      { name: "LLM", tool: "Claude Sonnet 4.6 (79.3% SWE)", toolId: "claude-code", reason: "Excellent at following instructions and citing sources" },
      { name: "UI", tool: "Open WebUI", toolId: "open-webui", reason: "Chat interface with document upload, RAG-ready out of the box" },
      { name: "Eval", tool: "RAGAS", toolId: "ragas", reason: "Measure RAG pipeline performance" },
    ],
    tags: ["rag", "documents", "knowledge-base", "qa", "production"],
    featured: true,
  },
  {
    id: "startup-mvp",
    name: "Startup MVP Stack",
    description: "Ship fast with AI-assisted full-stack development. From idea to deployed product in days.",
    useCase: "Startup founders, indie hackers, rapid prototyping, weekend projects",
    cost: "$20-50/month",
    layers: [
      { name: "Full-Stack", tool: "v0.dev", toolId: "v0", reason: "Generate React components from prompts, free tier available" },
      { name: "Backend", tool: "Supabase", toolId: "supabase", reason: "Database, auth, storage - free tier generous for MVPs" },
      { name: "IDE", tool: "Cursor", toolId: "cursor", reason: "Best-in-class AI coding, Hobby free tier, then $20/mo Pro" },
      { name: "Design", tool: "Figma AI", toolId: "figma-ai", reason: "UI mockups and wireframes with AI assistance" },
      { name: "Copy", tool: "Claude", toolId: "claude-chat", reason: "Marketing copy, emails, documentation" },
      { name: "Deploy", tool: "Vercel", toolId: "vercel", reason: "Deploy in seconds, free tier for static sites" },
    ],
    tags: ["startup", "mvp", "full-stack", "ship-fast"],
    featured: false,
  },
  {
    id: "documentation",
    name: "Docs & Content Stack",
    description: "AI-powered technical writing and documentation workflow. Never write docs from scratch again.",
    useCase: "Developer advocates, tech writers, open source maintainers, product teams",
    cost: "$0-20/month",
    layers: [
      { name: "Generation", tool: "Mintlify Writer", toolId: "mintlify", reason: "AI writes docs from your code automatically" },
      { name: "Editing", tool: "Grammarly", toolId: "grammarly", reason: "Polish and grammar check for technical writing" },
      { name: "Examples", tool: "Claude", toolId: "claude-chat", reason: "Generate code examples and tutorials" },
      { name: "Diagrams", tool: "Mermaid", toolId: "mermaid", reason: "Text-to-diagrams for architecture docs" },
      { name: "Hosting", tool: "Mintlify", toolId: "mintlify", reason: "Beautiful docs sites with AI search, free for open source" },
    ],
    tags: ["documentation", "technical-writing", "dx"],
    featured: false,
  },
];

export function getStackById(id: string): Stack | undefined {
  // Handle aliases for common stack names
  const aliases: Record<string, string> = {
    "cheapest": "cheapest-pro",
    "local-first": "local-privacy",
    "agent-stack": "agentic",
    "rag-stack": "rag",
    "free": "fully-free",
    "fast": "fastest",
    "privacy": "local-privacy",
    "startup": "startup-mvp",
    "docs": "documentation",
    "mvp": "startup-mvp",
  };
  const normalizedId = aliases[id] || id;
  return stacks.find((s) => s.id === normalizedId);
}

export function getFeaturedStacks(): Stack[] {
  return stacks.filter((s) => s.featured);
}
