import React from 'react'
import { render, screen } from '@testing-library/react'
import MembershipCard from '../components/membership/MembershipCard'

test('MembershipCard renders membership fields including bonus when provided', () => {
  const membership = {
    badge: 'Best Value',
    title: 'Premium Plan',
    priceLabel: 'Per month',
    price: '$29',
    introLabel: 'Intro price',
    introPrice: '$19',
    bonus: 'Free consult',
    description: 'Full access to care',
  }

  render(<MembershipCard membership={membership} />)

  expect(screen.getByText(/Best Value/i)).toBeInTheDocument()
  expect(screen.getByText(/Premium Plan/i)).toBeInTheDocument()
  expect(screen.getByText(/\$29/i)).toBeInTheDocument()
  expect(screen.getByText(/Intro price/i)).toBeInTheDocument()
  expect(screen.getByText(/\$19/i)).toBeInTheDocument()
  expect(screen.getByText(/Bonus: Free consult/i)).toBeInTheDocument()
  expect(screen.getByText(/Full access to care/i)).toBeInTheDocument()
})
