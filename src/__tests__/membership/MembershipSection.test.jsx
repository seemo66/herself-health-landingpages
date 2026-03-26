import React from 'react'
import { render } from '@testing-library/react'
import MembershipSection from '../../components/membership/MembershipSection'

test('MembershipSection renders without crashing', () => {
  const { container } = render(<MembershipSection />)
  expect(container).toBeInTheDocument()
})
