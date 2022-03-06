import { Resolvers } from "../types.generated"
import { getAuthors } from "./queries/getAuthors"

export const authorResolvers: Resolvers = {
  Query: {
    authors: getAuthors,
  },
}
