import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries"
import { sha256 } from "crypto-hash"
import { appConfig } from "../config"

const apiOrigin = process.env.REACT_APP_API_ORIGIN

if (!apiOrigin) {
  throw new Error("Please set REACT_APP_API_ORIGIN")
}

const httpLink = new HttpLink({ uri: apiOrigin + appConfig.server.graphqlPath })
const persistedQueryLink = createPersistedQueryLink({
  sha256,
  useGETForHashedQueries: true,
})
const linkChain = persistedQueryLink.concat(httpLink)

export const apolloClient = new ApolloClient({
  link: linkChain,
  cache: new InMemoryCache(),
})
