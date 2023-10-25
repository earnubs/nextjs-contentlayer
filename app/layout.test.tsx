import {render, screen} from '@testing-library/react'
import RootLayout from './layout'

describe("<RootLayout />", () => {
  test("renders as expected", () => {
    const { container } = render(<RootLayout>Test</RootLayout>)

    expect(container.firstChild).toMatchSnapshot();
  })
})
