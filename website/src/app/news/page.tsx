"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Newspaper, ArrowLeft, Calendar, ExternalLink } from "lucide-react";

interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
  url: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/news");
        const data = await response.json();
        if (data.news && data.news.length > 0) {
          setNews(data.news);
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
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <div className="border-b border-[#e5e5e5] bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-[#0a0a0a] mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3b82f6]/10">
              <Newspaper className="h-6 w-6 text-[#3b82f6]" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
                AI News
              </h1>
              <p className="mt-1 text-[#737373]">
                Daily updates from news.smol.ai - fork of the original
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-sm text-[#737373]">
            {news.length} articles from news.smol.ai
          </p>
        </div>

        {loading ? (
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="rounded-xl border border-[#e5e5e5] bg-white p-6 animate-pulse">
                <div className="h-4 w-32 bg-[#e5e5e5] rounded mb-3" />
                <div className="h-6 w-3/4 bg-[#e5e5e5] rounded mb-4" />
                <div className="h-4 w-full bg-[#e5e5e5] rounded" />
              </div>
            ))}
          </div>
        ) : news.length > 0 ? (
          <div className="space-y-6">
            {news.map((item, index) => (
              <motion.article
                key={item.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-[#e5e5e5] bg-white p-6 transition-all hover:border-[#d4d4d4] hover:shadow-sm"
              >
                <div className="flex items-center gap-2 text-sm text-[#a3a3a3] mb-3">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{formatDate(item.date)}</span>
                </div>
                <h2 className="text-xl font-semibold text-[#0a0a0a] mb-4">
                  {item.title}
                </h2>
                {item.excerpt ? (
                  <p className="text-[#737373] leading-relaxed">
                    {item.excerpt}
                  </p>
                ) : (
                  <p className="text-[#a3a3a3] italic">
                    Click below to read the full article...
                  </p>
                )}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#3b82f6] hover:underline"
                >
                  Read full article
                  <ExternalLink className="h-4 w-4" />
                </a>
              </motion.article>
            ))}
          </div>
        ) : null}

        {/* Attribution */}
        <div className="mt-12 rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-6 text-center">
          <p className="text-sm text-[#737373]">
            News content sourced from{" "}
            <a
              href="https://news.smol.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#3b82f6] hover:underline"
            >
              news.smol.ai
            </a>
          </p>
          <p className="mt-2 text-xs text-[#a3a3a3]">
            This is a fork/shadow of the original site for easy access within the directory.
          </p>
        </div>
      </div>
    </div>
  );
}
