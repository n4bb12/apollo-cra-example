import { ApolloClient, InMemoryCache } from "@apollo/client"
import { config } from "../config"

const apiOrigin = process.env.REACT_APP_API_ORIGIN

if (!apiOrigin) {
  throw new Error("Please set REACT_APP_API_ORIGIN")
}

export const apolloClient = new ApolloClient({
  uri: apiOrigin + config.server.graphqlPath,
  cache: new InMemoryCache(),
})
