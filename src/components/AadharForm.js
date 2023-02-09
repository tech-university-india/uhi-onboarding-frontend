import logo from '../Assets/uhi-logo.png';
import Image from 'next/image';
import { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import RegistrationForm from './RegistrationForm';
import Alert from './Alert';
import AadharConditional from './AadharConditional';

function AadharForm(props) {

  const [input, setInput] = useState('');
  const [valid, setValid] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // advanced aadhar validation regex with optional space
    const validationRegex = /^\d{4}\s?\d{4}\s?\d{4}$/;

    if (!validationRegex.test(input)) {
      setAlert(true);
      setInput('');
    }
    else {
      setAlert(false);
      setValid(true);
    }
  }

  return (


    <div class="antialiased text-gray-900 font-sans">
      <div class="items-center h-screen w-full">
        <div class="w-full bg-white rounded shadow-xl p-12 m-8 md:max-w-xl md:mx-auto">
          <form class="mb-4" method="GET">
            <Image src={logo} alt="UHI Logo" class='w-max' />
            <div class="mb-6 ">
              <label htmlFor="aadharNum" class="block text-xs mb-1">Aadhar Number</label>
              <input onChange={(e) => setInput(e.target.value)} value={input} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="aadharInput" name="aadharInput" id="aadharInput" placeholder="Aadhar Number"></input>
              {
                alert && <Alert setAlert={setAlert} setInput={setInput} />
              }
            </div>
            <div className={`justify-evenly w-full ${valid ? '' : 'flex'}`}>

              {
                !valid && <button class="bg-black hover:bg-green-700 text-white  text-lg font-semibold px-4 py-2 rounded">Back</button>
              }
              {
                valid && <AadharConditional />
              }
              {
                !valid && <Link href='/onboarding/user/otp'><button className="bg-green-700 hover:bg-black text-white  text-lg font-semibold px-4 py-2 rounded" onClick={handleSubmit} > Send OTP</button></Link>
              }
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
export default AadharForm;