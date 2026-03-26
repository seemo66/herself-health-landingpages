import React from 'react'
import { render, screen } from '@testing-library/react'
import HeroSection from '../components/member/HeroSection'

test('Member HeroSection renders title and CTA', () => {
  const original = document.getElementById
  document.getElementById = () => ({ scrollIntoView: () => {} })

  render(<HeroSection />)
  expect(screen.getByText(/A Primary Care Membership Designed For Women 50\+/i)).toBeInTheDocument()
  const cta = screen.getByRole('button', { name: /Get the Free Guide/i })
  expect(cta).toBeInTheDocument()

  document.getElementById = original
})
