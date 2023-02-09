import React from 'react'

function PatientLoginFormButtons ({ onLoginClick, onResendOTPClick, onValidateOTPClick }) {
  return (onLoginClick && !onResendOTPClick && !onValidateOTPClick)
    ? <>
      <div className="flex justify-evenly w-full">
        <button className="bg-black hover:bg-green-700 text-white text-lg font-semibold px-4 py-2 rounded">Resend OTP</button>
        <button className="bg-green-700 hover:bg-black text-white text-lg font-semibold px-4 py-2 rounded">Validate OTP</button>
      </div>
    </>
    : ((!onResendOTPClick && !onValidateOTPClick && onLoginClick)
      ? <>
        <div className="flex justify-evenly w-full">
          <button className="bg-green-700 hover:bg-black text-white text-lg font-semibold px-4 py-2 rounded">Login</button>
        </div>
      </>
      : <></>)
}

export default PatientLoginFormButtons
