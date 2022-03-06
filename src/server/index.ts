import { ApolloServer } from "apollo-server"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { authorResolvers } from "./author/resolvers"
import { authorsTypeDefs } from "./author/typeDefs"
import { bookResolvers } from "./book/resolvers"
import { bookTypeDefs } from "./book/typeDefs"
import { sharedTypeDefs } from "./shared/typeDefs"

const server = new ApolloServer({
  typeDefs: [bookTypeDefs, authorsTypeDefs, sharedTypeDefs],
  resolvers: [bookResolvers, authorResolvers],
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
