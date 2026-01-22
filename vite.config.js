import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/wp": {
        target: "https://rapidcode.page.gd",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/wp/, ""),
      },
      "/api": {
        target: "https://rapidcode.page.gd",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      }
    },
  },
  
});
