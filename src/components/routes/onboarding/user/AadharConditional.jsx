import React from 'react'

function AadharConditional ({ setAlert }) {
  return (
    <>
      <div className="mb-6" >
        <label htmlFor="OTP" className="block text-xs mb-1">Enter OTP</label>
        <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="OTPInput" name="OTPInput" id="OTPInput" placeholder="Enter OTP"></input>
      </div>
      <div className="mb-6 ">
        <label htmlFor="OTP" className="w-full block text-xs mb-1">Enter Mobile Number</label>
        <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="mobileInput" name="mobileInput" id="mobileInput" placeholder="Enter Mobile Number"></input>
      </div>
      <div className="flex justify-evenly w-full">
        <button className="bg-black hover:bg-green-700 text-white  text-lg font-semibold px-4 py-2 rounded">Back</button>
        <button className="bg-green-700 hover:bg-black text-white  text-lg font-semibold px-4 py-2 rounded">Submit</button>
      </div>
    </>

  )
}
export default AadharConditional
