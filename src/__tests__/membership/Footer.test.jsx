import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../../components/membership/Footer'

test('membership Footer renders without crashing', () => {
  const { container } = render(<Footer />)
  expect(container).toBeInTheDocument()
})
