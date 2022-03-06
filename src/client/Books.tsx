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
  const { loading, error, data } = useGetBooksQuery({
    pollInterval: 1000,
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
