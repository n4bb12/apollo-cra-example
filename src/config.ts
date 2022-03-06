export const appConfig = {
  server: {
    port: +(process.env.PORT || 4000),
    graphqlPath: "/graphql",
  },
}
