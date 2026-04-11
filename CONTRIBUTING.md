# Contributing to Free AI Tools

Thank you for helping maintain this list! This guide explains how to add new tools and ensure your contribution gets merged quickly.

---

## How to Add a Tool

1. **Fork the repository**
2. **Create a new branch**: `git checkout -b add-tool-name`
3. **Edit README.md** following the format below
4. **Submit a Pull Request** with a clear description

---

## Required Information

Every tool submission MUST include:

| Field | Required | Description |
|-------|----------|-------------|
| **Tool Name** | ✅ Yes | Official name with link to website |
| **Category** | ✅ Yes | API Provider / IDE / CLI Tool / etc. |
| **Free Tier Details** | ✅ Yes | Specific limits (requests/day, tokens, credits) |
| **Models Available** | ✅ Yes | Which AI models are accessible |
| **Credit Card Required?** | ✅ Yes | Yes / No |
| **Pricing Page** | ✅ Yes | Link to official pricing docs |
| **SWE-bench Score** | ⚠️ If applicable | For coding models (mark with `[verify]` if unsure) |
| **Last Verified** | ✅ Yes | Date you checked the information |

---

## Format Example

### For API Providers

```markdown
#### [ToolName](https://example.com)

**Limits:** 50 requests/day, 1,000 requests/month

- GPT-4, Claude 3.5 Sonnet, Llama 3
- No credit card required
- 10 requests/minute rate limit

**[Pricing](https://example.com/pricing)**
```

### For IDEs

```markdown
#### [ToolName](https://example.com)

**Models:** GPT-4, Claude 3.5 Sonnet
- 100 free requests/month
- Credit card required
- VS Code extension available
- **Pro ($10/mo):** Unlimited requests

**[Pricing](https://example.com/pricing)**
```

### For CLI Tools

```markdown
#### [ToolName](https://example.com)

**Models:** Claude Sonnet 4 (72.7% SWE-bench [verify])
- 5M tokens/day free tier
- No credit card required during beta
- **Install:** `npm install -g tool-name`

**[Documentation](https://example.com/docs)**
```

---

## Quality Guidelines

**DO:**
- ✅ Verify information from official sources (pricing pages, API docs)
- ✅ Use specific numbers ("50 req/day" not "generous limits")
- ✅ Mark uncertain info with `[verify]`
- ✅ Include links to official pricing/documentation
- ✅ Mention credit card requirements clearly
- ✅ Check if the tool is still active (not discontinued)

**DON'T:**
- ❌ Add affiliate links or sponsored placements
- ❌ Copy information from other lists without verifying
- ❌ Use vague language ("some requests", "various models")
- ❌ Remove existing tools unless confirmed discontinued
- ❌ Hallucinate pricing or rate limits

---

## Quick Checklist Before Submitting

- [ ] I verified the free tier still exists
- [ ] I checked the official pricing page
- [ ] I included specific rate limits
- [ ] I noted if a credit card is required
- [ ] I added `[verify]` to any uncertain claims
- [ ] I followed the existing markdown format
- [ ] I didn't remove any existing tools

---

## Questions?

Open an issue if you're unsure about:
- Which category a tool belongs in
- Whether a tool qualifies as "pro-grade"
- How to format a specific entry

**Response time:** Usually within 48 hours.

---

Thank you for contributing! 🚀
