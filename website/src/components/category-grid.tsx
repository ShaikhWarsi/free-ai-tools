"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Zap, Code2, Terminal, Cpu, Search, Bot, 
  Mic, Image, Video, Database, Server, BarChart3, 
  Layers, Workflow, Globe, MessageSquare
} from "lucide-react";
import { categories, getCategoryUrl } from "@/data/categories";
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

export function CategoryGrid() {
  const featuredCategories = categories.filter((c) => c.featured);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
              Browse by Category
            </h2>
            <p className="mt-1 text-[#737373]">
              Find tools for every stage of your AI development workflow
            </p>
          </div>
          <Link
            href="/categories"
            className="hidden text-sm font-medium text-[#3b82f6] hover:underline sm:inline"
          >
            View all categories →
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredCategories.map((category) => {
            const Icon = iconMap[category.icon] || Zap;
            return (
              <motion.div key={category.id} variants={item}>
                <Link
                  href={getCategoryUrl(category.slug)}
                  className="group flex items-start gap-4 rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-5 transition-all hover:border-[#d4d4d4] hover:bg-white hover:shadow-sm"
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                      "bg-opacity-10 transition-transform group-hover:scale-105"
                    )}
                    style={{ backgroundColor: `${category.color}20`, color: category.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-[#0a0a0a]">
                        {category.name}
                      </h3>
                      <span className="text-xs text-[#a3a3a3]">
                        {category.toolCount} tools
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-[#737373] line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/categories"
            className="text-sm font-medium text-[#3b82f6] hover:underline"
          >
            View all categories →
          </Link>
        </div>
      </div>
    </section>
  );
}
