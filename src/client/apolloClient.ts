import { ApolloClient, InMemoryCache } from "@apollo/client"

const apiOrigin = process.env.REACT_APP_API_ORIGIN

if (!apiOrigin) {
  throw new Error("Please set REACT_APP_API_ORIGIN")
}

export const apolloClient = new ApolloClient({
  uri: apiOrigin,
  cache: new InMemoryCache(),
})
