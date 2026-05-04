import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^ui\/(.*)/, replacement: resolve(__dirname, "src/ui/$1") },
      { find: /^prop-types$/, replacement: resolve(__dirname, "src/vendor/prop-types.ts") },
      { find: /^assets\/(.*)/, replacement: resolve(__dirname, "src/assets/$1") },
      { find: /^components\/(.*)/, replacement: resolve(__dirname, "src/components/$1") },
      { find: /^pages\/(.*)/, replacement: resolve(__dirname, "src/pages/$1") },
      { find: /^hooks\/(.*)/, replacement: resolve(__dirname, "src/hooks/$1") },
      { find: /^examples\/(.*)/, replacement: resolve(__dirname, "src/examples/$1") },
      { find: /^footer\.routes$/, replacement: resolve(__dirname, "src/footer.routes.tsx") },
      { find: /^routes$/, replacement: resolve(__dirname, "src/routes.tsx") },
      { find: /^showcases\.routes$/, replacement: resolve(__dirname, "src/showcases.routes.tsx") },
      { find: /^App$/, replacement: resolve(__dirname, "src/App.tsx") },
    ],
  },
});
