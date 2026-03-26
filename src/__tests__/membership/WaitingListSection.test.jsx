import React from 'react'
import { render } from '@testing-library/react'
import WaitingListSection from '../../components/membership/WaitingListSection'

test('membership WaitingListSection renders without crashing', () => {
  const { container } = render(<WaitingListSection />)
  expect(container).toBeInTheDocument()
})
