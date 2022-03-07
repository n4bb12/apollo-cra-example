import express from "express"
import { join } from "path"
import { appConfig } from "src/config"
import { configureServer } from "./apollo"

async function main() {
  try {
    const staticRootDir = join(__dirname, "../client")
    const index = join(staticRootDir, "/index.html")
    const { port } = appConfig.server

    const app = await configureServer()
    app.use(express.static(staticRootDir))
    app.get("/*", (req, res) => res.sendFile(index))
    app.listen({ port })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()
