import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: "src/propresenter-presentation.ts",
      formats: ["iife"],
      name: "ProPresenterPresentationCard",
      fileName: () => "propresenter-presentation.js",
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
    sourcemap: false,
  },
});
