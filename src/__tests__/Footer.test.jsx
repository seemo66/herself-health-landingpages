import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../components/shared/Footer'

test('Footer renders brand link and tagline', () => {
  render(<Footer />)
  const link = screen.getByRole('link', { name: /Herself Health home/i })
  expect(link).toBeInTheDocument()

  const tagline = screen.getByText(/Because your best self deserves the best care/i)
  expect(tagline).toBeInTheDocument()
})
