import { gql } from "apollo-server"

export const sharedTypeDefs = gql`
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
`
