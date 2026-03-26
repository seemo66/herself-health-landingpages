import React from 'react'
import { render } from '@testing-library/react'
import HerselfHealthLogoSection from '../../components/membership/HerselfHealthLogoSection'

test('HerselfHealthLogoSection renders without crashing', () => {
  const { container } = render(<HerselfHealthLogoSection />)
  expect(container).toBeInTheDocument()
})
