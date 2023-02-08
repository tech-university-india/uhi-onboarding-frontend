import CustomInput from '@/components/CustomInput'
import FormBox from '@/components/FormBox'
import React from 'react'

const LOGIN_TYPE = {
  OTP_VIA_AADHAR: 'AADHAAR_OTP', OTP_VIA_MOBILE: 'MOBILT_OTP', PERSONAL_DETAILS: 'Personal Details'
}

export default function UserLogin () {
  const [abhaNumber, setAbhaNumber] = React.useState('')
  const [currentLoginType, setCurrentLoginType] = React.useState(undefined)
  const getLoginTypeRadioBox = (label, type) => <div className='mb-3 text-xl' >
        <input disabled={abhaNumber === ''} type="radio" value={type} id={type} onChange={(e) => {
          setCurrentLoginType(e.target.value)
        }} name="loginType" className='mr-3' /><label htmlFor={type}>{label}</label>
    </div>

  const loginWithOTP = (label) => (<>
        <p className='font-bold text-xl my-6 pl-1'>Login with OTP</p>
        <CustomInput label={label} placeholder={'Enter OTP'} />
    </>)

  const handleAbhaNumberOnChange = (event) => {
    const input = event.target.value
    if (event.target.value.length < 10 && abhaNumber !== '') {
      setAbhaNumber('')
      return
    }
    // abha number regex
    const abhaRegex = /^[0-9]{10}$/
    if (abhaRegex.test(input)) {
      setAbhaNumber(input)
    }
  }

  return <>
        {/* <div></div> Header */}
        <div className="justify-center flex">
            <FormBox >
                <CustomInput label={'ABHA Number'} placeholder={'Enter ABHA Number'} onChange={handleAbhaNumberOnChange}></CustomInput>
                <p className='font-bold text-xl mt-5 mb-3'>Login Using:</p>
                {getLoginTypeRadioBox('Personal Details', LOGIN_TYPE.PERSONAL_DETAILS)}
                {getLoginTypeRadioBox('OTP via Aadhar Number', LOGIN_TYPE.OTP_VIA_AADHAR)}
                {getLoginTypeRadioBox('OTP via Mobile Number ( Aadhaar not linked )', LOGIN_TYPE.OTP_VIA_MOBILE)}

                {currentLoginType && <> <div>
                    {currentLoginType === LOGIN_TYPE.OTP_VIA_AADHAR && loginWithOTP('Enter OTP ( OTP sent to aadhaar linked mobile number )')}
                </div>
                    <div>
                        {currentLoginType === LOGIN_TYPE.OTP_VIA_MOBILE && loginWithOTP('Enter OTP ( OTP sent to ABHA linked mobile number )')}

                    </div>
                    {currentLoginType === LOGIN_TYPE.PERSONAL_DETAILS && <div>
                        <p className='font-bold text-xl mt-8 mb-5'>Login with Personal Details</p>
                        <CustomInput label={'Name'} placeholder={'Enter the name'} />
                        <br />
                        <div className='flex justify-between'>
                            <div className='flex-row'>
                                <div className='flex'>
                                    <label htmlFor='gender'>Gender</label> <div className="text-red-500 font-medium text-2xl">&nbsp;*</div>
                                </div>
                                <select className='w-full border rounded-md px-5 pt-4 pb-5 outline-none focus:shadow-outline' name='gender' id='gender'>
                                    {['Male', 'Female'].map(element => <option key={Math.random()} value={element}>{element}</option>)}
                                </select>
                            </div>
                            <CustomInput label={'Year of Birth'} placeholder={'Enter Year'} type={'number'} />
                        </div>
                    </div>}</>}

                {/* TODO: ADD BUTTONS */}

            </FormBox>

        </div>

        {/* <div></div> Footer */}
    </>
}
