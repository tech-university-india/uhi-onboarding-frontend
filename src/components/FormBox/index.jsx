import React from 'react'
import UhiLogo from '../images/UhiLogo'

const FormBox = ({ children, buttons }) => {
  return (
    <div className="antialiased text-gray-900 font-sans">
      <div className="bg-white flex-row justify-center rounded shadow-xl p-12 max-w-xl">
        <UhiLogo />
        <form>
          <div>{children}</div>
        </form>
      </div>
    </div>
  )
}

export default FormBox
