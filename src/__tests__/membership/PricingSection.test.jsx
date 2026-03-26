import React from 'react'
import { render } from '@testing-library/react'
import PricingSection from '../../components/membership/PricingSection'

test('PricingSection renders without crashing', () => {
  const { container } = render(<PricingSection />)
  expect(container).toBeInTheDocument()
})
