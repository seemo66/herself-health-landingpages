import React from 'react'
import { render } from '@testing-library/react'
import Header from '../../components/membership/Header'

test('membership Header renders without crashing', () => {
  const { container } = render(<Header />)
  expect(container).toBeInTheDocument()
})
