import { QueryResolvers } from "src/server/types.generated"
import { mockBooks } from "../mocks"

export const books: QueryResolvers["books"] = () => {
  return mockBooks
}
