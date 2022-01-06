import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import { resolve } from "path/posix";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    outDir: "./dist",
  },
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  }
});
