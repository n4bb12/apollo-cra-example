import { MockedProvider, MockedResponse } from "@apollo/client/testing"
import { render, RenderOptions } from "@testing-library/react"
import { FC, ReactElement } from "react"

export type GraphqlMock = MockedResponse

export type CustomRenderOptions = RenderOptions & {
  mocks?: GraphqlMock[]
}

export const customRender = (
  children: ReactElement,
  { mocks, ...options }: CustomRenderOptions = {},
) => {
  const TestProviders: FC = ({ children }) => (
    <MockedProvider mocks={mocks}>{children}</MockedProvider>
  )
  return render(<MockedProvider mocks={mocks}>{children}</MockedProvider>, {
    wrapper: TestProviders,
    ...options,
  })
}
