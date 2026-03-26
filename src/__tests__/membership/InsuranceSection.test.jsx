import React from 'react'
import { render } from '@testing-library/react'
import InsuranceSection from '../../components/membership/InsuranceSection'

test('membership InsuranceSection renders without crashing', () => {
  const { container } = render(<InsuranceSection />)
  expect(container).toBeInTheDocument()
})
