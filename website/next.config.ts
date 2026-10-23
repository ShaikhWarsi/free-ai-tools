import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this app. Without it Next picks the nearest
  // ancestor lockfile, which here is ~/package-lock.json (the typescript
  // language-server install), so Turbopack would treat /home/grego as the
  // repo root and resolve files above this directory.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
