import logo from '../Assets/uhi-logo.png';
import Image from 'next/image';
function AadharForm(props) {
  return (<div class="antialiased text-gray-900 font-sans mt-12">
    <div class="items-center h-screen w-full">
      <div class="w-full bg-white rounded shadow-xl p-12 m-8 md:max-w-xl md:mx-auto">
        <form class="mb-4" action='/registration' method="GET">
        <Image src={logo} alt="UHI Logo" class='w-max'/>
          <div class="mb-6 ">
            <label for="aadharNum" class="block text-xs mb-1">Aadhar Number</label>
            <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="aadharInput" name="aadharInput" id="aadharInput" placeholder="Aadhar Number"></input>
          </div>
          <div class='flex justify-evenly w-full'>
            <button class="bg-black hover:bg-green-700 text-white  text-lg font-semibold px-4 py-2 rounded">Back</button>
            <button class="bg-green-700 hover:bg-black text-white  text-lg font-semibold px-4 py-2 rounded">Send OTP</button>
          </div>
        </form>
      </div>
    </div>
  </div>)
}
export default AadharForm;