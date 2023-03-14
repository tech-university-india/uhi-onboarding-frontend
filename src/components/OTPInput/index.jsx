import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

let currentOtpIndex = 0
const OTPInput = ({ className = '' }) => {
  const [otp, setOtp] = useState(new Array(6).fill(''))
  const [activeOtpIndex, setActiveOtpIndex] = useState(0)
  const inputRef = useRef()

  const handleOnChange = (e) => {
    const value = e.target.value
    otp[currentOtpIndex] = value.substring(value.length - 1)
    if (!value) {
      setActiveOtpIndex(currentOtpIndex - 1)
    } else {
      setActiveOtpIndex(currentOtpIndex + 1)
    }

    setOtp([...otp])
  }
  const handleKeyDown = (e, index) => {
    if (['-', '+', 'e', '.', 'E'].includes(e.key)) {
      e.preventDefault()
    }
    currentOtpIndex = index
    if (e.key === 'Backspace') {
      setActiveOtpIndex(currentOtpIndex - 1)
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOtpIndex])
  return (
    <div className="flex justify-center items-center space-x-3">
      {otp.map((_, index) => {
        return (
          <React.Fragment key={index}>
            <input
              ref={activeOtpIndex === index ? inputRef : null}
              role="textbox"
              data-testid={`OTP digit ${index}`}
              type="number"
              placeholder="-"
              onPaste={(e) => e.preventDefault()}
              className={classNames(className,
                'w-6 h-7 drop-shadow-xl rounded  p-1 outline-none text-center font-semibold text-xl spin-button-none focus:border-outline border-2 text-gray-600 transition'

              )}
              onChange={(e) => handleOnChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              value={otp[index]}

            />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default OTPInput
