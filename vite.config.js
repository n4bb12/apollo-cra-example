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
  server: {
    port: 4000,
  },
  plugins: [
    ...VitePluginNode({
      adapter: "express",
      appPath: "src/server/dev.ts",
      exportName: "viteNodeApp",
    }),
  ],
})
