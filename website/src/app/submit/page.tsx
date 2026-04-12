"use client";

import Link from "next/link";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="border-b border-[#e5e5e5] bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#737373] hover:text-[#0a0a0a] mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
            Submit a Tool
          </h1>
          <p className="mt-2 text-[#737373]">
            Help us grow the directory by submitting a new AI tool
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
            How to Submit
          </h2>
          <p className="text-[#737373] mb-6">
            We accept submissions through GitHub issues. This allows for community discussion and tracking.
          </p>
          
          <ol className="space-y-4 text-[#525252]">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-xs font-medium text-white">1</span>
              <span>Visit our GitHub repository</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-xs font-medium text-white">2</span>
              <span>Open a new issue with the "Tool Submission" template</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-xs font-medium text-white">3</span>
              <span>Fill in the required information about the tool</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3b82f6] text-xs font-medium text-white">4</span>
              <span>Wait for review and approval from maintainers</span>
            </li>
          </ol>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://github.com/ShaikhWarsi/free-ai-tools/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0a0a0a] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#262626]"
            >
              <Code2 className="h-4 w-4" />
              Submit via GitHub
              <ExternalLink className="h-3 w-3" />
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#e5e5e5] bg-white px-6 py-3 text-sm font-medium text-[#737373] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
            >
              Browse Tools
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-6">
          <h3 className="font-medium text-[#0a0a0a] mb-3">
            Submission Requirements
          </h3>
          <ul className="space-y-2 text-sm text-[#737373]">
            <li className="flex items-center gap-2">
              <span className="text-[#10b981]">✓</span>
              Must have a free tier (no credit card required preferred)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#10b981]">✓</span>
              Must be AI-related (LLM, agents, automation, etc.)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#10b981]">✓</span>
              Must have a working website or documentation
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#10b981]">✓</span>
              Pricing information must be clearly stated
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
