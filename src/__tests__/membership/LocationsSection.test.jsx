import React from 'react'
import { render } from '@testing-library/react'
import LocationsSection from '../../components/membership/LocationsSection'

test('membership LocationsSection renders without crashing', () => {
  const { container } = render(<LocationsSection />)
  expect(container).toBeInTheDocument()
})
