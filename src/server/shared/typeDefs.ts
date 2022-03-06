import { gql } from "apollo-server-core"

export const sharedTypeDefs = gql`
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
`
