import { config } from "../config"
import { startServer } from "./server"

startServer()
  .then((app) => {
    app.get("/", (req, res) => res.redirect(config.server.path))
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
