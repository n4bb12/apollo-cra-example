import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core"
import { ApolloServer } from "apollo-server-express"
import express from "express"
import http from "http"
import { appConfig } from "src/config"
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

export async function configureServer() {
  const { graphqlPath } = appConfig.server

  const app = express()
  const httpServer = http.createServer(app)
  const apolloServer = createApolloServer(httpServer)
  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path: graphqlPath })

  return app
}
