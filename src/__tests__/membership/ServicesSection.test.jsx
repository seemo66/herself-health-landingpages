import React from 'react'
import { render } from '@testing-library/react'
import ServicesSection from '../../components/membership/ServicesSection'

test('membership ServicesSection renders without crashing', () => {
  const { container } = render(<ServicesSection />)
  expect(container).toBeInTheDocument()
})
