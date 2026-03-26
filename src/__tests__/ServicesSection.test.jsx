import React from 'react'
import { render, screen } from '@testing-library/react'
import ServicesSection from '../components/shared/ServicesSection'

test('ServicesSection renders heading and highlights; shows Medicare copy when prop true', () => {
  const { rerender } = render(<ServicesSection />)

  expect(screen.getByText(/Care Built Around You/i)).toBeInTheDocument()
  expect(screen.getByText(/More time with your provider/i)).toBeInTheDocument()

  // showMedicareCoverageCopy controls additional copy
  rerender(<ServicesSection showMedicareCoverageCopy={true} />)
  expect(screen.getByText(/Original Medicare \(Parts A & B\) welcome\./i)).toBeInTheDocument()
})
