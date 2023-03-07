import React from 'react'
import Header from '..'

import { render } from '@testing-library/react'

describe('Header', () => {
  it('should render the component with text props', () => {
    const headerComponent = render(<Header />).asFragment()
    expect(headerComponent).toMatchSnapshot()
  })
})
