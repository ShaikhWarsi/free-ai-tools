"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Zap, Terminal, Cpu, Search, Bot, ArrowRight } from "lucide-react";
import { getCategoryUrl } from "@/data/categories";

const popularCategories = [
  {
    id: "ide",
    name: "AI IDEs",
    slug: "ai-ides",
    description: "Coding assistants and editor integrations for AI development",
    toolCount: 12,
    icon: Code2,
    color: "#8B5CF6",
  },
  {
    id: "llm-api",
    name: "LLM APIs",
    slug: "llm-api-providers",
    description: "Free and low-cost API providers for GPT, Claude, and open-source models",
    toolCount: 20,
    icon: Zap,
    color: "#3B82F6",
  },
  {
    id: "cli",
    name: "CLI Tools",
    slug: "cli-tools",
    description: "Command-line tools for AI-assisted coding in your terminal",
    toolCount: 15,
    icon: Terminal,
    color: "#10B981",
  },
  {
    id: "local-model",
    name: "Local Models",
    slug: "local-models",
    description: "Run open-weight frontier models locally for unlimited offline coding",
    toolCount: 8,
    icon: Cpu,
    color: "#F59E0B",
  },
  {
    id: "rag",
    name: "RAG Stack",
    slug: "rag-tools",
    description: "Retrieval-Augmented Generation tools for document Q&A systems",
    toolCount: 12,
    icon: Search,
    color: "#F43F5E",
  },
  {
    id: "agent",
    name: "Agent Frameworks",
    slug: "agent-frameworks",
    description: "Frameworks for building autonomous AI agents and workflows",
    toolCount: 10,
    icon: Bot,
    color: "#6366F1",
  },
];

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

export function PopularCategories() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
              Popular Categories
            </h2>
            <p className="mt-2 text-[#737373]">
              Browse the most-used categories for AI development
            </p>
          </div>
          <Link
            href="/categories"
            className="hidden items-center gap-1 text-sm font-medium text-[#3b82f6] transition-colors hover:text-[#2563eb] sm:inline-flex"
          >
            View all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Category Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {popularCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.id} variants={item}>
                <Link
                  href={getCategoryUrl(category.slug)}
                  className="group flex h-full flex-col rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-5 transition-all duration-200 hover:border-[#d4d4d4] hover:bg-white hover:shadow-sm"
                >
                  {/* Icon and Count */}
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105"
                      style={{ backgroundColor: `${category.color}15`, color: category.color }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-[#737373]">
                      {category.toolCount} tools
                    </span>
                  </div>

                  {/* Name and Description */}
                  <h3 className="font-semibold text-[#0a0a0a] transition-colors group-hover:text-[#3b82f6]">
                    {category.name}
                  </h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-[#737373]">
                    {category.description}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile Link */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/categories"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#3b82f6] transition-colors hover:text-[#2563eb]"
          >
            View all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
