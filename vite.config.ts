// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every page to static HTML so dist/client can be uploaded to any static host.
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/o-level" },
      { path: "/a-level" },
      { path: "/entry-test-prep" },
      { path: "/methodology" },
      { path: "/exam-preparation" },
      { path: "/student-support" },
      { path: "/admissions" },
      { path: "/faq" },
      { path: "/contact" },
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
