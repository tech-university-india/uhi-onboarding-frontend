import React from 'react'
import CustomButton from '..'
const { render } = require('react-dom')
describe('Tests for Custom Button', () => {
  it('should render the button with text', () => {
    const { container, getByText } = React.createRoot(<CustomButton>Hello</CustomButton>)
    expect(container).toMatchSnapshot()
    expect(getByText('Hello')).toByTruthy()
  })
  it('should show inner shadow when the button is selected', () => {
    const { getByText } = render(<CustomButton isSelected>Hello</CustomButton>)
    getByText('Hello').toHaveClass('shadow-inner')
  })
})
