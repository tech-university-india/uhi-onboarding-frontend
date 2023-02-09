import React from 'react'

function PatientLoginFormButtons ({ onLoginClick, onResendOTPClick, onValidateOTPClick }) {
  return (onLoginClick && !onResendOTPClick && !onValidateOTPClick)
    ? (<>
      <div className="flex justify-evenly w-full mt-8">
        <button className="bg-green-700 hover:bg-black text-white text-lg font-semibold px-4 py-2 rounded" onClick={onLoginClick}>Login</button>
      </div>
    </>)
    : ((onResendOTPClick && onValidateOTPClick && !onLoginClick) &&
      <>
        <div className="flex justify-evenly w-full mt-8">
          <button className="bg-black hover:bg-green-700 text-white text-lg font-semibold px-4 py-2 rounded" onClick={onResendOTPClick}>Resend OTP</button>
          <button className="bg-green-700 hover:bg-black text-white text-lg font-semibold px-4 py-2 rounded" onClick={onValidateOTPClick}>Validate OTP</button>
        </div>
      </>
    )
}

export default PatientLoginFormButtons
