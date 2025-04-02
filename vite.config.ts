import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tail from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tail()],
  base: "/movies-vite/",
});
