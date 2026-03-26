import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import WaitingListForm from '../components/shared/WaitingListForm'
import { vi } from 'vitest'

beforeEach(() => {
  // reset mocks and any global dataLayer
  global.fetch = undefined
  delete window.dataLayer
})

test('submits the form and shows success overlay', async () => {
  // mock fetch to return ok
  global.fetch = vi.fn(() => Promise.resolve({ ok: true }))

  render(<WaitingListForm />)

  // fill in required inputs
  const firstName = screen.getByLabelText(/First Name/i)
  const lastName = screen.getByLabelText(/Last Name/i)
  const email = screen.getByLabelText(/Email Address/i)
  const phone = screen.getByLabelText(/Phone Number/i)

  fireEvent.change(firstName, { target: { value: 'Jane' } })
  fireEvent.change(lastName, { target: { value: 'Doe' } })
  fireEvent.change(email, { target: { value: 'jane@example.com' } })
  fireEvent.change(phone, { target: { value: '(555) 555-5555' } })

  // select a health coverage radio option
  const option = screen.getByLabelText(/Medicare Advantage/i)
  fireEvent.click(option)

  // submit form
  const submit = screen.getByRole('button', { name: /Request an Appointment/i })
  fireEvent.click(submit)

  // wait for fetch to have been called and success text to appear
  await waitFor(() => expect(global.fetch).toHaveBeenCalled())

  const thankYou = await screen.findByText(/Thank you!/i)
  expect(thankYou).toBeInTheDocument()
})
