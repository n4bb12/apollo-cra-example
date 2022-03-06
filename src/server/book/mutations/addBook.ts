import assert from "ow"
import { mockAuthors } from "src/server/author/mocks"
import { AddBookResponse, MutationResolvers } from "src/server/types.generated"
import { mockBooks } from "../mocks"

export const addBook: MutationResolvers["addBook"] = (parent, args) => {
  assert(args, assert.object)
  assert(args.title, assert.string.nonEmpty)
  assert(args.authorName, assert.string.nonEmpty)

  if (mockBooks.find((book) => book.title === args.title)) {
    const response: AddBookResponse = {
      code: "ERR_ALREADY_EXISTS",
      message: "The book already exists.",
      success: false,
      book: null,
    }
    return response
  }

  mockBooks.push(args)

  if (!mockAuthors.find((author) => author.name === args.authorName)) {
    mockAuthors.push({ name: args.authorName })
  }

  const response: AddBookResponse = {
    code: "SUCCESS",
    message: "The book was created.",
    success: true,
    book: args,
  }
  return response
}
