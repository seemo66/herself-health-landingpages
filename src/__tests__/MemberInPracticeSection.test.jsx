import React from 'react'
import { render, screen } from '@testing-library/react'
import InPracticeSection from '../components/member/InPracticeSection'

test('InPracticeSection renders heading and highlights', () => {
  render(<InPracticeSection />)
  expect(screen.getByText(/Real Care, Designed by Women, for Women\./i)).toBeInTheDocument()
  expect(screen.getByText(/10,000\+ Women Served across the Twin Cities/i)).toBeInTheDocument()
})
