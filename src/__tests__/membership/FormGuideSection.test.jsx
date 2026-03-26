import React from 'react'
import { render } from '@testing-library/react'
import FormGuideSection from '../../components/membership/FormGuideSection'

test('FormGuideSection renders without crashing', () => {
  const { container } = render(<FormGuideSection />)
  expect(container).toBeInTheDocument()
})
