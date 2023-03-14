import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import DeactivatePage from '../index'

describe('DeactivatePage', () => {
  it('renders correctly', () => {
    const { container } = render(<DeactivatePage />)
    expect(container.firstChild).toMatchSnapshot()
  })
  it('renders the "Change Password" button', () => {
    render(<DeactivatePage />)
    const button = screen.getByText('Change Password')
    expect(button).toBeInTheDocument()
  })

  it('renders the "Deactivate Account" button', () => {
    render(<DeactivatePage />)
    const button = screen.getByText('Deactivate Account')
    expect(button).toBeInTheDocument()
  })

  it('renders the "Delete Account" button', () => {
    render(<DeactivatePage />)
    const button = screen.getByText('Delete Account')
    expect(button).toBeInTheDocument()
  })

  it('toggles the password change method when "Change Password" button is clicked', () => {
    render(<DeactivatePage />)
    const button = screen.getByText('Change Password')
    fireEvent.click(button)
    const aadharButton = screen.getByText('Aadhar')
    expect(aadharButton).toBeInTheDocument()
  })

  test('toggles the new password creation form when "Change Password" button is clicked twice', () => {
    render(<DeactivatePage />)
    const button = screen.getByText('Change Password')
    fireEvent.click(button)
    fireEvent.click(button)
    const submitButton = screen.queryByText('Submit')
    expect(submitButton).not.toBeInTheDocument()
  })

  test('creates a new password when "Submit" button is clicked', () => {
    render(<DeactivatePage />)
    const button = screen.getByText('Change Password')
    fireEvent.click(button)
    const aadharButton = screen.getByText('Aadhar')
    const mobileButton = screen.getByText('Mobile')
    const passwordButton = screen.getByText('Password')
    fireEvent.click(aadharButton)
    const firstInput = screen.getByTestId('first')
    fireEvent.change(firstInput, { target: { value: '1' } })
    const submitButton = screen.getByText('Submit')
    fireEvent.click(submitButton)
    expect(aadharButton).not.toBeInTheDocument()
    expect(mobileButton).not.toBeInTheDocument()
    expect(passwordButton).not.toBeInTheDocument()
  })
  it('', () => {
    render(<DeactivatePage />)
  })
})
