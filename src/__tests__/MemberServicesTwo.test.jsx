import React from 'react'
import { render, screen } from '@testing-library/react'
import ServicesSectionTwo from '../components/member/ServicesSectionTwo'

test('ServicesSectionTwo renders heading and guide id text', () => {
  render(<ServicesSectionTwo />)
  expect(screen.getByText(/The Difference: Time & Training\./i)).toBeInTheDocument()
  expect(screen.getByText(/That is why we built Herself Health Membership/i)).toBeInTheDocument()
})
