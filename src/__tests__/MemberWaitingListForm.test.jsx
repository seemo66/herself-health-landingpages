import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import WaitingListForm from '../components/member/WaitingListForm'
import { vi } from 'vitest'

beforeEach(() => {
  global.fetch = undefined
})

test('member WaitingListForm submits successfully', async () => {
  global.fetch = vi.fn(() => Promise.resolve({ ok: true }))

  render(<WaitingListForm />)

  fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Alex' } })
  fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Lee' } })
  fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'alex@example.com' } })
  fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '(555) 987-6543' } })
  fireEvent.click(screen.getByLabelText(/Medicare Advantage/i))

  fireEvent.click(screen.getByRole('button', { name: /Send me the guide/i }))

  await waitFor(() => expect(global.fetch).toHaveBeenCalled())
  expect(await screen.findByText(/Thank you for inquiring/i)).toBeInTheDocument()
})
