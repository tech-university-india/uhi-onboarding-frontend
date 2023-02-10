import CustomInput from '@/components/CustomInput'
import FormBox from '@/components/FormBox'
import PatientLoginFormButtons from '@/components/PatientLoginFormButtons'
import React from 'react'

const LOGIN_TYPE = {
  OTP_VIA_AADHAR: 'AADHAAR_OTP', OTP_VIA_MOBILE: 'MOBILE_OTP'
}

export default function UserLogin () {
  const [abhaNumber, setAbhaNumber] = React.useState('')
  const [mobileNumber, setMobileNumber] = React.useState('')
  const [currentLoginType, setCurrentLoginType] = React.useState(undefined)
  const [loginFlowStarted, setLoginFlowStarted] = React.useState(false)
  const [otpSent, setOtpSent] = React.useState(false)

  const getLoginTypeRadioBox = (label, type) => <div className="mb-3 text-xl" >
    <input disabled={loginFlowStarted} type="radio" value={type} id={type} onChange={(e) => {
      setCurrentLoginType(e.target.value)
    }} name="loginType" className="mr-3" /><label htmlFor={type}>{label}</label>
  </div>

  const loginWithOTP = (label) => (<>
    <p className="font-bold text-xl my-6 pl-1">Login with OTP</p>
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
    } else {
      setAbhaNumber('')
    }
  }

  const handleMobileNumberOnChange = (event) => {
    const input = event.target.value
    if (event.target.value.length < 10 && mobileNumber !== '') {
      setMobileNumber('')
      return
    }
    // mobile number regex
    const mobileRegex = /^[0-9]{10}$/
    if (mobileRegex.test(input)) {
      setMobileNumber(input)
    } else {
      setMobileNumber('')
    }
  }

  const handleStartLoginFlow = (event) => {
    if (currentLoginType !== undefined) {
      setLoginFlowStarted(true)
    } else {
      event.preventDefault()
    }
  }

  const handleSendOTP = (event) => {
    // TODO: refactor to generalize the validators as well

    if (currentLoginType === LOGIN_TYPE.OTP_VIA_AADHAR && abhaNumber !== '') {
      getSendOTPHandlerFor[currentLoginType](event)
      setOtpSent(true)
    } else if (currentLoginType === LOGIN_TYPE.OTP_VIA_MOBILE && mobileNumber !== '') {
      getSendOTPHandlerFor[currentLoginType](event)
      setOtpSent(true)
    } else {
      event.preventDefault()
    }
  }

  const getSendOTPHandlerFor = {
    [LOGIN_TYPE.OTP_VIA_AADHAR]: (event) => {
      event?.preventDefault()
    },
    [LOGIN_TYPE.OTP_VIA_MOBILE]: (event) => {
      event?.preventDefault()
    }
  }

  const getResendOTPHandlerFor = {
    [LOGIN_TYPE.OTP_VIA_AADHAR]: (event) => {
      event?.preventDefault()
    },
    [LOGIN_TYPE.OTP_VIA_MOBILE]: (event) => {
      event?.preventDefault()
    }
  }

  const getVerifyLoginHandlerFor = {
    [LOGIN_TYPE.OTP_VIA_AADHAR]: (event) => {
      event?.preventDefault()
    },
    [LOGIN_TYPE.OTP_VIA_MOBILE]: (event) => {
      event?.preventDefault()
    }
  }

  return <>
    {/* <div></div> Header */}
    <div className="justify-center flex">
      <FormBox>
        <p className="font-bold text-xl mt-2 mb-3">Login Using:</p>
        {getLoginTypeRadioBox('ABHA Number', LOGIN_TYPE.OTP_VIA_AADHAR)}
        {getLoginTypeRadioBox('Mobile Number', LOGIN_TYPE.OTP_VIA_MOBILE)}

        <div className="mt-8">
          {
            loginFlowStarted && currentLoginType && <>
              {
                currentLoginType === LOGIN_TYPE.OTP_VIA_AADHAR &&
                <CustomInput className="mt-12" label={'ABHA Number'} placeholder={'Enter ABHA Number'} onChange={handleAbhaNumberOnChange} disabled={otpSent}></CustomInput>
              }
              {
                currentLoginType === LOGIN_TYPE.OTP_VIA_MOBILE &&
                <CustomInput className="mt-12" label={'Mobile Number'} placeholder={'Enter Mobile Number (without country code)'} onChange={handleMobileNumberOnChange} disabled={otpSent}></CustomInput>
              }
            </>
          }
        </div>

        {otpSent && currentLoginType && <> <div>
          {currentLoginType === LOGIN_TYPE.OTP_VIA_AADHAR && loginWithOTP('Enter OTP (OTP sent to aadhaar linked mobile number)')}
        </div>
        <div>
          {otpSent && currentLoginType === LOGIN_TYPE.OTP_VIA_MOBILE && loginWithOTP('Enter OTP (OTP sent to ABHA linked mobile number)')}

        </div>
        {currentLoginType === LOGIN_TYPE.PERSONAL_DETAILS && <div>
          <p className="font-bold text-xl mt-8 mb-5">Login with Personal Details</p>
          <CustomInput label={'Name'} placeholder={'Enter the name'} />
          <br />
          <div className="flex justify-between">
            <div className="flex-row">
              <div className="flex">
                <label htmlFor="gender">Gender</label> <div className="text-red-500 font-medium text-2xl">&nbsp;*</div>
              </div>
              <select className="w-full border rounded-md px-5 pt-4 pb-5 outline-none focus:shadow-outline" name="gender" id="gender">
                {['Male', 'Female'].map(element => <option key={Math.random()} value={element}>{element}</option>)}
              </select>
            </div>
            <CustomInput label={'Year of Birth'} placeholder={'Enter Year'} type={'number'} />
          </div>
        </div>}</>}

        {!loginFlowStarted && !otpSent &&
          <PatientLoginFormButtons onLoginClick={handleStartLoginFlow} />}

        {loginFlowStarted && !otpSent &&
          <PatientLoginFormButtons onLoginClick={handleSendOTP} />}

        {otpSent && currentLoginType && <>
          {currentLoginType === LOGIN_TYPE.OTP_VIA_AADHAR &&
            <PatientLoginFormButtons
              onValidateOTPClick={getVerifyLoginHandlerFor[LOGIN_TYPE.OTP_VIA_AADHAR]}
              onResendOTPClick={getResendOTPHandlerFor[LOGIN_TYPE.OTP_VIA_AADHAR]}
            />
          }

          {currentLoginType === LOGIN_TYPE.OTP_VIA_MOBILE &&
            <PatientLoginFormButtons
              onValidateOTPClick={getVerifyLoginHandlerFor[LOGIN_TYPE.OTP_VIA_MOBILE]}
              onResendOTPClick={getResendOTPHandlerFor[LOGIN_TYPE.OTP_VIA_MOBILE]}
            />
          }

          {currentLoginType === LOGIN_TYPE.PERSONAL_DETAILS &&
            <PatientLoginFormButtons onLoginClick={getVerifyLoginHandlerFor[LOGIN_TYPE.PERSONAL_DETAILS]} />
          }
        </>}
      </FormBox>

    </div>

    {/* <div></div> Footer */}
  </>
}
