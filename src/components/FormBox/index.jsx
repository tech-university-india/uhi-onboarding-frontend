import React from 'react'
import UhiLogo from '../images/UhiLogo'

const FormBox = ({
  children,
  buttons
}) => {
  return (<div className="antialiased text-gray-900 font-sans mt-12">
    <div className="items-center h-screen w-full">
      <div className="bg-white w-full flex-row justify-center rounded shadow-xl p-12 m-8 md:max-w-xl">
        <UhiLogo />
        <form className="mb-2">
          <div className="m-5 mb-2">{children}</div>
        </form>
      </div>
    </div>
  </div>)
}

export default FormBox
