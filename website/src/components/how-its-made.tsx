"use client";

import { motion } from "framer-motion";
import { Youtube } from "lucide-react";

export function HowItsMade() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 flex items-center gap-2">
            <Youtube className="h-6 w-6 text-[#ef4444]" />
            <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
              See How We Made This Website
            </h2>
          </div>
          <p className="mb-8 text-[#737373]">
            Watch the full build process from scratch — architecture, design decisions, and deployment
          </p>
          <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-xl border border-[#e5e5e5] bg-[#fafafa] shadow-sm">
            <iframe
              src="https://www.youtube.com/embed/MfNoGJvvbRw"
              title="How we made this website"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
