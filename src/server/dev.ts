import { appConfig } from "src/config"
import { configureServer } from "./apollo"

async function main() {
  try {
    const { graphqlPath } = appConfig.server

    const app = await configureServer()
    app.get("/", (req, res) => res.redirect(graphqlPath))
    return app
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export const viteNodeApp = main()
