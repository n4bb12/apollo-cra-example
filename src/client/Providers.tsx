import { ApolloProvider } from "@apollo/client"
import { FC } from "react"
import { apolloClient } from "./apolloClient"

export const Providers: FC = ({ children }) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
)
