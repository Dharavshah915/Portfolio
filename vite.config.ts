import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: 'https://dharavshahcodes.co/',
  build: {
    outDir: 'docs'  // Change from default 'dist' to 'docs'
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
