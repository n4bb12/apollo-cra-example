const { createProxyMiddleware } = require("http-proxy-middleware")
const { config } = require("./config")

module.exports = function (app) {
  const { port, path } = config.server

  app.use(
    path,
    createProxyMiddleware({
      target: `http://localhost:${port}`,
      changeOrigin: true,
    }),
  )
}
