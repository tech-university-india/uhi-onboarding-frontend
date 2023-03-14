import CustomButton from "@/components/CustomButton";
import Header from "@/components/Header";
import OTPHeader from "@/components/OTPRegistrationHeader";
import OTPInput from "@/components/OTPInput";
import RegisterForm from "@/components/RegisterForm";
import TextBox from "@/components/TextBox";
import React from "react";
import screenText from "../../../screenText"

const Registration = () => {
  const [aadhar, setAadhar] = React.useState(false);
  const [aadharotp, setAadharOtp] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  const [mobileOtp, setMobileOtp] = React.useState(false);

  const handleAadhar = () => {
    setAadhar(true);
    setAadharOtp(true);
  };

  const handleMobile = () => {
    setMobile(true);
    setAadharOtp(false);
  };

  const handleMobileOtp = () => {
    setMobileOtp(true);
    setMobile(false);
  };

  const handleRegister = () => {
    setAadhar(true);
    setAadharOtp(false);
    setMobile(false);
    setMobileOtp(false);
  };

  const handleSubmit = () => {
    alert("Registered Successfully");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Header text="Ayush" />
      <div className="p-7">
        <h1 className="mb-10 text-xl">{screenText.otpInformation.title}</h1>
        {!aadhar ? (
          <>
          <p data-testid='handle-aadhar'></p>
            <TextBox placeholder="Aadhar Number" onChange={handleChange}/>
            <CustomButton
             
              children="Register"
              className="bg-submit mt-10 block mx-auto my-0"
              onClick={handleAadhar}
            />
            <div className="inline-flex mt-10">
              <p className="text-md mt-3">{screenText.otpInformation.footerText}</p>
              <CustomButton children="Login" className="bg-submit ml-3" />
            </div>
          </>
        ) : aadharotp ? (
          <>
            <TextBox placeholder="Aadhar Number" disabled={true}/>
            <div className="mt-10">
              <OTPInput className="w-11 h-11"/>
            </div>
            <CustomButton
              data-testid='handle-aadhar-otp'
              children="Submit"
              className="bg-submit mt-10 block mx-auto my-0"
              onClick={handleMobile}
            />
          </>
        ) : mobile ? (
          <>
            <OTPHeader />
            <CustomButton
              data-testid='handle-mobile-otp'
              children="Submit"
              className="bg-submit mt-10 block mx-auto my-0"
              onClick={handleMobileOtp}
            />
          </>
        ) : mobileOtp ? (
          <>
            <OTPHeader />
            <p className="mt-10 mb-10">
              {screenText.otpInformation.info}
              <span className="text-slate-400">
                {screenText.otpInformation.linkText}
              </span>
            </p>
            <OTPInput className="w-10 h-10" />
            <div className="flex justify-between mt-10">
              <CustomButton children="Re-Send" className="bg-white" />
              <CustomButton
                data-testid='handle-register'
                children="Submit"
                className="bg-submit"
                onClick={handleRegister}
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-32 h-32 bg-gray-300 rounded-xl block mx-auto my-0 mb-10"></div>
            <div className="m-4">
              <RegisterForm />
            </div>
            <CustomButton
              children="Create ABHA"
              className="bg-submit mt-10 block mx-auto my-0"
              onClick={handleSubmit}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Registration;
