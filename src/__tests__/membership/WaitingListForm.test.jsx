import React from 'react'
import { render } from '@testing-library/react'
import WaitingListForm from '../../components/membership/WaitingListForm'

test('membership WaitingListForm renders without crashing', () => {
  const { container } = render(<WaitingListForm />)
  expect(container).toBeInTheDocument()
})
