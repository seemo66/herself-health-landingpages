import React from 'react'
import { render } from '@testing-library/react'
import MembershipDetailsSection from '../../components/membership/MembershipDetailsSection'

test('MembershipDetailsSection renders without crashing', () => {
  const { container } = render(<MembershipDetailsSection />)
  expect(container).toBeInTheDocument()
})
