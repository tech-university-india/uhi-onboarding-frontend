
function AadharConditional({ setAlert }) {
  return (
    <>
      <div class="mb-6 ">
        <label for="OTP" class="block text-xs mb-1">Enter OTP</label>
        <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="OTPInput" name="OTPInput" id="OTPInput" placeholder="Enter OTP"></input>
      </div>
      <div class="mb-6 ">
        <label for="OTP" class="w-full block text-xs mb-1">Enter Mobile Number</label>
        <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="mobileInput" name="mobileInput" id="mobileInput" placeholder="Enter Mobile Number"></input>
      </div>
      <div class='flex justify-evenly w-full'>
        <button class="bg-black hover:bg-green-700 text-white  text-lg font-semibold px-4 py-2 rounded">Back</button>
        <button class="bg-green-700 hover:bg-black text-white  text-lg font-semibold px-4 py-2 rounded">Submit</button>
      </div>
    </>

  );
}
export default AadharConditional;