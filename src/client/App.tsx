import { FC } from "react"
import { Books } from "./Books"
import { Providers } from "./Providers"

export const App: FC = () => {
  return (
    <Providers>
      <Books />
    </Providers>
  )
}
