import React from 'react'
import { render } from '@testing-library/react'
import GuideSection from '../../components/membership/GuideSection'

test('membership GuideSection renders without crashing', () => {
  const { container } = render(<GuideSection />)
  expect(container).toBeInTheDocument()
})
