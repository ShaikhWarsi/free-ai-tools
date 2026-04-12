"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, ChevronDown, FolderOpen } from "lucide-react";
import { ToolCard } from "@/components/tool-card";
import { tools } from "@/data/tools";
import { categories, getCategoryById } from "@/data/categories";
import { cn } from "@/lib/utils";
import { Tool } from "@/types";

const filters = [
  { id: "free-tier", label: "Free tier available" },
  { id: "open-source", label: "Open source" },
  { id: "local", label: "Local/Offline" },
  { id: "api", label: "API-based" },
  { id: "no-credit-card", label: "No credit card" },
];

// Group tools by category
function groupToolsByCategory(tools: Tool[]) {
  const grouped: Record<string, Tool[]> = {};
  tools.forEach((tool) => {
    if (!grouped[tool.category]) {
      grouped[tool.category] = [];
    }
    grouped[tool.category].push(tool);
  });
  return grouped;
}

// Category display order and labels
const categoryOrder = [
  { id: "llm-api", label: "APIs" },
  { id: "ide", label: "IDEs" },
  { id: "cli", label: "CLI" },
  { id: "local-model", label: "Models" },
  { id: "rag", label: "RAG" },
  { id: "agent", label: "Agents" },
  { id: "vector-db", label: "Vector DBs" },
  { id: "speech", label: "Speech" },
  { id: "image", label: "Image" },
  { id: "video", label: "Video" },
  { id: "hosting", label: "Hosting" },
  { id: "evaluation", label: "Eval" },
  { id: "embedding", label: "Embeddings" },
  { id: "automation", label: "Automation" },
  { id: "browser", label: "Browser" },
  { id: "chat-platform", label: "Chat" },
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Helper function to calculate relevance score
  function getRelevanceScore(tool: Tool, query: string): number {
    const lowerQuery = query.toLowerCase();
    let score = 0;
    
    const nameLower = tool.name.toLowerCase();
    if (nameLower === lowerQuery) score += 100;
    else if (nameLower.startsWith(lowerQuery)) score += 80;
    else if (nameLower.includes(lowerQuery)) score += 60;
    
    if (tool.shortDescription?.toLowerCase().includes(lowerQuery)) score += 40;
    if (tool.description.toLowerCase().includes(lowerQuery)) score += 30;
    if (tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) score += 20;
    if (tool.models?.some(model => model.toLowerCase().includes(lowerQuery))) score += 15;
    
    return score;
  }

  const filteredTools = useMemo(() => {
    let results = tools.filter((tool) => {
      const matchesSearch =
        searchQuery === "" ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.shortDescription?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        tool.models?.some((model) =>
          model.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === null || tool.category === selectedCategory;

      const matchesFilters =
        selectedFilters.length === 0 ||
        selectedFilters.every((filter) => {
          switch (filter) {
            case "free-tier":
              return tool.pricing.type === "free" || tool.pricing.type === "freemium";
            case "open-source":
              return tool.openSource;
            case "local":
              return tool.deployment === "local" || tool.deployment === "hybrid";
            case "api":
              return tool.deployment === "api" || tool.deployment === "hybrid";
            case "no-credit-card":
              return !tool.pricing.creditCardRequired;
            default:
              return true;
          }
        });

      return matchesSearch && matchesCategory && matchesFilters;
    });
    
    if (searchQuery) {
      results = results.sort((a, b) => 
        getRelevanceScore(b, searchQuery) - getRelevanceScore(a, searchQuery)
      );
    }
    
    return results;
  }, [searchQuery, selectedCategory, selectedFilters]);

  // Group filtered tools by category
  const groupedTools = useMemo(() => {
    return groupToolsByCategory(filteredTools);
  }, [filteredTools]);

  // Get ordered category keys that have results
  const orderedCategories = useMemo(() => {
    return categoryOrder
      .map(c => c.id)
      .filter(id => groupedTools[id] && groupedTools[id].length > 0);
  }, [groupedTools]);

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId]
    );
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilters(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeFiltersCount = selectedFilters.length + (selectedCategory ? 1 : 0);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="border-b border-[#e5e5e5] bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold tracking-tight text-[#0a0a0a] sm:text-3xl">
            Search Tools
          </h1>
          <p className="mt-2 text-base text-[#525252]">
            Find the perfect AI tool for your use case
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Search Bar with Filter Button */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row" ref={filterRef}>
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#737373]" />
            <input
              type="text"
              placeholder="Search tools by name, description, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-12 w-full rounded-lg border border-[#d4d4d4] bg-white pl-12 pr-4 text-base text-[#0a0a0a] placeholder:text-[#a3a3a3] focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-[#a3a3a3] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "flex h-12 items-center justify-center gap-2 rounded-lg border px-5 text-sm font-medium transition-colors",
              showFilters || activeFiltersCount > 0
                ? "border-[#0a0a0a] bg-[#0a0a0a] text-white"
                : "border-[#d4d4d4] bg-white text-[#0a0a0a] hover:border-[#a3a3a3]"
            )}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#0a0a0a]">
                {activeFiltersCount}
              </span>
            )}
            <ChevronDown className={cn("h-4 w-4 transition-transform", showFilters && "rotate-180")} />
          </button>
        </div>

        {/* Filter Dropdown */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mb-6 rounded-xl border border-[#e5e5e5] bg-white p-5 shadow-sm"
            >
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* Categories */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#0a0a0a]">
                    Category
                  </h3>
                  <div className="space-y-1 max-h-52 overflow-y-auto pr-2">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={cn(
                        "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                        selectedCategory === null
                          ? "bg-[#0a0a0a] text-white"
                          : "text-[#525252] hover:bg-[#f5f5f5]"
                      )}
                    >
                      All Categories
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={cn(
                          "w-full rounded-lg px-3 py-2 text-left text-sm transition-colors flex items-center justify-between",
                          selectedCategory === category.id
                            ? "bg-[#0a0a0a] text-white"
                            : "text-[#525252] hover:bg-[#f5f5f5]"
                        )}
                      >
                        <span>{category.name}</span>
                        <span className={cn("text-xs", selectedCategory === category.id ? "text-white/70" : "text-[#a3a3a3]")}>
                          {category.toolCount}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filters */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#0a0a0a]">
                    Features
                  </h3>
                  <div className="space-y-2">
                    {filters.map((filter) => (
                      <label
                        key={filter.id}
                        className="flex cursor-pointer items-center gap-3"
                      >
                        <input
                          type="checkbox"
                          checked={selectedFilters.includes(filter.id)}
                          onChange={() => toggleFilter(filter.id)}
                          className="h-4 w-4 rounded border-[#d4d4d4] text-[#0a0a0a] focus:ring-[#0a0a0a]"
                        />
                        <span className="text-sm text-[#525252]">
                          {filter.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Active Filters & Clear */}
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-[#0a0a0a]">
                    Active Filters
                  </h3>
                  {activeFiltersCount > 0 ? (
                    <div className="space-y-2">
                      {selectedCategory && (
                        <div className="flex items-center gap-2 rounded-lg bg-[#f5f5f5] px-3 py-2 text-sm">
                          <span className="text-[#525252]">
                            {getCategoryById(selectedCategory)?.name}
                          </span>
                          <button
                            onClick={() => setSelectedCategory(null)}
                            className="ml-auto rounded p-0.5 text-[#a3a3a3] transition-colors hover:bg-[#e5e5e5] hover:text-[#0a0a0a]"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      )}
                      {selectedFilters.map((filterId) => (
                        <div key={filterId} className="flex items-center gap-2 rounded-lg bg-[#f5f5f5] px-3 py-2 text-sm">
                          <span className="text-[#525252]">
                            {filters.find(f => f.id === filterId)?.label}
                          </span>
                          <button
                            onClick={() => toggleFilter(filterId)}
                            className="ml-auto rounded p-0.5 text-[#a3a3a3] transition-colors hover:bg-[#e5e5e5] hover:text-[#0a0a0a]"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => {
                          setSelectedFilters([]);
                          setSelectedCategory(null);
                        }}
                        className="mt-2 flex items-center gap-1.5 text-sm font-medium text-[#737373] transition-colors hover:text-[#0a0a0a]"
                      >
                        <X className="h-3.5 w-3.5" />
                        Clear all filters
                      </button>
                    </div>
                  ) : (
                    <p className="text-sm text-[#a3a3a3]">No active filters</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Filter Pills */}
        {activeFiltersCount > 0 && !showFilters && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {selectedCategory && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0a0a0a] px-3 py-1.5 text-xs font-medium text-white">
                {getCategoryById(selectedCategory)?.name}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="ml-0.5 rounded-full p-0.5 hover:bg-white/20"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedFilters.map((filterId) => (
              <span key={filterId} className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f5] px-3 py-1.5 text-xs font-medium text-[#525252] border border-[#e5e5e5]">
                {filters.find(f => f.id === filterId)?.label}
                <button
                  onClick={() => toggleFilter(filterId)}
                  className="ml-0.5 rounded-full p-0.5 hover:bg-[#e5e5e5]"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
            <button
              onClick={() => {
                setSelectedFilters([]);
                setSelectedCategory(null);
              }}
              className="text-xs font-medium text-[#737373] transition-colors hover:text-[#0a0a0a]"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Results */}
        <main>
          {/* Results Count */}
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-medium text-[#525252]">
              {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {filteredTools.length > 0 ? (
            <div className="space-y-10">
              {orderedCategories.map((categoryId) => {
                const categoryTools = groupedTools[categoryId];
                const category = getCategoryById(categoryId);
                if (!categoryTools?.length || !category) return null;

                return (
                  <section key={categoryId}>
                    {/* Category Header */}
                    <div className="mb-4 flex items-center gap-3">
                      <h2 className="text-lg font-semibold text-[#0a0a0a]">
                        {category.name}
                      </h2>
                      <span className="rounded-full bg-[#f5f5f5] px-2 py-0.5 text-xs font-medium text-[#737373]">
                        {categoryTools.length}
                      </span>
                    </div>
                    
                    {/* Tools Grid */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
                    >
                      {categoryTools.map((tool) => (
                        <ToolCard key={tool.id} tool={tool} showCategory={false} />
                      ))}
                    </motion.div>
                  </section>
                );
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-[#e5e5e5] bg-white p-12 text-center">
              <div className="mx-flex mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#f5f5f5]">
                <FolderOpen className="h-8 w-8 text-[#a3a3a3]" />
              </div>
              <h3 className="text-lg font-medium text-[#0a0a0a]">
                No tools found
              </h3>
              <p className="mt-2 text-sm text-[#737373]">
                Try adjusting your search or filters to find what you&apos;re looking for
              </p>
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => {
                    setSelectedFilters([]);
                    setSelectedCategory(null);
                    setSearchQuery("");
                  }}
                  className="mt-4 text-sm font-medium text-[#3b82f6] hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
