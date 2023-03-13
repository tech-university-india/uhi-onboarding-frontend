import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Dropdown from '../index'

describe('Dropdown component', () => {
  it('renders dropdown button with title', () => {
    const title = 'Options'
    const { getByText } = render(<Dropdown title={title} />)
    const dropdownButton = getByText(title)
    expect(dropdownButton).toBeInTheDocument()
    expect(dropdownButton.tagName).toBe('BUTTON')
  })

  it('clicking on dropdown button toggles dropdown menu', () => {
    const title = 'Options'
    const { getByText, getByRole, queryByText } = render(
      <Dropdown title={title}>
        <div>Option 1</div>
        <div>Option 2</div>
      </Dropdown>
    )
    const dropdownButton = getByText(title)
    fireEvent.click(dropdownButton)
    expect(getByRole('menu')).toBeInTheDocument()
    fireEvent.click(dropdownButton)
    expect(queryByText('Option 1')).not.toBeInTheDocument()
  })

  it('renders dropdown menu with children when open', () => {
    const title = 'Options'
    const { getByText, getByRole } = render(
      <Dropdown title={title}>
        <div>Option 1</div>
        <div>Option 2</div>
      </Dropdown>
    )
    const dropdownButton = getByText(title)
    fireEvent.click(dropdownButton)
    expect(getByRole('menu')).toBeInTheDocument()
    expect(getByText('Option 1')).toBeInTheDocument()
    expect(getByText('Option 2')).toBeInTheDocument()
  })

  it('does not render dropdown menu when closed', () => {
    const title = 'Options'
    const { queryByRole } = render(
      <Dropdown title={title}>
        <div>Option 1</div>
        <div>Option 2</div>
      </Dropdown>
    )
    expect(queryByRole('menu')).not.toBeInTheDocument()
  })

  it('clicking on option in dropdown menu calls onClick function', () => {
    const title = 'Options'
    const onClick = jest.fn()
    const { getByText } = render(
      <Dropdown title={title}>
        <div onClick={onClick}>Option 1</div>
        <div>Option 2</div>
      </Dropdown>
    )
    const dropdownButton = getByText(title)
    fireEvent.click(dropdownButton)
    const option1 = getByText('Option 1')
    fireEvent.click(option1)
    expect(onClick).toHaveBeenCalled()
  })
})
