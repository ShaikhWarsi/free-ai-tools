# Free AI Tools

![Stars](https://img.shields.io/github/stars/ShaikhWarsi/free-ai-tools?style=social)
![Last Updated](https://img.shields.io/badge/updated-April%2011%2C%202026-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen)

> **Curated list of free LLM APIs, coding copilots, AI IDEs, agents, and infrastructure tools for building real AI applications.**

### What's Inside
- ✅ Free GPT-5 / Claude / Gemini API access
- 🤖 Coding copilots and AI-native IDEs (Cursor, Trae, Windsurf)
- 💰 Cheapest AI APIs ($0.10-0.50 per 1M tokens)
- 📚 RAG stack tools (vector DBs, embeddings, frameworks)
- 🎯 Agent frameworks and automation tools
- 🔒 Local models for privacy (Ollama, Llama, Qwen)
- 🏗️ Production-ready stack configurations

**Goal:** Help developers build AI apps without paying $200/month.

> [!NOTE]  
> Please don't abuse these services, else we might lose them for everyone.

> [!WARNING]  
> **April 2026 Model Tier Changes:** Major providers (OpenAI, Anthropic, Google) have restricted flagship models (GPT-5.4, Claude Opus 4.6, Gemini 3.1 Pro) to paid tiers. Free tiers now get lighter models (GPT-4o, Claude Sonnet/Haiku, Gemini Flash). Entries marked with `[verify]` need confirmation.

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
| [Cerebras](#cerebras) | 4 | 1M tokens/day | No |
| [Cohere](#cohere) | 14 | 1K req/month | No |
| [Mistral La Plateforme](#mistral-la-plateforme) | 10+ | 1B tokens/month | No |
| [GitHub Models](#github-models) | 30+ | 50 chat + 2K completions/month | No |
| [SambaNova](#sambanova-cloud) | 13 | $5 for 3 months | No |
| [Hyperbolic](#hyperbolic) | 13 | $1 trial | No |

### AI-Powered IDEs with Free Pro-Grade Access

| IDE | Pro-grade Models | Free Tier Limit | Credit Card |
|-----|------------------|-----------------|-------------|
| [Cursor](#cursor) | GPT-5.1-Codex-Max | Limited free tier | No |
| [Trae](#trae) | DeepSeek V4, GPT-4.1 (Claude removed Nov 2025) | 10 fast + 50 slow/month | No |
| [Windsurf](#windsurf) | OpenAI, Anthropic, Google, xAI | 25 credits/month | Required |
| [Qoder](#qoder) | Qwen3.6-Plus, Qwen3-Coder-480B, Claude, GPT, Gemini | Unlimited completions + limited chat | No |

### CLI Coding Tools with Free Pro-Grade Access

| Tool | Pro-grade Models | Free Tier Limit | Credit Card |
|------|------------------|-----------------|-------------|
| [Gemini CLI](#gemini-cli) | Gemini 3.1 Flash [verify: Pro paid] | 100-250 req/day | No |
| [Rovo Dev CLI](#rovo-dev-cli) | Claude Sonnet 4 [verify], GPT-5 preview [verify] | 5M tokens/day | No |
| [Warp](#warp) | GPT-4.1, Claude Opus 4.1 [verify] | 150 credits/month | No |
| [GitHub Copilot](#github-copilot) | GPT-4.1, Claude Opus | 50 chat + 2K completions/month | No |
| [Jules](#jules) | Gemini 2.5 Pro | 15 tasks/day | No |
| [AWS Kiro](#aws-kiro) | Claude Sonnet 4 [verify] | 50 credits/month | No |
| [OpenCode](#opencode) | 300+ models via OpenRouter | Zen Free tier | No |
| [ForgeCode](#forgecode) | 300+ models via OpenRouter | 10K tokens/day | No |
| [Amazon Q Developer](#amazon-q-developer) | Claude Sonnet 4 [verify] | 50 agentic req/month | Required |
| [RooCode](#roocode) | Bring your own keys | Unlimited (BYOK) | No |
| [Goose](#goose) | Bring your own keys | Unlimited (BYOK) | No |
| [OhMyPi](#ohmypi) | Bring your own keys | Unlimited (BYOK) | No |

### What Qualifies as "Pro-Grade"?

Models achieving ≥60% on SWE-bench Verified:

| Model | SWE-bench | Provider |
|-------|-----------|----------|
| Claude **Opus 4.6** | 84.2% | Anthropic |
| **GPT-5.4** | 80.1% | OpenAI |
| Claude Sonnet 4.6 | 79.3% | Anthropic |
| Gemini 3.1 Pro | 77.4% | Google |
| Claude Opus 4.5 | 82.1% | Anthropic |
| GPT-5.1-Codex-Max | 78.3% | OpenAI |
| Qwen3.6-Plus | 71.2% | Alibaba |
| Claude Sonnet 4.5 | 77.8% | Anthropic |

> **Note:** `[verify]` indicates scores need verification from official sources. Always check current benchmarks before making decisions.

---

## 🏗️ Recommended Stacks

Ready-made combinations for different use cases. Copy-paste these configurations.

### 🟢 Fully Free Coding Stack (No Credit Card)

| Layer | Tool | Why |
|-------|------|-----|
| **IDE** | Cursor Hobby / Qoder | GPT-5.4 limited credits |
| **CLI** | Gemini CLI (3.1 Pro) / Rovo | 100-250 req/day, 5M tokens/day |
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
| **Agent** | OpenCode Zen | Big Pickle (72.0%), MiniMax M2.5 (80.2%) |
| **Cache** | DeepSeek V4 | $0.30/$0.50 per 1M, 90% cache discount |
| **Edge** | Cloudflare Workers AI | Global CDN |

**Best for:** Real-time apps, trading bots, live coding assistants

---

### 💰 Cheapest Pro Stack (<$10/month)

| Layer | Tool | Cost |
|-------|------|------|
| **IDE** | Trae Pro | $10/mo (600 fast, DeepSeek V4/GPT-5.4) |
| **API** | OpenRouter $10 | 1K req/day + BYOK 1M/month free |
| **CLI** | Gemini CLI | v0.37.1 (Gemini 3.1 Pro/Flash) |
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
| **LLM** | Claude Sonnet 4.6 (79.3%) / GPT-5.4 | Answer generation |
| **Eval** | RAGAS | Measure RAG performance |

**Best for:** ExamAi, legal document analysis, knowledge bases

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

#### [Google AI Studio](https://aistudio.google.com)

Data is used for training when used outside UK/CH/EEA/EU.

**Rate limits:** Tier 1 (default): 250 RPD | Tier 2: Requires $250 spend + 30 days

| Model | Free Tier Limits |
|-------|------------------|
| Gemini 3.1 Pro [verify: now paid] | 250 RPD (Tier 1) |
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

#### [Mistral (Codestral)](https://codestral.mistral.ai/)

**Limits:** 30 RPM, 2K RPD confirmed free

- Codestral (monthly subscription-based, currently free)

---

#### [HuggingFace Inference Providers](https://huggingface.co/docs/inference-providers/en/index)

Serverless Inference limited to models <10GB (some popular models >10GB supported).

**Limits:** ~$0.10/month in credits

- Various open models across supported providers

---

#### [Vercel AI Gateway](https://vercel.com/docs/ai-gateway)

Routes to various supported providers.

**Limits:** $5/month

---

#### [OpenCode Zen](https://opencode.ai/docs/zen/)

AI gateway with curated models. Free models may use data for improvement.

- Big Pickle Stealth (S+, 72.0% SWE-bench)
- MiniMax M2.5 Free (S+, 80.2% SWE-bench)
- MiMo V2 Pro/Omni/Flash Free
- Nemotron 3 Super Free
- GPT 5 Nano
- Trinity Large Preview Free

---

#### [Cerebras](https://cloud.cerebras.ai/)

| Model | Limits |
|-------|--------|
| GPT-OSS 120B | 30 req/min, 60K tokens/min, 900 req/hour, 1M tokens/day |
| Llama 3.1 8B | Same limits as above |
| Qwen3-235B | Available via API |

---

#### [Groq](https://console.groq.com)

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

#### [Cohere](https://cohere.com)

**Limits:** **20 RPM, 1K req/month (non-commercial only)**

- Command R+ 2026
- c4ai-aya-expanse/vision-32b
- command-a/r/r7b variants

---

#### [GitHub Models](https://github.com/marketplace/models)

Extremely restrictive input/output token limits.

**Limits:** [Dependent on Copilot subscription tier (Free/Pro/Pro+/Business/Enterprise)](https://docs.github.com/en/github-models/prototyping-with-ai-models#rate-limits)

- AI21 Jamba 1.5 Large
- Codestral 25.01
- Cohere Command A, Command R/R+ 08-2024
- DeepSeek-R1, DeepSeek-R1-0528, DeepSeek-V3.2, DeepSeek-V3-0324
- Grok 3, Grok 3 Mini
- Llama 4 Maverick 17B 128E Instruct FP8, Llama 4 Scout 17B 16E Instruct
- Llama-3.2-11B/90B-Vision-Instruct, Llama-3.3-70B-Instruct
- MAI-DS-R1, Meta-Llama-3.1-405B/8B-Instruct
- Ministral 3B, Mistral Medium 3 (25.05), Mistral Small 3.1
- OpenAI GPT-4.1/mini/nano, GPT-4o/mini, GPT-5/mini/nano
- OpenAI gpt-5-chat (preview), o1/o1-mini/o1-preview, o3/o3-mini, o4-mini
- OpenAI Text Embedding 3 (large/small)
- Phi-4, Phi-4-mini-instruct/reasoning, Phi-4-multimodal-instruct, Phi-4-reasoning

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

### Additional Free API Providers

| Provider | Models | Free Tier | Environment Variable |
|----------|--------|-----------|---------------------|
| [Together AI](https://api.together.ai/settings/api-keys) | 19 | Credits/promos vary by account | `TOGETHER_API_KEY` |
| [iFlow](https://platform.iflow.cn) | 11 | Free for individuals (7-day key expiry) | `IFLOW_API_KEY` |
| [ZAI](https://z.ai) | 7 | Free tier (generous quota) | `ZAI_API_KEY` |
| [SiliconFlow](https://cloud.siliconflow.cn/account/ak) | 6 | 1K RPM, 50K TPM | `SILICONFLOW_API_KEY` |
| [Perplexity API](https://www.perplexity.ai/settings/api) | 4 | ~50 RPM default | `PERPLEXITY_API_KEY` |
| [OVHcloud AI Endpoints](https://endpoints.ai.cloud.ovh.net) | 8 | 2 req/min (no key), 400 RPM with key | `OVH_AI_ENDPOINTS_ACCESS_TOKEN` |
| [Chutes AI](https://chutes.ai) | 4 | Free community GPU-powered | `CHUTES_API_KEY` |
| [DeepInfra](https://deepinfra.com/login) | 4 | 200 concurrent requests | `DEEPINFRA_API_KEY` |
| [Replicate](https://replicate.com/account/api-tokens) | 2 | 6 req/min (no payment), up to 3K RPM with payment | `REPLICATE_API_TOKEN` |

---

## AI-Powered IDEs

Full-featured integrated development environments with built-in AI assistance.

### IDEs with Pro-Grade Models

#### [Cursor](https://cursor.com/)

**Model:** GPT-5.1-Codex-Max (77.9% SWE-bench Verified) [verify]
- **Free tier:** **500 slow premium req/mo, 2K completions/mo** (post-Dec 2025 credits)
- Free models: Cursor Small, Deepseek v3, Gemini 2.5 Flash, GPT-4o mini (500/day limit), Grok 3 Mini Beta [verify: GPT-5.4 now paid-only]
- Claude models removed from free tier ~June 2025
- Free tier uses token-based usage tracking (not request-based)
- AI-powered code editor with autonomous coding capabilities
- **Pro ($20/mo or $16/mo annually):** Extended Agent limits + Unlimited Tab completions + Background Agents + Maximum context windows
- **Pro+ ($60/mo):** 3x usage on all OpenAI, Claude, Gemini models
- **Ultra ($200/mo):** 20x usage on all models + Priority access to new features
- **Teams ($40/user/mo):** Pro features + Centralized billing + Usage analytics + SAML/OIDC SSO
- **Enterprise (Custom):** Everything in Teams + Pooled usage + SCIM + AI code tracking API + Audit logs

**[Pricing](https://cursor.com/en/pricing)** | **[GPT-5.1-Codex-Max Announcement](https://forum.cursor.com/t/gpt-5-1-codex-max-available-in-cursor/145277)**

---

#### [Trae](https://trae.ai/)

**Models:** DeepSeek V4, GPT-4.1, GPT-4o, Gemini 2.5 Pro (Claude models removed Nov 2025)
- 10 fast requests + 50 slow requests/month for premium models
- 1,000 slow requests/month for advanced models
- 5,000 auto-completions/month
- VS Code-based IDE with AI integration
- No credit card required for free tier
- **Pro ($10/mo):** 600 fast + unlimited slow requests for premium models
- Unlimited slow requests for advanced models
- Zero rate limits and faster access to premium models
- Extra packages available: $3-$12 for additional fast requests
- First month available for $3

**[Pricing](https://trae.ai/pricing)** | **[Documentation](https://docs.trae.ai/ide/billing)**

---

#### [Windsurf](https://windsurf.com/)

**Models:** OpenAI, Anthropic, Google, xAI model access
- 25 prompt credits/month limit
- Multiple providers (OpenAI, Claude, Gemini, xAI)
- Credit card required
- Can purchase add-on credits to continue
- **Pro ($15/mo):** 500 prompt credits/month
- **Teams ($30/user/mo):** 500 prompt credits/user/month
- **Enterprise ($60+/user/mo):** 1,000 prompt credits/user/month

**[Pricing](https://windsurf.com/pricing)**

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

**Models:** Qwen3.6-Plus (71.2% SWE), Qwen-Coder-Qoder, GPT-4o, Claude Sonnet [verify: flagship models now paid-only]
- **Free tier:** Unlimited completions + **limited chat/agent (basic models)** + **2-week Pro trial (1,000 credits)**
- **Experts Mode:** Multi-agent collaboration (new Mar 2026)
- **Quest Mode:** Fully autonomous app building
- **Nextnew:** Tab predictions
- Windows/macOS, VS Code-based

**Pricing (50% discount - Apr 2026):**
- **Free:** Basic models, limited messages
- **Pro:** $10/mo (reg $20) - **2,000 credits**
- **Pro+:** $30/mo (reg $60) - **6,000 credits**
- **Ultra:** $100/mo (reg $200)
- **Credits:** $0.01/credit (reg $0.02), expire 1mo

**[Docs](https://docs.qoder.com/)** | **[Pricing](https://qoder.com/pricing)**

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

**Model:** Base model (Llama 3.1 70B), pro-grade models require subscription
- Individual plan: Free forever with unlimited code completions, AI chat, commands
- 70+ programming languages supported
- IDE integrations: VS Code, JetBrains, Vim/Neovim, Jupyter
- No credit card required
- Limited context awareness (expanded in paid tiers)
- **Pro ($10/mo):** Unlimited usage with advanced context awareness, Claude 3.5 Sonnet, GPT-4o access
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

**Models:** Claude 3.5 Sonnet, GPT-4o, Llama 3.3 70B, proprietary models
- Free tier with limited features
- Basic AI code completions and chat (limited)
- Local processing available
- Context heavily limited in free tier
- 600+ programming languages supported
- **Pro ($12/mo):** Enhanced AI completions and chat
- **Enterprise ($39/user/mo):** Multiple LLMs, private deployment, on-premises and air-gapped options

**[Pricing](https://www.tabnine.com/pricing/)**

---

#### [SuperMaven](https://supermaven.com/) ⚠️ DISCONTINUED

**Status:** Shut down November 21, 2025 after acquisition by Cursor (Nov 2024)

~~**Models:** GPT-4o, Claude 3.5 Sonnet, GPT-4 (via chat interface)~~
~~- Free tier with basic features~~
~~- Basic code suggestions~~
~~- 7-day data retention limit~~
~~- Credit card required for registration~~
~~- 1M token context window~~

**Historical Note:** SuperMaven was acquired by Cursor in November 2024 and officially shut down in November 2025. Features were integrated into Cursor Tab. Users should migrate to Cursor or alternatives.

**[Pricing](https://supermaven.com/pricing)**

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
- GPT-5 access requires v0 Premium subscription

**[Updated Pricing Blog](https://vercel.com/blog/improved-v0-pricing-5luSrdRUJsRvf1kXWoYGxh)**

---

### Additional 2026 AI Chat Platforms

General-purpose chat interfaces with free tiers.

| Platform | Free Model | Key Capabilities | Limitations |
|----------|------------|------------------|-------------|
| [ChatGPT](https://chatgpt.com) | **GPT-4o / GPT-5.4-limited** [verify] | Sora 3, DALL-E 4, GPT Store | ~20 msgs/3hr |
| [Gemini](https://gemini.google.com) | **Gemini 3.1 Flash** | 2M Context, **20 Deep Research/mo** | Research quota |
| [Claude](https://claude.ai) | **Claude Sonnet/Haiku** [verify: Opus paid-only] | Technical reasoning | ~30 msgs/5h |
| [Grok](https://grok.com) | **Grok 4.2** | Aurora 2 images, voice | 15 msgs/12hr |
| [Mistral Le Chat](https://chat.mistral.ai) | **Mistral Medium 3** | Structured output | Fewer integrations |

**Notes:**
- **Aurora** - xAI's image generation model (available in Grok)
- **Sora 2** - OpenAI's video generation (integrated in ChatGPT)
- **DALL-E 4** - OpenAI's latest image model (ChatGPT)
- **Deep Research** - Gemini's agentic research feature

---

## CLI Coding Tools

Command-line tools for AI-assisted coding in your terminal.

### CLI Tools with Pro-Grade Models

#### [Gemini CLI](https://github.com/google-gemini/gemini-cli)

**Models:** Gemini 3.1 Flash [verify: Pro now paid], Gemini 2.5 Pro
- Gemini 3.1 Pro latest version (v0.37.1 April 2026)
- 100 requests/day for Gemini 2.5 Pro (free tier fallback)
- 250 requests/day for Gemini 2.5 Flash
- No credit card required for free tier
- MCP server support, Google Search grounding
- Enable via `/settings` → Preview features → true
- **Install:** `npm install -g @google/gemini-cli`

**[Rate Limits](https://ai.google.dev/gemini-api/docs/rate-limits)** | **[Pricing](https://ai.google.dev/gemini-api/docs/pricing)** | **[Gemini 3 Pro Announcement](https://developers.googleblog.com/en/5-things-to-try-with-gemini-3-pro-in-gemini-cli/)**

---

#### [Rovo Dev CLI](https://www.atlassian.com/blog/announcements/rovo-dev-command-line-interface)

> [!IMPORTANT]  
> Rovo Dev CLI isn’t available during a Rovo Dev Standard trial. To use this feature, you need a paid Rovo Dev Standard subscription.

**Models:** Claude Sonnet 4 [verify], GPT-5 preview [verify]
- 5M tokens/day free tier
- No credit card required during beta
- Token limits reset at midnight UTC
- Jira/Confluence integration, MCP server support
- Requires Atlassian account
- **Pro ($19.99/mo via Google AI Pro):** 100 tasks/day, 5x higher limits, 5x concurrent tasks (15)
- **Ultra (via Google AI Ultra):** 300 tasks/day, 20x higher limits, 60 concurrent tasks, priority access to latest models

**[Documentation](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/)** | **[Token Limits](https://support.atlassian.com/rovo/docs/rovo-dev-cli-limits/)**

---

#### [Warp](https://warp.dev/)

**Models:** GPT-4.1, Claude Opus 4.1 [verify], Claude Sonnet 4 [verify], Gemini 2.5 Pro
- 150 AI credits/month (first 2 months), then 75 AI credits/month
- No credit card required for basic signup
- AI-powered terminal with code generation
- **Build ($20/mo):** 1,500 AI credits/month
- Reload Credits available (up to 50% cheaper than old overage rates, roll over for 12 months)
- Bring Your Own API Key (BYOK) option available
- New pricing effective immediately for new customers (Oct 30, 2025)
- Existing monthly subscribers transition on first renewal after Dec 1, 2025

**[Pricing](https://www.warp.dev/pricing)**

---

#### [GitHub Copilot](https://github.com/features/copilot/plans)

**Models:** GPT-4.1, Claude Opus 3.5, Gemini 2.0 Flash, Grok Code Fast 1 (Free tier); GPT-5.1-Codex-Max available in Pro/Pro+/Business/Enterprise only
- 50 agent mode or chat requests + 2,000 completions/month (Free tier)
- Agent Mode with autonomous multi-step coding
- No credit card required
- Free Copilot Pro for students/educators (GitHub Student Pack, Copilot Pro for teachers/maintainers)
- Limited to basic features after quota
- **Pro ($10/mo):** 300 premium requests + unlimited completions/month
- **Pro+ ($39/mo):** 1,500 premium requests + unlimited completions/month
- **Business ($19/user/mo):** 300 premium requests/user + unlimited completions
- **Enterprise ($39/user/mo):** 1,000 premium requests/user + unlimited completions
- **GPT-5.1-Codex-Max** available in public preview (Dec 4, 2025) for Pro, Pro+, Business, Enterprise - **NOT in free tier**
- Overage billing available at $0.04/request

**[Plans Details](https://docs.github.com/en/copilot/get-started/plans-for-github-copilot)** | **[Agent Mode](https://code.visualstudio.com/blogs/2025/02/24/introducing-copilot-agent-mode)** | **[GPT-5.1-Codex-Max Preview](https://github.blog/changelog/2025-12-04-openais-gpt-5-1-codex-max-is-now-in-public-preview-for-github-copilot/)**

---

#### [Jules](https://jules.google/)

**Model:** Gemini 2.5 Pro
- 15 tasks/day free tier
- 3 concurrent tasks
- No credit card required
- Gmail account required (18+ years)
- Task limits reset on rolling 24-hour window
- **Pro ($19.99/mo):** 100 tasks/day, 5x higher limits, 5x concurrent tasks (15)
- **Ultra (via Google AI Ultra):** 300 tasks/day, 20x higher limits, 60 concurrent tasks, priority access to latest models

**[Usage Limits](https://jules.google/docs/usage-limits/)** | **[Documentation](https://jules.google/docs/)** | **[Google AI Plans](https://one.google.com/about/google-ai-plans/)**

---

#### [AWS Kiro](https://kiro.dev/)

**Models:** Claude 4 Sonnet, Claude 3.7 Sonnet (AWS-hosted)
- 50 credits/month (Free tier)
- 14-day welcome bonus: 500 credits
- No credit card required
- **Pro ($20/mo):** 1,000 credits
- **Pro+ ($40/mo):** 2,000 credits
- **Power ($200/mo):** 10,000 credits

**[Pricing](https://kiro.dev/pricing/)** | **[Introduction Blog](https://kiro.dev/blog/introducing-kiro/)**

---

#### [Amazon Q Developer](https://aws.amazon.com/q/developer/)

**Model:** Claude Sonnet 4 [verify] (AWS-hosted)
- 50 agentic requests/month limit (multi-turn conversations)
- Latest Claude models
- Credit card required
- Must upgrade to Pro for continued access
- Perpetual free tier
- **Pro ($19/mo):** Increased limits for agentic requests
- Usage may be adjusted based on regional factors and usage patterns

**[Pricing](https://aws.amazon.com/q/developer/pricing/)**

---

#### [OpenCode](https://github.com/anomalyco/opencode)

**Models:** 300+ via OpenRouter (Claude, GPT, DeepSeek, Gemini, Grok, etc.)
- Open-source AI coding agent (Go-based CLI)
- Zen Free tier with 8 exclusive models (Big Pickle, MiniMax M2.5 Free, MiMo V2)
- Privacy-sensitive: no code/context stored
- `opencode run --dangerously-skip-perm` for quick execution

**[GitHub](https://github.com/anomalyco/opencode)** | **[Website](https://opencode.ai)**

---

#### [ForgeCode](https://github.com/antinomyhq/forgecode)

**Models:** 300+ models via OpenRouter (Claude, GPT, O Series, Grok, DeepSeek, Gemini)
- AI-enabled pair programmer (Rust-based, Apache 2.0)
- Model-agnostic agent harness
- Semantic codebase search via `:sync`
- 10K tokens/day free tier

**[GitHub](https://github.com/antinomyhq/forgecode)** | **[Website](https://forgecode.dev)**

---

#### [OhMyPi](https://github.com/can1357/oh-my-pi)

**Models:** Bring your own keys (any provider)
- AI coding agent for the terminal (Zig-powered)
- Hash-anchored edits, optimized tool harness
- LSP integration, Python support, browser automation
- Subagents with coordinated API rate limiting
- Multiplexer integration (tmux, GNU Screen, Zellij)
- Interrupt anytime workflow

**[GitHub](https://github.com/can1357/oh-my-pi)**

---

#### [Goose](https://github.com/block/goose)

**Models:** Any LLM (Claude, GPT, DeepSeek, etc.)
- Open-source extensible AI agent from Block (now AAIF/Linux Foundation)
- Desktop app, CLI, and API
- Active engineering tasks (not just code suggestions)
- Built for code, workflows, and automation
- Model-agnostic architecture

**[GitHub](https://github.com/block/goose)** | **[Website](https://block.github.io/goose/)**

---

#### [Kilo Code](https://kilocode.ai/)

**Models:** Bring your own API keys (Claude, Gemini, GPT, etc.)
- Up to $25 signup credits (one-time bonus)
- Open source VS Code extension
- Pay-as-you-go with no markup on model pricing
- Credit card required to claim full bonus credits
- Full BYOK support

**[GitHub](https://github.com/Kilo-Org/kilocode)** | **[Documentation](https://kilocode.ai/docs/)** | **[Pricing](https://kilocode.ai/pricing)**

---

#### [RooCode](https://github.com/RooCodeInc/Roo-Code)

**Models:** Bring your own API keys (any provider)
- Open-source AI-powered coding assistant for VS Code
- Whole dev team of AI agents in your editor
- No subscription required - pay-as-you-go with your own keys
- Custom modes for different coding tasks
- Previously known as Roo Cline

**[GitHub](https://github.com/RooCodeInc/Roo-Code)** | **[Website](https://roocode.com)**

---

### CLI Tools with Basic Models

#### [Claude Code](https://www.anthropic.com/claude-code)

**Models:** Claude Sonnet 4 [verify], Opus 4.5 [verify: paid-only], Haiku 4.5
- Free tier available with limited usage
- Pro ($20/mo or $17/mo annually): Sonnet 4 access with more usage
- Max 5x ($100/mo): ~225 messages/5 hours
- Max 20x ($200/mo): ~900 messages/5 hours
- Extended thinking modes: "think" (~4K tokens), "megathink" (~10K), "ultrathink" (~32K)
- Usage limits reset weekly with 5-hour rolling windows

**[Pricing](https://www.anthropic.com/pricing)** | **[Claude Code Guide](https://docs.anthropic.com/en/docs/claude-code)**

---

#### [OpenAI Codex CLI](https://github.com/openai/codex)

**Model:** GPT-5.1-Codex-Max (77.9% SWE-bench Verified)
- Free with ChatGPT Plus ($20/mo): 30–150 messages/5 hours
- ChatGPT Pro ($200/mo): 300–1,500 messages/5 hours
- Pay-as-you-go API: $1.25/$10 per million tokens (input/output)
- Free OSS mode: Access to open-source models only (via `--oss` flag)
- First model with "compaction" for multi-million token sessions (24+ hour tasks)
- 30% fewer thinking tokens than previous GPT-5.1-Codex
- Cross-platform: macOS 12+, Ubuntu 20.04+, Windows 11 via WSL2

**[GitHub Repo](https://github.com/openai/codex)** | **[GPT-5.1-Codex-Max Announcement](https://openai.com/index/gpt-5-1-codex-max/)**

---

#### [QuantFlow Pilot](https://github.com/qf-studio/pilot)

**Models:** Uses Claude Code for implementation
- Autonomous AI development pipeline — #1 Terminal Benchmark 2.0
- Turns GitHub issues into pull requests automatically
- Label an issue "pilot" → Pilot claims it → Creates branch → Plans → Implements → Quality gates → Opens PR
- Telegram bot integration available
- Desktop app available
- **Install:** `brew install qf-studio/tap/pilot` or `go install github.com/qf-studio/pilot@latest`

**[GitHub](https://github.com/qf-studio/pilot)** | **[Website](https://pilot.quantflow.studio/)**

---

#### [MemoryPalace](https://github.com/milla-jovovich/mempalace)

**Models:** Works with any LLM (Claude, ChatGPT, Cursor, Gemini, local models)
- AI memory system with highest LongMemEval score ever (96.6%)
- Uses ancient "memory palace" technique for AI conversations
- Stores conversations in structured format: wings (people/projects), halls (memory types), rooms (specific ideas)
- Raw verbatim storage without AI summarization
- Three mining modes: projects (code/docs), convos (conversation exports), general (auto-classified)
- MCP server with 19 tools for AI integration
- Local, open, adaptable — runs entirely on your machine
- **Install:** `pip install mempalace`

**[GitHub](https://github.com/milla-jovovich/mempalace)** | **[Note from Milla](https://github.com/milla-jovovich/mempalace#readme)**

---

#### [Continue.dev](https://www.continue.dev/)

**Models:** Bring your own API keys (200+ models supported)
- Free VS Code and JetBrains extension
- Full support for local models via Ollama/LM Studio
- Solo tier: Private/team/public visibility options
- Community hub for custom AI assistants
- No vendor lock-in or usage limits for local models

**[GitHub](https://github.com/continuedev/continue)** | **[Model Hub](https://hub.continue.dev/explore/models)**

---

#### [Aider](https://aider.chat/)

**Models:** Bring your own API keys (supports many providers)
- Free command-line assistant with built-in Git integration
- Works with GPT-4o, Claude Sonnet, DeepSeek, and local models
- Multi-file editing with repository context
- Voice-to-code support
- Use `/help` to see all commands

**[Documentation](https://aider.chat/)** | **[GitHub](https://github.com/paul-gauthier/aider)**

---

## API Providers for AI Coding Tools

These services provide API access to coding-optimized models for tools like Cursor, Continue.dev, Cline, etc.

### [OpenRouter](https://openrouter.ai/)

- 50 requests/day free tier (1,000/day with $10+ credits)
- Qwen3-Coder-480B, Qwen3-30B-A3B, Qwen3-235B-A22B, Gemini Flash
- 20 req/min rate limit for free tier
- OpenAI-compatible API

### [Cerebras](https://cloud.cerebras.ai/)

- **1.5M tokens/day** free tier (expanded Feb 2026)
- 30 req/min, 8,192 token context
- Models: **Qwen3.6-Plus-480B**, Llama 3.1 70B
- Ultra-fast: **2,400 t/s** (Qwen3.6)
- OpenAI-compatible API (works with Cursor, Continue.dev, Cline, RooCode, etc.)
- **Paid tiers:** Developer ($10+ self-serve), Enterprise (custom pricing)

**[Pricing](https://www.cerebras.ai/pricing)** | **[API Docs](https://inference-docs.cerebras.ai/)** | **[Integrations](https://inference-docs.cerebras.ai/integrations/)**

---

## Paid Tiers Comparison

### AI-Powered IDEs - Paid Plans

| IDE | Entry Tier | Credits/Requests | Key Features |
|-----|------------|------------------|--------------|
| [Cursor](https://cursor.com/) | Pro ($20/mo) | Extended Agent limits | Unlimited completions |
| [Trae](https://trae.ai/) | Pro ($10/mo) | 600 fast + unlimited slow | Zero rate limits |
| [Windsurf](https://windsurf.com/) | Pro ($20/mo) | 500 prompt credits | Multi-provider |
| [Qoder](https://qoder.com/) | Pro ($10/mo - 50% off) | 2,000 credits | Quest Mode, Experts Mode |
| [Codeium](https://codeium.com/) | Pro ($10/mo) | Unlimited | Claude 4.6 [verify], GPT-5.4 [verify] |
| [Tabnine](https://www.tabnine.com/) | Pro ($12/mo) | Enhanced completions | 600+ languages |
| [JetBrains AI](https://www.jetbrains.com/ai/) | AI Pro ($15/mo) | Increased cloud quota | Unlimited local models |
| ~~[SuperMaven](https://supermaven.com/)~~ | ~~DISCONTINUED Nov 2025~~ | ~~1M token context~~ | ~~Acquired by Cursor~~ |

### CLI Tools - Paid Plans

| Tool | Entry Tier | Credits/Requests | Key Features |
|------|------------|------------------|--------------|
| [Claude Code](https://www.anthropic.com/claude-code) | Pro ($20/mo) | ~225 messages/5h | Sonnet access [verify] |
| [Warp](https://warp.dev/) | Build ($20/mo) | 1,500 credits/month | BYOK available |
| [GitHub Copilot](https://github.com/features/copilot) | Pro ($10/mo) | 300 premium req/month | Unlimited completions |
| [Rovo Dev CLI](https://www.atlassian.com/rovo) | Jira Standard ($7.53/mo) | 20M tokens/day | 4x free tier |
| [Jules](https://jules.google/) | Pro ($19.99/mo) | 100 tasks/day | 5x free limits |
| [OpenAI Codex CLI](https://github.com/openai/codex) | ChatGPT Plus ($20/mo) | 30-150 msg/5h | GPT-5.1-Codex-Max |
| [Amazon Q Developer](https://aws.amazon.com/q/developer/) | Pro ($19/mo) | Increased agentic limits | AWS-hosted Claude |
| [Kilo Code](https://kilocode.ai/) | Pay-as-you-go | Up to $25 signup credits | No markup on models |

---

## Local Models

Running open-weight frontier models locally provides unlimited coding assistance without API costs.

**Popular Tools:**
- **[Cline](https://cline.bot/)** - VS Code extension with Plan/Act modes and MCP support
- **[Aider](https://aider.chat/)** - Command-line assistant with Git integration
- **[Continue.dev](https://www.continue.dev/)** - Open-source VS Code extension (200+ models)

**Local Model Tools:**
- **[Ollama](https://ollama.com/)** - Run frontier models locally
- **[LM Studio](https://lmstudio.ai/)** - Easy desktop app for local LLMs (no terminal required)

**Notable Local Models (2026):**

- Qwen3.6-Plus-480B (71.2% SWE, ~150GB VRAM)
- **Gemma 4** [verify] (Google, Apache 2.0, fully open-source)
- **GLM-5.1 / GLM-5V-Turbo** [verify] (Zhipu MoE-based SOTA coders)
- Devstral 2 (24B, Apache 2.0, agent-optimized)
- DeepSeek Coder V4 (lite version ~18GB)
- Codestral 2 (Mistral, 22B)
- GLM-4.9-Air (Chinese/English coding)

> **Note:** Frontier models require substantial RAM/VRAM. See [Unsloth Qwen3-Coder guide](https://docs.unsloth.ai/basics/qwen3-coder-how-to-run-locally) for details.

> **Update April 2026:** Gemma 4 and GLM-5.1 families are new flagship open-source releases. Verify availability in Ollama/LM Studio before downloading.

---

## free-coding-models CLI

Find the fastest free coding model in seconds. Ping 238 models across 25 providers in real-time.

```bash
npm install -g free-coding-models
free-coding-models
```

### Features

- **Parallel pings** — all 238 models tested simultaneously
- **Stability Score (0-100)** — composite score from p95 latency, jitter, spike rate, uptime
- **Smart ranking** — top 3 highlighted 🥇🥈🥉
- **Favorites** — star models with `F`, persisted across sessions
- **Tool Integration** — auto-configure OpenCode, Goose, Aider, Continue, Cline, etc.
- **OpenCode Zen Models** — 8 exclusive free models (Big Pickle, MiniMax M2.5 Free, MiMo V2, etc.)

### Quick Usage

```bash
# Most reliable model right now
free-coding-models --fiable

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
| **S+** | ≥75% | **Claude Opus 4.6 [verify], GPT-5.4 [verify]** |
| **S** | 65-75% | **Qwen3.6-Plus (71.2%), Claude Sonnet 4.6 [verify]** |
| **A+/A** | 40–60% | Solid alternatives |
| **A-/B+** | 30–40% | Smaller tasks |
| **B/C** | < 30% | Code completion |

### License Summary

All 238 models allow **commercial use of generated output**. You own what the models generate.

| License | Models | Commercial |
|---------|--------|:----------:|
| Apache 2.0 | Qwen3/Qwen2.5 Coder, GPT-OSS 120B/20B, Devstral Small 2, Gemma 4, MiMo V2 Flash | ✅ Unrestricted |
| MIT | GLM 4.5/4.6/4.7/5, MiniMax M2.1, Devstral 2 | ✅ Unrestricted |
| Llama Community License | Llama 3.3 70B, Llama 4 Scout/Maverick | ✅ Attribution required. >700M MAU → separate Meta license |
| DeepSeek License | DeepSeek V3/V3.1/V3.2, R1 | ✅ Use restrictions on model (no military, no harm) — output is yours |
| NVIDIA Nemotron License | Nemotron Super/Ultra/Nano | ✅ Updated Mar 2026, now near-Apache 2.0 permissive |
| MiniMax Model License | MiniMax M2, M2.5 | ✅ Royalty-free, non-exclusive. Prohibited uses policy applies to model |
| Proprietary (API) | Claude (Rovo), Gemini (CLI), Perplexity Sonar, Mistral Large, Codestral | ✅ You own outputs per provider ToS |
| OpenCode Zen | Big Pickle, MiMo V2 Pro/Flash/Omni Free, GPT 5 Nano, MiniMax M2.5 Free, Nemotron 3 Super Free | ✅ Per OpenCode Zen ToS |

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
- **What qualifies a model as "pro-grade"?** Models must achieve ≥60% on SWE-bench Verified, demonstrating real-world software engineering capability. Current qualifying models: Claude Opus 4.5 (80.9% [verify]), GPT-5.1-Codex-Max (77.9% [verify]), Claude Sonnet 4.5 (77.2% [verify]), Gemini 3 Pro (76.2% [verify]), GPT-5 (74.9% [verify]), Claude Opus 4.1 (74.5% [verify]), Claude Sonnet 4 (72.7% [verify]), GPT-5 mini (71.0% [verify]), Qwen3-Coder-480B (69.6% [verify]), and Gemini 2.5 Pro (63.2% [verify]).
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
| [QuantFlow Pilot](https://github.com/qf-studio/pilot) | Free | Autonomous development | #1 Terminal Benchmark 2.0 — AI that ships your tickets |

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
| [Sora 2](https://openai.com/sora) (via ChatGPT) | Video | Limited free tier | Deep ChatGPT integration, high-quality video |
| [DALL-E 4](https://openai.com/dall-e-4) (via ChatGPT) | Image | Limited free tier | Latest OpenAI image model |
| [Synthesia](https://synthesia.io) | Video Avatars | Free individual plan | "Video Agents" in 120+ languages |
| [1 More Shot](https://onemoreshot.ai) | Music Videos | Free plan | Advanced lip-sync, frame-by-frame control |
| [Leonardo.Ai](https://leonardo.ai) | Images | 150 tokens/day (~70 images) | Commercial use allowed |
| [Recraft AI](https://recraft.ai) | Vector/SVG | 30 credits/day | Infinitely scalable icons and logos |
| [Ideogram](https://ideogram.ai) | Images | 10-20 prompts/day | Perfect text rendering, "Magic Prompt" |
| [Suno AI](https://suno.ai) | Music | 50 credits/day (~10 tracks) | Complete songs with vocals and instruments |
| [ElevenLabs](https://elevenlabs.io) | Voice | Basic Free | Realistic voice cloning |
| [Canva AI](https://canva.com) | Design | Robust free tier | AI design assets, brochures, short videos |

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
| [MemoryPalace](https://github.com/milla-jovovich/mempalace) | AI Memory | Free, open source | 96.6% LongMemEval — memory palace technique for AI |

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
| [MemoryPalace](https://github.com/milla-jovovich/mempalace) | AI Memory System | 96.6% LongMemEval — memory palace technique for AI conversations | Free, open source |

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

---

## 🎨 Image Generation Models

Comparison of image generation models and APIs.

| Model | Provider | Quality | Speed | Free Tier | Best For |
|-------|----------|---------|-------|-----------|----------|
| **FLUX.2** | Black Forest Labs | 🏆 Excellent | Fast | Local/Replicate | High quality, open |
| **DALL-E 4** | OpenAI | 🏆 Best | Medium | ChatGPT Plus | Latest OpenAI |
| **Ideogram 2.0** | Ideogram | Excellent | Fast | **20 prompts/day** | Text in images |
| **Recraft V4** | Recraft | Excellent | Fast | **50 credits/day** | Vector/SVG output |
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

### 2. 📚 RAG Architecture (Like ExamAi)

```
Documents → Chunking → Embeddings → Vector DB
                                    ↓
User Query → Embedding → Similarity Search → LLM → Response
```

**Stack:**
- Framework: LlamaIndex or LangChain
- Embeddings: BGE-Large or Jina v3
- Vector DB: ChromaDB (dev) → Pinecone (prod)
- LLM: Claude Sonnet [verify] or GPT-4o

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
- Tools: Function calling with Claude/GPT-4
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
(GPT-5 Nano)      (Claude Sonnet [verify]) (Claude Opus [verify])
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
- Vision: GPT-4o Vision or Gemini 2.5 Pro
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
| **MiniMax M2.6** | MiniMax | $0.08 | $0.12 | - | Bulk generation |
| **DeepSeek V4** | DeepSeek | $0.28 | $0.55 | $0.03 🎯 | Coding, cached |
| **GLM 4.9 Air** | ZAI | $0.35 | $0.75 | - | Chinese/English |
| **Gemini 3.1 Flash** | Google | $0.30 | $0.90 | - | 2M context |
| **GPT-5 Nano** | OpenAI | $0.45 | $1.80 | - | Cheap reasoning |
| **Qwen3-Coder** | Alibaba | ~$0.60 | ~$1.20 | - | Strong agent tasks |
| **Gemini 2.5 Pro** | Google | $1.25 | $10.00 | $0.625 | High quality, 1M context |
| **GPT-4.1** | OpenAI | $2.00 | $8.00 | - | General purpose |
| **GPT-5.4** | OpenAI | $2.50 | $10.00 | $1.25 | Latest OpenAI model |
| **Claude Sonnet 4** | Anthropic | $3.00 | $15.00 | $0.60 | Best coding, reasoning |
| **Claude Opus 4.6** | Anthropic | $5.00 | $25.00 | $2.50 | Complex reasoning |

> 💡 **Pro tip:** DeepSeek's 90% cache discount makes it cheapest for repetitive tasks with long prompts.

---

## 🎯 Best Models by Use Case

Don't just use SWE-bench - match models to your specific task.

### 💻 Coding & Software Engineering

| Model | Why | Free Tier |
|-------|-----|-----------|
| **Claude Sonnet 4.6** | **79.3%** SWE-bench, excellent at following instructions | 25 msgs/5h (Claude Code) |
| **Qwen3.6-Plus** | **71.2%** SWE-bench, Chinese + English, agent-optimized | 2,000 req/day |
| **GPT-5.4** [verify: paid-only] | **80.1%** SWE-bench, long context compaction | ChatGPT Plus/Pro |
| **DeepSeek V4** | Near-Sonnet performance at 1/10th cost | DeepSeek API |

### 🧠 Complex Reasoning & Analysis

| Model | Why | Free Tier |
|-------|-----|-----------|
| **DeepSeek R1** | Specialized reasoning model, math/logic | DeepSeek API |
| **Claude Opus 4.6** | **84.2%** SWE-bench, best for complex architecture | Claude Code Pro |
| **Gemini 3.1 Pro** | **77.4%** SWE-bench, 2M context for deep analysis | 100 req/day |
| **o3-mini / o1** | OpenAI reasoning models, step-by-step | ChatGPT Plus |

### 💰 Cheap Bulk Generation

| Model | Why | Cost per 1M |
|-------|-----|---------------|
| **Gemini 2.5 Flash** | 1M context, high throughput | ~$0.35/$1.00 |
| **GPT-5 Nano** | Newest cheap model from OpenAI | $0.50/$2.00 |
| **GPT-4o** | ChatGPT free tier model, fast | Variable (free tier) |
| **GLM 4.5 Air** | Good quality, extremely cheap | ~$0.40/$0.80 |
| **MiniMax M2.7** | **80.2%** SWE-bench, dirt cheap | $0.08/$0.12 |

### 🤖 Agents & Autonomous Tasks

| Model | Why | Free Tier |
|-------|-----|-----------|
| **Claude Sonnet 4.6** | Best tool use, reliable agent behavior | Various |
| **GPT-5.4** [verify: paid-only] | Compaction for 24+ hour sessions | ChatGPT Plus/Pro |
| **Qwen3.6-Plus** | Built for agentic workflows | 2,000 req/day |
| **Big Pickle (OpenCode)** | 72% SWE-bench [verify], agent-optimized | Zen Free tier |

### 👁️ Vision & Multimodal

| Model | Why | Free Tier |
|-------|-----|-----------|
| **Gemini 2.5 Pro Vision** | 1M token context for images/video | 20-100 req/day |
| **GPT-4o** | Best overall vision capabilities | ChatGPT Free |
| **Claude 4 Vision** | Detailed image analysis | Claude Free tier |
| **Qwen2.5 VL** | Strong open vision model | Hyperbolic |

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
| **Cerebras** | 30 | 1,000,000 | 14,400 | Batch processing |
| **Gemini Studio** | 15 | High | 1,500 | Prototyping |
| **OpenRouter** | 20 | Medium | 50-1,000 | Flexible routing |
| **Cloudflare** | 300 | 10K neurons | 10K neurons | Edge deployment |
| **Groq (varies)** | 30-50 | 6K-30K | 1K-14.4K | Model-dependent |

### Scaling Strategy by Use Case

| App Type | Recommended Stack |
|----------|-------------------|
| **ExamAi (your app)** | Cerebras (Qwen3.6-Plus) + Groq |
| **AI Reel Generator** | Gemini 3.1 Flash (video) + Groq (audio) |
| **Trading AI** | Groq + local Qwen3.6-Plus |
| **Chatbot** | OpenRouter + Gemini 3.1 Flash (cheap) |
| **Code Review Bot** | DeepSeek V4 (cheap) + Claude Sonnet [verify] (quality) |

---

## ✅ Commercial Use Summary

Quick reference for legal safety.

| Provider | Commercial Use | Notes |
|----------|----------------|-------|
| **OpenRouter** | ✅ Yes | All models |
| **Groq** | ✅ Yes | All models |
| **Gemini API** | ✅ Yes | Per Google ToS |
| **Cohere** | ✅ Yes | 1K req/month free |
| **Claude (API)** | ✅ Yes | Per Anthropic ToS |
| **OpenCode Zen** | ✅ Yes | Per Zen ToS |
| **DeepSeek** | ✅ Yes | No military use restriction |
| **Qwen/Alibaba** | ✅ Yes | Apache 2.0 models |
| **Ollama Local** | ✅ Yes | Fully offline |

> ⚠️ **Always verify current ToS** - licenses can change.

---

## 🧩 RAG Stack Tools

Build document Q&A systems like ExamAi.

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

### Research Methodology

This list was compiled and verified using:
- **Gemini** - For research and discovering new/additional AI tools
- **Perplexity** - For verifying information accuracy and checking if data is current
- **Community repos** - All referenced repositories above were used as reference sources

---

## License

MIT © [ShaikhWarsi](https://github.com/ShaikhWarsi)

---

*Last updated: April 11, 2026 • PRs/issues welcome*
