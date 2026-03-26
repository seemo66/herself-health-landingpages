import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import FaqAccordion from '../../components/membership/FaqAccordion'

const sampleData = [
  {
    question: 'What is membership?',
    answer: { text: 'Membership description', list: ['item1', 'item2'], footer: 'footer' },
    btn: true,
  },
]

test('FaqAccordion renders and toggles an item', () => {
  render(<FaqAccordion questionData={sampleData} />)
  const q = screen.getByText(/What is membership\?/i)
  expect(q).toBeInTheDocument()

  // open accordion
  fireEvent.click(q.closest('button'))
  expect(screen.getByText(/Membership description/i)).toBeInTheDocument()
})
