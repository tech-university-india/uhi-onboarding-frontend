import CustomInput from '@/components/CustomInput'
import FormBox from '@/components/FormBox'
import React from 'react'
import { SnackBarController } from '@/components/Snackbar'
import Dialog from '@/components/Dialog'
import PhoneLoginDialog from './PhoneLoginDialog'
import CustomButton from '@/components/CustomButton'
import { PulseLoader } from 'react-spinners'
import { validatePhoneNumber, validateAbhaNumber } from '@/utils/validators'
import screenText from 'screenText'

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
      <p className="font-bold text-xl my-6 pl-1">{screenText.login.loginWithOtp}</p>
      <CustomInput
        value={otpValue}
        onChange={handleOTPInputOnChange}
        label={label}
        placeholder={screenText.login.otpPlaceholder}
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
          <p className="font-bold text-xl mt-2 mb-3">{screenText.login.loginUsing}</p>
          {getLoginTypeRadioBox(
            screenText.login.ABHA,
            LOGIN_TYPE.OTP_VIA_ABHA
          )}
          {getLoginTypeRadioBox(
            screenText.login.MOBILE,
            LOGIN_TYPE.OTP_VIA_MOBILE
          )}
          <div className="mt-8">
            {currentLoginType && (
              <>
                <CustomInput
                  value={credentials}
                  className="mt-12"
                  label={
                    screenText.login[currentLoginType]

                  }
                  placeholder={
                    currentLoginType ===
                                        LOGIN_TYPE.OTP_VIA_MOBILE
                      ? screenText.login.enterMobilePlaceholder
                      : screenText.login.enterAbhaPlaceholder
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
              text={screenText.login.sendOtp}
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
                  <div className="mt-3">{screenText.login.sendingOtp}</div>
                </div>
              </div>
            </>
          )}

          {currentOtpStatus === OTP_STATUS.SENT &&
                        currentLoginType && (
            <>
              {loginWithOTP(
                currentLoginType === LOGIN_TYPE.OTP_VIA_ABHA
                  ? screenText.login.abhaEnterOtpPlaceholder
                  : screenText.login.phoneEnterOtpPlaceholder
              )}
              <div className="flex justify-around">
                <CustomButton
                  text={screenText.login.resendOtp}
                  onClick={handleResendOtp}
                />
                <CustomButton
                  text={screenText.login.validateOtp}
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
