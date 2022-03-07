import { resolve } from "path"
import { defineConfig } from "vite"
import { VitePluginNode } from "vite-plugin-node"

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  resolve: {
    alias: [{ find: "src", replacement: resolve(__dirname, "src") }],
  },
  publicDir: "static", // unused, replace default public folder
  build: {
    outDir: "dist/server",
  },
  server: {
    port: 4000,
  },
  plugins: [
    ...VitePluginNode({
      adapter: "express",
      appPath:
        process.env.NODE_ENV === "production"
          ? "src/server/prod.ts"
          : "src/server/dev.ts",
      exportName: "viteNodeApp",
    }),
  ],
})
