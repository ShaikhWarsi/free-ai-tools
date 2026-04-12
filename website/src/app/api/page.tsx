"use client";

import Link from "next/link";
import { ArrowLeft, Code, FileJson, Globe } from "lucide-react";

export default function ApiPage() {
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
            API Documentation
          </h1>
          <p className="mt-2 text-[#737373]">
            Access our directory data programmatically
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3b82f6]/10">
              <Globe className="h-5 w-5 text-[#3b82f6]" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#0a0a0a]">
                Public API Endpoints
              </h2>
              <p className="text-sm text-[#737373]">
                Free to use, no authentication required
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg bg-[#f5f5f5] p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded bg-[#10b981] px-2 py-0.5 text-xs font-medium text-white">
                  GET
                </span>
                <code className="text-sm text-[#0a0a0a]">/api/tools</code>
              </div>
              <p className="text-sm text-[#737373]">
                Returns all tools in the directory
              </p>
            </div>

            <div className="rounded-lg bg-[#f5f5f5] p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded bg-[#10b981] px-2 py-0.5 text-xs font-medium text-white">
                  GET
                </span>
                <code className="text-sm text-[#0a0a0a]">/api/categories</code>
              </div>
              <p className="text-sm text-[#737373]">
                Returns all categories
              </p>
            </div>

            <div className="rounded-lg bg-[#f5f5f5] p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded bg-[#10b981] px-2 py-0.5 text-xs font-medium text-white">
                  GET
                </span>
                <code className="text-sm text-[#0a0a0a]">/api/stacks</code>
              </div>
              <p className="text-sm text-[#737373]">
                Returns all recommended stacks
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-[#e5e5e5] pt-6">
            <h3 className="font-medium text-[#0a0a0a] mb-4">
              Example Response
            </h3>
            <pre className="rounded-lg bg-[#0a0a0a] p-4 overflow-x-auto">
              <code className="text-sm text-[#e5e5e5]">
{`{
  "tools": [
    {
      "id": "openrouter",
      "name": "OpenRouter",
      "category": "llm-api",
      "description": "...",
      "pricing": {
        "type": "freemium",
        "freeTier": "50 requests/day"
      }
    }
  ]
}`}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-[#e5e5e5] bg-[#fafafa] p-6">
          <div className="flex items-center gap-2 mb-3">
            <FileJson className="h-5 w-5 text-[#737373]" />
            <h3 className="font-medium text-[#0a0a0a]">
              Rate Limits
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-[#737373]">
            <li>• 100 requests per minute per IP</li>
            <li>• No authentication required</li>
            <li>• CORS enabled for client-side requests</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
