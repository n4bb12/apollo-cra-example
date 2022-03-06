import { gql } from "apollo-server-core"

export const authorsTypeDefs = gql`
  type Author {
    name: String!
  }

  type Query {
    authors: [Author!]!
  }
`
