
import React, { useState } from 'react'
import Link from 'next/link'
import Alert from '../../../Alert/Alert'
import AadharConditional from './AadharConditional'
import UhiLogo from '@/components/images/UhiLogo'

function AadharForm (props) {
  const [input, setInput] = useState('')
  const [valid, setValid] = useState(false)
  const [alert, setAlert] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    // advanced aadhar validation regex with optional space
    const validationRegex = /^\d{4}\s?\d{4}\s?\d{4}$/

    if (!validationRegex.test(input)) {
      setAlert(true)
      setInput('')
    } else {
      setAlert(false)
      setValid(true)
    }
  }

  return (

    <div className="antialiased text-gray-900 font-sans">
      <div className="items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-xl p-12 m-8 md:max-w-xl md:mx-auto">
          <form className="mb-4" method="GET">
            <UhiLogo />
            <div className="mb-6 ">
              <label htmlFor="aadharNum" className="block text-xs mb-1">Aadhar Number</label>
              <input onChange={(e) => setInput(e.target.value)} value={input} className="w-full border rounded p-2 outline-none focus:shadow-outline" type="aadharInput" name="aadharInput" id="aadharInput" placeholder="Aadhar Number"></input>
              {
                alert && <Alert setAlert={setAlert} setInput={setInput} />
              }
            </div>
            <div className={`justify-evenly w-full ${valid ? '' : 'flex'}`}>

              {
                !valid && <button className="bg-black hover:bg-green-700 text-white  text-lg font-semibold px-4 py-2 rounded">Back</button>
              }
              {
                valid && <AadharConditional />
              }
              {
                !valid && <Link href="/onboarding/user/otp"><button className="bg-green-700 hover:bg-black text-white  text-lg font-semibold px-4 py-2 rounded" onClick={handleSubmit} > Send OTP</button></Link>
              }
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
export default AadharForm
