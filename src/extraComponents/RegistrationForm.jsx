import React from 'react'
function RegistrationForm () {
  return (<div className="antialiased text-gray-900 font-sans mt-12">
    <div className="items-center h-screen w-full">
      <div className="w-full bg-white rounded shadow-xl p-12 m-8 md:max-w-xl md:mx-auto">
        <form className="mb-4" action="/" method="post">
          <div className="mb-6 ">
            <label htmlFor="OTP" className="block text-xs mb-1">Enter OTP</label>
            <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="OTPInput" name="OTPInput" id="OTPInput" placeholder="Enter OTP"></input>
          </div>
          <div className="mb-6 ">
            <label htmlFor="OTP" className="block text-xs mb-1">Enter Mobile Number</label>
            <input className="w-full border rounded p-2 outline-none focus:shadow-outline" type="mobileInput" name="mobileInput" id="mobileInput" placeholder="Enter Mobile Number"></input>
          </div>
          <div className="flex justify-evenly w-full">
            <button className="bg-green-700 hover:bg-black text-white  text-lg font-semibold px-4 py-2 rounded">Submit</button>
          </div>

        </form>
      </div>
    </div>
  </div>)
}
export default RegistrationForm
