import { screen } from "@testing-library/react"
import { Books, GET_BOOKS } from "./Books"
import { customRender, GraphqlMock } from "./test/customRender"
import { tick } from "./test/tick"

const success: GraphqlMock = {
  request: {
    query: GET_BOOKS,
  },
  result: {
    data: {
      books: [{ title: "Test Book" }],
    },
  },
}

const error: GraphqlMock = {
  request: {
    query: GET_BOOKS,
  },
  error: new Error("Test Error"),
}

describe("Books", () => {
  it("shows a loading indicator", async () => {
    customRender(<Books />)
    expect(
      screen.getByText((content) => content.includes("Loading")),
    ).toBeInTheDocument()
  })

  it("shows data", async () => {
    customRender(<Books />, { mocks: [success] })
    await tick()
    expect(
      screen.getByText((content) => content.includes("Test Book")),
    ).toBeInTheDocument()
  })

  it("shows an error", async () => {
    customRender(<Books />, { mocks: [error] })
    await tick()
    expect(
      screen.getByText((content) => content.includes("Error")),
    ).toBeInTheDocument()
  })
})
