"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, Zap, Layers, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/categories", label: "Categories" },
  { href: "/stacks", label: "Stacks" },
  { href: "/news", label: "News" },
  { href: "/search", label: "Tools" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e5e5] bg-[#fafafa]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - fixed width for balance */}
        <Link href="/" className="flex items-center gap-2 group w-[200px]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0a0a0a] text-white transition-transform group-hover:scale-105">
            <Zap className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-[#0a0a0a]">
            Free AI Tools
          </span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-[#525252] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Search Button */}
          <Link
            href="/search"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#737373] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a] sm:h-auto sm:w-auto sm:gap-2 sm:rounded-lg sm:border sm:border-[#e5e5e5] sm:bg-white sm:px-3 sm:py-2"
          >
            <Search className="h-4 w-4" />
            <span className="hidden lg:inline text-sm">Search...</span>
            <kbd className="hidden lg:inline-flex h-5 items-center gap-1 rounded border border-[#e5e5e5] bg-[#f5f5f5] px-1.5 text-[10px] font-medium text-[#737373]">
              ⌘K
            </kbd>
          </Link>

          {/* GitHub Link - Desktop */}
          <a
            href="https://github.com/ShaikhWarsi/free-ai-tools"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#737373] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span className="hidden lg:inline">GitHub</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#737373] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[#e5e5e5] bg-[#fafafa] md:hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-[#737373] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-2 border-t border-[#e5e5e5]" />
              <a
                href="https://github.com/ShaikhWarsi/free-ai-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#737373] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                Star on GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
