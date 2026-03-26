import React from 'react'
import { render } from '@testing-library/react'
import HeroSection from '../../components/membership/HeroSection'

test('membership HeroSection renders without crashing', () => {
  const { container } = render(<HeroSection />)
  expect(container).toBeInTheDocument()
})
