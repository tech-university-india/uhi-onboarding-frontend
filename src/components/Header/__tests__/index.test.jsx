import React from 'react'
import Header from '..'

import { render } from '@testing-library/react'

describe('Header', () => {
  it('should render the component with text props', () => {
<<<<<<< HEAD
    const headerComponent = render(<Header />).asFragment()
    expect(headerComponent).toMatchSnapshot()
=======
    const { getByText } = render(<Header text="Hello" />)
    expect(getByText('Hello')).toBeTruthy()
>>>>>>> 7c41bf4cb89a08d93ad6bd8c32aec395b04c0f51
  })
})
