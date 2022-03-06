module.exports = {
  config: {
    server: {
      port: +(process.env.PORT || 4000),
      path: "/graphql",
    },
  },
}
