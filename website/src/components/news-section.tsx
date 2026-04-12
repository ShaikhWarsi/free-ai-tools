"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Newspaper, ArrowRight, Calendar, ExternalLink } from "lucide-react";

interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
  url: string;
}

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();
        if (data.news && data.news.length > 0) {
          setNews(data.news.slice(0, 5));
        }
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3b82f6]/10">
              <Newspaper className="h-5 w-5 text-[#3b82f6]" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
                Latest AI News
              </h2>
              <p className="mt-1 text-sm text-[#737373]">
                Daily updates from news.smol.ai
              </p>
            </div>
          </div>
          <Link
            href="/news"
            className="hidden items-center gap-1 text-sm font-medium text-[#3b82f6] hover:underline sm:inline-flex"
          >
            View all news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-5 animate-pulse">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                  <div className="h-5 w-24 bg-[#e5e5e5] rounded" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-3/4 bg-[#e5e5e5] rounded" />
                    <div className="h-4 w-full bg-[#e5e5e5] rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : news.length > 0 ? (
          <div className="space-y-4">
            {news.map((item, index) => (
              <motion.article
                key={item.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-5 transition-all hover:border-[#d4d4d4] hover:bg-white hover:shadow-sm"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex shrink-0 items-center gap-2 text-sm text-[#a3a3a3]">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{formatDate(item.date)}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#0a0a0a] group-hover:text-[#3b82f6] transition-colors">
                      {item.title}
                    </h3>
                    {item.excerpt && (
                      <p className="mt-2 text-sm text-[#737373] line-clamp-2">
                        {item.excerpt}
                      </p>
                    )}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#3b82f6] hover:underline"
                    >
                      Read more
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-8 text-center">
            <p className="text-[#737373]">Unable to load news at this time.</p>
          </div>
        )}

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#3b82f6] hover:underline"
          >
            View all news
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
