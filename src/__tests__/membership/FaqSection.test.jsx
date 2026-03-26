import React from 'react'
import { render } from '@testing-library/react'
import FaqSection from '../../components/membership/FaqSection'

test('FaqSection renders without crashing', () => {
  const { container } = render(<FaqSection />)
  expect(container).toBeInTheDocument()
})
