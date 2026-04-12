"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { ToolCard } from "./tool-card";
import { tools } from "@/data/tools";

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

export function FeaturedTools() {
  const featuredTools = tools.filter((t) => t.featured).slice(0, 6);

  return (
    <section className="bg-[#fafafa] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#f59e0b]" />
              <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
                Featured Tools
              </h2>
            </div>
            <p className="text-[#737373]">
              Best-in-class free AI tools with generous limits
            </p>
          </div>
          <Link
            href="/search"
            className="hidden items-center gap-1 text-sm font-medium text-[#3b82f6] hover:underline sm:inline-flex"
          >
            View all tools
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featuredTools.map((tool) => (
            <motion.div key={tool.id} variants={item}>
              <ToolCard tool={tool} featured />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/search"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#3b82f6] hover:underline"
          >
            View all tools
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
