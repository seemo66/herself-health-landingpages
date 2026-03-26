import React from 'react'
import { render, screen } from '@testing-library/react'

function Hello() {
  return <div>Hello Vitest</div>
}

test('renders Hello Vitest', () => {
  render(<Hello />)
  expect(screen.getByText('Hello Vitest')).toBeInTheDocument()
})
