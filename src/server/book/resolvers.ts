import { Resolvers } from "src/server/types.generated"
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
