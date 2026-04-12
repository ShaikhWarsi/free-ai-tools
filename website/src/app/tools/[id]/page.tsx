"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  CreditCard,
  Check,
  X,
  Server,
  Cpu,
  ArrowLeft,
  Zap,
  DollarSign,
  ChevronRight,
} from "lucide-react";
import { tools } from "@/data/tools";
import { categories } from "@/data/categories";
import { getToolById } from "@/data/tools";
import { cn, getCategoryColor } from "@/lib/utils";

export default function ToolPage() {
  const params = useParams();
  const tool = getToolById(params.id as string);

  if (!tool) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fafafa]">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#0a0a0a]">Tool not found</h1>
          <Link
            href="/search"
            className="mt-4 inline-flex items-center gap-2 text-[#3b82f6] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to search
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find((c) => c.id === tool.category);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Back Navigation */}
      <div className="border-b border-[#e5e5e5] bg-white px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-[#0a0a0a]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all tools
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-[#e5e5e5] bg-white p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-semibold text-[#0a0a0a]">
                      {tool.name}
                    </h1>
                    {tool.openSource && (
                      <span className="rounded-full bg-[#10b981]/10 px-3 py-1 text-xs font-medium text-[#10b981]">
                        Open Source
                      </span>
                    )}
                  </div>
                  {category && (
                    <Link
                      href={`/categories/${category.slug}`}
                      className={cn(
                        "mt-2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium",
                        getCategoryColor(tool.category)
                      )}
                    >
                      {category.name}
                    </Link>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {tool.github && (
                    <a
                      href={tool.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white px-4 py-2 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#f5f5f5]"
                    >
                      <Code2 className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-[#0a0a0a] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#262626]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit Website
                  </a>
                </div>
              </div>

              <p className="mt-4 text-[#737373]">{tool.description}</p>

              {/* Models */}
              {tool.models && tool.models.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-[#0a0a0a]">
                    Supported Models
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tool.models.map((model) => (
                      <span
                        key={model}
                        className="rounded-md bg-[#f5f5f5] px-2 py-1 text-sm text-[#737373]"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {tool.features && tool.features.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-[#0a0a0a]">
                    Key Features
                  </h3>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {tool.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-[#737373]"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#10b981]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            {/* Pros & Cons */}
            <div className="grid gap-4 sm:grid-cols-2">
              {tool.pros && tool.pros.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="rounded-xl border border-[#10b981]/20 bg-[#10b981]/5 p-5"
                >
                  <h3 className="flex items-center gap-2 font-medium text-[#10b981]">
                    <Check className="h-5 w-5" />
                    Pros
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {tool.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-[#0a0a0a]">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#10b981]" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {tool.cons && tool.cons.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-xl border border-[#ef4444]/20 bg-[#ef4444]/5 p-5"
                >
                  <h3 className="flex items-center gap-2 font-medium text-[#ef4444]">
                    <X className="h-5 w-5" />
                    Cons
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {tool.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-[#0a0a0a]">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#ef4444]" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Use Cases */}
            {tool.useCases && tool.useCases.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-xl border border-[#e5e5e5] bg-white p-6"
              >
                <h3 className="font-medium text-[#0a0a0a]">Best Use Cases</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tool.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 px-3 py-1 text-sm font-medium text-[#3b82f6]"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            {/* Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-xl border border-[#e5e5e5] bg-white p-5"
            >
              <h3 className="font-medium text-[#0a0a0a]">Pricing</h3>
              
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#737373]">Free Tier</span>
                  <span className="text-sm font-medium text-[#10b981]">
                    {tool.pricing.type === "free" || tool.pricing.type === "freemium"
                      ? "Available"
                      : "None"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#737373]">Credit Card</span>
                  <span className="flex items-center gap-1 text-sm font-medium">
                    {tool.pricing.creditCardRequired ? (
                      <>
                        <X className="h-3 w-3 text-[#ef4444]" />
                        <span className="text-[#ef4444]">Required</span>
                      </>
                    ) : (
                      <>
                        <Check className="h-3 w-3 text-[#10b981]" />
                        <span className="text-[#10b981]">Not Required</span>
                      </>
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#737373]">Open Source</span>
                  <span className="text-sm font-medium">
                    {tool.openSource ? (
                      <span className="text-[#10b981]">Yes</span>
                    ) : (
                      <span className="text-[#737373]">No</span>
                    )}
                  </span>
                </div>
              </div>

              {tool.pricing.freeTier && (
                <div className="mt-4 rounded-lg bg-[#f5f5f5] p-3">
                  <p className="text-xs font-medium text-[#a3a3a3]">Free Tier Limits</p>
                  <p className="mt-1 text-sm text-[#0a0a0a]">{tool.pricing.freeTier}</p>
                </div>
              )}

              {tool.pricing.paidTier && (
                <div className="mt-3">
                  <p className="text-xs font-medium text-[#a3a3a3]">Paid Tier</p>
                  <p className="mt-1 text-sm text-[#0a0a0a]">{tool.pricing.paidTier}</p>
                </div>
              )}
            </motion.div>

            {/* Limits Card */}
            {tool.limits && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-xl border border-[#e5e5e5] bg-white p-5"
              >
                <h3 className="font-medium text-[#0a0a0a]">Usage Limits</h3>
                <div className="mt-4 space-y-2 text-sm">
                  {tool.limits.requestsPerDay && (
                    <div className="flex justify-between">
                      <span className="text-[#737373]">Requests/day</span>
                      <span className="font-medium">{tool.limits.requestsPerDay.toLocaleString()}</span>
                    </div>
                  )}
                  {tool.limits.requestsPerMonth && (
                    <div className="flex justify-between">
                      <span className="text-[#737373]">Requests/month</span>
                      <span className="font-medium">{tool.limits.requestsPerMonth.toLocaleString()}</span>
                    </div>
                  )}
                  {tool.limits.tokensPerDay && (
                    <div className="flex justify-between">
                      <span className="text-[#737373]">Tokens/day</span>
                      <span className="font-medium">{tool.limits.tokensPerDay.toLocaleString()}</span>
                    </div>
                  )}
                  {tool.limits.rateLimitPerMinute && (
                    <div className="flex justify-between">
                      <span className="text-[#737373]">Rate limit</span>
                      <span className="font-medium">{tool.limits.rateLimitPerMinute}/min</span>
                    </div>
                  )}
                  {tool.limits.credits && (
                    <div className="flex justify-between">
                      <span className="text-[#737373]">Credits</span>
                      <span className="font-medium">{tool.limits.credits}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Deployment Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl border border-[#e5e5e5] bg-white p-5"
            >
              <h3 className="font-medium text-[#0a0a0a]">Deployment</h3>
              <div className="mt-3 flex items-center gap-2">
                {tool.deployment === "api" ? (
                  <Server className="h-4 w-4 text-[#737373]" />
                ) : tool.deployment === "local" ? (
                  <Cpu className="h-4 w-4 text-[#737373]" />
                ) : (
                  <Zap className="h-4 w-4 text-[#737373]" />
                )}
                <span className="text-sm capitalize">{tool.deployment}</span>
              </div>
            </motion.div>

            {/* SWE-bench Score */}
            {tool.swrBenchScore && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="rounded-xl border border-[#3b82f6]/20 bg-[#3b82f6]/5 p-5"
              >
                <h3 className="font-medium text-[#3b82f6]">SWE-bench Score</h3>
                <p className="mt-2 text-3xl font-bold text-[#3b82f6]">
                  {tool.swrBenchScore}%
                </p>
                <p className="mt-1 text-xs text-[#737373]">
                  Verified software engineering capability
                </p>
              </motion.div>
            )}

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-xl border border-[#e5e5e5] bg-white p-5"
            >
              <h3 className="font-medium text-[#0a0a0a]">Tags</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f5f5f5] px-2 py-1 text-xs text-[#737373]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}
