import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-6xl font-semibold tracking-tight text-[#0a0a0a]">
          404
        </h1>
        <p className="mt-4 text-xl font-medium text-[#525252]">
          Page not found
        </p>
        <p className="mt-2 max-w-md text-[#737373]">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0a0a0a] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#262626]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white px-5 py-2.5 text-sm font-medium text-[#525252] transition-colors hover:border-[#d4d4d4] hover:bg-[#fafafa]"
          >
            <Search className="h-4 w-4" />
            Search tools
          </Link>
        </div>
      </div>
    </div>
  );
}
