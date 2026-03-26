import React from 'react'
import { render, screen } from '@testing-library/react'
import WaitingListSection from '../components/medicare/WaitingListSection'

test('Medicare WaitingListSection has headline and call number', () => {
  render(<WaitingListSection />)
  expect(screen.getByText(/Schedule Your 90-Minute Welcome Visit/i)).toBeInTheDocument()
  expect(screen.getByText(/Original Medicare \(Parts A & B\) is welcome/i)).toBeInTheDocument()
  expect(screen.getByText(/\(877\) 487-4554/)).toBeInTheDocument()
})
