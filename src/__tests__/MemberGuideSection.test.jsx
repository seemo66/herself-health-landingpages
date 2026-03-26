import React from 'react'
import { render, screen } from '@testing-library/react'
import GuideSection from '../components/member/GuideSection'

test('Member GuideSection renders heading and download button triggers scroll', () => {
  const originalGet = document.getElementById
  document.getElementById = () => ({ scrollIntoView: () => {} })

  render(<GuideSection />)
  expect(screen.getByText(/The Comprehensive Women's Health Roadmap\./i)).toBeInTheDocument()
  const btn = screen.getByRole('button', { name: /Download your guide/i })
  expect(btn).toBeInTheDocument()

  document.getElementById = originalGet
})
