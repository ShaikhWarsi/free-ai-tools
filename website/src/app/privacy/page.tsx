"use client";

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-[#737373]">
            How we handle your data
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-6 sm:p-8 space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">
              Data Collection
            </h2>
            <p className="text-[#737373]">
              We collect minimal data to operate this directory. This includes:
            </p>
            <ul className="mt-2 space-y-1 text-[#525252]">
              <li>• Anonymous usage analytics</li>
              <li>• Search queries (anonymized)</li>
              <li>• Tool click statistics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">
              Cookies
            </h2>
            <p className="text-[#737373]">
              We use essential cookies only. No tracking cookies or third-party advertising cookies are used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">
              Third-Party Links
            </h2>
            <p className="text-[#737373]">
              This directory contains links to external AI tools and services. We are not responsible for their privacy practices. Please review their privacy policies before use.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">
              Contact
            </h2>
            <p className="text-[#737373]">
              For privacy concerns, please open an issue on our GitHub repository.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
