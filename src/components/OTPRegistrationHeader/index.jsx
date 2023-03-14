import React from "react";
import TextBox from "../TextBox";

const OTPRegistrationHeader = () => {
  return (
    <>
      <TextBox placeholder="ABHA Number" disabled={true}/>
      <p className="m-6 text-center">
        Please enter ABHA number you want to use with ABHA
      </p>
      <TextBox placeholder="Mobile Number" />
    </>
  );
};

export default OTPRegistrationHeader;
