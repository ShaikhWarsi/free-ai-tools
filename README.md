# Free AI Tools

![Stars](https://img.shields.io/github/stars/ShaikhWarsi/free-ai-tools?style=social)
![Last Updated](https://img.shields.io/badge/updated-October%205%2C%202026-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen)

> **Curated list of free LLM APIs, coding copilots, AI IDEs, agents, and infrastructure tools for building real AI applications.**

### What's Inside
- ✅ Free GPT-6 / Claude 5.5 / Gemini 3.5 API access
- 🤖 Coding copilots and AI-native IDEs (Cursor, Trae, Windsurf)
- 💰 Cheapest AI APIs ($0.08-0.50 per 1M tokens)
- 📚 RAG stack tools (vector DBs, embeddings, frameworks)
- 🎯 Agent frameworks and automation tools
- 🔒 Local models for privacy (Ollama, Llama, Qwen)
- 🏗️ Production-ready stack configurations
- 🆕 Claude Sonnet 5.5, Claude Opus 5.5, Haiku 5.5 — GPT-6 Astra, GPT-6.1 Sol, GPT-6 Luna — Gemini 3.5 Flash, Gemini 4 Argon — GitHub Copilot AI Credits — Windsurf Max — Trae Ultra — **OpenCode 167k⭐** — **Xiaomi MiMo V2.5 Pro**

**Goal:** Help developers build AI apps without paying $200/month.

> [!NOTE]  
> Please don't abuse these services, else we might lose them for everyone.
> The number becomes 550+ when you add all the models and sub services of all the tools provided.
> When raising issues or pull requests please dont add your own paid, expensive personal projects.

> [!WARNING]  
> **October 2026 Model Generation Leap:** Major providers have transitioned to next-generation architectures: OpenAI introduced the GPT-6 family (GPT-6 Astra, GPT-6.1 Sol, GPT-6 Luna); Anthropic deployed the Claude 5.5 generation (Claude Opus 5.5, Claude Sonnet 5.5, Claude Haiku 5.5); Google rolled out Gemini 3.5 Flash / Flash-Lite as the default workhorse and previewed Gemini 4 Argon. The new baseline for high-throughput coding and daily development is Claude Sonnet 5.5, GPT-6.1 Sol, and Gemini 3.5 Flash, while complex multi-hour reasoning and autonomous sandboxing target GPT-6 Astra and Claude Opus 5.5.
>
> **Pricing & Billing Updates:** Windsurf switched to a quota-based model (Pro $20, Teams $40, new Max $200) on Mar 18. Trae moved to a 5-tier token system (Lite $3, Pro $10, Pro+ $30, Ultra $100) on Feb 24. Qoder's launch promo ended — standard standalone pricing settled at Pro $30/mo (2,000 credits, or CNY 59/mo on Qoder CN All-in-One), Teams $40/seat (3,000 credits). Cursor split Teams into Teams Standard ($40/seat) & Teams Premium ($120/seat), credited $70 third-party usage on Pro+ ($60/mo), and shifted Bugbot to ~$1.00–$1.50/run. GitHub Copilot summer credit promotion ended Sep 1, 2026 (reverting to standard $19 / 1,900 credits for Business and $39 / 3,900 credits for Enterprise). Xiaomi MiMo V2.5 API permanent pricing schedule flattened to $1.00/1M input, $3.00/1M output, and $0.20/1M cached across all context lengths up to 1M tokens.

---

## 🎯 Why This Repo Exists

Most AI tool lists are:
- ❌ Outdated (prices/limits from 2023)
- ❌ Filled with affiliate links and sponsored placements
- ❌ General-purpose directories with no developer focus
- ❌ Missing production-critical details (rate limits, commercial use, architecture patterns)

**This repo focuses only on:**
- ✅ Tools developers *actually* use in production
- ✅ Generous free tiers (no "5 requests then paywall")
- ✅ Production-capable models (SWE-bench verified, not toys)
- ✅ Real infrastructure (APIs, hosting, vector DBs, not just chatbots)
- ✅ Minimal fluff, maximum utility

**Unlike:** `awesome-ai` (general list), `ai-collection` (marketing focus), `toolify` (affiliate-heavy)

**This is for:** Builders who want to ship AI features this week.

---

## ⭐ Support This Project

If this repo helped you build something or saved you money:

**[⭐ Star this repo](https://github.com/ShaikhWarsi/free-ai-tools)** — it helps more builders discover free AI resources.

**[🔄 Share with your team]** — spread the knowledge.

**[📝 Contribute](CONTRIBUTING.md)** — found a new free tier? Updated pricing? PRs welcome!

---

## 📅 Updates

**2026-10-05 (5/10/26)**
- 🚀 **October 2026 Model Generation Leap**: Updated baseline frontier models to the latest production architectures across all tables, IDE profiles, CLI tools, and API pricing matrices:
  - **OpenAI**: GPT-6 Astra (flagship reasoning), GPT-6.1 Sol ($2.00/$10.00 per 1M, high-efficiency production agent), and GPT-6 Luna ($0.30/$1.20 per 1M lightweight tier).
  - **Anthropic**: Claude Opus 5.5 ($5/$25, deep reasoning & sandbox security), Claude Sonnet 5.5 ($2/$10, 70.6% Terminal-Bench 4.0, 30% fewer tokens/task), and Claude Haiku 5.5.
  - **Google**: Gemini 3.5 Flash & 3.5 Flash-Lite (sub-100ms high-throughput defaults) and Gemini 4 Argon preview.
  - Replaced legacy 2025/early-2026 SWE-bench benchmarks in comparison notes with Terminal-Bench 4.0, DeepSWE v1.1, and OSWorld 2.0.
- 🧹 **Removed Fabricated & Phantom Tool Entries**:
  - Completely purged non-existent / fictitious repositories: Antigravity (`google-deepmind/antigravity`), MemoryPalace (`milla-jovovich/mempalace`), AWS Kiro (`kiro.dev`), and QuantFlow Pilot (`qf-studio/pilot`).
  - Removed mock benchmark submission "Big Pickle" from OpenCode Zen and agent stacks.
  - Restored verified first-party documentation for **[Amazon Q Developer](https://aws.amazon.com/q/developer/)** (50 interactions/month free tier with AWS Builder ID, powered by Bedrock).
- 🛠️ **Tool-Specific Architectural Corrections**:
  - **Trae**: Accurately documented ByteDance's native Doubao model family in China alongside official routing to Claude 3.5/3.7 Sonnet and GPT-4o for international developers (removed false claims about DeepSeek replacing Claude).
  - **Atlassian Rovo Dev CLI**: Removed from free developer stack; clarified that Rovo is an enterprise SaaS add-on requiring an active paid Atlassian Cloud organization.
- 💰 **Pricing & Expired Promotion Refreshes**:
  - **GitHub Copilot**: Summer promotion expired Sep 1, 2026; reverted to standard monthly AI Credits (Business: 1,900 credits / $19, Enterprise: 3,900 credits / $39).
  - **Cursor**: Shifted Bugbot from flat $40/seat to per-run PR review usage pricing (~$1.00–$1.50/run); split Teams into Teams Standard ($40/seat) & Teams Premium ($120/seat with 5x usage pool); clarified Pro+ ($60/mo) includes $70 in third-party model credits.
  - **Qoder**: Post-promotional standard pricing settled at Pro $30/mo (2,000 credits, or CNY 59/mo on Qoder CN) and Teams $40/seat (3,000 credits).
  - **Xiaomi MiMo**: Permanent API pricing flattened to $1.00/1M in, $3.00/1M out, and $0.20/1M cache; fixed Max tier credits typo from 82B to 3B Credits (2.5B–3.5B range).
- 🛑 **Service Sunsets & License Corrections**:
  - **GitHub Models**: Documented official and permanent retirement on July 30, 2026.
  - **Cohere**: Marked strictly as ❌ Non-commercial (evaluation only) per Trial API license terms.
  - **Cerebras**: Unified free tier quota to 1.5M tokens/day across all tables and matrices.
  - **free-coding-models (FCM)**: Updated live catalog count to 271 models across 25 providers.
  - Synchronized and validated all website data in `website/src/data/tools.ts` and `website/src/data/stacks.ts`.
- 🔗 **Anchor Links & Navigation Fixes**:
  - Replaced dead in-page `#` anchor links for PR review and CLI tools (Bito, Sourcery, ForgeCode, Goose, OhMyPi) with direct links to official repositories and websites.
  - Corrected invalid URLs for OpenAI image models (pointing to verified DALL-E 3 documentation) and aligned CLI headings to official sites.
- 🧹 **Purged Leftover Prompt Artifacts**:
  - Removed all internal prompt artifact references ("ExamAi") across RAG architecture diagrams, scaling strategy tables, and stack configs in both `README.md` and `website/src/data/tools.ts`.
- ⚖️ **Cross-Table Consistency & Math Corrections**:
  - Standardized MiniMax model version to **MiniMax M2.5** across all API pricing, use-case recommendations, and OpenCode configurations.
  - Aligned Recraft free tier quota to verified **30 credits/day** across all tables.
  - Standardized Sora references to **Sora 3**.
  - Corrected Leonardo.Ai token generation math to reflect realistic output (~8–15 images from 150 daily tokens).
- ⚙️ **Provider Categorization & CLI Accuracy**:
  - Relocated Vercel AI Gateway ($5/mo credit) from Fully Free Providers to Providers with Trial Credits.
  - Corrected CLI flag typo (`--fiable` → `--reliable`) in free-coding-models usage documentation.
  - Removed rogue footer promotional link.

**2026-06-25**
- 🔄 Major model verification and name alignment: Migrated old placeholders to official **Claude Fable 5**, **Claude Opus 4.8**, and **GPT-5.5 (Instant/Thinking/Pro)** architectures.

**2026-06-16**
- 🆕 Added **OpenCode** (167k⭐ OSS CLI), **Xiaomi MiMo Token Plan** (Chinese coding subscription)
- 🧹 Removed weak/no-longer-free items from Free LLM providers: Cohere (non-commercial only), GitHub Models (Copilot-required; retired July 30, 2026), SambaNova/Hyperbolic (trial-only), HuggingFace (~$0.10/mo), Vercel ($5/mo), Mistral Codestral, Together AI, iFlow (7-day key), Perplexity API
- 🔄 Updated Gemini CLI entry: 3.1 Pro is paid-only; 3 Flash is the free tier (1,500 req/day)
- 🔄 Pricing refresh: Windsurf (Mar 18), Trae (Feb 24), Qoder (Apr 30), GitHub Copilot (Jun 1) billing changes
- ➕ Added GitHub Copilot Max tier ($100/mo, $200 AI Credits) and Claude Haiku 4.5
- 🐛 Fixed stale Cursor / Qoder / Windsurf / GitHub Copilot pricing throughout

**2026-05-18**
- ✨ added github PR review tools

**2026-04-12**
- ✨ added a website for easy navigation
---
**2026-04-11**
- ✨ Initial release
---

## Table of Contents

- [Quick Comparison](#quick-comparison)
- [Free LLM API Providers](#free-llm-api-providers)
  - [Fully Free Providers](#fully-free-providers)
  - [Providers with Trial Credits](#providers-with-trial-credits)
- [AI-Powered IDEs](#ai-powered-ides)
  - [IDEs with Pro-Grade Models](#ides-with-pro-grade-models)
  - [IDEs with Basic Models](#ides-with-basic-models)
- [CLI Coding Tools](#cli-coding-tools)
  - [CLI Tools with Pro-Grade Models](#cli-tools-with-pro-grade-models)
  - [CLI Tools with Basic Models](#cli-tools-with-basic-models)
- [API Providers for AI Coding Tools](#api-providers-for-ai-coding-tools)
- [Paid Tiers Comparison](#paid-tiers-comparison)
- [Local Models](#local-models)
- [free-coding-models CLI](#free-coding-models-cli)
- [Additional 2026 AI Tools](#additional-2026-ai-tools)
  - [Agentic Workflow Platforms](#agentic-workflow-platforms)
  - [Data Visualization & Analysis](#data-visualization--analysis)
  - [Creative & Multimedia Tools](#creative--multimedia-tools)
  - [Productivity & Research Tools](#productivity--research-tools)
  - [Vertical AI](#vertical-ai)
  - [Marketing & SEO Tools](#marketing--seo-tools)
  - [Open Source & Local Tools](#open-source--local-tools)
- [🏗️ Recommended Stacks](#️-recommended-stacks)
- [⚡ Realtime & Streaming APIs](#-realtime--streaming-apis)
- [🎙️ Speech Models](#️-speech-models)
- [🎨 Image Generation Models](#-image-generation-models)
- [🎬 Video Generation APIs](#-video-generation-apis)
- [🌐 AI Browser Automation](#-ai-browser-automation)
- [💾 Cheap Vector DB Hosting](#-cheap-vector-db-hosting)
- [🏛️ Common AI Architecture Patterns](#️-common-ai-architecture-patterns)
- [💵 Model Price Comparison](#-model-price-comparison)
- [🎯 Best Models by Use Case](#-best-models-by-use-case)
- [⏱️ Rate Limit Comparison](#️-rate-limit-comparison)
- [✅ Commercial Use Summary](#-commercial-use-summary)
- [🧩 RAG Stack Tools](#-rag-stack-tools)
- [🔢 Best Free Embedding APIs](#-best-free-embedding-apis)
- [🖥️ AI Hosting & GPU Providers](#️-ai-hosting--gpu-providers)
- [📊 AI Evaluation Tools](#-ai-evaluation-tools)
- [📐 Structured Output Tools](#-structured-output-tools)
- [🏷️ Legend](#️-legend)
- [Contributing](#contributing)
- [License](#license)

---

## Quick Comparison

### Free LLM API Providers Summary

| Provider | Models | Free Tier | Credit Card |
|----------|--------|-----------|-------------|
| [NVIDIA NIM](#nvidia-nim) | 46 | 40 req/min | No |
| [OpenRouter](#openrouter) | 25 | 50/day (1K/day with $10) | No |
| [Groq](#groq) | 20+ | 1K-14.4K req/day | No |
| [Google AI Studio](#google-ai-studio) | 9 | 5-500 req/day | No |
| [Cloudflare Workers AI](#cloudflare-workers-ai) | 47+ | 10K neurons/day | No |
| [Cerebras](#cerebras) | 4 | 1.5M tokens/day | No |
| [Mistral La Plateforme](#mistral-la-plateforme) | 10+ | 1B tokens/month | No |

### AI-Powered IDEs with Free Pro-Grade Access

| IDE | Pro-grade Models | Free Tier Limit | Credit Card |
|-----|------------------|-----------------|-------------|
| [Cursor](#cursor) | Claude Sonnet 5.5 / GPT-6.1 Sol / Custom | Limited free tier (Hobby) | No |
| [Trae](#trae) | Doubao / Claude 3.5/3.7 / GPT-4o (Region-dependent) | 5,000 auto-completions/month | No |
| [Windsurf](#windsurf) | Claude Sonnet 5.5 / Opus 5.5, GPT-6.1 Sol | Light quota (daily/weekly) | No |
| [Qoder](#qoder) | Qwen3.6-Plus, Qwen3-Coder-480B, GPT-6.1 Sol | Unlimited completions + limited chat | No |

### AI GitHub PR Review Tools

| Tool | Starting Price | Free Tier | Features | Credit Card |
|------|----------------|-----------|-----------|-------------|
| [PrixAI](https://www.prixai.xyz) | Free / $10 paid plan | Free trial available | Unlimited reviews Auto-fix PRs, issue planning | No |
| [Bito](https://bito.ai) | Free / $25 paid plans | Free trial available | AI PR reviews/Unlimited reviews | No |
| [Sourcery](https://sourcery.ai) | ~$12/month | Free trial available | Code quality reviews | No |

### CLI Coding Tools with Free Pro-Grade Access

| Tool | Pro-grade Models | Free Tier Limit | Credit Card |
|------|------------------|-----------------|-------------|
| [Gemini CLI](#gemini-cli) | Gemini 3.5 Flash / Flash-Lite | 1,500 req/day | No |
| [Rovo Dev CLI](#rovo-dev-cli) | Claude Sonnet 5.5, GPT-6.1 Sol | Enterprise Cloud add-on (5M tok/day) | Paid Atlassian Cloud org required |
| [Warp](#warp) | GPT-6.1 Sol, Claude Sonnet 5.5 | 150 credits/mo (first 2 mo), 75/mo after | No |
| [GitHub Copilot](#github-copilot) | Claude Sonnet 5.5, GPT-6.1 Sol, GPT-6 Astra | 50 chat + 2K completions/month | No |
| [Jules](#jules) | Gemini 3.5 Flash / Gemini 3 Pro | 15 tasks/day | No |
| [Amazon Q Developer](#amazon-q-developer) | Claude 3.5 Sonnet (AWS Bedrock) | 50 interactions/month (AWS Builder ID) | No |
| [OpenCode](#opencode) | 75+ providers (BYOK) + Go bundle | Free (Zen) / Go $10/mo | No |
| [Xiaomi MiMo](#xiaomi-mimo-token-plan) | MiMo-V2.5-Pro, MiMo-V2.5, MiMo-V2-Omni | Free API credits | No |
| [ForgeCode](https://github.com/forgecode/forgecode) | 300+ models via OpenRouter | 10K tokens/day | No |
| [RooCode](#roocode) | Bring your own keys | Unlimited (BYOK) | No |
| [Goose](https://github.com/block/goose) | Bring your own keys | Unlimited (BYOK) | No |
| [OhMyPi](https://github.com/can3p/ohmypi) | Bring your own keys | Unlimited (BYOK) | No |

### What Qualifies as "Pro-Grade"?

Models achieving ≥60% on SWE-bench Verified / Pro or leading agentic benchmarks (Terminal-Bench 4.0, DeepSWE v1.1):

| Model | Benchmark / Score | Provider | Status |
|-------|-------------------|----------|--------|
| Claude **Opus 5.5** | Flagship Enterprise (~86% SWE) | Anthropic | Flagship Reasoning & Security |
| **GPT-6 Astra** | Flagship Computer Operator (~85% SWE) | OpenAI | Autonomous Agentic Flagship |
| **GPT-6.1 Sol** | Matches Astra on DeepSWE v1.1 ($2/$10) | OpenAI | Workhorse Agent |
| Claude **Sonnet 5.5** | 70.6% Terminal-Bench 4.0 / 55.5% CursorBench 4.0 | Anthropic | High-Speed Agentic Coder |
| **Gemini 4 Argon** | Frontier Long-Horizon (1M output tokens) | Google | Frontier Reasoning (Preview) |
| **Gemini 3.5 Flash** | 84.2% CharXiv / High-Throughput | Google | Default Fast Workhorse |
| Qwen3.6-Plus | 71.2% SWE-bench | Alibaba | Premium Open-weight |

> **Note:** `[verify]` indicates scores need verification from official sources. Always check current benchmarks before making decisions.

---

## 🏗️ Recommended Stacks

Ready-made combinations for different use cases. Copy-paste these configurations.

### 🟢 Fully Free Coding Stack (No Credit Card)

| Layer | Tool | Why |
|-------|------|-----|
| **IDE** | Cursor Hobby / Qoder | Limited completions + Claude Sonnet 5.5 / GPT-6.1 Sol chat |
| **CLI** | Gemini CLI (3.5 Flash) / OpenCode Zen | 1,500 req/day Flash, free open-source models |
| **API** | OpenRouter + Groq | 50 req/day + 14.4K req/day combo |
| **Local** | Ollama + Qwen3.6-Plus | Unlimited offline |
| **Automation** | n8n Self-hosted | Unlimited workflows |
| **Vector DB** | ChromaDB / LanceDB | Free local storage |

**Total Cost: $0/month**

---

### ⚡ Fastest Stack (Low Latency)

| Layer | Tool | Speed |
|-------|------|-------|
| **Inference** | Groq / Cerebras | 2,000 tokens/sec (Cerebras) |
| **Coding** | Qwen3.6-Plus via Groq | 1,000 req/day (71.2% SWE) |
| **Agent** | OpenCode Zen | MiniMax M2.5 (80.2%), DeepSeek V4 |
| **Cache** | DeepSeek V4 | $0.30/$0.50 per 1M, 90% cache discount |
| **Edge** | Cloudflare Workers AI | Global CDN |

**Best for:** Real-time apps, trading bots, live coding assistants

---

### 💰 Cheapest Pro Stack (<$10/month)

| Layer | Tool | Cost |
|-------|------|------|
| **IDE** | Trae Lite | $3/mo ($5 basic usage + bonus) |
| **IDE** | Trae Pro | $10/mo ($20 basic usage + bonus, SOLO mode) |
| **API** | OpenRouter $10 | 1K req/day + BYOK 1M/month free |
| **CLI** | OpenCode | Free (BYOK) or Go $10/mo |
| **CLI** | Xiaomi MiMo Lite | $6/mo (60M credits, ~120 tasks) |
| **CLI** | Gemini CLI | Gemini 3.5 Flash / Flash-Lite |
| **Local** | Ollama | Free |
| **Embeddings** | Jina AI | Free tier |

**Total Cost: ~$10/month for pro-grade everything**

---

### 🔒 Local Privacy Stack (100% Offline)

| Layer | Tool | Privacy |
|-------|------|---------|
| **Models** | Ollama + Llama 3.3 / Qwen3-Coder | Runs locally |
| **IDE** | Continue.dev + VS Code | BYO local models |
| **CLI** | Aider + local Ollama | Git-integrated, offline |
| **Chat UI** | Open WebUI | Self-hosted ChatGPT alternative |
| **Vector DB** | ChromaDB / LanceDB | Local embeddings storage |
| **Speech** | Whisper (local) | Offline transcription |

**Best for:** Healthcare, legal, finance - any sensitive data

---

### 🤖 Agentic AI Stack (Autonomous Workflows)

| Component | Tool | Role |
|-----------|------|------|
| **Orchestrator** | n8n / Gumloop | Workflow automation |
| **Reasoning** | DeepSeek R1 / DeepSeek V4 | Complex decision making |
| **Execution** | Qwen3.6-Plus | Code generation |
| **Memory** | ChromaDB / Supabase Vector | Long-term context |
| **Embeddings** | Jina Embeddings v3 (1M tokens/day free) | Semantic search |
| **Monitoring** | LangSmith | Trace agent steps |

**Best for:** Autonomous research assistants, code review bots, data processing pipelines

---

### 📊 RAG Stack (Document Q&A)

| Component | Tool | Purpose |
|-----------|------|---------|
| **Framework** | LlamaIndex / LangChain | RAG orchestration |
| **Vector DB** | ChromaDB / Weaviate / Supabase | Document storage |
| **Embeddings** | E5-Mistral-7B (best accuracy) | Text vectorization |
| **Chunking** | LlamaIndex | Smart document splitting |
| **Reranking** | Cohere Rerank | Improve retrieval accuracy |
| **LLM** | Claude Sonnet 5.5 / GPT-6.1 Sol | Answer generation |
| **Eval** | RAGAS | Measure RAG performance |

**Best for:** Document QA, legal document analysis, knowledge bases

---

## Free LLM API Providers

### Fully Free Providers

#### [OpenRouter](https://openrouter.ai)

**Limits:** 20 RPM, **29 free models** (262K context max, March 2026), models share quota

- [Llama 3.3 70B](https://openrouter.ai/meta-llama/llama-3.3-70b-instruct:free) ✅
- **NEW: [Nemotron 3 Super](https://openrouter.ai/nvidia/nemotron-3-super:free)** (262K context)
- **NEW: [MiniMax M2.5](https://openrouter.ai/minimax/minimax-m2.5:free)**
- **NEW: [Devstral 2](https://openrouter.ai/mistralai/devstral-2:free)** (Apache 2.0)
- **NEW: [Gemma 3n family](https://openrouter.ai/google/gemma-3n-e2b-it:free)** (mobile-optimized)
- **qwen/qwen3.6-plus:free** ✅
- [Hermes 3 Llama 3.1 405B](https://openrouter.ai/nousresearch/hermes-3-llama-3.1-405b:free)
- [Llama 3.2 3B Instruct](https://openrouter.ai/meta-llama/llama-3.2-3b-instruct:free)
- [Mistral Small 3.1 24B](https://openrouter.ai/mistralai/mistral-small-3.1-24b-instruct:free)
- [Full list](https://openrouter.ai/collections/free-models)

---

#### [OfoxAI](https://ofox.ai)

Unified API gateway for 100+ LLMs. OpenAI and Anthropic SDK-compatible. China-friendly with Hong Kong direct access (100-300ms latency). No monthly fees, pay per token.

**Limits:** Not published | **1 free model**

- [GLM-4.7-Flash](https://ofox.ai/models/z-ai/glm-4.7-flash:free) (200K context, 128K output, $0/M input, $0/M output)

---

#### [Google AI Studio](https://aistudio.google.com)

Data is used for training when used outside UK/CH/EEA/EU.

**Rate limits:** Tier 1 (default): 250 RPD | Tier 2: Requires $250 spend + 30 days

| Model | Free Tier Limits |
|-------|------------------|
| Gemini 3.1 Pro [verify: now paid] | 250 RPD (Tier 1) |
| Gemini 3.5 Flash | 1,500 RPD (Primary high-throughput, low-latency) |
| Gemini 3.5 Flash-Lite | High-throughput lightweight tier |
| Gemini 3 Flash | 1,500 RPD |
| All others | Check console |

> **Note:** Data training outside UK/CH/EEA/EU still applies.

---

#### [NVIDIA NIM](https://build.nvidia.com/explore/discover)

Phone number verification required. Models tend to be context window limited.

**Limits:** **1K credits signup, up to 5K total, 40 RPM** (phone verify required)

- 46+ models including Llama 3.3 70B, Llama 4 Scout, Mistral Large, Qwen3 235B

---

#### [Mistral (La Plateforme)](https://console.mistral.ai/)

*Free tier requires opting into data training; phone verification required*

**Limits (per-model):** 1 req/s, 500K tokens/min, 1B tokens/month

- Open and Proprietary Mistral models (Mistral Large 3, Small 3.1, etc.)

---

#### [Bifrost](https://github.com/maximhq/bifrost)

Self-hosted, open-source AI gateway for routing requests across 20+ providers through an OpenAI-compatible API.

- **Models:** 20+ provider integrations through your own keys
- **Pricing:** Apache-2.0; no hosted subscription required

---

#### [OpenCode Zen](https://opencode.ai/docs/zen/)

AI gateway with curated models. Free models may use data for improvement.

- MiniMax M2.5 Free (S+, 80.2% SWE-bench)
- MiMo V2 Pro/Omni/Flash Free
- Nemotron 3 Super Free
- DeepSeek V4 Free
- Trinity Large Preview Free

---

#### [Cerebras](https://cloud.cerebras.ai/)

| Model | Limits |
|-------|--------|
| GPT-OSS 120B | 30 req/min, 60K tokens/min, 900 req/hour, 1.5M tokens/day |
| Llama 3.1 8B | Same limits as above |
| Qwen3-235B | Available via API |

---

#### [Groq](https://groq.com)

| Model | Limits |
|-------|--------|
| Llama 3.1 8B | 14,400 req/day, 6K tokens/min |
| Llama 3.3 70B | 1,000 req/day, 12K tokens/min |
| Llama 4 Maverick/Scout | 1,000 req/day |
| Whisper Large v3/v3 Turbo | 7,200 audio-sec/min, 2,000 req/day |
| Qwen3-32B | 1,000 req/day, 6K tokens/min |
| Kimi K2 Instruct | 1,000 req/day, 10K tokens/min |
| GPT-OSS 20B/120B | 1,000 req/day, 8K tokens/min |
| And 15+ more |

---

#### [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai)

**Limits:** [10,000 neurons/day](https://developers.cloudflare.com/workers-ai/platform/pricing/#free-allocation)

- @cf/aisingapore/gemma-sea-lion-v4-27b-it
- @cf/ibm-granite/granite-4.0-h-micro
- @cf/openai/gpt-oss-120b, @cf/openai/gpt-oss-20b
- @cf/qwen/qwen3-30b-a3b-fp8
- @cf/zai-org/glm-4.7-flash
- DeepSeek R1 Distill Qwen 32B
- Deepseek Coder 6.7B Base/Instruct (AWQ)
- Deepseek Math 7B Instruct
- Gemma 2B/3 12B/7B Instruct (LoRA)
- Hermes 2 Pro Mistral 7B
- Llama 2 7B/13B Chat (FP16/INT8/AWQ/LoRA)
- Llama 3 8B Instruct, Llama 3.1 8B Instruct (AWQ/FP8)
- Llama 3.2 1B/3B/11B Vision Instruct
- Llama 3.3 70B Instruct (FP8), Llama 4 Scout Instruct
- Mistral 7B Instruct v0.1/v0.2 (AWQ/LoRA)
- Mistral Small 3.1 24B Instruct
- Qwen 1.5 0.5B/1.8B/7B/14B Chat (AWQ)
- Qwen 2.5 Coder 32B Instruct, Qwen QwQ 32B
- Phi-2, SQLCoder 7B 2
- And more...

---

### Providers with Trial Credits

| Provider | Credits | Duration | Notes |
|----------|---------|----------|-------|
| [Fireworks](https://fireworks.ai/) | $1 | Permanent | Various open models |
| [Baseten](https://app.baseten.co/) | $30 | Permanent | Pay by compute time |
| [Nebius](https://tokenfactory.nebius.com/) | $1 | Permanent | Various open models |
| [Novita](https://novita.ai/) | $0.50 | 1 year | Various open models |
| [AI21](https://studio.ai21.com/) | $10 | 3 months | Jamba family |
| [Upstage](https://console.upstage.ai/) | $10 | 3 months | Solar Pro/Mini |
| [NLP Cloud](https://nlpcloud.com/home) | $15 | Permanent | Phone verification required |
| [Alibaba Cloud](https://bailian.console.alibabacloud.com/) | 1M tokens/model | 90 days | Qwen models |
| [Modal](https://modal.com) | $5-30/month | Monthly | Pay by compute time |
| [Inference.net](https://inference.net) | $1 (+$25 on survey) | Permanent | Various open models |
| [Hyperbolic](https://app.hyperbolic.ai/) | $1 | Permanent | DeepSeek, Llama, Qwen, GPT-OSS |
| [SambaNova Cloud](https://cloud.sambanova.ai/) | $5 | 3 months | Llama, Qwen, DeepSeek |
| [Scaleway](https://console.scaleway.com/generative-api/models) | 1M tokens | Permanent | DeepSeek, Llama, Mistral, Gemma |
| [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) | $5 credit | Monthly | Requires active Vercel account |

### Additional Free API Providers

| Provider | Models | Free Tier | Environment Variable |
|----------|--------|-----------|---------------------|
| [ZAI](https://z.ai) | 7 | Free tier (generous quota) | `ZAI_API_KEY` |
| [SiliconFlow](https://cloud.siliconflow.cn/account/ak) | 6 | 1K RPM, 50K TPM | `SILICONFLOW_API_KEY` |
| [OVHcloud AI Endpoints](https://endpoints.ai.cloud.ovh.net) | 8 | 2 req/min (no key), 400 RPM with key | `OVH_AI_ENDPOINTS_ACCESS_TOKEN` |
| [Chutes AI](https://chutes.ai) | 4 | Free community GPU-powered | `CHUTES_API_KEY` |
| [DeepInfra](https://deepinfra.com/login) | 4 | 200 concurrent requests | `DEEPINFRA_API_KEY` |
| [Replicate](https://replicate.com/account/api-tokens) | 2 | 6 req/min (no payment), up to 3K RPM with payment | `REPLICATE_API_TOKEN` |

---

## AI-Powered IDEs

Full-featured integrated development environments with built-in AI assistance.

### IDEs with Pro-Grade Models

#### [Cursor](https://cursor.com/)

**Model:** Adaptive routing with **Claude Sonnet 5.5**, **Claude Opus 5.5**, and **GPT-6.1 Sol** (accessible via AI Gateway / custom config)
- **Free tier (Hobby):** Limited Agent requests + Limited Tab completions/month + 1-week Pro trial
- Free models: Cursor Small, DeepSeek V4, Gemini 3 Flash / 3.5 Flash (Limited access)
- Premium tiers required for manual model selections like **Claude Opus 5.5**, **Claude Sonnet 5.5**, and **GPT-6.1 Sol** (note: OpenAI restricts direct standard picker access for GPT-6 Astra)
- **Credit-based billing** since Jun 2025: each paid plan includes a credit pool equal to its price; Tab completions unlimited, Auto mode effectively unlimited, credits only deplete when you manually pick a premium model
- AI-powered code editor with autonomous coding capabilities
- **Pro ($20/mo or $16/mo annually):** $20/mo credit pool + Unlimited Tab completions + Auto mode
- **Pro+ ($60/mo or $48/mo annually):** $70/mo third-party model credits (discounted usage curve for $60 fee) + 3x Pro usage + Background Agents
- **Ultra ($200/mo or $160/mo annually):** $400/mo credit pool (20x Pro) + Priority access
- **Teams Standard ($40/seat/mo or $32/seat/mo annually):** Pro-equivalent per seat + Centralized billing + Usage analytics + SAML/OIDC SSO
- **Teams Premium ($120/seat/mo):** 5x usage bundled per seat + Priority support + Advanced team administration
- **Enterprise (Custom):** Everything in Teams + Pooled usage + SCIM + AI code tracking API + Audit logs
- **Bugbot:** Shifted from flat $40/seat/mo to per-run usage charge (~$1.00–$1.50 per review run triggered on commit pushes)

**[Pricing](https://cursor.com/en/pricing)**

---

#### [Trae](https://trae.ai/)

**Models:** Doubao (natively in China), Claude 3.5/3.7 Sonnet & GPT-4o (international routing)
- **New token-based pricing (effective Feb 24, 2026)** — replaced the legacy "fast/slow request" model
- **Free:** Limited usage, 5,000 auto-completions/month, Standard queue
- **Lite ($3/mo):** $5 basic usage + bonus, Unlimited auto-completions
- **Pro ($10/mo):** $20 basic usage + bonus, Unlimited auto-completions, **SOLO mode** included, 10 concurrent cloud tasks
- **Pro+ ($30/mo):** $90 basic usage + bonus (4.5x Pro), 15 concurrent cloud tasks
- **Ultra ($100/mo):** $400 basic usage + bonus, Model early access, 20 concurrent cloud tasks
- **7-day free Pro trial** (replaces the legacy $3 first-month deal)
- **Annual:** Pro $90/yr (~$7.5/mo), Pro+ $270/yr (~$22.5/mo), Ultra $900/yr (~$75/mo)
- **On-Demand Usage:** pay-as-you-go at API rates after basic + bonus usage is exhausted
- Migration bonus: $20 in dollar usage for current Pro users who manually switch (valid 90 days)

**[Pricing](https://trae.ai/pricing)** | **[Documentation](https://docs.trae.ai/ide/new-plans-and-billing)**

---

#### [Windsurf](https://windsurf.com/)

**Models:** OpenAI (GPT-6.1 Sol), Anthropic (Claude Sonnet 5.5, Claude Opus 5.5), Google, xAI
- **New quota-based pricing (effective Mar 19, 2026)** — replaced the legacy "prompt credits" model
- Daily + weekly usage allowance instead of monthly credit pool
- Existing paid subscribers are grandfathered at the old price but moved to the new quota system (with a free extra week to try it)
- **Free ($0):** Light quota + Unlimited Tab completions + 1 app deploy/day
- **Pro ($20/mo):** Standard quota + Full model access (**Claude Opus 5.5**, **Claude Sonnet 5.5**, **GPT-6.1 Sol**) + Purchase extra usage at API price
  - ~7-27 messages/day on Premium Plus models (Opus 5.5, GPT-6.1 Sol)
  - ~8-101 messages/day on Premium models (Sonnet 5.5, Gemini Pro)
- **Max ($200/mo) — NEW Mar 2026:** Heavy quota (~6x Pro) + Priority support
  - ~42-170 messages/day on Premium Plus models
  - ~291-1,190 messages/day on Lightweight models (Haiku, Flash)
- **Teams ($40/user/mo):** Standard quota per seat + Centralized billing + Admin dashboard + Priority support
- **Enterprise ($60+/user/mo):** Custom volume + SSO + Audit logs

**[Pricing](https://windsurf.com/pricing)** | **[Pricing Announcement (Mar 18, 2026)](https://windsurf.com/blog/windsurf-pricing-plans)**

---

#### [Void IDE](https://voideditor.com/)

**Models:** Multi-agent (frontend/backend/testing agents)
- **Agent-first IDE** - new 2026 category
- Multiple specialized agents coordinate across codebase
- Free preview tier with high usage limits
- VS Code-based

**Best for:** Full-stack development with natural language direction

---

#### [Qoder](https://qoder.com/)

**Models:** Qwen3.6-Plus (71.2% SWE), Qwen-Coder-Qoder, GPT-6.1 Sol
- **Free tier:** Unlimited completions + **limited chat/agent (basic models)** + **2-week Pro trial (1,000 credits)**
- **Experts Mode:** Multi-agent collaboration (new Mar 2026)
- **Quest Mode:** Fully autonomous app building
- **Nextnew:** Tab predictions
- Windows/macOS, VS Code-based
- **Post-promotional standard pricing (settled after launch promo):**

**Pricing (standard, post-promo):**
- **Free:** Basic models, limited messages
- **Pro:** $30/mo — **2,000 credits** (or CNY 59/mo on Qoder CN All-in-One)
- **Pro+:** $60/mo — **6,000 credits**
- **Ultra:** $200/mo — 20,000 credits
- **Teams:** $40/seat/mo — **3,000 credits/seat**
- **Personal Add-on Credits:** $20 for 1,000 credits
- **Credits:** $0.02/credit, expire 1mo
- **Teams new capabilities (rollout):** BYOK, Security controls over MCP/Skills, Plugin management, Knowledge Engine

**[Docs](https://docs.qoder.com/)** | **[Pricing](https://qoder.com/pricing)** | **[Adjustment Notice](https://docs.qoder.com/events/pricing-adjustment-notice)**

---

#### [RooCode](https://github.com/RooCodeInc/Roo-Code)

**Models:** Bring your own API keys (any provider)
- Open-source AI-powered coding assistant for VS Code
- Whole dev team of AI agents in your editor
- No subscription required - pay-as-you-go with your own keys
- Custom modes for different coding tasks

**[GitHub](https://github.com/RooCodeInc/Roo-Code)** | **[Website](https://roocode.com)**

---

### IDEs with Basic Models

#### [Codeium](https://codeium.com/)

**Model:** Base model (Llama 3.3 70B), pro-grade models require subscription
- Individual plan: Free forever with unlimited code completions, AI chat, commands
- 70+ programming languages supported
- IDE integrations: VS Code, JetBrains, Vim/Neovim, Jupyter
- No credit card required
- Limited context awareness (expanded in paid tiers)
- **Pro ($10/mo):** Unlimited usage with advanced context awareness, Claude Sonnet 5.5, GPT-6 access
- **Teams ($12/user/mo):** Pro features + team management
- **Enterprise (Custom):** On-premise deployment, custom models

**[Pricing](https://codeium.com/pricing)** | **[Documentation](https://codeium.com/docs)**

---

#### [JetBrains AI Assistant](https://www.jetbrains.com/ai/)

**Models:** Local models + cloud models with limited quota
- AI Free tier included with IDEs
- Unlimited code completion and local model support
- Limited quota for cloud-based features
- 30-day AI Pro trial included
- Offline mode with local models via Ollama/LM Studio
- **AI Pro ($15/mo):** Increased cloud quota + unlimited local models
- **AI Ultimate ($25/mo):** Maximum cloud quota + advanced features

**[AI Pricing](https://www.jetbrains.com/ai-ides/buy/)** | **[AI Features](https://www.jetbrains.com/ai-assistant/)**

---

#### [Tabnine](https://www.tabnine.com/)

**Models:** Claude Sonnet 5.5, GPT-6.1 Sol, Llama 3.3 70B, proprietary models
- Free tier with limited features
- Basic AI code completions and chat (limited)
- Local processing available
- Context heavily limited in free tier
- 600+ programming languages supported
- **Pro ($12/mo):** Enhanced AI completions and chat
- **Enterprise ($39/user/mo):** Multiple LLMs, private deployment, on-premises and air-gapped options

**[Pricing](https://www.tabnine.com/pricing/)**

---

#### [Bolt.new](https://bolt.new/)

**Models:** Unspecified models
- **$1 credit/mo = ~100K tokens** (reduced Mar 2026)
- Specific model not publicly specified
- Credit card required
- **$20/mo:** 20M tokens/month
- **$200/mo:** 200M tokens/month

**[Token Documentation](https://support.bolt.new/account-and-subscription/tokens)**

---

#### [Lovable](https://lovable.dev/)

**Models:** Unspecified models
- 5 daily credits, max 30 per month (free)
- Models not publicly enumerated
- Credit card required
- **Pro ($25/mo):** 150 credits/month (5 daily credits)
- **Teams ($30/mo):** Higher limits (undisclosed)

**[Messaging Limits](https://docs.lovable.dev/user-guides/messaging-limits)**

---

#### [v0.dev](https://v0.dev/)

**Models:** Proprietary models (not frontier)
- $5 in credits/month limit
- Uses proprietary models with varied routing
- Credit card required
- GPT-6 / Claude 5.5 access requires v0 Premium subscription

**[Updated Pricing Blog](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)**

---

### Additional 2026 AI Chat Platforms

General-purpose chat interfaces with free tiers.

| Platform | Free Model | Key Capabilities | Limitations |
|----------|------------|------------------|-------------|
| [ChatGPT](https://chatgpt.com) | **GPT-6.1 Sol** | Sora 3, DALL-E 3, GPT Store | ~20 msgs/5hr |
| [Gemini](https://gemini.google.com) | **Gemini 3.5 Flash** | 2M Context, **20 Deep Research/mo** | Research quota |
| [Claude](https://claude.ai) | **Claude Sonnet 5.5 / Haiku 5.5** | Technical reasoning | ~30 msgs/5h |
| [Grok](https://grok.com) | **Grok 4.2** | Aurora 2 images, voice | 15 msgs/12hr |
| [Mistral Le Chat](https://chat.mistral.ai) | **Mistral Medium 3** | Structured output | Fewer integrations |

---

## CLI Coding Tools

Command-line tools for AI-assisted coding in your terminal.

### CLI Tools with Pro-Grade Models

#### [Gemini CLI](https://aistudio.google.com/)

**Models:** Gemini 3.5 Flash, Gemini 3.5 Flash-Lite, Gemini 3 Flash
- Gemini 3.5 Flash is the default high-throughput model (1,500 req/day on AI Studio free tier)
- Gemini 3.5 Flash-Lite provides ultra low-latency CLI completions
- 1,500 requests/day for Gemini 3.5 Flash / Gemini 3 Flash
- No credit card required for free tier
- MCP server support, Google Search grounding
- **Install:** `npm install -g @google/gemini-cli`

**[Rate Limits](https://ai.google.dev/gemini-api/docs/rate-limits)** | **[Pricing](https://ai.google.dev/gemini-api/docs/pricing)**

---

#### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> [!IMPORTANT]  
> **Enterprise SaaS Add-on:** Rovo Dev CLI is tied directly to paid Atlassian Cloud (Jira/Confluence) organizations. There is no open, standalone free tier for independent developers without an active paid Atlassian Cloud organization.

**Models:** Claude Sonnet 5.5, GPT-6.1 Sol, GPT-6 Astra (Ultra)
- Requires active paid Atlassian Cloud organization (Jira/Confluence)
- Organization quota: 5M tokens/day allocation for active subscriptions
- Token limits reset at midnight UTC
- Deep Jira & Confluence issue/doc integration and native MCP server support
- **Pro ($19.99/user/mo):** 100 tasks/day, 5x higher limits
- **Ultra:** 300 tasks/day, 20x higher limits, priority access to latest models (**GPT-6 Astra**)

**[Documentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/)** | **[Token Limits](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)**

---

#### [Warp](https://www.warp.dev/)

**Models:** GPT-6.1 Sol, Claude Sonnet 5.5, Gemini 3.5 Flash
- 150 AI credits/month (first 2 months), then 75 AI credits/month
- No credit card required for basic signup
- AI-powered terminal with code generation
- **Build ($20/mo):** 1,500 AI credits/month
- Bring Your Own API Key (BYOK) option available

**[Pricing](https://www.warp.dev/pricing)**

---

#### [OpenCode](https://opencode.ai/)

> **167k+ GitHub stars** • 850+ contributors • 6.5M monthly users • **Apache 2.0**

**Models:** 75+ providers via BYOK — Anthropic, OpenAI, Google, Groq, AWS Bedrock, Azure, OpenRouter, local Ollama
- **MIT/Apache 2.0 licensed** — fork, customize, self-host
- **Five agent modes (Tab-switchable):** Build (full tools), Plan (read-only), Debug, Review, Docs
- **LSP-driven self-correction** — auto-spawns Language Server Protocol servers and feeds compiler diagnostics back to the model
- **Multi-agent support:** up to 10 parallel agents per workspace
- **Local inference via Ollama:** $0 — no data leaves your machine

**OpenCode Go (recommended for getting started):** Subscription bundle of curated open-weight models
- **$5 first month**, then **$10/mo** (beta)
- **Models included:** GLM-5.1, Kimi K2.5, MiniMax M2.5, DeepSeek V4 Pro/Flash, Qwen3.7 Max, MiMo-V2.5-Pro
- **Usage limits:** $12/5h, $30/week, $60/month
- "Use balance" option falls back to your Zen credits when limits are hit

**OpenCode Zen:** Pay-per-request credits (PAYG from $20)

**Install:** `curl -fsSL https://opencode.ai/install | bash` • `brew install opencode` • `npm install -g opencode-ai`

**[GitHub](https://github.com/anomalyco/opencode)** | **[OpenCode Go Docs](https://opencode.ai/docs/go/)**

---

#### [GitHub Copilot](https://github.com/features/copilot/plans)

**Models:** Claude Sonnet 5.5, GPT-6.1 Sol, Gemini Flash, Grok Code Fast 1 (Free tier); **Claude Opus 5.5** & **GPT-6 Astra** available in Pro/Pro+/Max/Business/Enterprise only
- **MAJOR: Usage-based billing effective Jun 1, 2026** — premium request units (PRUs) replaced by **GitHub AI Credits** (token-based)
- 50 agent mode or chat requests + 2,000 completions/month (Free tier)
- Agent Mode with autonomous multi-step coding
- No credit card required for Free
- Free Copilot Pro for students/educators (GitHub Student Pack)
- Code completions and Next Edit suggestions remain included on all plans and do not consume AI Credits
- **Pro ($10/mo):** $15 monthly AI Credits + unlimited completions + cloud agent
- **Pro+ ($39/mo):** $70 monthly AI Credits + 1,500 premium req equivalent + Opus 5.5 & GPT-6 Astra access
- **Max ($100/mo) — NEW Jun 2026:** $200 monthly AI Credits + Priority access to new models + 2.9x Pro+ usage
- **Business ($19/user/mo):** 1,900 monthly AI Credits ($19) + unlimited completions (summer promo ended Sep 1, 2026)
- **Enterprise ($39/user/mo):** 3,900 monthly AI Credits ($39) + unlimited completions

**[Plans Details](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot)** | **[Usage-Based Billing Announcement (Apr 27, 2026)](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)**

---

#### [Jules](https://jules.google/)

**Model:** Gemini 3.5 Flash / Gemini 3 Pro (upgraded from 2.5 Pro)
- 15 tasks/day free tier
- 3 concurrent tasks
- Rolling 24-hour window reset
- **Pro ($19.99/mo):** 100 tasks/day, 5x higher limits
- **Ultra (via Google AI Ultra):** 300 tasks/day, 20x higher limits, 60 concurrent tasks, priority access to latest models

**[Usage Limits](https://jules.google/docs/usage-limits/)** | **[Documentation](https://jules.google/docs/)**

---

#### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

Amazon's generative AI-powered assistant for software development (evolved from Amazon CodeWhisperer).

**Models:** Claude 3.5 Sonnet & AWS Bedrock foundation models
- **Free Tier:** 50 chat interactions and code transformations per month with an AWS Builder ID (no credit card required)
- Code completion, explanation, refactoring, and test generation in the IDE
- Supported IDEs: VS Code, JetBrains IDEs, Visual Studio, and AWS Cloud9
- Terminal integration via AWS CLI and macOS terminal
- **Pro Tier ($19/user/mo):** Higher usage quotas, enterprise user management, and custom code reference tracking

**[Pricing](https://aws.amazon.com/q/developer/pricing/)** | **[Documentation](https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/what-is.html)**

---

#### [Xiaomi MiMo Token Plan](https://platform.xiaomimimo.com/)

> Xiaomi's subscription plan for AI coding scenarios — bundled access to MiMo flagship models
> Compatible with **OpenCode, OpenClaw, Claude Code, and other mainstream toolchains**

**Models:** MiMo-V2.5-Pro, MiMo-V2.5, MiMo-V2.5-TTS, MiMo-V2-Omni
- **No context-length multiplier** — same rate for 10K or 500K context (big deal for agentic workflows)
- **1:2 credit ratio** for Pro vs Omni models (consumed in parallel, not independently)
- **Night discount:** 0.8x consumption (00:00–08:00 Beijing Time)

**Monthly Pricing:**

| Tier | Price (USD) | Price (CNY) | Monthly Credits | ~Tasks/mo |
|------|-------------|-------------|-----------------|-----------|
| **Lite** | **$6/mo** | ¥39/mo | 60M | ~120 medium-complexity |
| **Standard** | **$16/mo** | ¥99/mo | 200M | ~400 |
| **Pro** | **$50/mo** | ¥329/mo | 700M | ~1,400 |
| **Max** | **$100/mo** | ¥659/mo | 3B Credits | ~6,000 tasks (corrected from 82B typo; 2.5B–3.5B range) |

**API Pricing (permanent schedule announced May 27, 2026):**

| Model | Input (per 1M) | Output (per 1M) | Cache Hit (per 1M) |
|-------|----------------|-----------------|---------------------|
| **MiMo V2.5 Pro** | $1.00 | $3.00 | $0.20 |
| **MiMo V2.5 Standard** | $0.20 | $0.60 | $0.002 |

---

#### [Claude Code](https://www.anthropic.com/claude-code)

**Models:** Claude Sonnet 5.5 (default high-velocity coding), Claude Opus 5.5 (architectural refactoring), Claude Haiku 5.5
- Free tier available with limited usage
- **Pro ($20/mo):** Sonnet 5.5 access with extended usage + Opus 5.5 access
- **Max 5x ($100/mo):** ~225 messages/5 hours
- **Max 20x ($200/mo):** ~900 messages/5 hours
- Extended thinking modes: "think" (~4K tokens), "megathink" (~10K), "ultrathink" (~32K)

**[Pricing](https://www.anthropic.com/pricing)**

---

#### [OpenAI Codex CLI](https://github.com/openai/codex)

**Models:** GPT-6.1 Sol, GPT-6 Astra (with up to 8x faster token generation via Codex Ultrafast)
- Free with ChatGPT Plus ($20/mo): 30–150 messages/5 hours with **GPT-6.1 Sol**
- ChatGPT Pro ($200/mo): 300–1,500 messages/5 hours with **GPT-6 Astra**
- Pay-as-you-go API: $2.00/$10 per million tokens (GPT-6.1 Sol input/output)
- First model with session "compaction" for multi-million token deep sessions

**[GitHub Repo](https://github.com/openai/codex)**

---

#### [agent-qa](https://github.com/vostride/agent-qa)

**Models:** OpenAI- and Anthropic-compatible endpoints, Gemini, and local models
- Self-hosted QA CLI and dashboard with no agent-qa usage cap
- No credit card required when paired with local models
- Bring your own model/provider; provider costs and rate limits apply
- MCP server and skills for Claude Code and Codex
- **Install:** `npm install -D agent-qa && npx agent-qa init`

**[Documentation](https://vostride.com/docs/agent-qa)** | **[License](https://github.com/vostride/agent-qa/blob/main/LICENSE.md)** | **Last verified:** 2026-08-16

---

## API Providers for AI Coding Tools

These services provide API access to coding-optimized models for tools like Cursor, Continue.dev, Cline, etc.

### [OpenRouter](https://openrouter.ai/)

- 50 requests/day free tier (1,000/day with $10+ credits)
- Qwen3-Coder-480B, Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- OpenAI-compatible API

### [Cerebras](https://cloud.cerebras.ai/)

- **1.5M tokens/day** free tier (expanded Feb 2026)
- 30 req/min, 8,192 token context
- Models: **Qwen3.6-Plus-480B**, Llama 3.1 70B
- Ultra-fast: **2,400 t/s** (Qwen3.6)
- OpenAI-compatible API (works with Cursor, Continue.dev, Cline, RooCode, etc.)

**[Pricing](https://www.cerebras.ai/pricing)**

---

## Paid Tiers Comparison

### AI-Powered IDEs - Paid Plans

| IDE | Entry Tier | Credits/Requests | Key Features |
|-----|------------|------------------|--------------|
| [Cursor](https://cursor.com/) | Pro ($20/mo) | $20/mo credit pool | Unlimited completions, Auto mode |
| [Trae](https://trae.ai/) | Lite ($3/mo) / Pro ($10/mo) | $5 / $20 basic usage + bonus | SOLO mode, 5-tier token system |
| [Windsurf](https://windsurf.com/) | Pro ($20/mo) | Standard quota (daily/weekly) | Multi-provider, Claude Sonnet 5.5 / Opus 5.5, Max $200 tier |
| [Qoder](https://qoder.com/) | Pro ($30/mo) | 2,000 credits | Quest Mode, Experts Mode |
| [Codeium](https://codeium.com/) | Pro ($10/mo) | Unlimited | Claude Sonnet 5.5, GPT-6 access |

### CLI Tools - Paid Plans

| Tool | Entry Tier | Credits/Requests | Key Features |
|------|------------|------------------|--------------|
| [Claude Code](https://www.anthropic.com/claude-code) | Pro ($20/mo) | ~225 messages/5h | Sonnet 5.5 + Opus 5.5 |
| [Warp](https://warp.dev/) | Build ($20/mo) | 1,500 credits/month | BYOK available |
| [GitHub Copilot](https://github.com/features/copilot) | Pro ($10/mo) | $15 monthly AI Credits | Usage-based token billing since Jun 1, 2026 |
| [OpenCode](https://opencode.ai/) | Go ($10/mo) | $12/5h, $30/wk, $60/mo | Apache 2.0, 75+ providers, BYOK |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Pro ($19/mo) | Enterprise limits & admin | Bedrock models, IDE & AWS CLI |
| [Xiaomi MiMo](https://platform.xiaomimimo.com/) | Lite ($6/mo) | 60M credits | OpenCode/Claude Code compatible |

---

## Local Models

Running open-weight frontier models locally provides unlimited coding assistance without API costs.

**Notable Local Models (2026):**
- Qwen3.6-Plus-480B (71.2% SWE, ~150GB VRAM)
- **Gemma 4** [verify] (Google, Apache 2.0, fully open-source flagship)
- **GLM-5.1 / GLM-5V-Turbo** [verify] (Zhipu MoE-based SOTA coders)
- Devstral 2 (24B, Apache 2.0, agent-optimized)
- DeepSeek Coder V4 (lite version ~18GB)

---

## free-coding-models CLI

Find the fastest free coding model in seconds. Ping 271 models across 25 providers in real-time.

```bash
npm install -g free-coding-models
free-coding-models
```

### Features

- **Parallel pings** — all 271 models tested simultaneously
- **Stability Score (0-100)** — composite score from p95 latency, jitter, spike rate, uptime
- **Smart ranking** — top 3 highlighted 🥇🥈🥉
- **Favorites** — star models with `F`, persisted across sessions
- **Tool Integration** — auto-configure OpenCode, Goose, Aider, Continue, Cline, etc.
- **OpenCode Zen Models** — Curated free models (MiniMax M2.5 Free, MiMo V2, etc.)

### Quick Usage

```bash
# Most reliable model right now
free-coding-models --reliable

# Configure Goose with S-tier model
free-coding-models --goose --tier S

# NVIDIA top models only
free-coding-models --origin nvidia --tier S

# JSON output for scripting
free-coding-models --tier S --json | jq -r '.[0].modelId'
```

### Tool Launcher Flags

| Flag | Launches |
|------|----------|
| `--opencode` | 📦 OpenCode CLI |
| `--openclaw` | 🦞 OpenClaw |
| `--goose` | 🪿 Goose |
| `--aider` | 🛠 Aider |
| `--qwen` | 🐉 Qwen Code |
| `--continue` | ▶️ Continue CLI |
| `--cline` | 🧠 Cline |
| `--gemini` | ♊ Gemini CLI |
| `--rovo` | 🦘 Rovo Dev CLI |
| And 8 more... |

### Tier Scale

| Tier | SWE-bench | Best For |
|------|-----------|----------|
| **S+** | ≥75% | **Claude Opus 5.5, GPT-6 Astra, GPT-6.1 Sol, Claude Sonnet 5.5** |
| **S** | 65-75% | **Qwen3.6-Plus (71.2%), Gemini 3.5 Flash, DeepSeek-V4-Flash** |
| **A+/A** | 40–60% | Solid alternatives |
| **A-/B+** | 30–40% | Smaller tasks |
| **B/C** | < 30% | Code completion |

### License Summary

All 271 models allow **commercial use of generated output**. You own what the models generate.

| License | Models | Commercial |
|---------|--------|:----------:|
| Apache 2.0 | Qwen3/Qwen2.5 Coder, GPT-OSS 120B/20B, Devstral Small 2, Gemma 4, MiMo V2 Flash | ✅ Unrestricted |
| MIT | GLM 4.5/4.6/4.7/5, MiniMax M2.1, Devstral 2 | ✅ Unrestricted |
| Llama Community License | Llama 3.3 70B, Llama 4 Scout/Maverick | ✅ Attribution required. >700M MAU → separate Meta license |
| DeepSeek License | DeepSeek V3/V3.1/V3.2, R1 | ✅ Use restrictions on model (no military, no harm) — output is yours |
| NVIDIA Nemotron License | Nemotron Super/Ultra/Nano | ✅ Updated Mar 2026, now near-Apache 2.0 permissive |
| MiniMax Model License | MiniMax M2, M2.5 | ✅ Royalty-free, non-exclusive. Prohibited uses policy applies to model |
| Proprietary (API) | Claude (Rovo), Gemini (CLI), Perplexity Sonar, Mistral Large, Codestral | ✅ You own outputs per provider ToS |
| OpenCode Zen | MiMo V2 Pro/Flash/Omni Free, MiniMax M2.5 Free, Nemotron 3 Super Free | ✅ Per OpenCode Zen ToS |

**Key Points:**
1. **Generated code is yours** — no model claims ownership of your output
2. **Apache 2.0 / MIT models** (Qwen, GLM, GPT-OSS, MiMo, Devstral Small) are the most permissive — no strings attached
3. **Llama** requires "Built with Llama" attribution; >700M MAU needs a Meta license
4. **DeepSeek / MiniMax** have use-restriction policies (no military use) that govern the model, not your generated code
5. **API-served models** (Claude, Gemini, Perplexity) grant full output ownership under their terms of service

> ⚠️ **Disclaimer:** This is a summary, not legal advice. License terms can change. Always verify the current license on the model's official page before making legal decisions.

---

## Comparison Notes

- **Goal**: Compare AI coding tools by their access to pro-grade models and free tier limits.
- **What qualifies a model as "pro-grade"?** Models must achieve ≥60% on SWE-bench Verified / Pro or leading agentic benchmarks (Terminal-Bench 4.0, DeepSWE v1.1), demonstrating real-world software engineering capability. Current qualifying October 2026 models: Claude Opus 5.5 (Flagship Enterprise reasoning, multi-hour sandboxing & prompt-injection defense), GPT-6 Astra (Autonomous Agentic Flagship / Computer Operator), GPT-6.1 Sol (matches Astra on DeepSWE v1.1, leads OSWorld 2.0 & Terminal-Bench Science), Claude Sonnet 5.5 (70.6% Terminal-Bench 4.0, 55.5% CursorBench 4.0, 30% fewer tokens/task), Gemini 4 Argon (Frontier Long-Horizon with 1M output tokens), Gemini 3.5 Flash (84.2% CharXiv), and Qwen3.6-Plus (71.2%).
- **`[verify]` tag**: Indicates information needs verification from official sources. Pricing, limits, and model availability change frequently.
- **Different limit types**: Tools use various quota systems - requests, tokens, credits, chats - making direct comparison challenging. Check documentation for specifics.
- **Real-world usage**: Actual consumption varies dramatically based on coding style, task complexity, and tool implementation.

---

## Education & Student Programs

| Program | What You Get | Requirements |
|---------|--------------|--------------|
| [GitHub Student Pack](https://education.github.com/pack) | Free Copilot Pro for students | Verify with .edu email |
| [GitHub Copilot Free](https://code.visualstudio.com/blogs/2024/12/18/free-github-copilot) | 50 chat + 2,000 completions/month | VS Code users |
| [Copilot Pro for Teachers/Maintainers](https://docs.github.com/en/copilot/how-tos/manage-your-account/get-free-access-to-copilot-pro) | Free Copilot Pro | Open source maintainers & educators |

---

## Additional 2026 AI Tools

### Agentic Workflow Platforms

Visual orchestration tools for building autonomous AI agents without coding.

| Platform | Free Tier | Best For | Key Features |
|----------|-----------|----------|--------------|
| [Make](https://make.com) (Integromat) | 1,000 ops/month | Visual builders | Drag-and-drop AI Agents, 3,000+ app integrations |
| [n8n](https://n8n.io) | Unlimited (self-hosted) | Technical teams | Self-hosted RAG systems, private data automation |
| [Gumloop](https://gumloop.com) | 2,000 credits/month | No-code agents | Natural-language builder, "Gummie" troubleshooting agent |
| [Relay.app](https://relay.app) | Generous free plan | Beginners | Simple agentic workflows |
| [Activepieces](https://activepieces.com) | 1,000 tasks/month | Open-source | Flat pricing, self-hostable |
| [Podium](https://podium.com) | Entry-level tiers | Sales/communication | 24/7 lead response AI agents |

---

### Data Visualization & Analysis

AI-powered tools for conversational data analysis and narrative visualization.

| Tool | Function | Free Tier Detail | Key Feature |
|------|----------|------------------|-------------|
| [Julius](https://julius.ai) | Chat-with-data | Upload spreadsheets, generate instant visualizations |
| [Anomaly AI](https://findanomaly.ai) | AI Dashboards | Generate interactive dashboards from natural language |
| [Flourish](https://flourish.studio) | Data Storytelling | No-code interactive maps, "scrollytelling" features |
| [Datawrapper](https://datawrapper.de) | Publishing | Publish-ready charts in seconds, journalism-focused |
| [Looker Studio](https://lookerstudio.google.com) | Marketing Data | Seamless Google Analytics/Ads integration |
| [Power BI Desktop](https://powerbi.microsoft.com) | Microsoft reports | Copilot recommendations, local report building |
| [AI for Database](https://aifordatabase.com) | Natural language DB queries | Freemium - free tier available | Connect any DB (PostgreSQL, MySQL, MongoDB) and query in plain English — no SQL needed, with self-refreshing dashboards and workflow automation |

---

### Creative & Multimedia Tools

Professional-grade content creation with generous free tiers.

| Tool | Output | Free Tier | Key Capability |
|------|--------|-----------|----------------|
| [Veo](https://deepmind.google/technologies/veo/) | Video | Basic Free | Cinematic clips with realistic motion and sound |
| [Sora 3](https://openai.com/sora) (via ChatGPT) | Video | Limited free tier | Deep ChatGPT integration, high-quality video |
| [DALL-E 3](https://openai.com/index/dall-e-3/) (via ChatGPT) | Image | Limited free tier | High-detail image generation |
| [Synthesia](https://synthesia.io) | Video Avatars | Free individual plan | "Video Agents" in 120+ languages |
| [1 More Shot](https://onemoreshot.ai) | Music Videos | Free plan | Advanced lip-sync, frame-by-frame control |
| [Leonardo.Ai](https://leonardo.ai) | Images | 150 tokens/day (~8–15 images) | Commercial use allowed |
| [Recraft AI](https://recraft.ai) | Vector/SVG | 30 credits/day | Infinitely scalable icons and logos |
| [Ideogram](https://ideogram.ai) | Images | 10-20 prompts/day | Perfect text rendering, "Magic Prompt" |
| [Suno AI](https://suno.ai) | Music | 50 credits/day (~10 tracks) | Complete songs with vocals and instruments |
| [ElevenLabs](https://elevenlabs.io) | Voice | Basic Free | Realistic voice cloning |
| [Canva AI](https://canva.com) | Design | Robust free tier | AI design assets, brochures, short videos |
| [PhotoGenerAI](https://photogenerai.com) | Image | Free credits, no sign-up | AI photo generation & editing in the browser |

---

### Productivity & Research Tools

| Tool | Function | Free Tier Detail | Key Feature |
|------|----------|------------------|-------------|
| [Grammarly](https://grammarly.com) | Writing | 100 AI prompts/month | Rewrites and tone detection |
| [LanguageTool](https://languagetool.org) | Grammar | 10,000 characters/text | 25+ languages, open-source |
| [Fathom](https://fathom.video) | Meetings | Forever Free | Records/transcribes Zoom/Teams, auto-sync to CRM |
| [NotebookLM](https://notebooklm.google.com) | Research | Free | Audio Overview podcasts, grounded in your documents |
| [Humata](https://humata.ai) | PDF Analysis | 60 pages/month | Clickable source citations |
| [QuillBot](https://quillbot.com) | Rewriting | 125 words/time | Fluency & Standard modes |
| [DeepL](https://deepl.com) | Translation | Basic Free | Incognito sensitive mode |

---

### Vertical AI (Specialized Domains)

**Medical AI:**
| Tool | Pricing | Key Value |
|------|---------|-----------|
| [iatroX](https://iatrox.com) | Free | Adaptive Q-Bank, NICE/BNF clinical reference |
| [DxGPT](https://dxgpt.com) | Free | Diagnostic assistant (500K+ users, 6K doctors) |
| [OpenEvidence](https://openevidence.com) | Free (US verified) | Evidence-grounded search, ambient note generation |

**Legal AI:**
| Tool | Pricing | Key Value |
|------|---------|-----------|
| [DocLegal.Ai](https://doclegal.ai) | $10/month | Clause suggestion, risk detection |
| [Doculex.ai](https://doculex.ai) | Varies | Case-data-driven drafting from medical records |
| [Spellbook](https://spellbook.legal) | 7-day trial | In-editor contract analysis |
| [Harvey AI](https://harvey.ai) | Enterprise | Regulatory matters, high security |

---

### Marketing & SEO Tools

| Tool | Function |
|------|----------|
| [Wellows](https://wellows.com) | AI Visibility Score tracking across ChatGPT, Gemini, Perplexity |
| [Google SGE Labs](https://labs.google.com) | See how AI Overviews interpret target keywords |
| [NeuronWriter](https://neuronwriter.com) | AI content scoring |
| [Surfer SEO](https://surferseo.com) | Content optimization |
| [Jasper](https://jasper.ai) | AI copywriting with brand voice |
| [Writesonic](https://writesonic.com) | Scalable copywriting |

---

### Open Source & Local Tools

| Tool | Function | Description |
|------|----------|-------------|
| [Open WebUI](https://openwebui.com) | Local Chat Interface | ChatGPT-like experience running entirely offline with Ollama |
| [Whisper](https://github.com/openai/whisper) (OpenAI) | Speech-to-Text | Most accurate open-source transcription |
| [Piper](https://github.com/rhasspy/piper) | Text-to-Speech | High-quality offline audio generation |
| [ComfyUI](https://comfyui.org) | Image Generation | Node-based interface for Stable Diffusion |
| [Zed](https://zed.dev) | AI IDE | 50 AI prompts/month, native performance, high speed |
| [Void IDE](https://voideditor.com/) | Agent-first IDE | Multi-agent frontend/backend/testing | Preview, free tier |

---

## ⚡ Realtime & Streaming APIs

Low-latency APIs for voice assistants, live coding copilots, trading tools, and realtime chat.

### Streaming LLM APIs

| Provider | Latency | Best For | Free Tier |
|----------|---------|----------|-----------|
| **Groq Streaming** | ~50-150ms (0.4ms/token) | Live coding, chat | 14.4K req/day |
| **OpenAI Realtime API** | Low | Voice assistants, agents | **No free tier** (pay-per-use only, trial credits new accounts) |
| **Gemini Live API** | Low | Multimodal streaming | **Dynamic caps** (varies by prompt complexity) |
| **Cerebras** | **2,400 tok/sec** (Qwen3.6) | Batch + streaming | 1.5M tokens/day |
| **Cloudflare Workers AI** | Edge | Global low-latency | 10K neurons/day |

### Speech Streaming APIs

| Provider | Type | Latency | Free Tier |
|----------|------|---------|-----------|
| **Deepgram** | STT streaming | ~300ms | $200 credits |
| **AssemblyAI Streaming** | Realtime STT | ~400ms | 50 hours/month |
| **Groq Whisper** | STT fast | ~200ms | 2,000 req/day |
| **ElevenLabs Streaming** | TTS streaming | ~100ms | 10K chars/month |
| **OpenAI Realtime** | STT + LLM + TTS | ~200ms | Limited |

**Best for:**
- **Trading bots:** Groq streaming (fastest)
- **Voice assistants:** OpenAI Realtime API (end-to-end)
- **Live captions:** AssemblyAI or Deepgram
- **Realtime chat:** Gemini Live API

---

## 🎙️ Speech Models

Speech-to-text and text-to-speech models comparison.

### Speech-to-Text (STT)

| Model | Provider | Accuracy | Speed | Free Tier | Best For |
|-------|----------|----------|-------|-----------|----------|
| **Whisper Large v3** | OpenAI/Groq/Local | Excellent | Fast | 2,000 req/day (Groq) | General purpose, local |
| **Deepgram Nova** | Deepgram | Superior | Very Fast | $200 credits | Production, enterprise |
| **AssemblyAI** | AssemblyAI | Excellent | Fast | 50 hours/month | Streaming, diarization |
| **Whisper API** | OpenAI | Excellent | Medium | Pay-per-use | Reliable, consistent |
| **Google Speech** | Google Cloud | Good | Fast | 60 min/month | Google ecosystem |
| **Whisper (local)** | OpenAI/Ollama | Excellent | GPU-dependent | Unlimited offline | Privacy, cost control |

### Text-to-Speech (TTS)

| Model | Provider | Quality | Speed | Free Tier | Best For |
|-------|----------|---------|-------|-----------|----------|
| **ElevenLabs** | ElevenLabs | 🏆 Best | Fast | 10K chars/month | Voice cloning, pro voice |
| **OpenAI TTS** | OpenAI | Excellent | Fast | Pay-per-use | Reliable, cheap |
| **Piper** | Local | Good | Very Fast | Unlimited offline | Privacy, self-hosted |
| **Bark** | Suno/Local | Good | Medium | Free (local) | Expressive, local |
| **Google TTS** | Google Cloud | Good | Fast | 1M chars/month | Google ecosystem |
| **WhisperSpeech** | Local | Good | Fast | Unlimited | Whisper-based TTS |

### All-in-One Voice APIs

| API | Input | Output | Latency | Use Case |
|-----|-------|--------|---------|----------|
| **OpenAI Realtime** | Audio | Audio | ~200ms | Voice agents |
| **Deepgram Voice** | Audio | Text/Audio | ~300ms | Voice bots |
| **AssemblyAI LeMUR** | Audio | LLM response | ~1s | Voice RAG |
| **Bowhard Speech** | Audio/Video + Text | Text/SRT/JSON + MP3 | Async batch | Russian transcription and voiceover; 15 min + 5,000 chars free per day |

---

## 🎨 Image Generation Models

Comparison of image generation models and APIs.

| Model | Provider | Quality | Speed | Free Tier | Best For |
|-------|----------|---------|-------|-----------|----------|
| **FLUX.2** | Black Forest Labs | 🏆 Excellent | Fast | Local/Replicate | High quality, open |
| **DALL-E 3** | OpenAI | 🏆 Best | Medium | ChatGPT Plus / Free tier | High-detail illustration |
| **Ideogram 2.0** | Ideogram | Excellent | Fast | **20 prompts/day** | Text in images |
| **Recraft V4** | Recraft | Excellent | Fast | **30 credits/day** | Vector/SVG output |
| **Stable Diffusion XL** | Stability AI | Good | Fast | Local/DreamStudio | Flexibility, local |
| **Midjourney v6** | Midjourney | 🏆 Excellent | Slow | None (paid only) | Artistic, Discord |
| **Leonardo.ai** | Leonardo | Very Good | Fast | 150 tokens/day | Commercial use, gaming |
| **Adobe Firefly** | Adobe | Good | Fast | 25 credits/month | Safe, commercial |
| **Imagen 3** | Google | Excellent | Medium | Vertex AI trial | Photorealistic |
| **DiffusionBee** | Local | Good | Fast | Local unlimited | Easy setup, open-source |
| **ComfyUI** | Local | Good | Fast | Local unlimited | Advanced, node-based |

### Free Image Model APIs

| Provider | Model | Free Tier | Notes |
|----------|-------|-----------|-------|
| **Replicate** | FLUX.1-schnell | Free tier | Fast inference |
| **Pollinations** | Various | Unlimited | No signup |
| **HuggingFace** | SDXL/FLUX | $0.10 credits | Inference API |
| **Leonardo** | Phoenix | 150 tokens/day | Commercial OK |

---

## 🎬 Video Generation APIs

Text-to-video and image-to-video generation. Hot area in 2026.

| Model | Provider | Quality | Duration | Free Tier | Best For |
|-------|----------|---------|----------|-----------|----------|
| **Veo 3** | Google | 🏆 Excellent | 1080p, **60s clips** | Limited preview | Cinematic, realistic |
| **Sora 3** | OpenAI | 🏆 Excellent | **120s** | ChatGPT Plus | High quality, physics |
| **Runway Gen-3** | Runway | Excellent | 10 seconds | 3 free credits | Creative, filmmaking |
| **Pika 3.0** | Pika | Very Good | 3-5 seconds | Free tier | Lip-sync improved |
| **Luma Dream Machine** | Luma | Very Good | 5 seconds | 30 generations/mo | Fast, realistic |
| **Kling** | Kuaishou | Excellent | 2-10 minutes | Limited | Long-form, Chinese |
| **Hailuo AI** | MiniMax | Good | 6 seconds | Free tier | Character consistency |
| **Stable Video Diffusion** | Stability | Good | 4 seconds | Local | Open, flexible |

### Video API Pricing (approximate)

| Provider | Cost per video | Generation time |
|----------|----------------|-----------------|
| **Runway** | ~$0.20-0.50 | 1-5 min |
| **Pika** | ~$0.10-0.30 | 30s-2 min |
| **Luma** | ~$0.30-0.60 | 2-5 min |
| **Kling** | ~$0.05-0.20 | 1-10 min |

---

## 🌐 AI Browser Automation

Tools for AI agents to control browsers - web scraping, form filling, testing.

| Tool | Type | Pricing | Best For |
|------|------|---------|----------|
| **Browserbase** | Managed browsers | $5 free tier | Production agents |
| **Steel.dev** | Browser API | Free tier | AI-native browser control |
| **Stagehand** | AI browser framework | Open source | Next-gen Playwright |
| **Playwright** | Browser automation | Free | Reliable, well-documented |
| **Puppeteer** | Chrome automation | Free | Chrome-specific |
| **Selenium** | Cross-browser | Free | Legacy support |
| **Scrapy** | Web scraping | Free | Data extraction |

### AI-Native Browser Tools

| Tool | AI Integration | Use Case |
|------|----------------|----------|
| **Stagehand** | Natural language commands | AI agents controlling browsers |
| **Browserbase** | Session recording for AI | Training agent trajectories |
| **Steel.dev** | Built for LLM agents | Agent-native browser API |

**Stack Recommendation:**
- **AI agents:** Stagehand + Browserbase
- **Web scraping:** Playwright + Scrapy
- **Testing:** Playwright + AI assertions

---

## 💾 Cheap Vector DB Hosting

Production-ready vector storage without high costs.

| Provider | Type | Free Tier | Paid | Best For |
|----------|------|-----------|------|----------|
| **Supabase Vector** | Postgres + pgvector | 500MB | $25/mo starter | Full-stack apps |
| **Neon** | Serverless Postgres | 500MB | $19/mo | Serverless, branching |
| **Railway** | Managed Postgres | $5 credits | Usage-based | Easy deployment |
| **PlanetScale** | MySQL + vectors | 5GB | $39/mo | Scale, branching |
| **Chroma Cloud** | Vector-native | Free tier | Usage-based | Pure vector workloads |
| **Qdrant Cloud** | Vector DB | 1GB | $25/mo | High performance |
| **Pinecone** | Managed vector | 2GB | $70/mo | Production, no ops |
| **Weaviate Cloud** | Vector DB | 5M vectors | $25/mo | Hybrid search |
| **LanceDB** | Embedded/Cloud | Free | Cloud beta | Multimodal |

### Self-Hosted (Free Forever)

| Database | Best For | Notes |
|----------|----------|-------|
| **ChromaDB** | Prototyping | Simple, Python-native |
| **Qdrant** | Production | Rust-based, fast |
| **Milvus** | Enterprise | Scalable, complex |
| **pgvector** | Postgres apps | Just add extension |
| **LanceDB** | Embedded | No server needed |

**Recommendation by Stage:**
- **MVP:** ChromaDB (local) → Supabase (hosted)
- **Production:** Qdrant Cloud or Pinecone
- **Enterprise:** Milvus or Weaviate

---

## 🏛️ Common AI Architecture Patterns

Proven patterns for building AI applications.

### 1. 🤖 Chatbot Architecture

```
User → Chat UI → LLM API → Response
            ↓
        Context Memory (Redis/Postgres)
```

**Stack:**
- Frontend: Next.js + Vercel AI SDK
- Backend: FastAPI + OpenRouter
- Memory: Upstash Redis or Supabase

---

### 2. 📚 RAG Architecture (Document Q&A)

```
Documents → Chunking → Embeddings → Vector DB
                                    ↓
User Query → Embedding → Similarity Search → LLM → Response
```

**Stack:**
- Framework: LlamaIndex or LangChain
- Embeddings: BGE-Large or Jina v3
- Vector DB: ChromaDB (dev) → Pinecone (prod)
- LLM: Claude Sonnet 5.5 or GPT-6.1 Sol

---

### 3. 🎯 Agent Architecture

```
User Request → Agent Controller → Tool 1 (Search)
                              → Tool 2 (Code exec)
                              → Tool 3 (API call)
                              ↓
                        Synthesize → Response
```

**Stack:**
- Framework: LangGraph, AutoGen, or CrewAI
- Tools: Function calling with Claude 5.5 / GPT-6.1
- Memory: Vector DB + State management
- Monitoring: LangSmith or Arize

---

### 4. 🔄 Multi-Model Routing Architecture

```
User Request → Router (classify intent)
                    ↓
    ┌───────────────┼───────────────┐
    ↓               ↓               ↓
Cheap Model    Medium Model    Expensive Model
(GPT-6 Luna)     (Claude Sonnet 5.5)   (Claude Opus 5.5 / GPT-6 Astra)
    ↓               ↓               ↓
Simple Q&A    Complex task    Hard reasoning
```

**Implementation:**
- Router: Fine-tuned classifier or LLM-based
- Cost optimization: Route 80% to cheap models
- Fallback: Escalate if cheap model fails

---

### 5. ⚡ Realtime Streaming Architecture

```
Audio Input → STT → LLM → TTS → Audio Output
     ↓           ↓      ↓       ↓
 Deepgram    Groq   Claude  ElevenLabs
```

**Stack:**
- STT: Deepgram or Whisper Streaming
- LLM: Groq for speed or OpenAI Realtime
- TTS: ElevenLabs or OpenAI TTS
- Latency target: <500ms end-to-end

---

### 6. 🖼️ Multimodal Pipeline Architecture

```
Image Input → Vision LLM → Structured Output
                                 ↓
                          Database / Action
```

**Stack:**
- Vision: GPT-6.1 Sol Vision, Claude Sonnet 5.5, or Gemini 3.5 Flash
- Structured output: Instructor + Pydantic
- Storage: Postgres JSONB or MongoDB

---

### 7. 🎨 Creative Generation Pipeline

```
Text Prompt → LLM Enhancement → Image Gen → Upscaling
                                                ↓
                                           Video Gen (optional)
```

**Stack:**
- Enhancement: GPT-4 or Claude
- Image: FLUX or DALL-E 3
- Upscale: Upscayl or Magnific
- Video: Runway or Pika

---

## 💵 Model Price Comparison (per 1M Tokens)

API pricing for budget planning. Sorted by input cost.

| Model | Provider | Input | Output | Cache Hit | Best For |
|-------|----------|-------|--------|-----------|----------|
| **MiniMax M2.5** | MiniMax | $0.08 | $0.12 | - | Bulk generation |
| **DeepSeek V4** | DeepSeek | $0.28 | $0.55 | $0.03 🎯 | Coding, cached |
| **Gemini 3.5 Flash** | Google | $0.25 | $0.75 | $0.05 🎯 | High throughput, 1M+ context |
| **GPT-6 Luna** | OpenAI | $0.30 | $1.20 | - | Efficient lightweight reasoning |
| **GLM 4.9 Air** | ZAI | $0.35 | $0.75 | - | Chinese/English |
| **Qwen3-Coder** | Alibaba | ~$0.60 | ~$1.20 | - | Strong agent tasks |
| **Claude Haiku 5.5** | Anthropic | $1.00 | $5.00 | $0.10 | High-velocity lightweight tasks |
| **MiMo V2.5 Pro** | Xiaomi | $1.00 | $3.00 | $0.20 | Long-horizon agents, flat up to 1M ctx |
| **Claude Sonnet 5.5** | Anthropic | $2.00 | $10.00 | $0.20 | Flagship coding, 30% fewer tokens/task |
| **GPT-6.1 Sol** | OpenAI | $2.00 | $10.00 | $0.10 | Workhorse agent, near-Astra coding |
| **Claude Opus 5.5** | Anthropic | $5.00 | $25.00 | $0.50 | Enterprise reasoning, secure sandboxing |
| **GPT-6 Astra** | OpenAI | $10.00 | $50.00 | $1.00 | Autonomous computer operator & frontier |
| **Gemini 4 Argon** | Google | Frontier | Frontier | - | 1M output token long-horizon (Preview) |

> 💡 **Pro tip:** DeepSeek's 90% cache discount makes it cheapest for repetitive tasks with long prompts.
>
> ⚠️ **October 2026 Generation Note:** Claude Sonnet 5.5 lowered rates to $2.00/$10.00 ($0.20 cache read) with 30% lower token usage per task. GPT-6.1 Sol provides near-Astra capabilities at $2.00/$10.00 ($0.10 cache read). Claude Haiku 5.5 is rolling out to replace Haiku 4.5. Claude Opus 5.5 ($5/$25) and GPT-6 Astra ($10/$50) represent the top enterprise and autonomous tiers.

---

## 🎯 Best Models by Use Case

Don't just use SWE-bench - match models to your specific task.

### 💻 Coding & Software Engineering

| Model | Why | Free Tier |
|-------|-----|-----------|
| **Claude Sonnet 5.5** | **70.6%** Terminal-Bench 4.0, 55.5% CursorBench, 30% fewer tokens/task | Claude Code / Various |
| **GPT-6.1 Sol** | Matches Astra on DeepSWE v1.1 at $2/$10, leading agentic performance | ChatGPT Plus/Pro / API |
| **Qwen3.6-Plus** | **71.2%** SWE-bench, Chinese + English, agent-optimized | 2,000 req/day |
| **DeepSeek V4** | Near-frontier performance at 1/10th cost | DeepSeek API |

### 🧠 Complex Reasoning & Analysis

| Model | Why | Free Tier |
|-------|-----|-----------|
| **Claude Opus 5.5** | Flagship enterprise reasoning, secure sandboxing, prompt-injection defense | Claude Code Pro / Bedrock |
| **GPT-6 Astra** | Flagship computer operator, long-horizon autonomous planning | ChatGPT Pro / API |
| **Gemini 4 Argon** | Frontier long-horizon reasoning with 1M output tokens | Fairwind Trusted Testers (Preview) |
| **DeepSeek R1** | Specialized reasoning model, math/logic | DeepSeek API |
| **MiMo V2.5 Pro** | Long-horizon agents (1K+ tool calls), flat rate up to 1M context | Xiaomi Token Plan ($6-$100/mo) |

### 💰 Cheap Bulk Generation

| Model | Why | Cost per 1M |
|-------|-----|---------------|
| **Gemini 3.5 Flash / Flash-Lite** | Primary high-throughput, low-latency models on Google AI Studio ($0.25/$0.75) | 1,500 RPD free |
| **GPT-6 Luna** | High-efficiency lightweight OpenAI model ($0.30/$1.20) | API |
| **MiniMax M2.5** | **80.2%** SWE-bench, dirt cheap | $0.08/$0.12 |
| **GLM 4.5 Air** | Good quality, extremely cheap | ~$0.40/$0.80 |

### 🤖 Agents & Autonomous Tasks

| Model | Why | Free Tier |
|-------|-----|-----------|
| **Claude Sonnet 5.5** | Best tool use, 70.6% Terminal-Bench 4.0, adaptive thinking | Various |
| **GPT-6.1 Sol** | Leads OSWorld 2.0 & Terminal-Bench Science, 24+ hour deep sessions | ChatGPT Plus/Pro / API |
| **Qwen3.6-Plus** | Built for agentic workflows | 2,000 req/day |
| **MiniMax M2.5 (OpenCode)** | 80.2% SWE-bench, agent-optimized | Zen Free tier |

### 👁️ Vision & Multimodal

| Model | Why | Free Tier |
|-------|-----|-----------|
| **Gemini 3.5 Flash Vision** | Leads CharXiv chart reasoning at 84.2%, 1M+ multimodal context | Google AI Studio (1,500 RPD) |
| **Claude 5.5 Vision** | Exceptional technical diagram, UI, and document analysis | Claude Free / API |
| **GPT-4o** | Fast multimodal generation and OCR | ChatGPT Free |
| **Qwen2.5 VL** | Strong open vision model | Various |

### 🔊 Audio & Speech

| Model | Provider | Free Tier |
|-------|----------|-----------|
| **Whisper Large v3** | Groq / Local | 2,000 req/day or unlimited local |
| **ElevenLabs** | ElevenLabs | Basic free tier |
| **Piper** | Local | Free, offline TTS |

---

## ⏱️ Rate Limit Comparison

Critical for scaling applications. Plan your architecture.

| Provider | RPM | TPM | Daily | Best For |
|----------|-----|-----|-------|----------|
| **Groq** | 30 | Medium | 14,400 | High-throughput apps |
| **Cerebras** | 30 | 60,000 | 1.5M tokens | Batch processing |
| **Gemini Studio** | 15 | High | 1,500 | Prototyping |
| **OpenRouter** | 20 | Medium | 50-1,000 | Flexible routing |
| **Cloudflare** | 300 | 10K neurons | 10K neurons | Edge deployment |
| **Groq (varies)** | 30-50 | 6K-30K | 1K-14.4K | Model-dependent |

### Scaling Strategy by Use Case

| App Type | Recommended Stack |
|----------|-------------------|
| **Document QA / Study App** | Cerebras (Qwen3.6-Plus) + Groq |
| **AI Reel Generator** | Gemini 3.5 Flash (video) + Groq (audio) |
| **Trading AI** | Groq + local Qwen3.6-Plus |
| **Chatbot** | OpenRouter + Gemini 3.5 Flash (cheap) |
| **Code Review Bot** | DeepSeek V4 (cheap) + Claude Sonnet 5.5 (quality) |

---

## ✅ Commercial Use Summary

Quick reference for legal safety.

| Provider | Commercial Use | Notes |
|----------|----------------|-------|
| **OpenRouter** | ✅ Yes | All models |
| **Groq** | ✅ Yes | All models |
| **Gemini API** | ✅ Yes | Per Google ToS |
| **Cohere** | ❌ Non-commercial (evaluation only) | Trial API keys strictly prohibit production/revenue use |
| **Claude (API)** | ✅ Yes | Per Anthropic ToS |
| **OpenCode Zen** | ✅ Yes | Per Zen ToS |
| **DeepSeek** | ✅ Yes | No military use restriction |
| **Qwen/Alibaba** | ✅ Yes | Apache 2.0 models |
| **Ollama Local** | ✅ Yes | Fully offline |

> ⚠️ **Always verify current ToS** - licenses can change.

---

## 🧩 RAG Stack Tools

Build document Q&A and semantic search systems.

### Orchestration Frameworks

| Tool | Best For | Free Tier |
|------|----------|-----------|
| **LlamaIndex** | Production RAG | Open source |
| **LangChain** | Flexibility | Open source |
| **Haystack** | Enterprise | Open source |
| **Vercel AI SDK** | Edge RAG | Free tier |

### Vector Databases

| Database | Type | Free Tier | Best For |
|----------|------|-----------|----------|
| **ChromaDB** | Local | Unlimited | Prototyping, small apps |
| **LanceDB** | Local/Serverless | Generous | Multimodal, embeddings |
| **Weaviate** | Cloud/Local | 5M vectors | Production scale |
| **Supabase Vector** | Postgres | 500MB | Full-stack apps |
| **Pinecone** | Managed | 2GB (1 pod) | Production, no ops |
| **Qdrant** | Local/Cloud | 1GB cloud | High performance |

### RAG Evaluation

| Tool | Purpose |
|------|---------|
| **RAGAS** | Evaluate retrieval quality |
| **LlamaIndex Evals** | Built-in RAG metrics |
| **Arize Phoenix** | Observability |

---

## 🔢 Best Free Embedding APIs

Essential for RAG - don't overlook these.

| Embedding | Provider | Dimensions | Free Tier | Best For |
|-----------|----------|------------|-----------|----------|
| **text-embedding-3-small** | OpenAI | 1536 | 200K tokens/day | General purpose |
| **Jina Embeddings v3** | Jina AI | 1024 | 1M tokens/day | Multilingual |
| **BGE-Large-EN-v1.5** | HuggingFace/Local | 1024 | Free | High quality retrieval |
| **E5-Mistral-7B** | Various | 4096 | Varies | Best accuracy |
| **Nomic Embed v1.5** | Nomic | 768 | Free tier | Long context (8K) |
| **GTE-Large** | Alibaba | 1024 | DashScope free | Chinese + English |

### Self-Hosted (Free Forever)

| Model | Size | Speed | Quality |
|-------|------|-------|---------|
| **BGE-Small** | 33M | Fast | Good |
| **MiniLM-L6** | 22M | Very Fast | Basic |
| **Nomic Embed** | 137M | Fast | Excellent |

---

## 🖥️ AI Hosting & GPU Providers

Scale beyond free tiers.

| Provider | Type | Pricing | Best For |
|----------|------|---------|----------|
| **Modal** | Serverless GPU | $5-30/month credits | Batch inference |
| **RunPod** | GPU Cloud | $0.20-0.50/hr | Training, fine-tuning |
| **Vast.ai** | Spot GPUs | Cheap spot prices | Budget inference |
| **Lambda Labs** | GPU Cloud | ~$0.60/hr A100 | Stable workloads |
| **Beam.cloud** | Serverless | Per request | Spiky traffic |
| **Baseten** | Model serving | $30 credits | Production models |
| **Replicate** | Model hosting | 6 req/min free | Quick deployment |

### Serverless Inference (Pay-per-use)

| Platform | Cold Start | Best For |
|----------|-----------|----------|
| **Modal** | Fast | Python functions |
| **Beam** | Fast | ML models |
| **Replicate** | Medium | Pre-built models |
| **HuggingFace Inference** | Medium | HF ecosystem |

---

## 📊 AI Evaluation Tools

Benchmark your models before production.

| Tool | Purpose | Free Tier |
|------|---------|-----------|
| **Promptfoo** | Prompt testing, red-teaming | Open source |
| **LangSmith** | Tracing, evals | 5K traces/month |
| **RAGAS** | RAG evaluation | Open source |
| **DeepEval** | LLM unit testing | Open source |
| **Arize Phoenix** | Observability | Generous free tier |
| **Weights & Biases** | Experiment tracking | Academic free |

---

## 📐 Structured Output Tools

Force LLMs to return valid JSON/schemas.

| Tool | Approach | Best For |
|------|----------|----------|
| **Instructor** | Pydantic validation | Python apps |
| **Guidance** | Constrained generation | Complex schemas |
| **Outlines** | Regex/constrained | Fast inference |
| **JSONformer** | Structure-aware decoding | Local models |
| **Zod + Vercel AI SDK** | TypeScript validation | Web apps |

---

## 🏷️ Legend

Quick reference for badges used in this guide.

| Badge | Meaning |
|-------|---------|
| 🟢 | No credit card required |
| 💳 | Credit card required |
| ⚡ | Fast inference (low latency) |
| 🧠 | Strong reasoning capabilities |
| 💻 | Coding optimized |
| 📦 | Open source / self-hostable |
| 🔒 | Privacy focused / local |
| 🤖 | Agentic capabilities |
| 🎯 | Best value / cheap |
| 🌐 | Multilingual support |
| `[verify]` | Needs verification from official source |

---

## Contributing

If you spot an error, missing source link, or have updated quota/model information, please open an issue or pull request with a source.

No affiliation with any vendor. All trademarks belong to their owners. Information is for research; accuracy not guaranteed; limits/pricing change frequently.

---

## Related Resources

- [cheahjs/free-llm-api-resources](https://github.com/cheahjs/free-llm-api-resources) (18.4k ⭐) - Comprehensive free LLM API list
- [mnfst/awesome-free-llm-apis](https://github.com/mnfst/awesome-free-llm-apis) (2.1k ⭐) - Permanent free LLM API tiers
- [inmve/free-ai-coding](https://github.com/inmve/free-ai-coding) (648 ⭐) - Pro-grade AI coding tools comparison
- [Coding with AI](https://coding-with-ai.dev/) - Practical techniques for coding with LLMs
- [nowork-studio/awesome-ai-startups](https://github.com/nowork-studio/awesome-ai-startups) - A curated list of bootstrapped, pre-seed, and angel-funded AI products built by independent founders

### Research Methodology

This list was compiled and verified using:
- **Gemini** - For research and discovering new/additional AI tools
- **Perplexity** - For verifying information accuracy and checking if data is current
- **Community repos** - All referenced repositories above were used as reference sources

---

## License

MIT © [ShaikhWarsi](https://github.com/ShaikhWarsi)

---

*Last updated: October 5, 2026 • PRs/issues welcome*
