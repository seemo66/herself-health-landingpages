import React from 'react'
import { render } from '@testing-library/react'
import ComparisonTable from '../../components/membership/ComparisonTable'

test('ComparisonTable renders without crashing', () => {
  const { container } = render(<ComparisonTable />)
  expect(container).toBeInTheDocument()
})
