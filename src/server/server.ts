import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core"
import { ApolloServer } from "apollo-server-express"
import express from "express"
import http from "http"
import { config } from "../config"
import { authorResolvers } from "./author/resolvers"
import { authorsTypeDefs } from "./author/typeDefs"
import { bookResolvers } from "./book/resolvers"
import { bookTypeDefs } from "./book/typeDefs"
import { sharedTypeDefs } from "./shared/typeDefs"

function createApolloServer(httpServer: http.Server) {
  return new ApolloServer({
    typeDefs: [bookTypeDefs, authorsTypeDefs, sharedTypeDefs],
    resolvers: [bookResolvers, authorResolvers],
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  })
}

export async function startServer() {
  const { port, path } = config.server

  const app = express()
  const httpServer = http.createServer(app)
  const apolloServer = createApolloServer(httpServer)
  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path })

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve))
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}${path}`)

  return app
}
