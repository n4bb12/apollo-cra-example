import { QueryResolvers } from "../../types.generated"
import { mockBooks } from "../mocks"

export const books: QueryResolvers["books"] = () => {
  return mockBooks
}
