"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Zap, Shield, DollarSign, Bot, Search } from "lucide-react";
import { stacks } from "@/data/stacks";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function StacksPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="border-b border-[#e5e5e5] bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
            Recommended Stacks
          </h1>
          <p className="mt-2 text-[#737373]">
            Pre-configured combinations of tools for different use cases
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/stacks/${stack.id}`}
                className="group block h-full rounded-xl border border-[#e5e5e5] bg-white p-6 transition-all hover:border-[#d4d4d4] hover:shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3b82f6]/10 text-[#3b82f6]">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-[#0a0a0a] group-hover:text-[#3b82f6] transition-colors">
                        {stack.name}
                      </h2>
                      <p className="text-sm text-[#10b981] font-medium">
                        {stack.cost}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[#a3a3a3] transition-all group-hover:translate-x-1 group-hover:text-[#3b82f6]" />
                </div>

                <p className="mt-4 text-sm text-[#737373]">
                  {stack.description}
                </p>

                <div className="mt-4">
                  <p className="text-xs font-medium text-[#a3a3a3] uppercase tracking-wider mb-2">
                    Stack Components
                  </p>
                  <div className="space-y-2">
                    {stack.layers.slice(0, 4).map((layer, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm"
                      >
                        <span className="w-16 shrink-0 text-xs font-medium text-[#a3a3a3]">
                          {layer.name}
                        </span>
                        <div className="h-px flex-1 bg-[#f0f0f0]" />
                        <span className="font-medium text-[#0a0a0a]">
                          {layer.tool}
                        </span>
                      </div>
                    ))}
                    {stack.layers.length > 4 && (
                      <p className="text-xs text-[#a3a3a3] text-center mt-2">
                        +{stack.layers.length - 4} more layers
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {stack.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#f5f5f5] px-2 py-0.5 text-xs font-medium text-[#737373]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Why Stacks Section */}
        <div className="mt-16 rounded-2xl bg-[#0a0a0a] px-6 py-12 sm:px-12">
          <h2 className="text-center text-xl font-semibold text-white sm:text-2xl">
            Why use recommended stacks?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#3b82f6]/20">
                <Zap className="h-6 w-6 text-[#3b82f6]" />
              </div>
              <h3 className="mt-4 font-medium text-white">Save Time</h3>
              <p className="mt-2 text-sm text-[#a3a3a3]">
                Pre-vetted combinations that work well together
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#10b981]/20">
                <DollarSign className="h-6 w-6 text-[#10b981]" />
              </div>
              <h3 className="mt-4 font-medium text-white">Cost Optimized</h3>
              <p className="mt-2 text-sm text-[#a3a3a3]">
                Maximum value with free tier combinations
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#8b5cf6]/20">
                <Shield className="h-6 w-6 text-[#8b5cf6]" />
              </div>
              <h3 className="mt-4 font-medium text-white">Production Ready</h3>
              <p className="mt-2 text-sm text-[#a3a3a3]">
                Battle-tested configurations for real apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
