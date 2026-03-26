import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '../components/shared/Header'

test('Header renders logo link and phone link with number', () => {
  render(<Header phone="(111) 222-3333" phoneHref="tel:1112223333" />)

  const homeLink = screen.getByRole('link', { name: /Herself Health home/i })
  expect(homeLink).toBeInTheDocument()

  const phoneLink = screen.getByRole('link', { name: /Herself Health phone/i })
  expect(phoneLink).toBeInTheDocument()
  expect(screen.getByText(/\(111\) 222-3333/)).toBeInTheDocument()
})
