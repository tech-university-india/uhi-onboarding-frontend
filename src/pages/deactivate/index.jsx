import React from 'react'
import Header from '@/components/Header'
import DeleteDeactivateDisplay from '@/components/DeleteDeactivateDisplay'
// import Dropdown from '@/components/Dropdown'

const DeactivatePage = () => {
  return (
    <>
      <Header text="Ayush" />
      <DeleteDeactivateDisplay title="Change Password" background="options" />
      <DeleteDeactivateDisplay title="Deactivate Account" background="deactivate" />
      <DeleteDeactivateDisplay title="Delete Account" background="delete" />
    </>
  )
}

export default DeactivatePage
