import React from 'react'
import { render } from '@testing-library/react'
import OurCareSection from '../../components/membership/OurCareSection'

test('OurCareSection renders without crashing', () => {
  const { container } = render(<OurCareSection />)
  expect(container).toBeInTheDocument()
})
