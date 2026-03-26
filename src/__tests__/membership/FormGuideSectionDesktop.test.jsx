import React from 'react'
import { render } from '@testing-library/react'
import FormGuideSectionDesktop from '../../components/membership/FormGuideSectionDesktop'

test('FormGuideSectionDesktop renders without crashing', () => {
  const { container } = render(<FormGuideSectionDesktop />)
  expect(container).toBeInTheDocument()
})
