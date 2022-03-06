import express from "express"
import path from "path"
import { startServer } from "./server"

startServer()
  .then((app) => {
    const staticRootDir = path.join(__dirname, "../client")
    const index = path.join(staticRootDir, "/index.html")

    app.use(express.static(staticRootDir))
    app.get("/*", (req, res) => res.sendFile(index))
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
