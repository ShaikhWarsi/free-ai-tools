"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Zap, Shield, Layers, Cpu, Search, Bot } from "lucide-react";
import { stacks } from "@/data/stacks";

const stackIcons: Record<string, React.ElementType> = {
  "fully-free": DollarSign,
  "fastest": Zap,
  "local-privacy": Shield,
  "cheapest-pro": DollarSign,
  "agentic": Bot,
  "rag": Search,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function FeaturedStacks() {
  // Show specific stacks in order
  const featuredStackIds = ["fully-free", "fastest", "local-privacy", "rag", "agentic"];
  const featuredStacks = featuredStackIds
    .map(id => stacks.find(s => s.id === id))
    .filter(Boolean)
    .slice(0, 5);

  return (
    <section className="bg-[#fafafa] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
              Recommended Stacks
            </h2>
            <p className="mt-2 text-[#737373]">
              Pre-configured tool combinations for common development scenarios
            </p>
          </div>
          <Link
            href="/stacks"
            className="hidden items-center gap-1 text-sm font-medium text-[#3b82f6] transition-colors hover:text-[#2563eb] sm:inline-flex"
          >
            View all stacks
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Stacks Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredStacks.map((stack) => {
            if (!stack) return null;
            const Icon = stackIcons[stack.id] || Layers;
            
            return (
              <motion.div key={stack.id} variants={item}>
                <Link
                  href={`/stacks/${stack.id}`}
                  className="group flex h-full flex-col rounded-xl border border-[#e5e5e5] bg-white p-5 transition-all duration-200 hover:border-[#d4d4d4] hover:shadow-sm"
                >
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f5f5] text-[#525252] transition-colors group-hover:bg-[#0a0a0a] group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0a0a0a] transition-colors group-hover:text-[#3b82f6]">
                          {stack.name}
                        </h3>
                        <p className="text-xs font-medium text-[#10b981]">
                          {stack.cost}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-[#737373]">
                    {stack.description}
                  </p>

                  {/* Stack Layers Preview */}
                  <div className="mt-auto space-y-2 border-t border-[#f0f0f0] pt-4">
                    <p className="text-xs font-medium text-[#a3a3a3] uppercase tracking-wider">
                      Stack layers
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {stack.layers.slice(0, 4).map((layer, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-md bg-[#f5f5f5] px-2 py-1 text-xs text-[#525252]"
                        >
                          {layer.tool}
                        </span>
                      ))}
                      {stack.layers.length > 4 && (
                        <span className="inline-flex items-center rounded-md bg-[#f5f5f5] px-2 py-1 text-xs text-[#a3a3a3]">
                          +{stack.layers.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Link */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/stacks"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#3b82f6] transition-colors hover:text-[#2563eb]"
          >
            View all stacks
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
