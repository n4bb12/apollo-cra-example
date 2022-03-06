import { act } from "react-dom/test-utils"

export async function tick() {
  return await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0))
  })
}
