import { gql } from "apollo-server"

export const bookTypeDefs = gql`
  type Book {
    title: String
    authorName: String
  }

  type Query {
    books: [Book!]!
  }

  type AddBookResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    book: Book
  }

  type Mutation {
    addBook(title: String, authorName: String): AddBookResponse
  }
`
