import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import HeroSection from '../components/shared/HeroSection'
import { vi } from 'vitest'

test('HeroSection renders headline and CTA and calls scrollIntoView when CTA clicked', () => {
  const scrollMock = vi.fn()
  // mock getElementById to return an object with scrollIntoView
  const originalGetElementById = document.getElementById
  document.getElementById = () => ({ scrollIntoView: scrollMock })

  render(<HeroSection />)

  // headline
  expect(screen.getByText(/Finally – primary care that listens\./i)).toBeInTheDocument()

  // CTA button
  const cta = screen.getByRole('button', { name: /Request an Appointment/i })
  expect(cta).toBeInTheDocument()

  fireEvent.click(cta)
  expect(scrollMock).toHaveBeenCalled()

  // restore
  document.getElementById = originalGetElementById
})
