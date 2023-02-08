function PatientLoginFormButtons({ onLoginClick, onResendOTPClick, onValidateOTPClick }) {
  return (onLoginClick && !onResendOTPClick && !onValidateOTPClick) ? 
    <>
      <div class='flex justify-evenly w-full'>
        <button class="bg-black hover:bg-green-700 text-white text-lg font-semibold px-4 py-2 rounded">Resend OTP</button>
        <button class="bg-green-700 hover:bg-black text-white text-lg font-semibold px-4 py-2 rounded">Validate OTP</button>
      </div>
    </>
  : ((!onResendOTPClick && !onValidateOTPClick && onLoginClick) ? 
  <>
    <div class='flex justify-evenly w-full'>
      <button class="bg-green-700 hover:bg-black text-white text-lg font-semibold px-4 py-2 rounded">Login</button>
    </div>
  </> 
  : <></>);
}
