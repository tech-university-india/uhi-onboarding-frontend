
import Image from 'next/image'
import React from 'react'
import UhiLogo from '../assets/uhi-logo.png'

const FormBox = ({
  children,
  buttons
}) => {
  return (<div className="antialiased text-gray-900 font-sans mt-12">
    <div className="items-center h-screen w-full">
      <div className="bg-white w-full flex-row justify-center rounded shadow-xl p-12 m-8 md:max-w-xl">
        <Image src={UhiLogo} alt="UHI Logo" className="w-max h-max" />
        <form className="mb-4">
          <div className="m-5">{children}</div>
        </form>
      </div>
    </div>
  </div>)
}

export default FormBox
