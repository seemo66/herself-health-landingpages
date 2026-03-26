import React from 'react'
import { render, screen } from '@testing-library/react'
import Testimonials from '../components/membership/Testimonials'
import { vi } from 'vitest'
import { act } from 'react-dom/test-utils'

test('Testimonials rotates items over time and renders dots', async () => {
  vi.useFakeTimers()

  render(<Testimonials />)

  // initial testimonial should be present
  expect(screen.getByText(/I love the longer appointment times/i)).toBeInTheDocument()

  // advance timers to rotate testimonials inside act
  act(() => {
    vi.advanceTimersByTime(4000)
  })

  // second testimonial visible
  expect(screen.getByText(/The care team was so kind and knowledgeable/i)).toBeInTheDocument()

  // dots exist (look for span dot elements)
  const dotEls = document.querySelectorAll('section .flex.justify-center span')
  expect(dotEls.length).toBeGreaterThanOrEqual(1)

  vi.useRealTimers()
})
