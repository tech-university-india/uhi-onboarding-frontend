import CustomInput from '@/components/CustomInput'
import FormBox from '@/components/FormBox'
import React from 'react'
import { SnackBarController } from '@/components/Snackbar'
import Dialog from '@/components/Dialog'
import PhoneLoginDialog from './PhoneLoginDialog'
import CustomButton from '@/components/CustomButton'
import { PulseLoader } from 'react-spinners'
import { validatePhoneNumber, validateAbhaNumber } from '@/utils/validators'

const LOGIN_TYPE = {
  OTP_VIA_ABHA: 'ABHA',
  OTP_VIA_MOBILE: 'MOBILE'
}

const OTP_STATUS = {
  SENT: 'SENT',
  NONE: 'NONE',
  VERIFIED: 'VERIFIED',
  SENDING: 'SENDING'
}

export default function UserLogin () {
  // Controllers
  const snackBar = SnackBarController()
  // Hooks
  const [credentials, setCredentials] = React.useState('')
  const [otpValue, setOtpValue] = React.useState('')
  const [currentLoginType, setCurrentLoginType] = React.useState(undefined)
  const [currentOtpStatus, setCurrentOtpStatus] = React.useState(OTP_STATUS.NONE)
  const [users, setUsers] = React.useState([])
  const [dialog, showDialog] = React.useState(false)

  // Local Component Functions
  const getLoginTypeRadioBox = (label, type) => (
    <div className="mb-3 text-xl">
      <input
        disabled={[OTP_STATUS.SENT, OTP_STATUS.SENDING].includes(
          currentOtpStatus
        )}
        type="radio"
        value={type}
        id={type}
        onChange={(e) => {
          setCurrentLoginType(e.target.value)
        }}
        name="loginType"
        className="w-4 h-4 mr-3"
      />
      <label htmlFor={type}>{label}</label>
    </div>
  )
  const loginWithOTP = (label) => (
    <>
      <p className="font-bold text-xl my-6 pl-1">Login with OTP</p>
      <CustomInput
        value={otpValue}
        onChange={handleOTPInputOnChange}
        label={label}
        placeholder={'Enter OTP'}
      />
    </>
  )

  // Button Handlers
  const handlePhoneLoginUserSelection = (selectedUser) => {
    snackBar.showSnackbar({ title: `User ${users[selectedUser].name} selected`, type: 'success' })
    showDialog(false)
  }

  const handleSendOTP = (event) => {
    event.preventDefault()
    try {
      if (!currentLoginType) {
        throw new Error('Invalid Login Type')
      }
      const validatedCredentials =
                currentLoginType === LOGIN_TYPE.OTP_VIA_ABHA
                  ? validateAbhaNumber(credentials)
                  : validatePhoneNumber(credentials)

      setCurrentOtpStatus(OTP_STATUS.SENDING)
      setTimeout(() => {
        setCurrentOtpStatus(OTP_STATUS.SENT)
      }, 2000)

      // API LOGIC
    } catch (error) {
      // Show SnackBar Error
      snackBar.showSnackbar({ title: error.message, type: 'error' })
    }
  }

  const handleResendOtp = (e) => { e.preventDefault() }
  const handleValidateOtp = (e) => {
    e.preventDefault()
    if (currentLoginType === LOGIN_TYPE.OTP_VIA_MOBILE) {
      // Show Dialog
      setUsers([
        { healthId: '143453535', name: 'Saatwik' },
        { healthId: '143453535', name: 'Saatwik' },
        { healthId: '143453535', name: 'Saatwik' },
        { healthId: '143453535', name: 'Saatwik' }
      ])
      showDialog(true)
    }
  }

  // Input Handlers
  const handleCredentialsInputOnChange = (event) => { setCredentials(event.target.value) }
  const handleOTPInputOnChange = (event) => { setOtpValue(event.target.value) }

  return (
    <>
      <Dialog isOpen={dialog}>
        <PhoneLoginDialog handlePhoneLoginUserSelection={handlePhoneLoginUserSelection} users={users} />
      </Dialog>

      <div className="flex-grow flex m-10 justify-center items-center">
        <FormBox>
          <p className="font-bold text-xl mt-2 mb-3">Login Using:</p>
          {getLoginTypeRadioBox(
            'ABHA Number',
            LOGIN_TYPE.OTP_VIA_ABHA
          )}
          {getLoginTypeRadioBox(
            'Mobile Number',
            LOGIN_TYPE.OTP_VIA_MOBILE
          )}
          <div className="mt-8">
            {currentLoginType && (
              <>
                <CustomInput
                  value={credentials}
                  className="mt-12"
                  label={
                    currentLoginType ===
                                        LOGIN_TYPE.OTP_VIA_MOBILE
                      ? 'Mobile Number'
                      : 'ABHA Number'
                  }
                  placeholder={
                    currentLoginType ===
                                        LOGIN_TYPE.OTP_VIA_MOBILE
                      ? 'Enter Mobile Number (without country code)'
                      : 'Enter your ABHA Number'
                  }
                  onChange={handleCredentialsInputOnChange}
                  disabled={
                    currentOtpStatus === OTP_STATUS.SENT
                  }
                />
              </>
            )}
          </div>
          {currentLoginType &&
                        currentOtpStatus === OTP_STATUS.NONE && (
            <CustomButton
              disabled={
                OTP_STATUS.SENDING === currentOtpStatus
              }
              text={'Send OTP'}
              onClick={handleSendOTP}
            />
          )}

          {currentOtpStatus === OTP_STATUS.SENDING &&
                        currentLoginType && (
            <>
              <div className="flex items-center justify-center mt-12">
                <div className="flex flex-col items-center justify-center">
                  <PulseLoader
                    color="#15803c"
                    size={20}
                  />
                  <div className="mt-3">Sending OTP</div>
                </div>
              </div>
            </>
          )}

          {currentOtpStatus === OTP_STATUS.SENT &&
                        currentLoginType && (
            <>
              {loginWithOTP(
                currentLoginType === LOGIN_TYPE.OTP_VIA_ABHA
                  ? 'Enter OTP (OTP sent to ABHA linked mobile number)'
                  : 'Enter OTP (OTP sent to aadhaar linked mobile number)'
              )}
              <div className="flex justify-around">
                <CustomButton
                  text={'Resend OTP'}
                  onClick={handleResendOtp}
                />
                <CustomButton
                  text={'Validate OTP'}
                  onClick={handleValidateOtp}
                />
              </div>
            </>
          )}
        </FormBox>
      </div>
    </>
  )
}
