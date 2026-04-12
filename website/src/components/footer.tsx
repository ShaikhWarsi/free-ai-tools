"use client";

import Link from "next/link";
import { Zap, Code2, Heart } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Categories", href: "/categories" },
    { label: "Stacks", href: "/stacks" },
    { label: "News", href: "/news" },
    { label: "Search", href: "/search" },
  ],
  resources: [
    { label: "GitHub Repo", href: "https://github.com/ShaikhWarsi/free-ai-tools" },
    { label: "Submit Tool", href: "/submit" },
    { label: "API", href: "/api" },
  ],
  legal: [
    { label: "License", href: "https://github.com/ShaikhWarsi/free-ai-tools/blob/main/LICENSE" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] bg-[#fafafa]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0a0a0a] text-white">
                <Zap className="h-4 w-4" />
              </div>
              <span className="text-lg font-semibold text-[#0a0a0a]">
                Free AI Tools
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-[#525252]">
              Curated directory of free LLM APIs, coding copilots, AI IDEs, agents,
              and infrastructure tools for building real AI applications.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://github.com/ShaikhWarsi/free-ai-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#525252] transition-colors hover:text-[#0a0a0a]"
                aria-label="GitHub"
              >
                <Code2 className="h-5 w-5" />
              </a>
              <span className="text-xs text-[#525252]">
                Updated April 2026
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#0a0a0a]">Directory</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#525252] transition-colors hover:text-[#0a0a0a]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0a0a0a]">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-[#525252] transition-colors hover:text-[#0a0a0a]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#0a0a0a]">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#737373] transition-colors hover:text-[#0a0a0a]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 rounded-xl border border-[#e5e5e5] bg-white p-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a0a0a] text-white">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-[#0a0a0a]">Open source project</p>
                <p className="text-sm text-[#525252]">Star on GitHub to support updates</p>
              </div>
            </div>
            <a
              href="https://github.com/ShaikhWarsi/free-ai-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#e5e5e5] bg-[#fafafa] px-4 py-2 text-sm font-medium text-[#0a0a0a] transition-colors hover:border-[#d4d4d4] hover:bg-[#f5f5f5]"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Star on GitHub
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#e5e5e5] pt-8 sm:flex-row">
          <p className="text-sm text-[#525252]">
            © 2026 Free AI Tools Directory. MIT License.
          </p>
          <p className="flex items-center gap-1 text-sm text-[#525252]">
            Made with <Heart className="h-4 w-4 text-red-500" /> for developers
          </p>
        </div>
      </div>
    </footer>
  );
}
