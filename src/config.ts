export const appConfig = {
  server: {
    port: +(
      process.env.PORT || (process.env.NODE_ENV === "production" ? 3000 : 4000)
    ),
    graphqlPath: "/api/graphql",
  },
}
