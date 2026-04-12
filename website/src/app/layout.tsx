import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free AI Tools Directory | Curated List for Developers",
  description: "Find the best free AI tools for building real applications. LLM APIs, AI IDEs, CLI tools, local models, RAG stacks, and more. Updated April 2026.",
  keywords: "free AI tools, LLM API, AI IDE, coding assistant, RAG, vector database, local models, developer tools",
  openGraph: {
    title: "Free AI Tools Directory",
    description: "Curated list of free LLM APIs, coding copilots, AI IDEs, agents, and infrastructure tools for building real AI applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#fafafa] text-[#0a0a0a]">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
