import { Stack } from "@/types";

export const stacks: Stack[] = [
  {
    id: "fully-free",
    name: "Zero-Cost Dev Stack",
    description: "Complete AI-powered development without spending a dime. All tools have generous free tiers, no credit card required.",
    useCase: "Students, hobbyists, bootstrapped founders, and anyone avoiding subscriptions",
    cost: "$0/month",
    layers: [
      { name: "IDE", tool: "VS Code + Continue.dev", toolId: "continue", reason: "Free AI coding assistant using your own API keys or local models" },
      { name: "API", tool: "OpenRouter", toolId: "openrouter", reason: "50 free requests/day across 100+ models, no credit card needed" },
      { name: "CLI", tool: "Gemini CLI", toolId: "gemini-cli", reason: "250 requests/day for Gemini 3.1 Flash, free forever tier" },
      { name: "Local Models", tool: "Ollama", toolId: "ollama", reason: "Run Llama, Qwen, and other models locally - completely free, unlimited usage" },
      { name: "Embeddings", tool: "Jina AI", toolId: "jina-embeddings", reason: "1M tokens/day free for RAG and semantic search" },
      { name: "Vector DB", tool: "ChromaDB", toolId: "chromadb", reason: "Free, open-source, runs locally or in the cloud" },
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
      { name: "Inference", tool: "Groq", toolId: "groq", reason: "Fastest LLM inference - 100+ tokens/sec, 50ms latency" },
      { name: "Coding", tool: "Aider + Groq", toolId: "aider", reason: "AI pair programming with instant responses via Groq" },
      { name: "Caching", tool: "DeepSeek V4", toolId: "deepseek-coder-v4", reason: "90% discount on repeated prompts via prompt caching" },
      { name: "Edge Deploy", tool: "Cloudflare Workers AI", toolId: "cloudflare-workers-ai", reason: "Run models at the edge, 10K neurons/day free" },
      { name: "Speech", tool: "Whisper via Groq", toolId: "whisper-groq", reason: "Real-time transcription, 2,000 requests/day" },
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
      { name: "IDE", tool: "Trae", toolId: "trae", reason: "$10/month gets 600 fast requests + unlimited slow, includes GPT-5.4 and Claude" },
      { name: "API", tool: "OpenRouter", toolId: "openrouter", reason: "$10 credits last months with smart model routing and BYOK option" },
      { name: "Fallback", tool: "Ollama", toolId: "ollama", reason: "Free local models for when API quotas run out" },
      { name: "Code Review", tool: "GitHub Copilot Free", toolId: "copilot-free", reason: "2,000 code completions/month, 50 chat messages" },
      { name: "Docs", tool: "Mintlify Writer", toolId: "mintlify", reason: "Free tier: AI documentation generation" },
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
      { name: "Models", tool: "Ollama", toolId: "ollama", reason: "Run Llama 3.3, Qwen 2.5, Mistral locally - zero data transmission" },
      { name: "IDE", tool: "Continue.dev", toolId: "continue", reason: "Open-source, connects to local Ollama, no cloud required" },
      { name: "Chat UI", tool: "Open WebUI", toolId: "open-webui", reason: "Self-hosted ChatGPT alternative, runs entirely local" },
      { name: "CLI", tool: "Aider", toolId: "aider", reason: "Git-integrated coding assistant, works with local models" },
      { name: "Vector DB", tool: "ChromaDB", toolId: "chromadb", reason: "Local embeddings storage, no cloud dependency" },
      { name: "Speech", tool: "Whisper.cpp", toolId: "whisper-local", reason: "Local transcription, no API calls, completely offline" },
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
      { name: "Orchestration", tool: "n8n", toolId: "n8n", reason: "Visual workflow builder with 400+ integrations, self-host for free" },
      { name: "Reasoning", tool: "DeepSeek R1", toolId: "deepseek-coder-v4", reason: "Open reasoning model, shows its thinking process, cheap API" },
      { name: "Execution", tool: "Qwen3.5-Coder", toolId: "qwen-code", reason: "Strong coding model available via Groq free tier" },
      { name: "Memory", tool: "ChromaDB", toolId: "chromadb", reason: "Long-term agent memory and context storage" },
      { name: "Embeddings", tool: "Jina AI", toolId: "jina-embeddings", reason: "1M tokens/day free, powers semantic memory" },
      { name: "Monitoring", tool: "Langfuse", toolId: "langfuse", reason: "Open-source LLM observability, self-hosted option" },
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
      { name: "Framework", tool: "LlamaIndex", toolId: "llamaindex", reason: "Purpose-built for RAG, handles ingestion to query end-to-end" },
      { name: "Vector DB", tool: "ChromaDB", toolId: "chromadb", reason: "Simple, fast, integrates seamlessly with LlamaIndex" },
      { name: "Embeddings", tool: "BGE-Large", toolId: "bge-embeddings", reason: "Best open-source embeddings for retrieval accuracy" },
      { name: "LLM", tool: "Claude 3.5 Sonnet", toolId: "claude-code", reason: "Excellent at following instructions and citing sources" },
      { name: "UI", tool: "Open WebUI", toolId: "open-webui", reason: "Chat interface with document upload, RAG-ready out of the box" },
      { name: "Fallback", tool: "Ollama", toolId: "ollama", reason: "Local LLM option for sensitive documents" },
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
      { name: "IDE", tool: "Cursor", toolId: "cursor", reason: "Best-in-class AI coding, 2-week free trial, then $20/mo" },
      { name: "Design", tool: "Figma AI", toolId: "figma-ai", reason: "UI mockups and wireframes with AI assistance" },
      { name: "Copy", tool: "Claude", toolId: "claude-code", reason: "Marketing copy, emails, documentation" },
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
      { name: "Examples", tool: "Claude", toolId: "claude-code", reason: "Generate code examples and tutorials" },
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
