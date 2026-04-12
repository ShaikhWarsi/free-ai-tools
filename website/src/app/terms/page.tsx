"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-2 text-[#737373]">
            Rules for using our directory
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-[#e5e5e5] bg-white p-6 sm:p-8 space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">
              Acceptance of Terms
            </h2>
            <p className="text-[#737373]">
              By using Free AI Tools Directory, you agree to these terms. If you do not agree, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">
              Use of Directory
            </h2>
            <p className="text-[#737373]">
              This directory is for informational purposes only. We do not:
            </p>
            <ul className="mt-2 space-y-1 text-[#525252]">
              <li>• Guarantee the accuracy of tool information</li>
              <li>• Endorse any listed tools or services</li>
              <li>• Provide support for third-party tools</li>
              <li>• Guarantee uptime or availability of listed services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">
              User Conduct
            </h2>
            <p className="text-[#737373]">
              Users agree not to:
            </p>
            <ul className="mt-2 space-y-1 text-[#525252]">
              <li>• Scrape or automate data collection without permission</li>
              <li>• Submit false or misleading tool information</li>
              <li>• Use the directory for spam or abuse</li>
              <li>• Attempt to compromise the service security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">
              Changes to Terms
            </h2>
            <p className="text-[#737373]">
              We reserve the right to modify these terms at any time. Continued use of the directory constitutes acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#0a0a0a] mb-3">
              Disclaimer
            </h2>
            <p className="text-[#737373]">
              This directory is provided "as is" without warranties of any kind. Use listed tools at your own risk.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
