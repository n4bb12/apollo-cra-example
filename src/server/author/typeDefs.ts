import { gql } from "apollo-server"

export const authorsTypeDefs = gql`
  type Author {
    name: String!
  }

  type Query {
    authors: [Author!]!
  }
`
