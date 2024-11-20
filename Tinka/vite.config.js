import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

function generateSitemap() {
  return {
    name: "generate-sitemap",
    closeBundle: async () => {
      const links = [
        { url: "/", changefreq: "daily", priority: 0.9 },
        { url: "/about", changefreq: "monthly", priority: 0.7 },
        // Add more URLs here
      ];

      const sitemap = new SitemapStream({
        hostname: "https://tinkahealthservices.com",
      });

      await streamToPromise(
        sitemap.pipe(createWriteStream("./dist/sitemap.xml"))
      )
        .then(() => console.log("Sitemap created successfully"))
        .catch((err) => console.error("Error creating sitemap", err));

      links.forEach((link) => sitemap.write(link));
      sitemap.end();
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }), // Opens the analysis in a browser after build
    viteCompression({
      algorithm: "brotliCompress", // Use Brotli compression
    }),
    generateSitemap(), // Add the sitemap generation plugin
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
