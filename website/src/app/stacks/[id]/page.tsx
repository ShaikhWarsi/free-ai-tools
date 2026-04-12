"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Layers, 
  DollarSign, 
  Target, 
  Check,
  ExternalLink,
  Zap,
  Shield,
  Clock,
  Database
} from "lucide-react";
import { stacks, getStackById } from "@/data/stacks";
import { tools } from "@/data/tools";
import { ToolCard } from "@/components/tool-card";

export default function StackPage() {
  const params = useParams();
  const id = params.id as string;
  const stack = getStackById(id);

  if (!stack) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fafafa]">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#0a0a0a]">Stack not found</h1>
          <Link
            href="/stacks"
            className="mt-4 inline-flex items-center gap-2 text-[#3b82f6] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to stacks
          </Link>
        </div>
      </div>
    );
  }

  // Find related tools
  const relatedTools = tools.filter((t) =>
    stack.layers.some((l) => l.toolId === t.id)
  );

  const getIcon = () => {
    switch (stack.id) {
      case "fully-free":
        return <DollarSign className="h-8 w-8 text-[#10b981]" />;
      case "fastest":
        return <Zap className="h-8 w-8 text-[#f59e0b]" />;
      case "local-privacy":
        return <Shield className="h-8 w-8 text-[#8b5cf6]" />;
      case "cheapest-pro":
        return <DollarSign className="h-8 w-8 text-[#3b82f6]" />;
      case "agentic":
        return <Clock className="h-8 w-8 text-[#06b6d4]" />;
      case "rag":
        return <Database className="h-8 w-8 text-[#f43f5e]" />;
      default:
        return <Layers className="h-8 w-8 text-[#3b82f6]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="border-b border-[#e5e5e5] bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/stacks"
            className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-[#0a0a0a] mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            All stacks
          </Link>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#3b82f6]/10">
              {getIcon()}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
                {stack.name}
              </h1>
              <p className="mt-2 max-w-2xl text-[#737373]">
                {stack.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#10b981]/10 px-3 py-1 text-sm font-medium text-[#10b981]">
                  <DollarSign className="h-4 w-4" />
                  {stack.cost}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3b82f6]/10 px-3 py-1 text-sm font-medium text-[#3b82f6]">
                  <Layers className="h-4 w-4" />
                  {stack.layers.length} layers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content - Stack Layers */}
          <div className="lg:col-span-2 space-y-6">
            {/* Use Case */}
            <div className="rounded-xl border border-[#e5e5e5] bg-white p-6">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-5 w-5 text-[#3b82f6]" />
                <h2 className="font-semibold text-[#0a0a0a]">Best For</h2>
              </div>
              <p className="text-[#737373]">{stack.useCase}</p>
            </div>

            {/* Stack Layers */}
            <div className="rounded-xl border border-[#e5e5e5] bg-white p-6">
              <h2 className="font-semibold text-[#0a0a0a] mb-6">Stack Components</h2>
              <div className="space-y-4">
                {stack.layers.map((layer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 rounded-lg border border-[#f0f0f0] bg-[#fafafa] p-4 transition-colors hover:border-[#e5e5e5] hover:bg-white"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0a0a0a] text-white font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-medium uppercase tracking-wider text-[#a3a3a3]">
                          {layer.name}
                        </span>
                      </div>
                      <h3 className="mt-1 font-medium text-[#0a0a0a]">
                        {layer.tool}
                      </h3>
                      {layer.reason && (
                        <p className="mt-1 text-sm text-[#737373]">
                          {layer.reason}
                        </p>
                      )}
                      {layer.toolId && (
                        <Link
                          href={`/tools/${layer.toolId}`}
                          className="mt-2 inline-flex items-center gap-1 text-sm text-[#3b82f6] hover:underline"
                        >
                          View tool details
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Related Tools */}
            {relatedTools.length > 0 && (
              <div className="rounded-xl border border-[#e5e5e5] bg-white p-6">
                <h2 className="font-semibold text-[#0a0a0a] mb-4">Tools in this Stack</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} showCategory={false} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-4">
            {/* Tags */}
            <div className="rounded-xl border border-[#e5e5e5] bg-white p-5">
              <h3 className="font-medium text-[#0a0a0a]">Tags</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {stack.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f5f5f5] px-3 py-1 text-xs font-medium text-[#737373]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="rounded-xl border border-[#e5e5e5] bg-white p-5">
              <h3 className="font-medium text-[#0a0a0a]">Quick Stats</h3>
              <div className="mt-3 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#737373]">Total Layers</span>
                  <span className="font-medium">{stack.layers.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#737373]">Cost</span>
                  <span className="font-medium text-[#10b981]">{stack.cost}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#737373]">Tools Available</span>
                  <span className="font-medium">{relatedTools.length}</span>
                </div>
              </div>
            </div>

            {/* Other Stacks */}
            <div className="rounded-xl border border-[#e5e5e5] bg-white p-5">
              <h3 className="font-medium text-[#0a0a0a]">Other Stacks</h3>
              <div className="mt-3 space-y-2">
                {stacks
                  .filter((s) => s.id !== stack.id)
                  .slice(0, 4)
                  .map((s) => (
                    <Link
                      key={s.id}
                      href={`/stacks/${s.id}`}
                      className="block rounded-lg px-3 py-2 text-sm text-[#737373] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
                    >
                      <div className="font-medium">{s.name}</div>
                      <div className="text-xs text-[#a3a3a3]">{s.cost}</div>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
