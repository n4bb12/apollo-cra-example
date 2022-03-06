import { Resolvers } from "../types.generated"
import { addBook } from "./mutations/addBook"
import { books } from "./queries/books"

export const bookResolvers: Resolvers = {
  Query: {
    books,
  },
  Mutation: {
    addBook,
  },
}
