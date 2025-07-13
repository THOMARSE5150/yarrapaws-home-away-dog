import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "./", // ✅ Ensures assets resolve properly in production
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  build: {
    outDir: "dist", // ✅ Railway expects /dist
  },
  server: {
    host: "::",       // ✅ Accept all IPv6 hosts (safe fallback)
    port: 8080,        // ✅ Required for Railway healthcheck to pass
  },
  preview: {
    host: "0.0.0.0",   // ✅ Make preview visible from external URL if needed
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));