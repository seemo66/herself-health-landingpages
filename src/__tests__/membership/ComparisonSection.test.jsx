import React from 'react'
import { render } from '@testing-library/react'
import ComparisonSection from '../../components/membership/ComparisonSection'

test('ComparisonSection renders without crashing', () => {
  const { container } = render(<ComparisonSection />)
  expect(container).toBeInTheDocument()
})
