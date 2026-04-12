"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Grid3X3, SlidersHorizontal, X, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { ToolCard } from "@/components/tool-card";
import { tools } from "@/data/tools";
import { categories, getCategoryBySlug } from "@/data/categories";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Zap: ({ className }: { className?: string }) => <span className={className}>⚡</span>,
  Code2: ({ className }: { className?: string }) => <span className={className}>💻</span>,
  Terminal: ({ className }: { className?: string }) => <span className={className}>⌨️</span>,
  Cpu: ({ className }: { className?: string }) => <span className={className}>🔲</span>,
  Search: ({ className }: { className?: string }) => <span className={className}>🔍</span>,
  Bot: ({ className }: { className?: string }) => <span className={className}>🤖</span>,
  Mic: ({ className }: { className?: string }) => <span className={className}>🎤</span>,
  Image: ({ className }: { className?: string }) => <span className={className}>🖼️</span>,
  Video: ({ className }: { className?: string }) => <span className={className}>🎬</span>,
  Database: ({ className }: { className?: string }) => <span className={className}>🗄️</span>,
  Server: ({ className }: { className?: string }) => <span className={className}>🖥️</span>,
  BarChart3: ({ className }: { className?: string }) => <span className={className}>📊</span>,
  Layers: ({ className }: { className?: string }) => <span className={className}>📚</span>,
  Workflow: ({ className }: { className?: string }) => <span className={className}>⚙️</span>,
  Globe: ({ className }: { className?: string }) => <span className={className}>🌐</span>,
  MessageSquare: ({ className }: { className?: string }) => <span className={className}>💬</span>,
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = getCategoryBySlug(slug);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  if (!category) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fafafa]">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#0a0a0a]">Category not found</h1>
          <Link
            href="/categories"
            className="mt-4 inline-flex items-center gap-2 text-[#3b82f6] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to categories
          </Link>
        </div>
      </div>
    );
  }

  const categoryTools = tools.filter((t) => t.category === category.id);

  const filteredTools = useMemo(() => {
    return categoryTools.filter((tool) => {
      const matchesSearch =
        searchQuery === "" ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesFilters =
        selectedFilters.length === 0 ||
        selectedFilters.every((filter) => {
          switch (filter) {
            case "free":
              return tool.pricing.type === "free";
            case "freemium":
              return tool.pricing.type === "freemium";
            case "open-source":
              return tool.openSource;
            case "no-credit-card":
              return !tool.pricing.creditCardRequired;
            case "featured":
              return tool.featured;
            default:
              return true;
          }
        });

      return matchesSearch && matchesFilters;
    });
  }, [categoryTools, searchQuery, selectedFilters]);

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="border-b border-[#e5e5e5] bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-[#0a0a0a] mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            All categories
          </Link>
          
          <div className="flex items-start gap-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${category.color}15`, color: category.color }}
            >
              <span className="text-2xl">
                {category.icon === "Zap" && "⚡"}
                {category.icon === "Code2" && "💻"}
                {category.icon === "Terminal" && "⌨️"}
                {category.icon === "Cpu" && "🔲"}
                {category.icon === "Search" && "🔍"}
                {category.icon === "Bot" && "🤖"}
                {category.icon === "Mic" && "🎤"}
                {category.icon === "Image" && "🖼️"}
                {category.icon === "Video" && "🎬"}
                {category.icon === "Database" && "🗄️"}
                {category.icon === "Server" && "🖥️"}
                {category.icon === "BarChart3" && "📊"}
                {category.icon === "Layers" && "📚"}
                {category.icon === "Workflow" && "⚙️"}
                {category.icon === "Globe" && "🌐"}
                {category.icon === "MessageSquare" && "💬"}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
                {category.name}
              </h1>
              <p className="mt-2 max-w-2xl text-[#737373]">
                {category.description}
              </p>
              <div className="mt-3 flex items-center gap-4 text-sm text-[#a3a3a3]">
                <span>{categoryTools.length} tools</span>
                <span className="h-1 w-1 rounded-full bg-[#d4d4d4]" />
                <span className="text-[#10b981]">{categoryTools.filter(t => t.pricing.type === "free").length} free</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 lg:shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a3a3a3]" />
                <input
                  type="text"
                  placeholder="Search in category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-[#e5e5e5] bg-white py-2 pl-10 pr-4 text-sm text-[#0a0a0a] placeholder-[#a3a3a3] focus:border-[#3b82f6] focus:outline-none focus:ring-1 focus:ring-[#3b82f6]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a3a3a3] hover:text-[#0a0a0a]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Filters */}
              <div>
                <h3 className="mb-3 text-sm font-semibold text-[#0a0a0a]">
                  Filters
                </h3>
                <div className="space-y-2">
                  {[
                    { id: "free", label: "Free tier" },
                    { id: "freemium", label: "Freemium" },
                    { id: "open-source", label: "Open source" },
                    { id: "no-credit-card", label: "No credit card" },
                    { id: "featured", label: "Featured" },
                  ].map((filter) => (
                    <label
                      key={filter.id}
                      className="flex cursor-pointer items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(filter.id)}
                        onChange={() => toggleFilter(filter.id)}
                        className="h-4 w-4 rounded border-[#e5e5e5] text-[#3b82f6] focus:ring-[#3b82f6]"
                      />
                      <span className="text-sm text-[#737373]">
                        {filter.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedFilters.length > 0 || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedFilters([]);
                    setSearchQuery("");
                  }}
                  className="flex items-center gap-1 text-sm text-[#3b82f6] hover:underline"
                >
                  <X className="h-3 w-3" />
                  Clear all filters
                </button>
              )}

              {/* Other Categories */}
              <div className="border-t border-[#e5e5e5] pt-6">
                <h3 className="mb-3 text-sm font-semibold text-[#0a0a0a]">
                  Other Categories
                </h3>
                <div className="space-y-1">
                  {categories
                    .filter((c) => c.id !== category.id)
                    .slice(0, 6)
                    .map((c) => (
                      <Link
                        key={c.id}
                        href={`/categories/${c.slug}`}
                        className="block rounded-lg px-3 py-2 text-sm text-[#737373] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
                      >
                        {c.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <main className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-[#737373]">
                {filteredTools.length} tool
                {filteredTools.length !== 1 ? "s" : ""} found
              </p>
            </div>

            {filteredTools.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
              >
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} showCategory={false} />
                ))}
              </motion.div>
            ) : (
              <div className="rounded-xl border border-[#e5e5e5] bg-white p-12 text-center">
                <Grid3X3 className="mx-auto h-12 w-12 text-[#e5e5e5]" />
                <h3 className="mt-4 text-lg font-medium text-[#0a0a0a]">
                  No tools found
                </h3>
                <p className="mt-2 text-sm text-[#737373]">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
