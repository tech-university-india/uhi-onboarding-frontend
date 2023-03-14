import React from "react";
import TextBox from "../TextBox";

const RegisterForm = () => {

  const [healthID,setHealthID] = React.useState('');

  const handleChange = (e) => {
    setHealthID(e.target.value);
  };

  return (
    <>
      <div className="mt-10">
        <TextBox placeholder="First Name" disabled={true}/>
      </div>
      <div className="mt-3">
        <TextBox placeholder="Middle Name" disabled={true} />
      </div>
      <div className="mt-3">
        <TextBox placeholder="Last Name" disabled={true}/>
      </div>
      <div className="mt-10">
        <TextBox placeholder="Email ID" />
      </div>
      <div className="mt-3">
        <TextBox placeholder="Password" />
      </div>
      <div className="mt-3">
        <TextBox placeholder="Health ID" partialText=".ayush@sbx" onChange={handleChange} value={healthID} />
      </div>
    </>
  );
};

export default RegisterForm;
