import React from 'react'
import { render, screen } from '@testing-library/react'
import ServicesSectionOne from '../components/member/ServicesSectionOne'

test('ServicesSectionOne renders heading', () => {
  render(<ServicesSectionOne />)
  expect(screen.getByText(/The Reality of Healthcare Today\./i)).toBeInTheDocument()
})
