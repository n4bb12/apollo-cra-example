import { Resolvers } from "src/server/types.generated"
import { getAuthors } from "./queries/getAuthors"

export const authorResolvers: Resolvers = {
  Query: {
    authors: getAuthors,
  },
}
