import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    "llm-api": "bg-blue-500/10 text-blue-600 border-blue-200",
    ide: "bg-purple-500/10 text-purple-600 border-purple-200",
    cli: "bg-green-500/10 text-green-600 border-green-200",
    "local-model": "bg-amber-500/10 text-amber-600 border-amber-200",
    rag: "bg-rose-500/10 text-rose-600 border-rose-200",
    agent: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
    speech: "bg-cyan-500/10 text-cyan-600 border-cyan-200",
    image: "bg-pink-500/10 text-pink-600 border-pink-200",
    video: "bg-violet-500/10 text-violet-600 border-violet-200",
    "vector-db": "bg-teal-500/10 text-teal-600 border-teal-200",
    hosting: "bg-orange-500/10 text-orange-600 border-orange-200",
    evaluation: "bg-slate-500/10 text-slate-600 border-slate-200",
    embedding: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    automation: "bg-sky-500/10 text-sky-600 border-sky-200",
    browser: "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-200",
    "chat-platform": "bg-lime-500/10 text-lime-600 border-lime-200",
  };
  return colors[category] || "bg-gray-500/10 text-gray-600 border-gray-200";
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
