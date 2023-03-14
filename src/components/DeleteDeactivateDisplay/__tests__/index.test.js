import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import DeleteDeactivateDisplay from '../'

describe('DeleteDeactivateDisplay', () => {
  it('renders the title', () => {
    const { getByText } = render(<DeleteDeactivateDisplay title="Change Password" />)
    expect(getByText('Change Password')).toBeInTheDocument()
  })
  it('opens the update method dropdown when the Change Password button is clicked', () => {
    const { getByText, queryByText } = render(<DeleteDeactivateDisplay title="Change Password" />)
    const outerButton = getByText('Change Password')
    fireEvent.click(outerButton)
    expect(queryByText('Update via')).toBeInTheDocument()
  })
  it('opens the update method dropdown when the Delete Account button is clicked', () => {
    const { getByText, queryByText } = render(<DeleteDeactivateDisplay title="Delete Account" />)
    const outerButton = getByText('Delete Account')
    fireEvent.click(outerButton)
    expect(queryByText('Update via')).toBeInTheDocument()
  })
  it('opens the update method dropdown when the Deactivate Account button is clicked', () => {
    const { getByText, queryByText } = render(<DeleteDeactivateDisplay title="Deactivate Account" />)
    const outerButton = getByText('Deactivate Account')
    fireEvent.click(outerButton)
    expect(queryByText('Update via')).toBeInTheDocument()
  })
  it('submits the new password form when the submit button is clicked', () => {
    const { getByText, queryByPlaceholderText } = render(<DeleteDeactivateDisplay title="Change Password" />)
    const outerButton = getByText('Change Password')
    fireEvent.click(outerButton)
    const updateMethodButton = getByText('Mobile')
    fireEvent.click(updateMethodButton)
    const submitButton = getByText('Submit')
    fireEvent.click(submitButton)
    expect(queryByPlaceholderText('New Password')).not.toBeInTheDocument()
    expect(queryByPlaceholderText('Old Password')).not.toBeInTheDocument()
  })
  it('submits the delete account form when the submit button is clicked', () => {
    const { getByText, queryByPlaceholderText } = render(<DeleteDeactivateDisplay title="Delete Account" />)
    const outerButton = getByText('Delete Account')
    fireEvent.click(outerButton)
    const updateMethodButton = getByText('Mobile')
    fireEvent.click(updateMethodButton)
    const submitButton = getByText('Submit')
    fireEvent.click(submitButton)
    expect(queryByPlaceholderText('Password')).not.toBeInTheDocument()
  }
  )
  it('submits the deactivate account form when the submit button is clicked', () => {
    const { getByText, queryByPlaceholderText } = render(<DeleteDeactivateDisplay title="Deactivate Account" />)
    const outerButton = getByText('Deactivate Account')
    fireEvent.click(outerButton)
    const updateMethodButton = getByText('Mobile')
    fireEvent.click(updateMethodButton)
    const submitButton = getByText('Submit')
    fireEvent.click(submitButton)
    expect(queryByPlaceholderText('Password')).not.toBeInTheDocument()
  }
  )
  it('closes the update method dropdown outer button is clicked again', () => {
    const { getByText, queryByText } = render(<DeleteDeactivateDisplay title="Change Password" />)
    const outerButton = getByText('Change Password')
    fireEvent.click(outerButton)
    fireEvent.click(outerButton)
    expect(queryByText('Update via')).not.toBeInTheDocument()
  }
  )
  it('closes the dropdown and the inputs when the outer button is clicked again', () => {
    const { getByText, queryByPlaceholderText } = render(<DeleteDeactivateDisplay title="Change Password" />)
    const outerButton = getByText('Change Password')
    fireEvent.click(outerButton)
    const updateMethodButton = getByText('Mobile')
    fireEvent.click(updateMethodButton)
    fireEvent.click(outerButton)
    expect(queryByPlaceholderText('New Password')).not.toBeInTheDocument()
    expect(queryByPlaceholderText('Old Password')).not.toBeInTheDocument()
  })
})
