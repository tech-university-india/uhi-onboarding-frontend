import CustomInput from '@/components/CustomInput'
import FormBox from '@/components/FormBox'
import LoginFormButtons from '@/components/routes/login/user/LoginFormButtons'
import PulseLoader from 'react-spinners/PulseLoader'
import React from 'react'

const LOGIN_TYPE = {
  OTP_VIA_AADHAR: 'AADHAAR_OTP', OTP_VIA_MOBILE: 'MOBILE_OTP'
}

export default function UserLogin () {
  const [abhaNumber, setAbhaNumber] = React.useState('')
  const [mobileNumber, setMobileNumber] = React.useState('')
  const [currentLoginType, setCurrentLoginType] = React.useState(undefined)
  const [loginFlowStarted, setLoginFlowStarted] = React.useState(false)
  const [otpSending, setOtpSending] = React.useState(false)
  const [otpSent, setOtpSent] = React.useState(false)

  const getLoginTypeRadioBox = (label, type) => <div className="mb-3 text-xl" >
    <input disabled={otpSent} type="radio" value={type} id={type} onChange={(e) => {
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
    const abhaRegex = /^[0-9]{14}$/
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
    const mobileRegex = /^[1-9]{1}[0-9]{9}$/
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
    } else if (currentLoginType === LOGIN_TYPE.OTP_VIA_MOBILE && mobileNumber !== '') {
      getSendOTPHandlerFor[currentLoginType](event)
    } else {
      event.preventDefault()
    }
  }

  const getSendOTPHandlerFor = {
    [LOGIN_TYPE.OTP_VIA_AADHAR]: (event) => {
      event?.preventDefault()

      startSendingOTP()

      // TODO: put OTP sending logic here
      setTimeout(() => {
        stopSendingOTP()
      }, 1500)
    },
    [LOGIN_TYPE.OTP_VIA_MOBILE]: (event) => {
      event?.preventDefault()

      startSendingOTP()

      // TODO: place OTP sending logic here
      setTimeout(() => {
        stopSendingOTP()
      }, 1500)
    }
  }

  const startSendingOTP = () => {
    setOtpSending(true)
    setOtpSent(false)
  }

  const stopSendingOTP = () => {
    setOtpSent(true)
    setOtpSending(false)
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
    <div className="justify-center flex pb-16">
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

        {otpSending && !otpSent && currentLoginType && <>
          <div className="flex items-center justify-center mt-12">
            <div className="flex flex-col items-center justify-center">
              <PulseLoader color="#15803c" size={20} />
              <div className="mt-3">Sending OTP</div>
            </div>
          </div>
        </>}

        {otpSent && currentLoginType && <> <div>
          {currentLoginType === LOGIN_TYPE.OTP_VIA_AADHAR && loginWithOTP('Enter OTP (OTP sent to aadhaar linked mobile number)')}
        </div>
        <div>
          {otpSent && currentLoginType === LOGIN_TYPE.OTP_VIA_MOBILE && loginWithOTP('Enter OTP (OTP sent to ABHA linked mobile number)')}

        </div>
        </>}

        {!loginFlowStarted && !otpSent &&
          <LoginFormButtons onLoginClick={handleStartLoginFlow} />}

        {loginFlowStarted && !otpSent &&
          <LoginFormButtons onLoginClick={handleSendOTP} />}

        {otpSent && currentLoginType && <>
          {currentLoginType === LOGIN_TYPE.OTP_VIA_AADHAR &&
            <LoginFormButtons
              onValidateOTPClick={getVerifyLoginHandlerFor[LOGIN_TYPE.OTP_VIA_AADHAR]}
              onResendOTPClick={getResendOTPHandlerFor[LOGIN_TYPE.OTP_VIA_AADHAR]}
            />
          }

          {currentLoginType === LOGIN_TYPE.OTP_VIA_MOBILE &&
            <LoginFormButtons
              onValidateOTPClick={getVerifyLoginHandlerFor[LOGIN_TYPE.OTP_VIA_MOBILE]}
              onResendOTPClick={getResendOTPHandlerFor[LOGIN_TYPE.OTP_VIA_MOBILE]}
            />
          }

          {currentLoginType === LOGIN_TYPE.PERSONAL_DETAILS &&
            <LoginFormButtons onLoginClick={getVerifyLoginHandlerFor[LOGIN_TYPE.PERSONAL_DETAILS]} />
          }
        </>}
      </FormBox>

    </div>

    {/* <div></div> Footer */}
  </>
}
