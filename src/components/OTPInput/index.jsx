import React, { useEffect, useRef, useState } from 'react';

let currentOtpIndex = 0;
const OTPInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const inputRef = useRef();

  const handleOnChange = (e) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[currentOtpIndex] = value.substring(value.length - 1);
    if (!value) {
      setActiveOtpIndex(currentOtpIndex - 1);
    } else {
      setActiveOtpIndex(currentOtpIndex + 1);
    }

    setOtp(newOtp);
  };

  const handleKeyDown = (e, index) => {
    if (['-', '+', 'e', '.', 'E'].includes(e.key)) {
      e.preventDefault();
    }
    currentOtpIndex = index;
    if (e.key === 'Backspace') {
      setActiveOtpIndex(currentOtpIndex - 1);
    }
  };
  

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);
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
              className="w-12 h-14 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl spin-button-none border-gray-400 focus:border-gray-700 focus:text-gray-700 text-gray-400 transition"
              onChange={(e) => handleOnChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              value={otp[index]}
              // value={otp[index] === '' ? '-' : otp[index]}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OTPInput;
