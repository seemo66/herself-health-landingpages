import React from 'react'
import { render } from '@testing-library/react'
import NextStepSection from '../../components/membership/NextStepSection'

test('NextStepSection renders without crashing', () => {
  const { container } = render(<NextStepSection />)
  expect(container).toBeInTheDocument()
})
