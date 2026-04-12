"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, Zap, Shield, Code, Database } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-28 lg:pb-24">
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          {/* Main Heading - Stronger and clearer */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-[2.5rem] font-semibold tracking-tight text-[#0a0a0a] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
          >
            Find the best free AI tools
            <br className="hidden sm:block" />
            <span className="text-[#525252]"> for building real applications</span>
          </motion.h1>

          {/* Subheading - Clear value prop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-[#525252] leading-relaxed"
          >
            Curated LLM APIs, coding IDEs, CLI tools, agents, RAG stack tools, and local models — organized for developers.
          </motion.p>

          {/* Why this site - Key value prop */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mt-3 max-w-2xl text-base font-medium text-[#0a0a0a]"
          >
            Stop paying for 10 different AI subscriptions. Find the best free stack faster.
          </motion.p>

          {/* Supporting stat */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 text-sm text-[#525252]"
          >
            550+ tools across APIs, IDEs, CLI tools, agents and infrastructure
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/search"
              className="group inline-flex h-12 items-center gap-2 rounded-lg bg-[#0a0a0a] px-6 text-base font-medium text-white transition-all hover:bg-[#262626]"
            >
              <Search className="h-5 w-5" />
              Search Tools
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/stacks"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white px-6 text-base font-medium text-[#0a0a0a] transition-all hover:border-[#d4d4d4] hover:bg-[#fafafa]"
            >
              <Code className="h-5 w-5" />
              View Stacks
            </Link>
          </motion.div>

          {/* Quick Stats - More credible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
          >
            <div className="flex items-center gap-2 text-[#525252]">
              <Database className="h-4 w-4 text-[#525252]" />
              <span>550+ Curated Tools</span>
            </div>
            <div className="flex items-center gap-2 text-[#525252]">
              <Zap className="h-4 w-4 text-[#10b981]" />
              <span>Free Tiers Available</span>
            </div>
            <div className="flex items-center gap-2 text-[#525252]">
              <Shield className="h-4 w-4 text-[#3b82f6]" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2 text-[#525252]">
              <Code className="h-4 w-4 text-[#525252]" />
              <span>Developer Focused</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
