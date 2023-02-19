import React from 'react'

export default function Dialog ({ isOpen }) {
  return <div className={isOpen ? '' : 'hidden'}>
    <span className="shadow-2xl w-screen absolute z-20"></span>
  </div>
}
