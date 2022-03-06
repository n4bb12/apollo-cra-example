import { config } from "src/config"
import { configureServer } from "./server"

async function main() {
  try {
    const { path } = config.server

    const app = await configureServer()
    app.get("/", (req, res) => res.redirect(path))
    return app
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export const viteNodeApp = main()
