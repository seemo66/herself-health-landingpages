import React from 'react'
import { render } from '@testing-library/react'
import OffersSection from '../../components/membership/OffersSection'

test('OffersSection renders without crashing', () => {
  const { container } = render(<OffersSection />)
  expect(container).toBeInTheDocument()
})
