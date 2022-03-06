import { mockBooks } from "src/server/book/mocks"
import { QueryResolvers } from "src/server/types.generated"
import { mockAuthors } from "../mocks"

export const getAuthors: QueryResolvers["authors"] = () => {
  return mockAuthors.map((author) => ({
    ...author,
    books: mockBooks.filter((book) => book.authorName === author.name),
  }))
}
