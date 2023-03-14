import React, { useEffect, useState } from 'react'
import TextBox from '../../components/TextBox'
import CustomButton from '../../components/CustomButton'
import Header from '../../components/Header'
import OTPInput from '../../components/OtpInput'

const Login = () => {
  const [abha, setAbha] = useState('')
  const [finalAbha, setFinalAbha] = useState('')
  const [password, setPassword] = useState('')

  const [showOptions, setShowOptions] = useState(false)
  const [showOtpInput, setShowOtpInput] = useState(false)
  const [showPasswordInput, setShowPasswordInput] = useState(false)

  const handleLogin = () => {
    // make api call to backend to check if ABHA number exists
    const regex = /^\d{2}-\d{4}-\d{4}-\d{4}$/
    if (!regex.test(abha)) {
      alert('ABHA number is not valid')
      return
    };

    setShowOptions(true)
    setFinalAbha(abha)
  }

  const handleOptions = (option) => {
    if (option === 0 || option === 1) {
      setShowOtpInput(true)
      setShowPasswordInput(false)
    } else {
      setShowPasswordInput(true)
      setShowOtpInput(false)
    }
  }

  useEffect(() => {
    if (abha !== finalAbha) {
      setShowOptions(false)
      setShowOtpInput(false)
      setShowPasswordInput(false)
    }
  }, [abha])

  return (
    <div className="Login ">
      <Header text={'Ayush'}/>
      <div className="py-4 px-6 lg:py-4 lg:px-80 flex flex-col justify-center items-center  gap-3 mt-2">
        <div className="input-field flex justify-between items-center gap-4 w-full">
          <TextBox placeholder={'ABHA Number'} onChange={(e) => {
            let inputString = e.target.value.replace(/-/g, '') // remove existing dashes
            inputString = inputString.replace(/\D/g, '') // remove non-digits
            const formattedString = inputString.slice(0, 14).replace(/(\d{2})?(\d{4})?(\d{4})?(\d{4})?/, (match, p1, p2, p3, p4) => {
              let result = ''
              if (p1) {
                result += p1 + '-'
              }
              if (p2) {
                result += p2 + '-'
              }
              if (p3) {
                result += p3 + '-'
              }
              if (p4) {
                result += p4
              }
              return result
            })
            setAbha(formattedString)
          }} text={abha}/>
          <CustomButton className={'bg-submit px-4'} onClick={handleLogin}>Login</CustomButton>
        </div>

        {
          showOptions &&
          <div className="px-2 py-5 flex flex-col justify-center items-center gap-4 bg-textBox w-full ">

            <div className="input-options flex justify-center items-center gap-4">
              <CustomButton className={'bg-options'} onClick={() => handleOptions(0)}>Aadhaar</CustomButton>
              <CustomButton className={'bg-options'} onClick={() => handleOptions(1)}>Mobile</CustomButton>
              <CustomButton className={'bg-options'} onClick={() => handleOptions(2)}>Password</CustomButton>

            </div>

            {
              showOtpInput
                ? (
                  <div className="input-options flex justify-between items-center gap-4">
                    <OTPInput className="w-7 h-10"/>
                    <CustomButton className={'bg-submit'}>Submit</CustomButton>
                  </div>
                )
                : showPasswordInput
                  ? (
                    <div className="input-options flex justify-between items-center gap-4">
                      <TextBox placeholder={'Password'} onChange={(e) => setPassword(e.target.value)} text={password} type={'password'}/>
                      <CustomButton className={'bg-submit'}>Submit</CustomButton>
                    </div>
                  )
                  : null
            }
          </div>
        }

      </div>

    </div>

  )
}

export default Login
