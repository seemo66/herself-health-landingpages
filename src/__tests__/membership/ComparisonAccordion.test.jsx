import React from 'react'
import { render } from '@testing-library/react'
import ComparisonAccordion from '../../components/membership/ComparisonAccordion'

test('ComparisonAccordion renders without crashing', () => {
  const { container } = render(<ComparisonAccordion />)
  expect(container).toBeInTheDocument()
})
