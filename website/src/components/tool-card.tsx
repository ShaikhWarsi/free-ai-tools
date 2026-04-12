"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Code2, 
  CreditCard, 
  Zap,
  Check,
  Server,
  Cpu,
  Star,
  ArrowUpRight
} from "lucide-react";
import { Tool } from "@/types";
import { cn, getCategoryColor } from "@/lib/utils";
import { categories } from "@/data/categories";

interface ToolCardProps {
  tool: Tool;
  showCategory?: boolean;
  featured?: boolean;
  compact?: boolean;
}

export function ToolCard({ tool, showCategory = true, featured = false, compact = false }: ToolCardProps) {
  const category = categories.find((c) => c.id === tool.category);
  
  // Determine badges
  const badges = [];
  if (tool.pricing.type === "free" || tool.pricing.type === "freemium") {
    badges.push({ label: "Free tier", color: "bg-[#10b981]/10 text-[#10b981]" });
  }
  if (tool.openSource) {
    badges.push({ label: "Open source", color: "bg-[#0a0a0a]/5 text-[#525252]" });
  }
  if (tool.deployment === "local") {
    badges.push({ label: "Local", color: "bg-[#f59e0b]/10 text-[#d97706]" });
  }
  if (tool.deployment === "api") {
    badges.push({ label: "API", color: "bg-[#3b82f6]/10 text-[#3b82f6]" });
  }
  if (tool.featured) {
    badges.push({ label: "Popular", color: "bg-[#8b5cf6]/10 text-[#8b5cf6]" });
  }

  if (compact) {
    return (
      <motion.div
        whileHover={{ y: -1 }}
        transition={{ duration: 0.15 }}
        className="group relative flex flex-col rounded-lg border border-[#e5e5e5] bg-white p-4 transition-all hover:border-[#d4d4d4] hover:shadow-sm"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <Link href={`/tools/${tool.id}`}>
              <h3 className="font-medium text-[#0a0a0a] group-hover:text-[#3b82f6] transition-colors truncate">
                {tool.name}
              </h3>
            </Link>
            {showCategory && category && (
              <span className={cn("mt-1 inline-block rounded px-1.5 py-0.5 text-[10px] font-medium", getCategoryColor(tool.category))}>
                {category.name}
              </span>
            )}
          </div>
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 rounded p-1 text-[#a3a3a3] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
            aria-label="Visit website"
            onClick={(e) => e.stopPropagation()}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Description */}
        <p className="mt-2 text-sm text-[#737373] line-clamp-2">
          {tool.shortDescription}
        </p>

        {/* Clickable Area */}
        <Link
          href={`/tools/${tool.id}`}
          className="absolute inset-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2"
        >
          <span className="sr-only">View {tool.name} details</span>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative flex flex-col rounded-xl border bg-white p-5 transition-all",
        "hover:shadow-md hover:border-[#d4d4d4]",
        featured && "border-[#3b82f6]/30 bg-gradient-to-br from-white to-[#3b82f6]/[0.02]"
      )}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-2 right-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#3b82f6] px-2 py-0.5 text-xs font-medium text-white">
            <Star className="h-3 w-3" />
            Featured
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href={`/tools/${tool.id}`}>
              <h3 className="font-semibold text-[#0a0a0a] group-hover:text-[#3b82f6] transition-colors">
                {tool.name}
              </h3>
            </Link>
          </div>
          {showCategory && category && (
            <span className={cn("mt-1.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium", getCategoryColor(tool.category))}>
              {category.name}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          {tool.github && (
            <a
              href={tool.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1.5 text-[#a3a3a3] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
              aria-label="GitHub repository"
              onClick={(e) => e.stopPropagation()}
            >
              <Code2 className="h-4 w-4" />
            </a>
          )}
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-1.5 text-[#a3a3a3] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
            aria-label="Visit website"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-[#737373] leading-relaxed line-clamp-2">
        {tool.shortDescription}
      </p>

      {/* Badges */}
      {badges.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {badges.slice(0, 3).map((badge, i) => (
            <span
              key={i}
              className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium", badge.color)}
            >
              {badge.label}
            </span>
          ))}
        </div>
      )}

      {/* Pricing Info */}
      <div className="mt-4 flex items-center gap-2 text-xs">
        {!tool.pricing.creditCardRequired ? (
          <span className="flex items-center gap-1 text-[#10b981]">
            <Check className="h-3 w-3" />
            No credit card required
          </span>
        ) : (
          <span className="flex items-center gap-1 text-[#a3a3a3]">
            <CreditCard className="h-3 w-3" />
            Credit card required
          </span>
        )}
      </div>

      {/* Free Tier Info */}
      {tool.pricing.freeTier && (
        <div className="mt-2 flex items-start gap-1.5 text-xs text-[#737373]">
          <Zap className="mt-0.5 h-3 w-3 shrink-0 text-[#f59e0b]" />
          <span className="line-clamp-2">{tool.pricing.freeTier}</span>
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto pt-4 flex items-center gap-3 border-t border-[#f0f0f0] text-xs text-[#a3a3a3]">
        <span className="flex items-center gap-1">
          {tool.deployment === "api" ? (
            <><Server className="h-3 w-3" /> API</>
          ) : tool.deployment === "local" ? (
            <><Cpu className="h-3 w-3" /> Local</>
          ) : (
            <><Server className="h-3 w-3" /> Hybrid</>
          )}
        </span>
        {tool.models && tool.models.length > 0 && (
          <span className="text-[#737373]">
            {tool.models.length} model{tool.models.length > 1 ? "s" : ""}
          </span>
        )}
      </div>

      {/* Clickable Area */}
      <Link
        href={`/tools/${tool.id}`}
        className="absolute inset-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2"
      >
        <span className="sr-only">View {tool.name} details</span>
      </Link>
    </motion.div>
  );
}
