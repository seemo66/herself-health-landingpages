import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import GuideSection from '../components/shared/GuideSection'
import { vi } from 'vitest'

test('GuideSection renders heading and CTA and calls scrollIntoView when CTA clicked', () => {
  const scrollMock = vi.fn()
  const originalGetElementById = document.getElementById
  document.getElementById = () => ({ scrollIntoView: scrollMock })

  render(<GuideSection />)

  expect(screen.getByText(/Inside the Guide/i)).toBeInTheDocument()

  const cta = screen.getByRole('button', { name: /Request Appointment & Get Guide/i })
  expect(cta).toBeInTheDocument()

  fireEvent.click(cta)
  expect(scrollMock).toHaveBeenCalled()

  document.getElementById = originalGetElementById
})
