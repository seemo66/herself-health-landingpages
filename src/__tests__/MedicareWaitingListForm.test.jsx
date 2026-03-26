import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import MedicareForm from '../components/medicare/WaitingListForm'
import { vi } from 'vitest'

beforeEach(() => {
  global.fetch = undefined
})

test('medicare WaitingListForm submits and shows thank you', async () => {
  global.fetch = vi.fn(() => Promise.resolve({ ok: true }))

  render(<MedicareForm />)

  fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Sam' } })
  fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Smith' } })
  fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'sam@example.com' } })
  fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '(555) 123-4567' } })
  fireEvent.click(screen.getByLabelText(/Medicare Advantage/i))

  fireEvent.click(screen.getByRole('button', { name: /Request an Appointment/i }))

  await waitFor(() => expect(global.fetch).toHaveBeenCalled())
  expect(await screen.findByText(/Thank you!/i)).toBeInTheDocument()
})
