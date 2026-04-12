"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Zap, Code2, Terminal, Cpu, Search, Bot, 
  Mic, Image, Video, Database, Server, BarChart3, 
  Layers, Workflow, Globe, MessageSquare, ArrowRight
} from "lucide-react";
import { categories, getCategoryUrl } from "@/data/categories";
import { tools } from "@/data/tools";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Code2,
  Terminal,
  Cpu,
  Search,
  Bot,
  Mic,
  Image,
  Video,
  Database,
  Server,
  BarChart3,
  Layers,
  Workflow,
  Globe,
  MessageSquare,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="border-b border-[#e5e5e5] bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
            All Categories
          </h1>
          <p className="mt-2 text-[#737373]">
            Browse AI tools by category
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Zap;
            const categoryTools = tools.filter((t) => t.category === category.id);
            const actualCount = categoryTools.length;
            const freeCount = categoryTools.filter((t) => t.pricing.type === "free" || !t.pricing.creditCardRequired).length;

            return (
              <motion.div key={category.id} variants={item}>
                <Link
                  href={getCategoryUrl(category.slug)}
                  className="group flex h-full flex-col rounded-xl border border-[#e5e5e5] bg-white p-6 transition-all hover:border-[#d4d4d4] hover:shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${category.color}15`,
                        color: category.color,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <span className="block text-lg font-semibold text-[#0a0a0a]">
                        {actualCount}
                      </span>
                      <span className="text-xs text-[#737373]">tools</span>
                    </div>
                  </div>

                  <h2 className="mt-4 text-lg font-semibold text-[#0a0a0a] group-hover:text-[#3b82f6] transition-colors">
                    {category.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-[#737373]">
                    {category.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-[#f0f0f0] pt-4">
                    <div className="flex items-center gap-3">
                      {freeCount > 0 && (
                        <span className="text-xs text-[#10b981] font-medium">
                          {freeCount} free option{freeCount !== 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-[#3b82f6]">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
