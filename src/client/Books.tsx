import { gql } from "@apollo/client"
import { FC } from "react"
import { useGetBooksQuery } from "./Books.generated"

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
    }
  }
`

export const Books: FC = () => {
  const { loading, error, data } = useGetBooksQuery()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error :(</div>

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
